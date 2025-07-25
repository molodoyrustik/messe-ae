import { Box, Card, Typography, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";

interface IHistoryItem {
    img: string,
    html: string,
    year: number,
    index: number,
    arrowWidth?: number,
    arrowHeight?: number,
}

export default function HistoryItem({ img, html, year, index, arrowWidth = 0, arrowHeight = 0 }: IHistoryItem) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return <Card
        sx={{
            display: 'flex',
            flexDirection: index >= 3 || isMobile ? 'column-reverse' : 'column',
            justifyContent: 'center',
            alignItems: isMobile ? 'flex-start' : 'center',
            overflow: 'visible',
            boxShadow: 'none',
            height: '100%',
            gap: {xs: '10px', md: 0}
        }}
    >
        <Box sx={{flex: 1}}>
            <Typography
                variant="body1"
                sx={{
                    pl: isMobile ? '46px' : 0,
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: '24px',
                    letterSpacing: '0.02em',
                    color: '#000000',
                    width: '100%',
                    overflow: 'hidden',
                }}
                dangerouslySetInnerHTML={{
                    __html: html
                }}
            />
        </Box>
        <Box
            sx={{
                width: isMobile ? '100%' : 'auto',
                display: "flex",
                justifyContent: isMobile ? 'flex-end' : 'center',
                alignItems: 'center',
                flexDirection: isMobile ? 'row-reverse' : index >= 3 ? 'column-reverse' : 'column',
                height: isMobile ? '36px' : 'auto',
                gap: isMobile ? '12px' : 0,
                pl: isMobile && index >= 3 ? '40px' : 0,
            }}
        >
            <Box
                sx={isMobile ? {
                    height: '100%',
                    width: 'max-content',
                } : {
                    height: '164px',
                    width: '100%',
                    p: 3
                }}
            >
                <Image
                    src={img === '1' ? '/ecg_logo.svg' : `/about/history/${img}.svg`} 
                    alt={img}
                    width={50}
                    height={164}
                    quality={100}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }}
                />
            </Box>
            <Box sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: {md: 16, xs: 14},
                lineHeight: {md: '24px', xs: '18px'},
                letterSpacing: '0.02em',
                color: {md: '#ffffff', xs: '#656caf'},
                width: {md: '100px', xs: '60px'},
                py: {md: '10px', xs: '7px'},
                backgroundColor: {xs: '#ffffff', md: '#656caf'},
                borderRadius: 1,
                border: {xs: '1px solid #7B7B7B', md: 'none'},
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'visible',
                zIndex: 100,
            }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {index < 2 && (isMobile ? <img 
                    style={{
                        position: 'absolute',
                        top: '100%',
                        transform: 'translateX(-50%)',
                        left: '50%',
                        height: arrowHeight ? arrowHeight + 'px' : 0,
                        zIndex: 10,
                        pointerEvents: 'none',
                    }}
                    src='about/icons/arrowDown.svg' 
                    alt=""
                // eslint-disable-next-line @next/next/no-img-element
                /> : <img 
                    style={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        left: 'calc(100% + 16px)',
                        width: arrowWidth ? arrowWidth + 'px' : 0,
                        zIndex: 10,
                        pointerEvents: 'none',
                    }}
                    src='about/icons/arrowRight.svg' 
                    alt=""
                />)}
                {year}
            </Box>
        </Box>
    </Card>
}