
// // // pages/FacesPage.tsx
// // import { useEffect } from "react";
// // import {
// //   fetchFaces,

// // } from "../slices/faceSlice";
// // import fetchImagesForFace from "../slices/faceSlice"
// // import { useAppDispatch, useAppSelector } from "../store/hooks";
// // import { ImageData } from "../types/types";
// // import {
// //   Box,
// //   Typography,
// //   Grid,
// //   Card,
// //   CardMedia,
// //   CardContent,
// //   Collapse,
// // } from "@mui/material";

// // export default function FacesPage() {
// //   const dispatch = useAppDispatch();
// //   const { faces, faceImages } = useAppSelector((state) => state.faces);

// //   useEffect(() => {
// //     dispatch(fetchFaces());
// //   }, [dispatch]);

// //   const handleExpand = (faceId: number) => {
// //     if (!faceImages[faceId]) {
// //       dispatch(fetchImagesForFace(faceId));
// //     }
// //   };

// //   return (
// //     <Box>
// //       <Typography variant="h4" mb={2} color="#00e0ff">
// //         Faces
// //       </Typography>
// //       <Grid container spacing={2}>
// //         {faces.map((face) => (
// //           <Grid size={{xs:12, sm:6, md:4}} key={face.id}>
// //             <Card>
// //               <CardMedia
// //                 component="img"
// //                 image={face.image_data}
// //                 alt={`Face ${face.id}`}
// //                 height="200"
// //                 onClick={() => handleExpand(face.id)}
// //                 sx={{ cursor: "pointer" }}
// //               />
// //               <Collapse in={!!faceImages[face.id]}>  
// //                 <CardContent>
// //                   <Typography variant="h6">Related Images</Typography>
// //                   <Grid container spacing={1}>
// //                     {faceImages[face.id]?.map((img) => (
// //                       <Grid  size={6} key={img.id}>
// //                         <CardMedia
// //                           component="img"
// //                           image={img.image_data}
// //                           alt={img.name}
// //                           height="100"
// //                         />
// //                       </Grid>
// //                     ))}
// //                   </Grid>
// //                 </CardContent>
// //               </Collapse>
// //             </Card>
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Box>
// //   );
// // }
// import { useEffect } from "react";
// import { fetchFaces, fetchImagesForFace } from "../slices/faceSlice";
// import { useAppDispatch, useAppSelector } from "../store/hooks";
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Collapse,
// } from "@mui/material";

// export default function FacesPage() {
//   const dispatch = useAppDispatch();
//   const { faces, faceImages } = useAppSelector((state) => state.faces);

//   useEffect(() => {
//     dispatch(fetchFaces());
//   }, [dispatch]);

//   const handleExpand = (faceId: number) => {
//     if (!faceImages[faceId]) {
//       dispatch(fetchImagesForFace(faceId));
//     }
//   };

//   return (
//     <Box>
//       <Typography variant="h4" mb={2} color="#00e0ff">
//         Faces
//       </Typography>
//       <Grid container spacing={2}>
//         {faces.map((face) => (
//           <Grid size={{xs:12, sm:6, md:4}}key={face.id}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 image={face.image_data}
//                 alt={`Face ${face.id}`}
//                 height="200"
//                 onClick={() => handleExpand(face.id)}
//                 sx={{ cursor: "pointer" }}
//               />
//               <Collapse in={!!faceImages[face.id]}>
//                 <CardContent>
//                   <Typography variant="h6">Related Images</Typography>
//                   <Grid container spacing={1}>
//                     {faceImages[face.id]?.map((img) => (
//                       <Grid size={6} key={img.id}>
//                         <CardMedia
//                           component="img"
//                           image={img.image_data}
//                           alt={img.name}
//                           height="100"
//                         />
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </CardContent>
//               </Collapse>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }
