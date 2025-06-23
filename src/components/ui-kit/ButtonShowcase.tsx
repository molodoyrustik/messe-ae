'use client';

import { Box, Typography, Button, Grid, Paper, Stack } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

type ButtonGroupProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const ButtonGroup = ({ title, description, children }: ButtonGroupProps) => (
  <Paper
    elevation={1}
    sx={{
      p: 3,
      mb: 3,
      border: '1px solid',
      borderColor: 'grey.200',
    }}
  >
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
      {description}
    </Typography>
    {children}
  </Paper>
);

export default function ButtonShowcase() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom>
        Button Components
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Система кнопок Messe AI включает три варианта: Contained (Primary), Outlined (Secondary) и Text. 
        Кнопки должны начинаться с активного глагола и содержать уточняющий объект действия.
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <ButtonGroup
            title="Button Variants"
            description="Три основных варианта кнопок с разными уровнями приоритета"
          >
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button variant="contained" size="large">
                Go to the chat
              </Button>
              <Button variant="outlined" size="large">
                Go to the chat
              </Button>
              <Button variant="text" size="large">
                Go to the chat
              </Button>
            </Stack>
          </ButtonGroup>

          <ButtonGroup
            title="Button Sizes"
            description="Три размера кнопок: Large (48px), Medium (36px), Small (32px)"
          >
            <Stack spacing={3}>
              <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
                <Button variant="contained" size="large">
                  Large Button
                </Button>
                <Button variant="contained" size="medium">
                  Medium Button
                </Button>
                <Button variant="contained" size="small">
                  Small Button
                </Button>
              </Stack>
              
              <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
                <Button variant="outlined" size="large">
                  Large Button
                </Button>
                <Button variant="outlined" size="medium">
                  Medium Button
                </Button>
                <Button variant="outlined" size="small">
                  Small Button
                </Button>
              </Stack>
            </Stack>
          </ButtonGroup>

          <ButtonGroup
            title="Button States"
            description="Различные состояния кнопок: обычное, наведение, фокус, нажатие, отключено"
          >
            <Stack spacing={3}>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button variant="contained" size="large">
                  Enabled
                </Button>
                <Button variant="contained" size="large" disabled>
                  Disabled
                </Button>
              </Stack>
              
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button variant="outlined" size="large">
                  Enabled
                </Button>
                <Button variant="outlined" size="large" disabled>
                  Disabled
                </Button>
              </Stack>
            </Stack>
          </ButtonGroup>

          <ButtonGroup
            title="Buttons with Icons"
            description="Кнопки с иконками для улучшения UX"
          >
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button 
                variant="contained" 
                size="large" 
                endIcon={<ArrowForward />}
              >
                Go to the chat
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                endIcon={<ArrowForward />}
              >
                Learn more
              </Button>
            </Stack>
          </ButtonGroup>

          <ButtonGroup
            title="Secondary Color Buttons"
            description="Кнопки с использованием вторичного цвета (розовый)"
          >
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button variant="contained" color="secondary" size="large">
                Secondary Action
              </Button>
              <Button variant="outlined" color="secondary" size="large">
                Secondary Outlined
              </Button>
            </Stack>
          </ButtonGroup>
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <Typography variant="h5" gutterBottom>
            Usage Guidelines
          </Typography>
          
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom color="success.main">
              ✓ Do
            </Typography>
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Используйте активные глаголы в тексте кнопок
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Уточняйте объект действия (&quot;Go to the chat&quot; вместо &quot;Go&quot;)
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Используйте текст в одну строку
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Максимум 2 кнопки разного приоритета вместе
              </Typography>
              <Typography component="li" variant="body2">
                Расстояние между кнопками — 8px
              </Typography>
            </Box>
          </Paper>

          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom color="error.main">
              ✗ Don&apos;t
            </Typography>
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Не используйте 3 и более кнопок
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Не используйте две одинаковые по приоритету кнопки
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Не используйте текст в две и более строки
              </Typography>
              <Typography component="li" variant="body2">
                Не пишите текст без глагола действия
              </Typography>
            </Box>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Button Hierarchy
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Primary (Contained)
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Основное действие на странице
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Secondary (Outlined)
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Вторичное действие, менее важное
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Tertiary (Text)
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Дополнительные действия, ссылки
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
