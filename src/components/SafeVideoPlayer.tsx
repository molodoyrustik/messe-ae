'use client';

import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useState, useEffect, useRef, useCallback } from 'react';
import { SyntheticEvent } from 'react';
import { VideoCache } from '@/utils/videoCache';

interface SafeVideoPlayerProps {
  src: string;
  mobileSrc?: string;
  poster?: string;
  mobilePoster?: string;
}

export const SafeVideoPlayer = ({
  src,
  mobileSrc,
  poster,
  mobilePoster,
}: SafeVideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [canAutoplay, setCanAutoplay] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);
  const [showPoster, setShowPoster] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [networkType, setNetworkType] = useState<string>('unknown');
  const [cachedVideoUrl, setCachedVideoUrl] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);
  const videoCache = useRef<VideoCache>(VideoCache.getInstance());
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const currentSrc = isMobile && mobileSrc ? mobileSrc : src;
  const currentPoster = isMobile && mobilePoster ? mobilePoster : poster;

  // Детектируем iOS и тип сети
  useEffect(() => {
    const detectIOS = () => {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
             (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    };
    
    const detectNetworkType = () => {
      const connection = (navigator as unknown as { connection?: { effectiveType?: string; type?: string } }).connection || 
                        (navigator as unknown as { mozConnection?: { effectiveType?: string; type?: string } }).mozConnection || 
                        (navigator as unknown as { webkitConnection?: { effectiveType?: string; type?: string } }).webkitConnection;
      
      if (connection) {
        return connection.effectiveType || connection.type || 'unknown';
      }
      return 'unknown';
    };

    setIsIOS(detectIOS());
    setNetworkType(detectNetworkType());
    
    // На iOS с медленным интернетом отключаем автоплей сразу
    if (detectIOS() && ['slow-2g', '2g', '3g'].includes(detectNetworkType())) {
      setCanAutoplay(false);
    }
  }, []);

  // Предзагружаем постер
  useEffect(() => {
    if (currentPoster) {
      const img = new Image();
      img.src = currentPoster;
      img.onload = () => {
        setIsPosterLoaded(true);
        // Показываем постер почти мгновенно
        setShowPoster(true);
      };
      img.onerror = () => {
        setIsPosterLoaded(true);
        setShowPoster(true);
      };
    }
  }, [currentPoster]);

  // Кэширование видео для мобильных устройств
  useEffect(() => {
    const handleVideoCache = async () => {
      if (isMobile) {
        try {
          // Сначала проверяем кэш
          const cached = await videoCache.current.getCachedVideo(currentSrc);
          if (cached) {
            setCachedVideoUrl(cached);
            return;
          }

          // Если это iOS с быстрым интернетом, предзагружаем видео
          if (isIOS && networkType === '4g') {
            videoCache.current.preloadVideo(currentSrc);
          }
        } catch (error) {
          console.log('Video cache error:', error);
        }
      }
    };

    handleVideoCache();
  }, [currentSrc, isMobile, isIOS, networkType]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Безопасная функция воспроизведения
  const safePlay = useCallback(async () => {
    if (!videoRef.current || !canAutoplay) return;

    try {
      // Ждем завершения предыдущего play() promise
      if (playPromiseRef.current) {
        await playPromiseRef.current;
      }

      const video = videoRef.current;
      
      // Специальная обработка для iOS
      if (isIOS) {
        // На iOS проверяем более строго
        if (video.readyState >= 3) { // HAVE_FUTURE_DATA для iOS
          playPromiseRef.current = video.play();
        } else {
          // Если видео не готово, показываем постер
          setCanAutoplay(false);
          return;
        }
      } else {
        // Для остальных платформ
        if (video.readyState >= 2) { // HAVE_CURRENT_DATA
          playPromiseRef.current = video.play();
        }
      }
      
      if (playPromiseRef.current) {
        await playPromiseRef.current;
        setIsPlaying(true);
        playPromiseRef.current = null;
      }
    } catch (error) {
      console.log('Play interrupted or autoplay blocked:', error);
      setCanAutoplay(false);
      setIsPlaying(false);
      playPromiseRef.current = null;
    }
  }, [canAutoplay, isIOS]);

  // Безопасная функция паузы
  const safePause = async () => {
    if (!videoRef.current) return;

    try {
      // Ждем завершения play() promise перед паузой
      if (playPromiseRef.current) {
        await playPromiseRef.current;
        playPromiseRef.current = null;
      }

      videoRef.current.pause();
      setIsPlaying(false);
    } catch (error) {
      console.log('Pause error:', error);
    }
  };

  // Автоплей когда видео попадает в viewport
  useEffect(() => {
    if (isIntersecting && canAutoplay && !isPlaying) {
      safePlay();
    }
  }, [isIntersecting, canAutoplay, isPlaying, safePlay]);

  // Cleanup при unmount
  useEffect(() => {
    return () => {
      safePause();
    };
  }, []);

  const handleLoadedData = () => {
    if (isIntersecting && canAutoplay) {
      safePlay();
    }
  };

  const handleError = (error: SyntheticEvent<HTMLVideoElement, Event>) => {
    console.log('Video load error:', error);
    setHasError(true);
    setCanAutoplay(false);
    
    // Принудительно показываем постер при ошибке
    setShowPoster(true);
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setCanAutoplay(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  // Дополнительная обработка для iOS
  const handleCanPlayThrough = () => {
    if (isIOS && isIntersecting && canAutoplay) {
      // На iOS пробуем воспроизвести только когда видео полностью готово
      safePlay();
    }
  };

  const handleLoadStart = () => {
    // Если загрузка началась, но это iOS с медленным интернетом
    if (isIOS && ['slow-2g', '2g', '3g'].includes(networkType)) {
      setCanAutoplay(false);
      setShowPoster(true);
    }
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Placeholder пока постер грузится */}
      {!showPoster && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#000',
          }}
        />
      )}

      {/* Постер - сначала fade in, потом crossfade с видео */}
      {isPosterLoaded && currentPoster && (
        <Box
          component="img"
          src={currentPoster}
          alt=""
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: showPoster ? (isPlaying ? 0 : 1) : 0,
            transition: isPlaying ? 'opacity 1s ease-in-out' : 'none', // Мгновенное появление постера
          }}
        />
      )}

      {/* Видео */}
      {isIntersecting && !hasError && (
        <video
          ref={videoRef}
          src={cachedVideoUrl || currentSrc}
          poster={currentPoster}
          loop
          muted
          playsInline
          preload={isIOS ? "none" : "metadata"}
          onLoadStart={handleLoadStart}
          onLoadedData={handleLoadedData}
          onCanPlayThrough={handleCanPlayThrough}
          onPlay={handlePlay}
          onPause={handlePause}
          onError={handleError}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isPlaying ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        />
      )}
    </Box>
  );
};