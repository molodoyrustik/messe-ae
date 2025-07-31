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
    const cardRef = useRef<HTMLDivElement>(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
    const { id, img, title, subtitle } = card;

    // Параллакс эффект
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    // Движение изображения как viewport - создаёт эффект что контент скользит позади картинок
    // На мобайле сдвигаем выше чтобы убрать пробел снизу
    const imageY = useTransform(scrollYProgress, [0, 1], isMobile ? ['-35%', '25%'] : ['-50%', '50%']);

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
            width: { xs: '100%', md: '45rem' },
            height: { xs: '18.75rem', md: '31.875rem' },
            minHeight: { xs: '18.75rem', md: '18.75rem' },
            aspectRatio: { xs: '720/516', md: '720/511' },
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
                    top: { xs: '-10%', md: -40 },
                    left: 0,
                    width: { xs: '125%', md: '125%' },
                    height: { xs: '125%', md: '135%' },
                    backgroundImage: `url('/about/services/${img}.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}
            />
        </Box>
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                justifyContent: { md: 'center' },
                alignItems: 'center'
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: { md: 'min(510px, 80%)' },
                gap: { xs: '0.25rem', md: '0.5rem' }
            }}>
                <Typography variant="h4" 
                    sx={{
                        fontFamily: 'Roboto',
                        fontWeight: 700,
                        fontSize: { xs: 16, md: 34 },
                        lineHeight: { xs: '24px', md: '42px' },
                        color: '#262626',
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