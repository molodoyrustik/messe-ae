'use client';

import { Box, Typography, Grid, Paper } from '@mui/material';
import { colors } from '../../theme/tokens';

type ColorSwatchProps = {
  color: string;
  name: string;
  value: string;
  textColor?: string;
};

const ColorSwatch = ({ color, name, value, textColor = '#000' }: ColorSwatchProps) => (
  <Paper
    elevation={1}
    sx={{
      p: 2,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'grey.200',
    }}
  >
    <Box
      sx={{
        width: '100%',
        height: 80,
        backgroundColor: color,
        borderRadius: 1,
        mb: 2,
        border: '1px solid',
        borderColor: 'grey.300',
      }}
    />
    <Typography variant="body2" fontWeight={600} color={textColor}>
      {name}
    </Typography>
    <Typography variant="caption" color="text.secondary">
      {value}
    </Typography>
  </Paper>
);

type ColorGroupProps = {
  title: string;
  colors: Record<string, string>;
  description?: string;
};

const ColorGroup = ({ title, colors: colorGroup, description }: ColorGroupProps) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h5" gutterBottom>
      {title}
    </Typography>
    {description && (
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {description}
      </Typography>
    )}
    <Grid container spacing={2}>
      {Object.entries(colorGroup).map(([key, value]) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={key}>
          <ColorSwatch
            color={value}
            name={key}
            value={value}
            textColor={key === 'white' || parseInt(key) <= 300 ? '#000' : '#fff'}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default function ColorPalette() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom>
        Color Palette
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Цветовая палитра Messe AI, извлеченная из Figma дизайн-системы. 
        Основная палитра состоит из фиолетовых цветов для акцентов, кнопок и разделов сайта.
      </Typography>

      <ColorGroup
        title="Primary Colors (Purple)"
        colors={colors.primary}
        description="Основная палитра фиолетовых цветов для акцентов, кнопок и интерактивных элементов"
      />

      <ColorGroup
        title="Grey Colors (Basic)"
        colors={colors.grey}
        description="Базовая серая палитра для фонов, текста и состояний отключения"
      />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Semantic Colors
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Семантические цвета для ошибок, предупреждений и успешных действий
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={4} md={3}>
            <ColorSwatch
              color={colors.error.main}
              name="Error"
              value={colors.error.main}
              textColor="#fff"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <ColorSwatch
              color={colors.secondary.main}
              name="Secondary"
              value={colors.secondary.main}
              textColor="#fff"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <ColorSwatch
              color={colors.success.main}
              name="Success"
              value={colors.success.main}
              textColor="#fff"
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 4, p: 3, backgroundColor: 'grey.50', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Accessibility Guidelines
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Все цвета соответствуют рекомендациям WCAG по контрастности:
        </Typography>
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <Typography component="li" variant="body2">
            <strong>AAA</strong> — повышенный контраст (7.0+) для длинных текстов
          </Typography>
          <Typography component="li" variant="body2">
            <strong>AA</strong> — стандартный контраст (4.5+) для текста менее 18px
          </Typography>
          <Typography component="li" variant="body2">
            <strong>AA Large</strong> — минимальный контраст (3.0+) для текста 18px+
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
