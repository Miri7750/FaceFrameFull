
// src/components/layout/Footer.tsx
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" py={3} textAlign="center" sx={{ backgroundColor: 'transparent', borderTop: '1px solid #222' }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} FaceFrame. All rights reserved.
      </Typography>
    </Box>
  );
}