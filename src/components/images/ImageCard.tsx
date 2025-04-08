
// src/components/images/ImageCard.tsx
import { Card, CardMedia, CardActions, Button } from '@mui/material';
import { ImageData } from '../../types/types';

interface Props {
  image: ImageData;
}

export default function ImageCard({ image }: Props) {
  return (
    <Card>
      <CardMedia component="img" height="200" image={image.image_data} alt={image.name} />
      <CardActions>
        <Button
          href={image.image_data}
          download={image.name}
          variant="contained"
          fullWidth
        >
          Download
        </Button>
      </CardActions>
    </Card>
  );
}