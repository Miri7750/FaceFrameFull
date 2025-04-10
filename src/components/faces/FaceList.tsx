// // src/components/faces/FaceList.tsx
// import { Grid } from '@mui/material';
// import FaceCard from './FaceCard';
// import { FaceData } from '../../types/types';

// interface Props {
//   faces: FaceData[];
//   onDownload?: (face: FaceData) => void;
//   onDelete?: (id: number) => void;
//   onClick?: (faceId: number) => void;
// }

// export default function FaceList({ faces, onDownload, onDelete, onClick }: Props) {
//   return (
//     <Grid container spacing={3}>
//       {faces.map((face) => (
//         <Grid size={{ xs:12, sm:6, md:4 }} key={face.id}>
//           <FaceCard
//             face={face}
//             onDownload={onDownload}
//             onDelete={onDelete}
//           />
//         </Grid>
//       ))}
//     </Grid>
//   );
// }


// src/components/faces/FaceList.tsx
import { Grid, Card, CardMedia, CardContent, Typography, IconButton, Collapse, Box } from '@mui/material';
import { FaceData, ImageData } from '../../types/types';
import DownloadIcon from '@mui/icons-material/Download';
import { useState } from 'react';

interface Props {
  faces: FaceData[];
  faceImages?: Record<number, ImageData[]>;
  onDownload?: (face: FaceData) => void;
  onExpand?: (faceId: number) => void;
}

export default function FaceList({ faces, faceImages = {}, onDownload, onExpand }: Props) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleExpand = (faceId: number) => {
    const isExpanded = expanded === faceId;
    setExpanded(isExpanded ? null : faceId);
    if (!faceImages[faceId] && onExpand && !isExpanded) {
      onExpand(faceId);
    }
  };

  return (
    <Grid container spacing={3}>
      {faces.map((face) => (
        <Grid size={{ xs:12, sm:6, md:4 }} key={face.id}>
          <Card
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
              height="240"
              image={face.image_data}
              alt={`Face ${face.id}`}
              sx={{ objectFit: 'contain', backgroundColor: '#101624', cursor: 'pointer' }}
              onClick={() => handleExpand(face.id)}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Face ID: {face.id}
              </Typography>
            </CardContent>
            <Box
              sx={{
                position: 'absolute',
                top: 4,
                right: 4,
                display: 'flex',
                gap: 1,
              }}
            >
              {onDownload && (
                <IconButton
                  size="small"
                  onClick={() => onDownload(face)}
                  sx={{
                    color: 'white',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    '&:hover': { backgroundColor: 'rgba(0,229,255,0.7)' },
                  }}
                >
                  <DownloadIcon fontSize="small" />
                </IconButton>
              )}
            </Box>

            <Collapse in={expanded === face.id} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="h6">Related Images</Typography>
                <Grid container spacing={1}>
                  {faceImages[face.id]?.map((img) => (
                    <Grid  size={6} key={img.id}>
                      <CardMedia
                        component="img"
                        image={img.image_data}
                        alt={img.name}
                        height="100"
                        sx={{ objectFit: 'cover' }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
