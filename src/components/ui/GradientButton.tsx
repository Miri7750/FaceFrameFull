
// src/components/ui/GradientButton.tsx
import { Button, ButtonProps } from '@mui/material';
import { LinkProps } from 'react-router-dom';
import { styled } from '@mui/system';

const GradientButton = styled(Button)<ButtonProps&LinkProps>(({ theme }) => ({
  background: 'linear-gradient(90deg, #ff6ec4 0%, #7873f5 50%, #00e5ff 100%)',
  color: 'white',
  padding: '10px 24px',
  fontSize: '1rem',
  borderRadius: theme.shape.borderRadius,
  fontWeight: 600,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 0 12px rgba(0, 229, 255, 0.8)',
  },
}));

export default GradientButton;
