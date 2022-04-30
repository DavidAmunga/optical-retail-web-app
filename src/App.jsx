import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppContext from './context/AppContext';
import { Routes, Route, Link } from 'react-router-dom';
import PrescriptionsList from './pages/PrescriptionList';
import AddPrescription from './pages/AddPrescription';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
      light: '#484848',
      dark: '#000016',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#F4A00B',
      light: '#ffd14c',
      dark: '#bc7100',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  const [data, setData] = useState({
    text: '',
    type: '2D',
    size: null,
    lineColor: '#000000',
    background: '#FFFFFF',
    displayValue: true,
    margin: 10,
    font: 'Inter',
    items: [],
    // QR Settings:
    qrSettings: {
      errorCorrectionLevel: 'H',
      size: 256,
      backgroundColor: '#FFFFFF',
      foregroundColor: '#000000',
    },
    // Barcode Settings
    barcodeSettings: {
      codeType: 'CODE128',
      barWidth: 2,
      barHeight: 100,
      lineColor: '#000000',
      background: '#FFFFFF',
      showText: true,
      textAlign: 'center',
      font: 'monospace',
      fontOptions: 'bold',
      fontSize: 20,
      textMargin: 0,
    },
    auto: {
      count: 50,
      start: 1,
      end: 100,
      increment: 1,
      prefix: '',
      suffix: '',
      padWithZeros: true,
    },
    random: {
      length: 8,
      count: 50,
    },
    download: {
      type: 'png',
    },
  });
  const value = { data, setData };
  return (
    <AppContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          <Box>
            <Stack direction="column">
              <Navbar />
              <Routes>
                <Route path="/" element={<PrescriptionsList />} />
                <Route path="/add" element={<AddPrescription />} />
              </Routes>
              <Footer />
            </Stack>
          </Box>
        </LocalizationProvider>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
