import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function ColorChips(props) {
  return (
    <Stack spacing={1} alignItems="center">
      <Stack direction="row" spacing={1}>
	  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ID #{props.id}
        </Typography>
        <Chip label={props.severity} color="success" />
      </Stack>
      {/* <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" variant="outlined" />
        <Chip label="success" color="success" variant="outlined" />
      </Stack> */}
    </Stack>
  );
}
