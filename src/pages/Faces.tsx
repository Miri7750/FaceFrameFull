
// // // // // // src/pages/Faces.tsx
// // // // // import { useEffect } from 'react';
// // // // // import { useAppDispatch, useAppSelector } from '../store/hooks';
// // // // // import { fetchFaces } from '../slices/faceSlice';
// // // // // import { Container, Typography, Grid } from '@mui/material';
// // // // // import FaceCard from '../components/faces/FaceCard';

// // // // // export default function Faces() {
// // // // //   const dispatch = useAppDispatch();
// // // // //   const faces = useAppSelector((state) => state.faces.faces);

// // // // //   useEffect(() => {
// // // // //     dispatch(fetchFaces());
// // // // //   }, [dispatch]);

// // // // //   return (
// // // // //     <Container sx={{ py: 6 }}>
// // // // //       <Typography variant="h4" color="primary" gutterBottom>
// // // // //         Detected Faces
// // // // //       </Typography>
// // // // //       <Grid container spacing={3}>
// // // // //         {faces.map((face) => (
// // // // //           <Grid size={{xs:12, sm:6, md:4}} key={face.id}>
// // // // //             <FaceCard face={face} />
// // // // //           </Grid>
// // // // //         ))}
// // // // //       </Grid>
// // // // //     </Container>
// // // // //   );
// // // // // }

// // // // import { useEffect } from 'react';
// // // // import { useAppDispatch, useAppSelector } from '../store/hooks';
// // // // import { fetchFaces } from '../slices/faceSlice'; // ודא שזה import נכון
// // // // import { Container, Typography, Grid } from '@mui/material';
// // // // import FaceCard from '../components/faces/FaceCard';

// // // // export default function Faces() {
// // // //   const dispatch = useAppDispatch();
// // // //   const faces = useAppSelector((state) => state.faces.faces);

// // // //   useEffect(() => {
// // // //     dispatch(fetchFaces());
// // // //   }, [dispatch]);

// // // //   return (
// // // //     <Container sx={{ py: 6 }}>
// // // //       <Typography variant="h4" color="primary" gutterBottom>
// // // //         Detected Faces
// // // //       </Typography>
// // // //       <Grid container spacing={3}>
// // // //         {Array.isArray(faces) &&
// // // //           faces.map((face) => (
// // // //             <Grid size={{ xs:12, sm:6, md:4 }} key={face.id}>
// // // //               <FaceCard face={face} />
// // // //             </Grid>
// // // //           ))}
// // // //           {!Array.isArray(faces) && <div>{faces}</div>}
// // // //       </Grid>
// // // //     </Container>
// // // //   );
// // // // }

// // // // src/pages/Faces.tsx
// // // import { useEffect, useState } from 'react';
// // // import { useAppDispatch, useAppSelector } from '../store/hooks';
// // // import { fetchFaces, fetchImagesForFace } from '../slices/faceSlice';
// // // import {
// // //   Container,
// // //   Typography,
// // //   Grid,
// // //   Card,
// // //   CardMedia,
// // //   CardContent,
// // //   Collapse,
// // //   Box,
// // //   Button,
// // //   CircularProgress,
// // // } from '@mui/material';

// // // export default function Faces() {
// // //   const dispatch = useAppDispatch();
// // //   const { faces, faceImages } = useAppSelector((state) => state.faces);
// // //   const [loadingFaceId, setLoadingFaceId] = useState<number | null>(null);

// // //   useEffect(() => {
// // //     dispatch(fetchFaces());
// // //   }, [dispatch]);

// // //   const handleExpand = async (faceId: number) => {
// // //     if (!faceImages[faceId]) {
// // //       setLoadingFaceId(faceId);
// // //       await dispatch(fetchImagesForFace(faceId));
// // //       setLoadingFaceId(null);
// // //     }
// // //   };

