'use client';

import { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon, Palette, TextFields, SmartButton } from '@mui/icons-material';

type UIKitSection = {
  id: string;
  title: string;
  icon: React.ReactNode;
  component: React.ReactNode;
};

type UIKitLayoutProps = {
  sections: UIKitSection[];
};

const drawerWidth = 280;

export default function UIKitLayout({ sections }: UIKitLayoutProps) {
  const [selectedSection, setSelectedSection] = useState(sections[0]?.id || '');
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSectionSelect = (sectionId: string) => {
    setSelectedSection(sectionId);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const currentSection = sections.find(section => section.id === selectedSection);

  const drawer = (
    <Box>
      <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Typography variant="h6" fontWeight={600}>
          Messe AI UI Kit
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Design System Components
        </Typography>
      </Box>
      
      <List sx={{ pt: 2 }}>
        {sections.map((section) => (
          <ListItem key={section.id} disablePadding>
            <ListItemButton
              selected={selectedSection === section.id}
              onClick={() => handleSectionSelect(section.id)}
              sx={{
                mx: 1,
                borderRadius: 1,
                '&.Mui-selected': {
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                  '& .MuiListItemText-primary': {
                    fontWeight: 600,
                  },
                },
              }}
            >
              <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                {section.icon}
              </Box>
              <ListItemText 
                primary={section.title}
                primaryTypographyProps={{
                  variant: 'body2',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          backgroundColor: 'background.paper',
          color: 'text.primary',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12)',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {currentSection?.title || 'UI Kit'}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Navigation Drawer */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              borderRight: '1px solid',
              borderColor: 'divider',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: 'background.default',
          minHeight: '100vh',
        }}
      >
        <Toolbar /> {/* Spacer for AppBar */}
        
        <Box sx={{ overflow: 'auto', height: 'calc(100vh - 64px)' }}>
          {currentSection?.component}
        </Box>
      </Box>
    </Box>
  );
}

// Default sections for the UI Kit
export const defaultUIKitSections: UIKitSection[] = [
  {
    id: 'colors',
    title: 'Colors',
    icon: <Palette />,
    component: null, // Will be set by the parent component
  },
  {
    id: 'typography',
    title: 'Typography',
    icon: <TextFields />,
    component: null,
  },
  {
    id: 'buttons',
    title: 'Buttons',
    icon: <SmartButton />,
    component: null,
  },
];
