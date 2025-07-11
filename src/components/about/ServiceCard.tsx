'use client';

import { Box, Card, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ScrollParallax, ScrollParallaxHandle } from 'react-just-parallax';
import Image from "next/image";
import { useRef, useEffect } from 'react';

interface IServiceCard {
    img: string,
    title: string,
    subtitle: string,
    id: number,
}

export default function ServiceCard(card: IServiceCard) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const scrollParallaxRef = useRef<ScrollParallaxHandle | null>(null);
  
    const { id, img, title, subtitle } = card;
    
    useEffect(() => {
        scrollParallaxRef.current?.updateValues();
    }, [isMobile]);

    return <Card 
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
            borderRadius: '0.5rem',
            overflow: 'hidden',
            backgroundColor: '#f5f5f5',
        }}>
            <ScrollParallax 
                ref={scrollParallaxRef}
                isAbsolutelyPositioned
                strength={isMobile ? 0.25 : 0.4}
                shouldPause={false}
                lerpEase={0.5}
                zIndex={1}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: isMobile ? '-25%' : '-20%',
                        left: isMobile ? '-25%' : '-20%',
                        width: isMobile ? '150%' : '160%',
                        height: isMobile ? '150%' : '160%',
                    }}
                >
                    <Image
                        src={`/about/services/${img}.jpg`}
                        alt={title}
                        fill
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                </Box>
            </ScrollParallax>
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