// // //   return (
// // //     <Container sx={{ py: 6 }}>
// // //       <Typography variant="h4" color="primary" gutterBottom>
// // //         Detected Faces
// // //       </Typography>
// // //       <Grid container spacing={3}>
// // //         {Array.isArray(faces) &&
// // //           faces.map((face) => (
// // //             <Grid size={{ xs:12, sm:6, md:4 }} key={face.id}>
// // //               <Card>
// // //                 <CardMedia
// // //                   component="img"
// // //                   image={face.image_data}
// // //                   alt={`Face ${face.id}`}
// // //                   height="200"
// // //                 />
// // //                 <CardContent>
// // //                   <Button
// // //                     fullWidth
// // //                     variant="outlined"
// // //                     onClick={() => handleExpand(face.id)}
// // //                     disabled={loadingFaceId === face.id}
// // //                   >
// // //                     {loadingFaceId === face.id ? (
// // //                       <CircularProgress size={20} color="inherit" />
// // //                     ) : (
// // //                       'Show Related Images'
// // //                     )}
// // //                   </Button>
// // //                 </CardContent>
// // //                 <Collapse in={!!faceImages[face.id]}>
// // //                   <CardContent>
// // //                     <Typography variant="h6">Related Images</Typography>
// // //                     <Grid container spacing={1}>
// // //                       {faceImages[face.id]?.map((img) => (
// // //                         <Grid item size={6} key={img.id}>
// // //                           <CardMedia
// // //                             component="img"
// // //                             image={img.image_data}
// // //                             alt={img.name}
// // //                             height="100"
// // //                           />
// // //                         </Grid>
// // //                       ))}
// // //                     </Grid>
// // //                   </CardContent>
// // //                 </Collapse>
// // //               </Card>
// // //             </Grid>
// // //           ))}
// // //       </Grid>
// // //     </Container>
// // //   );
// // // }

// // // src/pages/Faces.tsx
// // import { useEffect, useState } from 'react';
// // import { useAppDispatch, useAppSelector } from '../store/hooks';
// // import { fetchFaces, fetchImagesForFace } from '../slices/faceSlice';
// // import {
// //   Container,
// //   Typography,
// //   Grid,
// //   Card,
// //   CardMedia,
// //   CardContent,
// //   Collapse,
// //   Box,
// //   Button,
// //   CircularProgress,
// // } from '@mui/material';
// // import { Masonry } from '@mui/lab';
// // import VisibilityIcon from '@mui/icons-material/Visibility';
// // import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// // export default function Faces() {
// //   const dispatch = useAppDispatch();
// //   const { faces, faceImages } = useAppSelector((state) => state.faces);
// //   const [loadingFaceId, setLoadingFaceId] = useState<number | null>(null);
// //   const [expandedFaceIds, setExpandedFaceIds] = useState<number[]>([]);

// //   useEffect(() => {
// //     dispatch(fetchFaces());
// //   }, [dispatch]);

// //   const handleExpand = async (faceId: number) => {
// //     const isExpanded = expandedFaceIds.includes(faceId);
// //     if (isExpanded) {
// //       setExpandedFaceIds(expandedFaceIds.filter((id) => id !== faceId));
// //       return;
// //     }
// //     setExpandedFaceIds([...expandedFaceIds, faceId]);

// //     if (!faceImages[faceId]) {
// //       setLoadingFaceId(faceId);
// //       await dispatch(fetchImagesForFace(faceId));
// //       setLoadingFaceId(null);
// //     }
// //   };

