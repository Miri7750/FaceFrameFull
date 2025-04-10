// // // // // // src/pages/Images.tsx
// // // // // import { useEffect } from 'react';
// // // // // import { useAppDispatch, useAppSelector } from '../store/hooks';
// // // // // import { fetchImages } from '../slices/imageSlice';
// // // // // import { Container, Typography, Grid } from '@mui/material';
// // // // // import ImageCard from '../components/images/ImageCard';
// // // // // import ImageUploader from '../components/images/ImageUploader';

// // // // // export default function Images() {
// // // // //   const dispatch = useAppDispatch();
// // // // //   const images = useAppSelector((state) => state.images);

// // // // //   useEffect(() => {
// // // // //     dispatch(fetchImages());
// // // // //   }, [dispatch]);

// // // // //   return (
// // // // //     <Container sx={{ py: 6 }}>
// // // // //       <Typography variant="h4" color="primary" gutterBottom>
// // // // //         All Images
// // // // //       </Typography>
// // // // //       <ImageUploader />
// // // // //       <Grid container spacing={3} mt={2}>
// // // // //         {images.map((image) => (
// // // // //           <Grid size={{}} xs={12} sm={6} md={4} key={image.id}>
// // // // //             <ImageCard image={image} />
// // // // //           </Grid>
// // // // //         ))}
// // // // //       </Grid>
// // // // //     </Container>
// // // // //   );
// // // // // }
// // // // // src/pages/Images.tsx
// // // // import { useEffect } from 'react';
// // // // import { useAppDispatch, useAppSelector } from '../store/hooks';
// // // // import { fetchImages } from '../slices/imageSlice';
// // // // import { Container, Typography } from '@mui/material';
// // // // import ImageUploader from '../components/images/ImageUploader';
// // // // import { Masonry } from '@mui/lab';

// // // // export default function Images() {
// // // //   const dispatch = useAppDispatch();
// // // //   const images = useAppSelector((state) => state.images);

// // // //   useEffect(() => {
// // // //     dispatch(fetchImages());
// // // //   }, [dispatch]);

// // // //   return (
// // // //     <Container sx={{ py: 6 }}>
// // // //       <Typography variant="h4" color="primary" gutterBottom>
// // // //         All Images
// // // //       </Typography>
// // // //       <ImageUploader />
// // // //       <Masonry columns={3} spacing={2} sx={{ mt: 4 }}>
// // // //         {images.map((img) => (
// // // //           <img
// // // //             key={img.id}
// // // //             src={img.image_data}
// // // //             alt={img.name}
// // // //             style={{ width: '100%', borderRadius: 8 }}
// // // //           />
// // // //         ))}
// // // //       </Masonry>
// // // //     </Container>
// // // //   );
// // // // }

// // // // src/pages/Images.tsx
// // // import { useEffect, useState } from 'react';
// // // import { useAppDispatch, useAppSelector } from '../store/hooks';
// // // import { fetchImages } from '../slices/imageSlice';
// // // import {
// // //   Container,
// // //   Typography,
// // //   Box,
// // //   IconButton,
// // //   Dialog,
// // //   DialogTitle,
// // //   DialogContent,
// // //   DialogActions,
// // //   TextField,
// // //   Button,
// // // } from '@mui/material';
// // // import { Masonry } from '@mui/lab';
// // // import DeleteIcon from '@mui/icons-material/Delete';
// // // import EditIcon from '@mui/icons-material/Edit';
// // // import ImageUploader from '../components/images/ImageUploader';
// // // import axios from 'axios';

// // // export default function Images() {
// // //   const dispatch = useAppDispatch();
// // //   const images = useAppSelector((state) => state.images);
// // //   const [editDialog, setEditDialog] = useState({ open: false, imageId: 0, imageName: '' });

// // //   useEffect(() => {
// // //     dispatch(fetchImages());
// // //   }, [dispatch]);

// // //   const handleDelete = async (id: number) => {
// // //     try {
// // //       await axios.delete(`/images/${id}`);
// // //       window.location.reload();
// // //     } catch (error) {
// // //       console.error('Error deleting image:', error);
// // //     }
// // //   };

// // //   const handleEditClick = (id: number, name: string) => {
// // //     setEditDialog({ open: true, imageId: id, imageName: name });
// // //   };

