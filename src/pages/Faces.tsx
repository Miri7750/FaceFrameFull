
// // src/pages/Faces.tsx
// import { useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '../store/hooks';
// import { fetchFaces } from '../slices/faceSlice';
// import { Container, Typography, Grid } from '@mui/material';
// import FaceCard from '../components/faces/FaceCard';

// export default function Faces() {
//   const dispatch = useAppDispatch();
//   const faces = useAppSelector((state) => state.faces.faces);

//   useEffect(() => {
//     dispatch(fetchFaces());
//   }, [dispatch]);

//   return (
//     <Container sx={{ py: 6 }}>
//       <Typography variant="h4" color="primary" gutterBottom>
//         Detected Faces
//       </Typography>
//       <Grid container spacing={3}>
//         {faces.map((face) => (
//           <Grid size={{xs:12, sm:6, md:4}} key={face.id}>
//             <FaceCard face={face} />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchFaces } from '../slices/faceSlice'; // ודא שזה import נכון
import { Container, Typography, Grid } from '@mui/material';
import FaceCard from '../components/faces/FaceCard';

export default function Faces() {
  const dispatch = useAppDispatch();
  const faces = useAppSelector((state) => state.faces.faces);

  useEffect(() => {
    dispatch(fetchFaces());
  }, [dispatch]);

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Detected Faces
      </Typography>
      <Grid container spacing={3}>
        {Array.isArray(faces) &&
          faces.map((face) => (
            <Grid size={{ xs:12, sm:6, md:4 }} key={face.id}>
              <FaceCard face={face} />
            </Grid>
          ))}
          {!Array.isArray(faces) && <div>{faces}</div>}
      </Grid>
    </Container>
  );
}

