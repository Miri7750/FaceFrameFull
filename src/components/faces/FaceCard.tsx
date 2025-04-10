
// // src/components/faces/FaceCard.tsx
// import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';
// import { FaceData } from '../../types/types';

// interface Props {
//   face: FaceData;
// }

// export default function FaceCard({ face }: Props) {
//   return (
//     <Card>
//       <CardMedia
//         component="img"
//         height="200"
//         image={face.image_data}
//         alt={`Face ${face.id}`}
//       />
//       <CardActions>
//         <Button
//         //   href={image.image_data}
//         //   download={image.name}
//           variant="contained"
//           fullWidth
//         >
//           Download
//         </Button>
//       </CardActions>
//       <CardContent>
//         <Typography>ID: {face.id}</Typography>
//       </CardContent>
//     </Card>
//   );
// }

// src/components/faces/FaceCard.tsx
import { Card, CardMedia, CardContent, Typography, IconButton, Box } from '@mui/material';
import { FaceData } from '../../types/types';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';

interface Props {
  face: FaceData;
  onDelete?: (id: number) => void;
  onDownload?: (face: FaceData) => void;
}

export default function FaceCard({ face, onDelete, onDownload }: Props) {
  return (
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
        height="200"
        image={face.image_data}
        alt={`Face ${face.id}`}
        sx={{ objectFit: 'contain', backgroundColor: '#101624' }}
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
        {onDelete && (
          <IconButton
            size="small"
            onClick={() => onDelete(face.id)}
            sx={{
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.5)',
              '&:hover': { backgroundColor: 'rgba(255,0,0,0.6)' },
            }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        )}
      </Box>
    </Card>
  );
}
