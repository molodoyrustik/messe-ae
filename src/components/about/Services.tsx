import { Box, Card, Grid, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";

export default function Services() {
    const cards = [
        {
            id: 1, 
            img: '1', 
            title: 'Design', 
            subtitle: 'At messe.ae, we believe a great exhibition stand starts with a strong design. We work closely with Clients to create concepts that reflect their brand and goals, using advanced European techniques. As a trusted exhibition builder in Dubai, we deliver custom stands, pavilions, and retail spaces.'
        },
        {
            id: 2, 
            img: '2', 
            title: 'Construction and installation', 
            subtitle: 'We manage the full production of exhibition stands in-house, ensuring complete quality control and superior results. Using European techniques and materials, we build and assemble every stand ourselves — no outsourcing. This guarantees a seamless experience and 100% reliable outcomes.'
        },
        {
            id: 3, 
            img: '3', 
            title: 'Project management', 
            subtitle: 'At messe.ae, every Client is assigned a dedicated Project Manager to ensure smooth communication and fast decisions. From design to installation, we deliver a seamless experience. Whether you need bespoke exhibition stands or promotional displays for retail spaces, our team supports you at every step.'
        },
        {
            id: 4, 
            img: '4', 
            title: 'Storage', 
            subtitle: 'We take the burden of storage off our Clients by offering secure, climate-controlled facilities. Your exhibition stands and materials stay safe, pristine, and ready for the next event, ensuring your custom booth always looks its best without the stress of managing storage.'
        },
        {
            id: 5, 
            img: '5', 
            title: 'Equipment rental', 
            subtitle: 'At messe.ae, we help Clients save budgets by offering a wide range of rental equipment — from furniture and lighting to audio, video, and Wi-Fi systems. All items are carefully maintained and ready for use, ensuring quality, reliability, and a cost-effective solution for your exhibition needs.'
        },
        {
            id: 6, 
            img: '6', 
            title: 'Material and sustainability', 
            subtitle: 'We create sustainable exhibition stands using eco-friendly materials like responsibly sourced wood, recycled metal, and low-impact composites. We apply advanced European methods to minimize waste and reduce our carbon footprint, delivering designs that respect both Clients and the planet.'
        },
    ];
    return (
        <Box>
            <Typography 
                variant="h2"
                sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 700,
                    fontSize: { xs: 24, md: 34 },
                    lineHeight: { xs: '28px', md: '42px' },
                    color: '#262626',
                    mb: { xs: 2, md: 3 },
                }}>
                Our Services
            </Typography>
            <Grid container spacing={{xs: 3, md: 4}}>
                {cards.map(card => <ServiceCard key={card.id} {...card} />)}
            </Grid>
        </Box>
    );
}
