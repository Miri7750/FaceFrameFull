
// pages/ImagesPage.tsx
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchImages } from "../slices/imageSlice";
import { Box, Typography, Grid, Card, CardMedia, Button } from "@mui/material";

export default function ImagesPage() {
  const dispatch = useAppDispatch();
  const images = useAppSelector((state) => state.images);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  console.log(images)

  return (
    <Box>
      <Typography variant="h4" mb={2} color="#00e0ff">
        All Images
      </Typography>
      <Grid container spacing={2}>
        
        {
        images.map((img) => (
          <Grid   size={{xs:12, sm:6, md:4}} key={img.id}>
            <Card>
              <CardMedia
                component="img"
                image={img.image_data}
                alt={img.name}
                height="200"
              />
              <Button
                href={img.image_data}
                download={img.name}
                variant="contained"
                sx={{ backgroundColor: "#00e0ff" }}
              >
                Download
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
