import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const [page, setPage] = React.useState('Optical Retail Pos');
  useEffect(() => {
    if (location) {
      const { pathname } = location;
      if (pathname.includes('add')) {
        setPage('Add Prescription');
      } else {
        setPage('Prescriptions');
      }
    }
  }, [location]);
  return (
    <Box sx={{ flexGrow: 1, m: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <Stack
            direction="row"
            sx={{ width: 1, textDecoration: 'none', color: 'inherit' }}
            component={Link}
            to="/"
          >
            <img
              src="/icon-192.png"
              width="32"
              height="32"
              alt="Optical Retail System"
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, ml: 2 }}
            >
              {'Optical Retail System | ' + page}
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
