
// src/pages/Home.tsx
import { Box, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import GradientButton from '../components/ui/GradientButton';
import UploadIcon from '@mui/icons-material/CloudUpload';
import FaceIcon from '@mui/icons-material/Face';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SendIcon from '@mui/icons-material/Send';
// import Grid from '@mui/material/Grid';


const features = [
  { icon: <UploadIcon sx={{ fontSize: 50 }} />, text: 'Upload Photos', to: '/images' },
  { icon: <FaceIcon sx={{ fontSize: 50 }} />, text: 'Face Recognition', to: '/faces' },
  { icon: <PhotoLibraryIcon sx={{ fontSize: 50 }} />, text: 'View Gallery', to: '/images' },
  { icon: <SendIcon sx={{ fontSize: 50 }} />, text: 'Send to Guests', to: '/faces' },
];

export default function Home() {
  return (
    <Box textAlign="center" py={8}>
      <Typography variant="h2" color="primary" gutterBottom>
        FaceFrame
      </Typography>
      <Typography variant="h5" color="text.secondary">
        Smart Event Photo Management
      </Typography>
      <Typography variant="body1" mt={2} maxWidth={600} mx="auto">
        Store and view your event photos instantly. Share personalized photos with your guests using advanced AI-based face recognition.
      </Typography>

      <Box mt={4}>
        <GradientButton component={Link} to="/images">
          Get Started
        </GradientButton>
      </Box>

      <Grid container spacing={4} justifyContent="center" mt={6}>
        {features.map((item, index) => (
          <Grid size={{ xs:6 ,sm:3}} key={index}>
            <Box color="primary.main">
              {item.icon}
              <Typography variant="subtitle1" color="white" mt={1}>
                {item.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
