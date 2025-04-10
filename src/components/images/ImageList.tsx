// src/components/images/ImageList.tsx
import { ImageData } from '../../types/types';
import ImageCard from './ImageCard';
import { Masonry } from '@mui/lab';

interface Props {
  images: ImageData[];
  onDownload?: (image: ImageData) => void;
  onDelete?: (id: number) => void;
  onEdit?: (id: number, name: string) => void;
}

export default function ImageList({ images, onDownload, onDelete, onEdit }: Props) {
  return (
    <Masonry columns={3} spacing={2} sx={{ mt: 4 }}>
      {images.map((img) => (
        <ImageCard
          key={img.id}
          image={img}
          onDownload={onDownload}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </Masonry>
  );
}
