import React from 'react';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const About = () => {
  const theme = useTheme();

  return (
    <Stack sx={{ p: 2, height: '80vh' }} direction="column">
      <Stack direction="column" spacing={2}>
        <Typography variant="h5">About</Typography>
        <Stack direction="column">
          <Typography
            variant="h6"
            sx={{
              p: 2,
              background: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            }}
          >
            Why this Tool ?
          </Typography>
          <Paper sx={{ p: 2 }}>
            There are tons of QRCode/Barcode generators around the Internet that
            do the same thing. However sometimes you need to make multiple ones
            for your project/event etc which forces you to generate each of them
            one by one. Well you'll definitely find this helpful to provide a
            simple free Bulk QR/Barcode generating experience with a few clicks.
          </Paper>
        </Stack>
      </Stack>
      <Typography></Typography>
    </Stack>
  );
};

export default About;
