
// src/components/faces/FaceCard.tsx
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { FaceData } from '../../types/types';

interface Props {
  face: FaceData;
}

export default function FaceCard({ face }: Props) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={face.image_data}
        alt={`Face ${face.id}`}
      />
      <CardContent>
        <Typography>ID: {face.id}</Typography>
      </CardContent>
    </Card>
  );
}