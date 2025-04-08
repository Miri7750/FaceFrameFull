// src/pages/Images.tsx
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchImages } from '../slices/imageSlice';
import { Container, Typography, Grid } from '@mui/material';
import ImageCard from '../components/images/ImageCard';
import ImageUploader from '../components/images/ImageUploader';

export default function Images() {
  const dispatch = useAppDispatch();
  const images = useAppSelector((state) => state.images);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        All Images
      </Typography>
      <ImageUploader />
      <Grid container spacing={3} mt={2}>
        {images.map((image) => (
          <Grid size={{xs:12, sm:6, md:4}}key={image.id}>
            <ImageCard image={image} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}