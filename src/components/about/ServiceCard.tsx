'use client';

import { Box, Card, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface IServiceCard {
    img: string,
    title: string,
    subtitle: string,
    id: number,
}

export default function ServiceCard(card: IServiceCard) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const cardRef = useRef<HTMLDivElement>(null);
  
    const { id, img, title, subtitle } = card;

    // Параллакс эффект
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    // Движение изображения - реверсивный параллакс с большим размахом
    const imageY = useTransform(scrollYProgress, [0, 1], isMobile ? ['15%', '-15%'] : ['30%', '-30%']);

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
            borderRadius: '0.5rem',
            overflow: 'hidden',
            backgroundColor: '#f5f5f5',
        }}>
            <Box
                component={motion.div}
                style={{
                    y: imageY,
                }}
                sx={{
                    position: 'absolute',
                    top: isMobile ? '-20%' : '-25%',
                    left: isMobile ? '-20%' : '-25%',
                    width: isMobile ? '140%' : '150%',
                    height: isMobile ? '140%' : '150%',
                    backgroundImage: `url('/about/services/${img}.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
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