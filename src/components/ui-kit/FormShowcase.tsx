'use client';

import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Grid,
  Paper,
  Stack,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Search, Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';

type FormGroupProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const FormGroup = ({ title, description, children }: FormGroupProps) => (
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

export default function FormShowcase() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    search: '',
    disabled: 'Disabled value',
    error: 'Error value',
  });
  
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [field]: event.target.value });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom>
        Form Components
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Компоненты форм Messe AI основаны на дизайне из Figma с поддержкой различных состояний: 
        обычное, наведение, фокус, ошибка и отключено.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}>
          <FormGroup
            title="Text Field States"
            description="Различные состояния текстовых полей с плавающими лейблами"
          >
            <Stack spacing={3}>
              <TextField
                label="Enabled State"
                placeholder="Enter text here"
                value={values.email}
                onChange={handleChange('email')}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: 'grey.500' }} />
                    </InputAdornment>
                  ),
                }}
              />
              
              <TextField
                label="Focused State"
                placeholder="This field is focused"
                autoFocus
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: 'grey.500' }} />
                    </InputAdornment>
                  ),
                }}
              />
              
              <TextField
                label="Error State"
                value={values.error}
                onChange={handleChange('error')}
                error
                helperText="This field has an error"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: 'error.main' }} />
                    </InputAdornment>
                  ),
                }}
              />
              
              <TextField
                label="Disabled State"
                value={values.disabled}
                disabled
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: 'grey.400' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </FormGroup>

          <FormGroup
            title="Password Field"
            description="Поле пароля с возможностью показать/скрыть пароль"
          >
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: 'grey.500' }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormGroup>

          <FormGroup
            title="Search Field"
            description="Поле поиска с иконкой"
          >
            <TextField
              label="Search"
              placeholder="Search for projects, companies..."
              value={values.search}
              onChange={handleChange('search')}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: 'grey.500' }} />
                  </InputAdornment>
                ),
              }}
            />
          </FormGroup>

          <FormGroup
            title="Form Control Components"
            description="Использование FormControl для более гибкой настройки"
          >
            <Stack spacing={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment">Custom Label</InputLabel>
                <OutlinedInput
                  id="outlined-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  }
                  label="Custom Label"
                />
                <FormHelperText>Helper text for additional information</FormHelperText>
              </FormControl>
              
              <FormControl fullWidth error>
                <InputLabel htmlFor="outlined-error">Error Field</InputLabel>
                <OutlinedInput
                  id="outlined-error"
                  startAdornment={
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  }
                  label="Error Field"
                />
                <FormHelperText>Error message appears here</FormHelperText>
              </FormControl>
            </Stack>
          </FormGroup>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Typography variant="h5" gutterBottom>
            Design Specifications
          </Typography>
          
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Field States
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Enabled
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Border: #C4C4C4 (1px)
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Hovered
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Border: #7B7B7B (1px)
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Focused
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Border: #656CAF (2px)
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Error
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Border: #BC3A1F (1px)
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Disabled
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Border: #C4C4C4 (1px), Text: #9D9D9D
                </Typography>
              </Box>
            </Stack>
          </Paper>

          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Typography
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Input Text (Web)
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  16px / 24px, Regular, 2% letter-spacing
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Input Text (Mobile)
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  14px / 18px, Regular, 2% letter-spacing
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Label (Floating)
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  12px / 16px, Regular, 4% letter-spacing
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Label Mobile (Floating)
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  10px / 12px, Regular
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
                Используйте иконки для улучшения UX
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Плавающие лейблы для экономии места
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Четкие сообщения об ошибках
              </Typography>
              <Typography component="li" variant="body2">
                Адаптивные размеры для мобильных устройств
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
