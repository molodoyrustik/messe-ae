'use client';

import { Box, Typography, Paper, Grid } from '@mui/material';
import { typography } from '../../theme/tokens';

type TypographyExampleProps = {
  variant: any;
  label: string;
  description: string;
  sampleText?: string;
};

const TypographyExample = ({ 
  variant, 
  label, 
  description, 
  sampleText = 'Messe.ae — exhibition stands that catch the eye' 
}: TypographyExampleProps) => (
  <Paper
    elevation={1}
    sx={{
      p: 3,
      mb: 3,
      border: '1px solid',
      borderColor: 'grey.200',
    }}
  >
    <Box sx={{ mb: 2 }}>
      <Typography variant="body2" fontWeight={600} color="text.secondary">
        {label}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {description}
      </Typography>
    </Box>
    <Typography variant={variant} sx={{ wordBreak: 'break-word' }}>
      {sampleText}
    </Typography>
  </Paper>
);

export default function TypographyShowcase() {
  const typographyExamples = [
    {
      variant: 'h1',
      label: 'Heading 1',
      description: `${typography.fontSize.h1}px / ${typography.lineHeight.h1}px, Regular (400)`,
      sampleText: 'Messe.ae',
    },
    {
      variant: 'h2',
      label: 'Heading 2',
      description: `${typography.fontSize.h2}px / ${typography.lineHeight.h2}px, Regular (400)`,
      sampleText: 'Messe.ae',
    },
    {
      variant: 'h3',
      label: 'Heading 3',
      description: `${typography.fontSize.h3}px / ${typography.lineHeight.h3}px, Regular (400)`,
      sampleText: 'Messe.ae',
    },
    {
      variant: 'h4',
      label: 'Heading 4',
      description: `${typography.fontSize.h4}px / ${typography.lineHeight.h4}px, Regular (400), 1% letter-spacing`,
    },
    {
      variant: 'h5',
      label: 'Heading 5',
      description: `${typography.fontSize.h5}px / ${typography.lineHeight.h5}px, Regular (400), 1% letter-spacing`,
    },
    {
      variant: 'h6',
      label: 'Heading 6',
      description: `${typography.fontSize.h6}px / ${typography.lineHeight.h6}px, Regular (400), 1% letter-spacing`,
    },
    {
      variant: 'body1',
      label: 'Body 1',
      description: `${typography.fontSize.body1}px / ${typography.lineHeight.body1}px, Regular (400), 2% letter-spacing`,
      sampleText: 'Messe.ae boasts own production facilities in Dubai, allowing us to maintain full control over quality and timelines. We deliver exceptional exhibition stands that meet the highest European benchmarks, ensuring your brand excels at every event.',
    },
    {
      variant: 'body2',
      label: 'Body 2',
      description: `${typography.fontSize.body2}px / ${typography.lineHeight.body2}px, Regular (400), 2% letter-spacing`,
      sampleText: 'Messe.ae boasts own production facilities in Dubai, allowing us to maintain full control over quality and timelines. We deliver exceptional exhibition stands that meet the highest European benchmarks, ensuring your brand excels at every event.',
    },
    {
      variant: 'subtitle1',
      label: 'Subtitle 1',
      description: `${typography.fontSize.body1}px / ${typography.lineHeight.body1}px, Medium (500), 2% letter-spacing`,
    },
    {
      variant: 'subtitle2',
      label: 'Subtitle 2',
      description: `${typography.fontSize.body2}px / ${typography.lineHeight.body2}px, Medium (500), 2% letter-spacing`,
    },
    {
      variant: 'overline',
      label: 'Overline',
      description: `${typography.fontSize.overline}px / ${typography.lineHeight.overline}px, Regular (400), 4% letter-spacing, UPPERCASE`,
      sampleText: 'OVERLINE TEXT FOR LINKS AND ACCENTS',
    },
    {
      variant: 'caption',
      label: 'Caption',
      description: `${typography.fontSize.caption}px / ${typography.lineHeight.caption}px, Regular (400), 4% letter-spacing`,
      sampleText: 'Caption text for descriptions and labels',
    },
    {
      variant: 'captionMobile',
      label: 'Caption Mobile',
      description: `${typography.fontSize.captionMob}px / ${typography.lineHeight.captionMob}px, Regular (400)`,
      sampleText: 'Mobile caption text',
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom>
        Typography System
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Типографическая система Messe AI основана на шрифте Roboto. 
        Размеры h1-h5 используются для заголовков, body1 и body2 — для текста, 
        overline — для ссылок и акцентов, caption — для подписей.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}>
          <Typography variant="h5" gutterBottom>
            Typography Variants
          </Typography>
          {typographyExamples.map((example) => (
            <TypographyExample
              key={example.variant}
              variant={example.variant}
              label={example.label}
              description={example.description}
              sampleText={example.sampleText}
            />
          ))}
        </Grid>

        <Grid item xs={12} lg={4}>
          <Typography variant="h5" gutterBottom>
            Font Information
          </Typography>
          
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Primary Font
            </Typography>
            <Typography variant="body1" fontFamily="Roboto,-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Arial,sans-serif" sx={{ mb: 2 }}>
              Roboto Regular (400)
            </Typography>
            <Typography variant="body1" fontFamily="Roboto,-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Arial,sans-serif" fontWeight={700} sx={{ mb: 2 }}>
              Roboto Bold (700)
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Vv Xx Yy Zz
            </Typography>
            <br />
            <Typography variant="caption" color="text.secondary">
              Аа Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъъ Ыы Ьь Ээ Юю Яя
            </Typography>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Usage Guidelines
            </Typography>
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                h1-h5 — для заголовков
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                body1, body2 — для основного текста
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                overline — для ссылок и акцентов
              </Typography>
              <Typography component="li" variant="body2">
                caption — для подписей и вспомогательного текста
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
