'use client';

import { useState } from 'react';
import {
  Box,
  Typography,
  MenuItem,
  Menu,
  Button,
  Grid,
  Paper,
  Stack,
  List,
  ListItem,
  ListItemText,
  Tabs,
  Tab,
} from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

type MenuGroupProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const MenuGroup = ({ title, description, children }: MenuGroupProps) => (
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

// Custom Menu Item component based on Tailwind CSS reference
const CustomMenuItem = ({
  children,
  selected = false,
  size = 'medium',
  onClick,
  ...props
}: {
  children: React.ReactNode;
  selected?: boolean;
  size?: 'medium' | 'small';
  onClick?: () => void;
}) => (
  <Box
    onClick={onClick}
    sx={{
      // Tailwind: h-8 py-1 relative inline-flex justify-start items-center gap-2.5
      height: size === 'medium' ? 32 : 'auto', // h-8
      padding: size === 'medium' ? '4px 0' : 0, // py-1
      position: 'relative',
      display: 'inline-flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      cursor: 'pointer',

      // Text styles: text-Primary-purple-500 text-2xl font-bold font-['Roboto'] leading-7 tracking-tight
      fontFamily: 'Roboto',
      fontWeight: 700, // font-bold
      fontSize: size === 'medium' ? 24 : 16, // text-2xl
      lineHeight: size === 'medium' ? '28px' : '24px', // leading-7
      letterSpacing: '-0.025em', // tracking-tight (Tailwind CSS value)
      color: 'primary.500', // text-Primary-purple-500 (#4C53A2)

      // Underline: w-px h-[3px] left-0 top-[26px] absolute opacity-0 bg-Primary-purple-100
      '&::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        top: size === 'medium' ? 26 : 19, // top-[26px]
        width: 1, // w-px (1px)
        height: size === 'medium' ? 3 : 2, // h-[3px]
        backgroundColor: 'primary.100', // bg-Primary-purple-100 (#C7CAE3)
        opacity: selected ? 1 : 0, // opacity-0 by default, 1 if selected
        transition: 'opacity 0.2s ease',
      },

      // Hover state
      '&:hover::after': {
        opacity: 1, // Show underline on hover
      },
    }}
    {...props}
  >
    {children}
  </Box>
);

export default function MenuShowcase() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedItem, setSelectedItem] = useState('projects');
  const [tabValue, setTabValue] = useState(0);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
    { id: 'blog', label: 'Blog' },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom>
        Menu Components
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Компоненты меню Messe AI для навигации с подчеркиванием активных элементов. 
        Поддерживают два размера и состояния hover/selected.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}>
          <MenuGroup
            title="Navigation Menu Items"
            description="Элементы навигационного меню с подчеркиванием при выборе и наведении"
          >
            <Stack direction="row" spacing={4} flexWrap="wrap" useFlexGap>
              {menuItems.map((item) => (
                <CustomMenuItem
                  key={item.id}
                  selected={selectedItem === item.id}
                  onClick={() => setSelectedItem(item.id)}
                  size="medium"
                >
                  {item.label}
                </CustomMenuItem>
              ))}
            </Stack>
          </MenuGroup>

          <MenuGroup
            title="Small Size Menu Items"
            description="Компактная версия элементов меню для мобильных устройств"
          >
            <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
              {menuItems.map((item) => (
                <CustomMenuItem
                  key={`small-${item.id}`}
                  selected={selectedItem === item.id}
                  onClick={() => setSelectedItem(item.id)}
                  size="small"
                >
                  {item.label}
                </CustomMenuItem>
              ))}
            </Stack>
          </MenuGroup>

          <MenuGroup
            title="Dropdown Menu"
            description="Выпадающее меню с кастомными элементами"
          >
            <Box>
              <Button
                variant="outlined"
                onClick={handleMenuClick}
                endIcon={<KeyboardArrowDown />}
                sx={{ mb: 2 }}
              >
                Select Section
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: {
                    mt: 1,
                    minWidth: 200,
                  },
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.id}
                    onClick={() => {
                      setSelectedItem(item.id);
                      handleMenuClose();
                    }}
                    selected={selectedItem === item.id}
                    size="medium" as any
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </MenuGroup>

          <MenuGroup
            title="Tabs Integration"
            description="Интеграция с компонентом Tabs для переключения разделов"
          >
            <Box>
              <Tabs
                value={tabValue}
                onChange={(_, newValue) => setTabValue(newValue)}
                sx={{
                  '& .MuiTab-root': {
                    fontFamily: 'Roboto',
                    fontWeight: 700,
                    fontSize: 24,
                    lineHeight: '28px',
                    letterSpacing: '1%',
                    color: 'primary.500',
                    textTransform: 'none',
                    minHeight: 32,
                    padding: '4px 16px',
                  },
                  '& .MuiTabs-indicator': {
                    backgroundColor: 'primary.200',
                    height: 2,
                  },
                }}
              >
                <Tab label="Projects" />
                <Tab label="Services" />
                <Tab label="About Us" />
                <Tab label="Contact" />
              </Tabs>
              
              <Box sx={{ mt: 3, p: 2, backgroundColor: 'grey.50', borderRadius: 1 }}>
                <Typography variant="body1">
                  Content for tab {tabValue + 1}: {['Projects', 'Services', 'About Us', 'Contact'][tabValue]}
                </Typography>
              </Box>
            </Box>
          </MenuGroup>

          <MenuGroup
            title="Vertical Menu List"
            description="Вертикальное меню для боковой навигации"
          >
            <List sx={{ width: '100%', maxWidth: 300 }}>
              {menuItems.map((item) => (
                <ListItem
                  key={item.id}
                  disablePadding
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'grey.200',
                    '&:last-child': {
                      borderBottom: 'none',
                    },
                  }}
                >
                  <ListItemText
                    primary={
                      <CustomMenuItem
                        selected={selectedItem === item.id}
                        onClick={() => setSelectedItem(item.id)}
                        size="medium"
                      >
                        {item.label}
                      </CustomMenuItem>
                    }
                    sx={{ py: 1 }}
                  />
                </ListItem>
              ))}
            </List>
          </MenuGroup>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Typography variant="h5" gutterBottom>
            Design Specifications
          </Typography>
          
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Sizes (Tailwind CSS Reference)
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Medium
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  text-2xl (24px), leading-7 (28px), font-bold (700), tracking-tight (-0.025em)
                </Typography>
                <Typography variant="caption" color="text.secondary" display="block">
                  Container: h-8 (32px), py-1 (4px padding)
                </Typography>
                <Typography variant="caption" color="text.secondary" display="block">
                  Underline: w-px (1px) × h-[3px], top-[26px], opacity-0
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Small (Mobile)
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  16px font, 24px line-height, font-bold (700), tracking-tight (-0.025em)
                </Typography>
                <Typography variant="caption" color="text.secondary" display="block">
                  Underline: w-px (1px) × 2px, top 19px, opacity-0
                </Typography>
              </Box>
            </Stack>
          </Paper>

          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              States
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Default
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  text-Primary-purple-500 (#4C53A2), opacity-0 (underline hidden)
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Hover
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  text-Primary-purple-500 (#4C53A2), opacity-1 (underline visible)
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Selected
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  text-Primary-purple-500 (#4C53A2), opacity-1 (underline visible)
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Underline Color
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  bg-Primary-purple-100 (#C7CAE3)
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
                Используйте для основной навигации
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Medium размер для десктопа, Small для мобильных
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Максимум 5-7 элементов в горизонтальном меню
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Четкие и понятные названия разделов
              </Typography>
              <Typography component="li" variant="body2">
                Подчеркивание показывает активный раздел
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
