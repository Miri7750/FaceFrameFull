
// src/components/layout/Header.tsx
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/FaceFrameLogo.png';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Images', to: '/images' },
  { label: 'Faces', to: '/faces' },
  { label: 'About', to: '/about' },
];

export default function Header() {
  const location = useLocation();

  return (
    <AppBar position="sticky" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(8px)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <img src={Logo} alt="FaceFrame" style={{ height: 50, marginRight: 16 }} />
          <Typography variant="h6" sx={{ color: '#00e5ff', fontWeight: 700 }}>
            FaceFrame
          </Typography>
        </Box>
        <Box>
          {navItems.map((item) => (
            <Button
              key={item.to}
              component={Link}
              to={item.to}
              color="inherit"
              sx={{
                mx: 1,
                borderBottom: location.pathname === item.to ? '2px solid #00e5ff' : 'none',
                fontWeight: 600,
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
