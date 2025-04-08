import { useRef } from 'react';
import { useAppDispatch } from '../store/hooks';
import { uploadImage } from '../slices/imageSlice';
import { Box, Button, Input } from '@mui/material';

export default function ImageUploader() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    dispatch(uploadImage(file)).then(() => {
      window.location.reload(); // לרענון התמונות לאחר ההעלאה
    });
  };

  return (
    <Box my={2}>
      <Input
        type="file"
        inputRef={inputRef}
        onChange={handleUpload}
        sx={{ display: 'none' }}
      />
      <Button variant="contained" onClick={() => inputRef.current?.click()}>
        Upload Image
      </Button>
    </Box>
  );
}
