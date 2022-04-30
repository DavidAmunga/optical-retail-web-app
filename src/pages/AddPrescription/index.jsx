import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import AlertTitle from '@mui/material/AlertTitle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Typography from '@mui/material/Typography';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { grey } from '@mui/material/colors';
import { NumberFormatCustom, numberFormatText } from '../../utils/functions';

const AddPrescription = () => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    address: '',
    date: new Date(),
    frame: '',
    color: '',
    number: '',
    consultationCost: 0,
    frameCost: 0,
    lensesCost: 0,
    serviceCost: 0,
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (form) {
      setTotal(
        form.frameCost +
          form.lensesCost +
          form.serviceCost +
          form.consultationCost,
      );
    }
  }, [form]);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box sx={{ p: 2, background: grey[200] }}>
      <form onSubmit={handleSubmit}>
        <Stack direction="column" spacing={2}>
          <Paper sx={{ p: 2 }}>
            <Typography sx={{ my: 2 }} variant="body1" color="textSecondary">
              Customer Details
            </Typography>
            <Stack sx={{ width: 1 }} spacing={2} direction="column">
              <Stack spacing={2} direction="row">
                <TextField
                  name="name"
                  label="Customer Name"
                  type="text"
                  onChange={handleChange}
                  fullWidth
                  placeholder="Enter Customer Name"
                  variant="filled"
                />
                <TextField
                  name="age"
                  fullWidth
                  label="Enter Age of Customer"
                  type="number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">yrs old</InputAdornment>
                    ),
                  }}
                  onChange={handleChange}
                  placeholder="Enter Age"
                  variant="filled"
                />
              </Stack>
              <Stack direction="row" spacing={2}>
                <TextField
                  name="address"
                  onChange={handleChange}
                  fullWidth
                  label="Enter Address of Customer"
                  type="text"
                  value={form.address}
                  placeholder="Enter Address"
                  variant="filled"
                />
                <DateTimePicker
                  fullWidth
                  label="Date"
                  value={form.date}
                  onChange={(newValue) => setForm({ ...form, date: newValue })}
                  renderInput={(params) => <TextField fullWidth {...params} />}
                />
              </Stack>
            </Stack>
          </Paper>

          <Paper sx={{ p: 2 }}>
            <Typography sx={{ my: 2 }} variant="body1" color="textSecondary">
              Presription
            </Typography>
            <Stack sx={{ width: 1 }} spacing={2} direction="column">
              <Stack direction="row" spacing={2}>
                <TextField
                  name="frame"
                  onChange={handleChange}
                  fullWidth
                  label="Enter Frame"
                  type="text"
                  value={form.frame}
                  placeholder="Enter Frame"
                  variant="filled"
                />
                <TextField
                  name="color"
                  onChange={handleChange}
                  fullWidth
                  label="Enter Color"
                  type="text"
                  value={form.color}
                  placeholder="Enter color"
                  variant="filled"
                />
                <TextField
                  name="number"
                  onChange={handleChange}
                  fullWidth
                  label="Enter Number # of Glasses"
                  type="number"
                  value={form.number}
                  placeholder="Enter Number # of Glasses"
                  variant="filled"
                />
              </Stack>
            </Stack>
          </Paper>

          <Paper sx={{ p: 2 }}>
            <Typography sx={{ my: 2 }} variant="body1" color="textSecondary">
              Cost in KES
            </Typography>
            <Stack sx={{ width: 1 }} spacing={2} direction="column">
              <TextField
                name="consultationCost"
                onChange={handleChange}
                fullWidth
                label="Enter Consultation Cost"
                value={form.consultationCost}
                placeholder="Enter Cost in KES"
                variant="filled"
                InputProps={{
                  inputComponent: NumberFormatCustom,
                  startAdornment: (
                    <InputAdornment position="start">KES</InputAdornment>
                  ),
                }}
              />
              <TextField
                name="frameCost"
                onChange={handleChange}
                fullWidth
                label="Enter Frame Cost"
                value={form.frameCost}
                placeholder="Enter Cost in KES"
                variant="filled"
                InputProps={{
                  inputComponent: NumberFormatCustom,
                  startAdornment: (
                    <InputAdornment position="start">KES</InputAdornment>
                  ),
                }}
              />
              <TextField
                name="lenseCost"
                onChange={handleChange}
                fullWidth
                label="Enter Lense Cost"
                value={form.lenseCost}
                placeholder="Enter Cost in KES"
                variant="filled"
                InputProps={{
                  inputComponent: NumberFormatCustom,
                  startAdornment: (
                    <InputAdornment position="start">KES</InputAdornment>
                  ),
                }}
              />
              <TextField
                name="serviceCost"
                onChange={handleChange}
                fullWidth
                label="Enter Service Cost"
                value={form.serviceCost}
                placeholder="Enter Service Cost in KES"
                variant="filled"
                InputProps={{
                  inputComponent: NumberFormatCustom,
                  startAdornment: (
                    <InputAdornment position="start">KES</InputAdornment>
                  ),
                }}
              />
              <Alert sx={{ width: 1 }} severity="info">
                <AlertTitle>Info</AlertTitle>
                <p>
                  {' '}
                  Total Cost is{' '}
                  <strong>{numberFormatText(total, 'KES')}</strong>
                </p>
              </Alert>
            </Stack>
          </Paper>

          <Button
            type="submit"
            size="large"
            endIcon={<AddBoxIcon />}
            variant="contained"
          >
            ADD
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default AddPrescription;