// //   return (
// //     <Container sx={{ py: 6 }}>
// //       <Typography variant="h4" color="primary" gutterBottom>
// //         Detected Faces
// //       </Typography>
// //       <Grid container spacing={3}>
// //         {Array.isArray(faces) &&
// //           faces.map((face) => (
// //             <Grid size={{ xs:12, sm:6, md:4 }} key={face.id}>
// //               <Card>
// //                 <CardMedia
// //                   component="img"
// //                   image={face.image_data}
// //                   alt={`Face ${face.id}`}
// //                   height="200"
// //                 />
// //                 <CardContent>
// //                   <Button
// //                     fullWidth
// //                     variant="outlined"
// //                     onClick={() => handleExpand(face.id)}
// //                     disabled={loadingFaceId === face.id}
// //                     startIcon={
// //                       expandedFaceIds.includes(face.id) ? (
// //                         <VisibilityOffIcon />
// //                       ) : (
// //                         <VisibilityIcon />
// //                       )
// //                     }
// //                   >
// //                     {loadingFaceId === face.id
// //                       ? <CircularProgress size={20} color="inherit" />
// //                       : expandedFaceIds.includes(face.id)
// //                         ? 'Hide Related Images'
// //                         : 'Show Related Images'}
// //                   </Button>
// //                 </CardContent>
// //                 <Collapse in={expandedFaceIds.includes(face.id)}>
// //                   <CardContent>
// //                     <Typography variant="h6">Related Images</Typography>
// //                     {faceImages[face.id]?.length ? (
// //                       <Masonry columns={2} spacing={1}>
// //                         {faceImages[face.id].map((img) => (
// //                           <img
// //                             key={img.id}
// //                             src={img.image_data}
// //                             alt={img.name}
// //                             style={{ width: '100%', borderRadius: 8 }}
// //                           />
// //                         ))}
// //                       </Masonry>
// //                     ) : (
// //                       <Typography variant="body2" color="text.secondary">
// //                         No related images found.
// //                       </Typography>
// //                     )}
// //                   </CardContent>
// //                 </Collapse>
// //               </Card>
// //             </Grid>
// //           ))}
// //       </Grid>
// //     </Container>
// //   );
// // }
// // src/pages/Faces.tsx
// import { useEffect, useState } from 'react';
// import { useAppDispatch, useAppSelector } from '../store/hooks';
// import { fetchFaces, fetchImagesForFace } from '../slices/faceSlice';
// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Collapse,
//   Box,
//   Button,
//   CircularProgress,
//   IconButton,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   TextField,
//   DialogActions,
// } from '@mui/material';
// import { Masonry } from '@mui/lab';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import DownloadIcon from '@mui/icons-material/Download';
// import axios from 'axios';

// export default function Faces() {
//   const dispatch = useAppDispatch();
//   const { faces, faceImages } = useAppSelector((state) => state.faces);
//   const [loadingFaceId, setLoadingFaceId] = useState<number | null>(null);
//   const [expandedFaceIds, setExpandedFaceIds] = useState<number[]>([]);
//   const [editDialog, setEditDialog] = useState({ open: false, imageId: 0, imageName: '' });

//   useEffect(() => {
//     dispatch(fetchFaces());
//   }, [dispatch]);

//   const handleExpand = async (faceId: number) => {
//     const isExpanded = expandedFaceIds.includes(faceId);
//     if (isExpanded) {
//       setExpandedFaceIds(expandedFaceIds.filter((id) => id !== faceId));
//       return;
//     }
//     setExpandedFaceIds([...expandedFaceIds, faceId]);

//     if (!faceImages[faceId]) {
//       setLoadingFaceId(faceId);
//       await dispatch(fetchImagesForFace(faceId));
//       setLoadingFaceId(null);
//     }
//   };

//   const handleDeleteImage = async (imageId: number) => {
//     try {
//       await axios.delete(`/images/${imageId}`);
//       window.location.reload();
//     } catch (error) {
//       console.error('Error deleting image:', error);
//     }
//   };

//   const handleEditClick = (id: number, name: string) => {
//     setEditDialog({ open: true, imageId: id, imageName: name });
//   };

//   const handleDownloadAll = (images: any[]) => {
//     images.forEach((img) => {
//       const link = document.createElement('a');
//       link.href = img.image_data;
//       link.download = img.image_name;
//       link.click();
//     });
//   };

