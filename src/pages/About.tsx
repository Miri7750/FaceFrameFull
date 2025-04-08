
// src/pages/About.tsx
import { Box, Typography, Container } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" color="primary" gutterBottom textAlign="center">
        About FaceFrame
      </Typography>
      <Typography variant="h6" color="text.secondary" textAlign="center" mb={4}>
        Revolutionizing event photography with AI-powered facial recognition.
      </Typography>
      <Typography variant="body1" color="text.primary" textAlign="center">
        FaceFrame is a cutting-edge platform designed to make photo management at events seamless, secure, and personalized.
        Our AI-based face recognition enables easy photo sorting, guest tagging, and direct sharing to participants.
        Whether it's a wedding, conference, or party — FaceFrame brings smart automation to your memories.
      </Typography>
    </Container>
  );
}
