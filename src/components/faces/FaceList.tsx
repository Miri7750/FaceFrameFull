import { Grid } from '@mui/material';
import FaceCard from './FaceCard';
import { FaceData } from '../../types/types';

interface Props {
  faces: FaceData[];
}

export default function FaceList({ faces }: Props) {
  return (
    <Grid container spacing={3}>
      {faces.map((face) => (
        <Grid size={{xs:12, sm:6, md:4}} key={face.id}>
          <FaceCard face={face} />
        </Grid>
      ))}
    </Grid>
  );
}