// // //   return (
// // //     <Container sx={{ py: 6 }}>
// // //       <Typography variant="h4" color="primary" gutterBottom>
// // //         All Images
// // //       </Typography>
// // //       <ImageUploader />
// // //       <Masonry columns={3} spacing={2} sx={{ mt: 4 }}>
// // //         {images.map((img) => (
// // //           <Box key={img.id} sx={{ position: 'relative' }}>
// // //             <img
// // //               src={img.image_data}
// // //               alt={img.name}
// // //               style={{ width: '100%', borderRadius: 8 }}
// // //             />
// // //             <Box
// // //               sx={{
// // //                 position: 'absolute',
// // //                 top: 4,
// // //                 right: 4,
// // //                 display: 'flex',
// // //                 gap: 1,
// // //               }}
// // //             >
// // //               <IconButton size="small" onClick={() => handleDelete(img.id)}>
// // //                 <DeleteIcon fontSize="small" />
// // //               </IconButton>
// // //               <IconButton size="small" onClick={() => handleEditClick(img.id, img.name)}>
// // //                 <EditIcon fontSize="small" />
// // //               </IconButton>
// // //             </Box>
// // //           </Box>
// // //         ))}
// // //       </Masonry>

// // //       <Dialog open={editDialog.open} onClose={() => setEditDialog({ ...editDialog, open: false })}>
// // //         <DialogTitle>Edit Image</DialogTitle>
// // //         <DialogContent>
// // //           <TextField
// // //             autoFocus
// // //             fullWidth
// // //             label="Image Name"
// // //             value={editDialog.imageName}
// // //             onChange={(e) => setEditDialog({ ...editDialog, imageName: e.target.value })}
// // //           />
// // //         </DialogContent>
// // //         <DialogActions>
// // //           <Button onClick={() => setEditDialog({ ...editDialog, open: false })}>Cancel</Button>
// // //           <Button
// // //             onClick={async () => {
// // //               try {
// // //                 const formData = new FormData();
// // //                 formData.append('file', new Blob());
// // //                 formData.append('image_name', editDialog.imageName);
// // //                 await axios.put(`/images/${editDialog.imageId}`, formData);
// // //                 setEditDialog({ ...editDialog, open: false });
// // //                 window.location.reload();
// // //               } catch (error) {
// // //                 console.error('Edit error:', error);
// // //               }
// // //             }}
// // //           >
// // //             Save
// // //           </Button>
// // //         </DialogActions>
// // //       </Dialog>
// // //     </Container>
// // //   );
// // // }
// // // src/pages/Images.tsx
// // import { useEffect, useState, useRef } from 'react';
// // import { useAppDispatch, useAppSelector } from '../store/hooks';
// // import { fetchImages } from '../slices/imageSlice';
// // import {
// //   Container,
// //   Typography,
// //   Box,
// //   IconButton,
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// //   TextField,
// //   Button,
// //   Input,
// // } from '@mui/material';
// // import { Masonry } from '@mui/lab';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import EditIcon from '@mui/icons-material/Edit';
// // import DownloadIcon from '@mui/icons-material/Download';
// // import ImageUploader from '../components/images/ImageUploader';
// // import axios from 'axios';

// // export default function Images() {
// //   const dispatch = useAppDispatch();
// //   const images = useAppSelector((state) => state.images);
// //   const [editDialog, setEditDialog] = useState({ open: false, imageId: 0, imageName: '' });
// //   const [editFile, setEditFile] = useState<File | null>(null);
// //   const fileInputRef = useRef<HTMLInputElement | null>(null);

// //   useEffect(() => {
// //     dispatch(fetchImages());
// //   }, [dispatch]);

// //   const handleDelete = async (id: number) => {
// //     try {
// //       await axios.delete(`/images/${id}`);
// //       window.location.reload();
// //     } catch (error) {
// //       console.error('Error deleting image:', error);
// //     }
// //   };

// //   const handleEditClick = (id: number, name: string) => {
// //     setEditDialog({ open: true, imageId: id, imageName: name });
// //     setEditFile(null);
// //   };

// //   const handleDownload = (img: { image_data: string; name: string }) => {
// //     const link = document.createElement('a');
// //     link.href = img.image_data;
// //     link.download = img.name;
// //     link.click();
// //   };

