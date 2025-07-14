// Утилита для кэширования видео на мобильных устройствах
export class VideoCache {
  private static instance: VideoCache;
  private cache: Map<string, Blob> = new Map();
  private loading: Map<string, Promise<Blob>> = new Map();

  static getInstance(): VideoCache {
    if (!VideoCache.instance) {
      VideoCache.instance = new VideoCache();
    }
    return VideoCache.instance;
  }

  async getCachedVideo(url: string): Promise<string | null> {
    // Проверяем кэш
    const cached = this.cache.get(url);
    if (cached) {
      return URL.createObjectURL(cached);
    }

    // Проверяем, не загружается ли уже
    const loadingPromise = this.loading.get(url);
    if (loadingPromise) {
      try {
        const blob = await loadingPromise;
        return URL.createObjectURL(blob);
      } catch (error) {
        console.log('Video cache loading failed:', error);
        return null;
      }
    }

    return null;
  }

  async preloadVideo(url: string): Promise<void> {
    if (this.cache.has(url) || this.loading.has(url)) {
      return;
    }

    const loadingPromise = this.loadVideo(url);
    this.loading.set(url, loadingPromise);

    try {
      const blob = await loadingPromise;
      this.cache.set(url, blob);
    } catch (error) {
      console.log('Video preload failed:', error);
    } finally {
      this.loading.delete(url);
    }
  }

  private async loadVideo(url: string): Promise<Blob> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load video: ${response.status}`);
    }
    return response.blob();
  }

  clearCache(): void {
    // Освобождаем память
    for (const blob of this.cache.values()) {
      URL.revokeObjectURL(URL.createObjectURL(blob));
    }
    this.cache.clear();
    this.loading.clear();
  }
}