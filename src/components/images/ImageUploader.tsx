
// src/components/images/ImageUploader.tsx
import { Box, Button, Input } from '@mui/material';
import { useRef } from 'react';
import axios from 'axios';

export default function ImageUploader() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    await axios.post('/images/', formData);
    window.location.reload();
  };

  return (
    <Box my={2}>
      <Input type="file" inputRef={inputRef} onChange={handleUpload} sx={{ display: 'none' }} />
      <Button variant="contained" onClick={() => inputRef.current?.click()}>
        Upload Image
      </Button>
    </Box>
  );
}