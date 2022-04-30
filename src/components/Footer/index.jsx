import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const index = () => {
  return (
    <Stack
      direction="column"
      sx={{
        backgroundColor: 'primary.main',
        p: 4,
        color: 'primary.contrastText',
      }}
    >
      <Stack direction="row" justifyContent="center">
        <Typography varaint="body2">
          Made with ❤️ in 🇰🇪 by{' '}
          <strong>
            <Link
              sx={{ textDecoration: 'none' }}
              color="secondary"
              href="https://davidamunga.com"
              target="_blank"
            >
              David Amunga
            </Link>
          </strong>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default index;
