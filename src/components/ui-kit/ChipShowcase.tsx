'use client';

import { useState } from 'react';
import {
  Box,
  Typography,
  Chip,
  Grid,
  Paper,
  Stack,
  FormControlLabel,
  Switch,
} from '@mui/material';

type ChipGroupProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const ChipGroup = ({ title, description, children }: ChipGroupProps) => (
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

export default function ChipShowcase() {
  const [selectedChips, setSelectedChips] = useState<string[]>(['chip2']);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChipClick = (chipId: string) => {
    if (isDisabled) return;
    
    setSelectedChips(prev => 
      prev.includes(chipId) 
        ? prev.filter(id => id !== chipId)
        : [...prev, chipId]
    );
  };

  const chipLabels = [
    'Exhibition Design',
    'Stand Construction', 
    'Project Management',
    'Digital Solutions',
    'Logistics',
    'Marketing',
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom>
        Chip Components
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Компоненты чипов Messe AI для фильтрации, тегов и выбора категорий. 
        Поддерживают два размера и различные состояния взаимодействия.
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <FormControlLabel
            control={
              <Switch
                checked={isDisabled}
                onChange={(e) => setIsDisabled(e.target.checked)}
              />
            }
            label="Disabled State"
            sx={{ mb: 3 }}
          />

          <ChipGroup
            title="Medium Size Chips"
            description="Основной размер чипов для десктопной версии (24px шрифт, 8px 12px padding)"
          >
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              {chipLabels.map((label, index) => {
                const chipId = `chip${index + 1}`;
                const isSelected = selectedChips.includes(chipId);
                
                return (
                  <Chip
                    key={chipId}
                    label={label}
                    size="medium"
                    variant={isSelected ? 'filled' : 'outlined'}
                    disabled={isDisabled}
                    onClick={() => handleChipClick(chipId)}
                    sx={{ cursor: isDisabled ? 'default' : 'pointer' }}
                  />
                );
              })}
            </Stack>
          </ChipGroup>

          <ChipGroup
            title="Small Size Chips"
            description="Компактный размер чипов для мобильной версии (16px шрифт, 4px 8px padding)"
          >
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {chipLabels.map((label, index) => {
                const chipId = `small-chip${index + 1}`;
                const isSelected = selectedChips.includes(chipId);
                
                return (
                  <Chip
                    key={chipId}
                    label={label}
                    size="small"
                    variant={isSelected ? 'filled' : 'outlined'}
                    disabled={isDisabled}
                    onClick={() => handleChipClick(chipId)}
                    sx={{ cursor: isDisabled ? 'default' : 'pointer' }}
                  />
                );
              })}
            </Stack>
          </ChipGroup>

          <ChipGroup
            title="Chip States"
            description="Демонстрация различных состояний чипов"
          >
            <Stack spacing={3}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Unselected States
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                  <Chip label="Enabled" variant="outlined" size="medium" />
                  <Chip label="Disabled" variant="outlined" size="medium" disabled />
                </Stack>
              </Box>
              
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Selected States
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                  <Chip label="Selected" variant="filled" size="medium" />
                  <Chip label="Selected Disabled" variant="filled" size="medium" disabled />
                </Stack>
              </Box>
            </Stack>
          </ChipGroup>

          <ChipGroup
            title="Interactive Example"
            description="Пример использования чипов для фильтрации услуг"
          >
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Select Services:
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                {[
                  'Design', 'Construction', 'Logistics', 'Marketing', 
                  'Digital', 'Consulting', 'Installation', 'Support'
                ].map((service, index) => {
                  const chipId = `service-${index}`;
                  const isSelected = selectedChips.includes(chipId);
                  
                  return (
                    <Chip
                      key={chipId}
                      label={service}
                      size="small"
                      variant={isSelected ? 'filled' : 'outlined'}
                      onClick={() => handleChipClick(chipId)}
                      sx={{ cursor: 'pointer' }}
                    />
                  );
                })}
              </Stack>
              <Typography variant="caption" color="text.secondary">
                Selected: {selectedChips.filter(id => id.startsWith('service-')).length} services
              </Typography>
            </Box>
          </ChipGroup>
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <Typography variant="h5" gutterBottom>
            Design Specifications
          </Typography>
          
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Sizes
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Medium
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  24px font, 28px line-height, 8px 12px padding
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Small
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  16px font, 24px line-height, 4px 8px padding
                </Typography>
              </Box>
            </Stack>
          </Paper>

          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Colors & States
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Unselected (Outlined)
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Background: #E9EAF4, Text: #656CAF
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Selected (Filled)
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Background: #656CAF, Text: #FFFFFF
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Hover
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Unselected: #C7CAE3, Selected: #4C53A2
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Focused
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Unselected: border #A2A9D0, Selected: #464B98
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Disabled
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Background: #A2A9D0, Text: #FFFFFF
                </Typography>
              </Box>
            </Stack>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Usage Guidelines
            </Typography>
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Используйте для фильтрации и категоризации
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Medium размер для десктопа, Small для мобильных
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Максимум 8-10 чипов в одной группе
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Четкие и короткие лейблы (1-2 слова)
              </Typography>
              <Typography component="li" variant="body2">
                Группируйте по смыслу и важности
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