// //   return (
// //     <Container sx={{ py: 6 }}>
// //       <Typography variant="h4" color="primary" gutterBottom>
// //         All Images
// //       </Typography>
// //       <ImageUploader />
// //       <Masonry columns={3} spacing={2} sx={{ mt: 4 }}>
// //         {images.map((img) => (
// //           <Box key={img.id} sx={{ position: 'relative' }}>
// //             <img
// //               src={img.image_data}
// //               alt={img.name}
// //               style={{ width: '100%', borderRadius: 8 }}
// //             />
// //             <Box
// //               sx={{
// //                 position: 'absolute',
// //                 top: 4,
// //                 right: 4,
// //                 display: 'flex',
// //                 gap: 1,
// //               }}
// //             >
// //               <IconButton size="small" onClick={() => handleDownload(img)}>
// //                 <DownloadIcon fontSize="small" />
// //               </IconButton>
// //               <IconButton size="small" onClick={() => handleDelete(img.id)}>
// //                 <DeleteIcon fontSize="small" />
// //               </IconButton>
// //               <IconButton size="small" onClick={() => handleEditClick(img.id, img.name)}>
// //                 <EditIcon fontSize="small" />
// //               </IconButton>
// //             </Box>
// //           </Box>
// //         ))}
// //       </Masonry>

// //       <Dialog open={editDialog.open} onClose={() => setEditDialog({ ...editDialog, open: false })}>
// //         <DialogTitle>Edit Image</DialogTitle>
// //         <DialogContent>
// //           <TextField
// //             autoFocus
// //             fullWidth
// //             label="Image Name"
// //             value={editDialog.imageName}
// //             onChange={(e) => setEditDialog({ ...editDialog, imageName: e.target.value })}
// //             sx={{ mb: 2 }}
// //           />
// //           <Input
// //             type="file"
// //             inputRef={fileInputRef}
// //             onChange={(e) => {
// //               const file = e.target.files?.[0];
// //               if (file) setEditFile(file);
// //             }}
// //             fullWidth
// //           />
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={() => setEditDialog({ ...editDialog, open: false })}>Cancel</Button>
// //           <Button
// //             onClick={async () => {
// //               try {
// //                 const formData = new FormData();
// //                 formData.append('file', editFile || new Blob());
// //                 formData.append('image_name', editDialog.imageName);
// //                 await axios.put(`/images/${editDialog.imageId}`, formData);
// //                 setEditDialog({ ...editDialog, open: false });
// //                 window.location.reload();
// //               } catch (error) {
// //                 console.error('Edit error:', error);
// //               }
// //             }}
// //           >
// //             Save
// //           </Button>
// //         </DialogActions>
// //       </Dialog>
// //     </Container>
// //   );
// // }


// // src/pages/Images.tsx
// import { useEffect, useState, useRef } from 'react';
// import { useAppDispatch, useAppSelector } from '../store/hooks';
// import { fetchImages } from '../slices/imageSlice';
// import {
//   Container,
//   Typography,
//   Box,
//   IconButton,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Button,
//   Input,
//   Card,
//   CardMedia,
// } from '@mui/material';
// import { Masonry } from '@mui/lab';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import DownloadIcon from '@mui/icons-material/Download';
// import ImageUploader from '../components/images/ImageUploader';
// import axios from 'axios';

// export default function Images() {
//   const dispatch = useAppDispatch();
//   const images = useAppSelector((state) => state.images);
//   const [editDialog, setEditDialog] = useState({ open: false, imageId: 0, imageName: '' });
//   const [editFile, setEditFile] = useState<File | null>(null);
//   const fileInputRef = useRef<HTMLInputElement | null>(null);

//   useEffect(() => {
//     dispatch(fetchImages());
//   }, [dispatch]);

//   const handleDelete = async (id: number) => {
//     try {
//       await axios.delete(`/images/${id}`);
//       window.location.reload();
//     } catch (error) {
//       console.error('Error deleting image:', error);
//     }
//   };

//   const handleEditClick = (id: number, name: string) => {
//     setEditDialog({ open: true, imageId: id, imageName: name });
//     setEditFile(null);
//   };

//   const handleDownload = (img: { image_data: string; name: string }) => {
//     const link = document.createElement('a');
//     link.href = img.image_data;
//     link.download = img.name;
//     link.click();
//   };

//   return (
//     <Container sx={{ py: 6 }}>
//       <Typography variant="h4" color="primary" gutterBottom>
//         All Images
//       </Typography>
//       <ImageUploader />
//       <Masonry columns={3} spacing={2} sx={{ mt: 4 }}>
//         {images.map((img) => (
//           <Card
//             key={img.id}
//             sx={{
//               position: 'relative',
//               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//               '&:hover': {
//                 transform: 'scale(1.02)',
//                 boxShadow: '0 0 10px rgba(0,229,255,0.6)',
//               },
//             }}
//           >
//             <CardMedia
//               component="img"
//               image={img.image_data}
//               alt={img.name}
//               sx={{ width: '100%', display: 'block' }}
//             />
//             <Box
//               sx={{
//                 position: 'absolute',
//                 top: 4,
//                 right: 4,
//                 display: 'flex',
//                 gap: 1,
//               }}
//             >
//               <IconButton size="small" onClick={() => handleDownload(img)}>
//                 <DownloadIcon fontSize="small" />
//               </IconButton>
//               <IconButton size="small" onClick={() => handleDelete(img.id)}>
//                 <DeleteIcon fontSize="small" />
//               </IconButton>
//               <IconButton size="small" onClick={() => handleEditClick(img.id, img.name)}>
//                 <EditIcon fontSize="small" />
//               </IconButton>
//             </Box>
//           </Card>
//         ))}
//       </Masonry>