//   return (
//     <Container sx={{ py: 6 }}>
//       <Typography variant="h4" color="primary" gutterBottom>
//         Detected Faces
//       </Typography>
//       <Grid container spacing={3}>
//         {Array.isArray(faces) &&
//           faces.map((face) => (
//             <Grid size={{ xs:12, sm:6, md:4 }} key={face.id}>
//               <Card>
//                 <CardMedia
//                   component="img"
//                   image={face.image_data}
//                   alt={`Face ${face.id}`}
//                   height="200"
//                 />
//                 <CardContent>
//                   <Button
//                     fullWidth
//                     variant="outlined"
//                     onClick={() => handleExpand(face.id)}
//                     disabled={loadingFaceId === face.id}
//                     startIcon={
//                       expandedFaceIds.includes(face.id) ? (
//                         <VisibilityOffIcon />
//                       ) : (
//                         <VisibilityIcon />
//                       )
//                     }
//                   >
//                     {loadingFaceId === face.id ? (
//                       <CircularProgress size={20} color="inherit" />
//                     ) : expandedFaceIds.includes(face.id) ? (
//                       'Hide Related Images'
//                     ) : (
//                       'Show Related Images')}
//                   </Button>
//                 </CardContent>
//                 <Collapse in={expandedFaceIds.includes(face.id)}>
//                   <CardContent>
//                     <Box display="flex" justifyContent="space-between" alignItems="center">
//                       <Typography variant="h6">Related Images</Typography>
//                       {faceImages[face.id]?.length > 0 && (
//                         <Button
//                           size="small"
//                           startIcon={<DownloadIcon />}
//                           onClick={() => handleDownloadAll(faceImages[face.id])}
//                         >
//                           Download All
//                         </Button>
//                       )}
//                     </Box>
//                     {faceImages[face.id]?.length ? (
//                       <Masonry columns={2} spacing={1}>
//                         {faceImages[face.id].map((img) => (
//                           <Box key={img.id} sx={{ position: 'relative' }}>
//                             <img
//                               src={img.image_data}
//                               alt={img.name}
//                               style={{ width: '100%', borderRadius: 8 }}
//                             />
//                             <Box
//                               sx={{
//                                 position: 'absolute',
//                                 top: 4,
//                                 right: 4,
//                                 display: 'flex',
//                                 gap: 1,
//                               }}
//                             >
//                               <IconButton size="small" onClick={() => handleDeleteImage(img.id)}>
//                                 <DeleteIcon fontSize="small" />
//                               </IconButton>
//                               <IconButton size="small" onClick={() => handleEditClick(img.id, img.name)}>
//                                 <EditIcon fontSize="small" />
//                               </IconButton>
//                             </Box>
//                           </Box>
//                         ))}
//                       </Masonry>
//                     ) : (
//                       <Typography variant="body2" color="text.secondary">
//                         No related images found.
//                       </Typography>
//                     )}
//                   </CardContent>
//                 </Collapse>
//               </Card>
//             </Grid>
//           ))}
//       </Grid>

//       <Dialog open={editDialog.open} onClose={() => setEditDialog({ ...editDialog, open: false })}>
//         <DialogTitle>Edit Image</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             fullWidth
//             label="Image Name"
//             value={editDialog.imageName}
//             onChange={(e) => setEditDialog({ ...editDialog, imageName: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setEditDialog({ ...editDialog, open: false })}>Cancel</Button>
//           <Button
//             onClick={async () => {
//               try {
//                 const formData = new FormData();
//                 formData.append('file', new Blob()); // Empty file for placeholder
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
// src/pages/Faces.tsx
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchFaces, fetchImagesForFace } from '../slices/faceSlice';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Collapse,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from '@mui/material';
import { Masonry } from '@mui/lab';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import axios from 'axios';

