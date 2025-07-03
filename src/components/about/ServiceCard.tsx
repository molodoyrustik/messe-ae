import { Box, Card, Typography, useMediaQuery, useTheme } from "@mui/material";

interface IServiceCard {
    img: string,
    title: string,
    subtitle: string,
    id: number,
}

export default function ServiceCard(card: IServiceCard) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
    const { id, img, title, subtitle } = card;
    return <Card sx={{
        display: 'flex',
        flexDirection: {md: id % 2 ? 'row' : 'row-reverse', xs: 'column'},
        justifyContent: 'space-between',
        width: '100%',
        gap: { xs: 1, md: 4 },
        boxShadow: 'none',
    }}>
        <img 
            src={`/about/services/${img}.jpg`} 
            alt={title}
            style={isMobile ? {
                width: '100%',
                height: '100%',
            } : {
                flex: 1,
                width: 0,
                borderRadius: 8,
            }}
        />
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