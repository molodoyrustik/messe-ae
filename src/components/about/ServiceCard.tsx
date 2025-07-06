'use client';

import { Box, Card, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from 'react';

interface IServiceCard {
    img: string,
    title: string,
    subtitle: string,
    id: number,
}

export default function ServiceCard(card: IServiceCard) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [offset, setOffset] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);
  
    const { id, img, title, subtitle } = card;

    useEffect(() => {
        if (isMobile) return;

        const handleScroll = () => {
            if (!cardRef.current) return;
            
            const rect = cardRef.current.getBoundingClientRect();
            
            // Start parallax when element enters viewport (not just at center)
            const viewportHeight = window.innerHeight;
            const elementTop = rect.top;
            
            // Calculate progress through viewport (-1 to 1)
            // -1 when element bottom is at viewport top
            // 0 when element center is at viewport center  
            // 1 when element top is at viewport bottom
            const progress = (elementTop + rect.height / 2 - viewportHeight / 2) / viewportHeight;
            
            // Apply speed
            const speed = 0.25;
            let parallaxOffset = progress * viewportHeight * speed;
            
            // Limit offset to prevent too much movement
            const maxOffset = rect.height * 0.3; // Max 30% of card height
            parallaxOffset = Math.max(-maxOffset, Math.min(maxOffset, parallaxOffset));
            
            setOffset(parallaxOffset);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    return <Card 
        ref={cardRef}
        sx={{
            display: 'flex',
            flexDirection: {md: id % 2 ? 'row' : 'row-reverse', xs: 'column'},
            justifyContent: 'space-between',
            width: '100%',
            gap: { xs: 1, md: 4 },
            boxShadow: 'none',
        }}>
        <Box sx={{
            position: 'relative',
            width: { xs: '100%', md: '41.5rem' },
            height: { xs: '12.5rem', md: '22.5rem' },
            borderRadius: { xs: 0, md: 2 },
            overflow: 'hidden',
            backgroundColor: '#f5f5f5',
        }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '140%',
                    height: '140%',
                    transform: `translate(-50%, calc(-50% + ${offset}px))`,
                    backgroundImage: `url('/about/services/${img}.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    willChange: 'transform',
                }}
            />
        </Box>
        <Box sx={{
            flex: 1,
            display: 'flex',
            justifyContent: { md: 'center' },
            alignItems: 'center'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: { md: 'min(510px, 80%)' }
            }}>
                <Typography variant="h4" 
                    sx={{
                        fontFamily: 'Roboto',
                        fontWeight: 700,
                        fontSize: { xs: 16, md: 34 },
                        lineHeight: { xs: '24px', md: '42px' },
                        color: '#262626',
                        mb: { xs: 0.5, md: 1 },
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontFamily: 'Roboto',
                        fontWeight: 400,
                        fontSize: { xs: 14, md: 16 },
                        lineHeight: { xs: '18px', md: '24px' },
                        letterSpacing: '0.02em',
                        color: '#000000',
                    }}
                >
                    {subtitle}
                </Typography>
            </Box>
        </Box>
    </Card>
}