export default function Faces() {
  const dispatch = useAppDispatch();
  const { faces, faceImages } = useAppSelector((state) => state.faces);
  const [loadingFaceId, setLoadingFaceId] = useState<number | null>(null);
  const [expandedFaceIds, setExpandedFaceIds] = useState<number[]>([]);
  const [editDialog, setEditDialog] = useState({ open: false, imageId: 0, imageName: '' });

  useEffect(() => {
    dispatch(fetchFaces());
  }, [dispatch]);

  const handleExpand = async (faceId: number) => {
    const isExpanded = expandedFaceIds.includes(faceId);
    if (isExpanded) {
      setExpandedFaceIds(expandedFaceIds.filter((id) => id !== faceId));
      return;
    }
    setExpandedFaceIds([...expandedFaceIds, faceId]);

    if (!faceImages[faceId]) {
      setLoadingFaceId(faceId);
      await dispatch(fetchImagesForFace(faceId));
      setLoadingFaceId(null);
    }
  };

  const handleDeleteImage = async (imageId: number) => {
    try {
      await axios.delete(`/images/${imageId}`);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  const handleEditClick = (id: number, name: string) => {
    setEditDialog({ open: true, imageId: id, imageName: name });
  };

  const handleDownloadAll = (images: any[]) => {
    images.forEach((img) => {
      const link = document.createElement('a');
      link.href = img.image_data;
      link.download = img.image_name;
      link.click();
    });
  };

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Detected Faces
      </Typography>
      <Grid container spacing={3}>
        {Array.isArray(faces) &&
          faces.map((face) => (
            <Grid size={{ xs:12, sm:6, md:4 }} key={face.id}>
              <Card>
                <Box sx={{ width: '100%', aspectRatio: '1 / 1', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    image={face.image_data}
                    alt={`Face ${face.id}`}
                    sx={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  />
                </Box>
                <CardContent>
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => handleExpand(face.id)}
                    disabled={loadingFaceId === face.id}
                    startIcon={
                      expandedFaceIds.includes(face.id) ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )
                    }
                  >
                    {loadingFaceId === face.id ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : expandedFaceIds.includes(face.id) ? (
                      'Hide Related Images'
                    ) : (
                      'Show Related Images')}
                  </Button>
                </CardContent>
                <Collapse in={expandedFaceIds.includes(face.id)}>
                  <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography variant="h6">Related Images</Typography>
                      {faceImages[face.id]?.length > 0 && (
                        <Button
                          size="small"
                          startIcon={<DownloadIcon />}
                          onClick={() => handleDownloadAll(faceImages[face.id])}
                        >
                          Download All
                        </Button>
                      )}
                    </Box>
                    {faceImages[face.id]?.length ? (
                      <Masonry columns={2} spacing={1}>
                        {faceImages[face.id].map((img) => (
                          <Box key={img.id} sx={{ position: 'relative' }}>
                            <img
                              src={img.image_data}
                              alt={img.name}
                              style={{ width: '100%', borderRadius: 8 }}
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
                              <IconButton size="small" onClick={() => handleDeleteImage(img.id)}>
                                <DeleteIcon fontSize="small" />
                              </IconButton>
                              <IconButton size="small" onClick={() => handleEditClick(img.id, img.name)}>
                                <EditIcon fontSize="small" />
                              </IconButton>
                            </Box>
                          </Box>
                        ))}
                      </Masonry>
                    ) : (
                      <Typography variant="body2" color="text.secondary">
                        No related images found.
                      </Typography>
                    )}
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ))}
      </Grid>

      <Dialog open={editDialog.open} onClose={() => setEditDialog({ ...editDialog, open: false })}>
        <DialogTitle>Edit Image</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            label="Image Name"
            value={editDialog.imageName}
            onChange={(e) => setEditDialog({ ...editDialog, imageName: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialog({ ...editDialog, open: false })}>Cancel</Button>
          <Button
            onClick={async () => {
              try {
                const formData = new FormData();
                formData.append('file', new Blob()); // Empty file for placeholder
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