//       <Dialog open={editDialog.open} onClose={() => setEditDialog({ ...editDialog, open: false })}>
//         <DialogTitle>Edit Image</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             fullWidth
//             label="Image Name"
//             value={editDialog.imageName}
//             onChange={(e) => setEditDialog({ ...editDialog, imageName: e.target.value })}
//             sx={{ mb: 2 }}
//           />
//           <Input
//             type="file"
//             inputRef={fileInputRef}
//             onChange={(e) => {
//               const file = e.target.files?.[0];
//               if (file) setEditFile(file);
//             }}
//             fullWidth
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setEditDialog({ ...editDialog, open: false })}>Cancel</Button>
//           <Button
//             onClick={async () => {
//               try {
//                 const formData = new FormData();
//                 formData.append('file', editFile || new Blob());
//                 formData.append('image_name', editDialog.imageName);
//                 await axios.put(`/images/${editDialog.imageId}`, formData);
//                 setEditDialog({ ...editDialog, open: false });
//                 window.location.reload();
//               } catch (error) {
//                 console.error('Edit error:', error);
//               }
//             }}
//           >
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// }


// src/pages/Images.tsx
import { useEffect, useState, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchImages } from '../slices/imageSlice';
import {
  Container,
  Typography,
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Input,
  Card,
  CardMedia,
} from '@mui/material';
import { Masonry } from '@mui/lab';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import ImageUploader from '../components/images/ImageUploader';
import axios from 'axios';

export default function Images() {
  const dispatch = useAppDispatch();
  const images = useAppSelector((state) => state.images);
  const [editDialog, setEditDialog] = useState({ open: false, imageId: 0, imageName: '' });
  const [editFile, setEditFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/images/${id}`);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  const handleEditClick = (id: number, name: string) => {
    setEditDialog({ open: true, imageId: id, imageName: name });
    setEditFile(null);
  };

  const handleDownload = (img: { image_data: string; name: string }) => {
    const link = document.createElement('a');
    link.href = img.image_data;
    link.download = img.name;
    link.click();
  };

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        All Images
      </Typography>
      <ImageUploader />
      <Masonry columns={3} spacing={2} sx={{ mt: 4 }}>
        {images.map((img) => (
          <Card
            key={img.id}
            sx={{
              position: 'relative',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: '0 0 10px rgba(0,229,255,0.6)',
              },
            }}
          >
            <CardMedia
              component="img"
              image={img.image_data}
              alt={img.name}
              sx={{ width: '100%', display: 'block' }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 4,
                right: 4,
                display: 'flex',
                gap: 1,
              }}
            >
              <IconButton
                size="small"
                onClick={() => handleDownload(img)}
                sx={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', '&:hover': { backgroundColor: 'rgba(0,229,255,0.7)' } }}
              >
                <DownloadIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => handleDelete(img.id)}
                sx={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', '&:hover': { backgroundColor: 'rgba(255,0,0,0.6)' } }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => handleEditClick(img.id, img.name)}
                sx={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', '&:hover': { backgroundColor: 'rgba(255,255,0,0.6)' } }}
              >
                <EditIcon fontSize="small" />
              </IconButton>
            </Box>
          </Card>
        ))}
      </Masonry>

      <Dialog open={editDialog.open} onClose={() => setEditDialog({ ...editDialog, open: false })}>
        <DialogTitle>Edit Image</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            label="Image Name"
            value={editDialog.imageName}
            onChange={(e) => setEditDialog({ ...editDialog, imageName: e.target.value })}
            sx={{ mb: 2 }}
          />
          <Input
            type="file"
            inputRef={fileInputRef}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setEditFile(file);
            }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialog({ ...editDialog, open: false })}>Cancel</Button>
          <Button
            onClick={async () => {
              try {
                const formData = new FormData();
                formData.append('file', editFile || new Blob());
                formData.append('image_name', editDialog.imageName);
                await axios.put(`/images/${editDialog.imageId}`, formData);
                setEditDialog({ ...editDialog, open: false });
                window.location.reload();
              } catch (error) {
                console.error('Edit error:', error);
              }
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
