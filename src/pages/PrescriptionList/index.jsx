import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MUIDataTable from 'mui-datatables';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { numberFormatText } from '../../utils/functions';
import { format } from 'date-fns';
import { grey } from '@mui/material/colors';
const PrescriptionsList = () => {
  const navigate = useNavigate();
  const columns = [
    {
      name: 'name',
      label: 'Customer Name',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'phoneNumber',
      label: 'Phone Number',
      options: {
        filter: true,
        sort: true,
      },
    },

    {
      name: 'total',
      label: 'Total(KES)',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'date',
      label: 'Date Set',
      options: {
        filter: true,
        sort: true,
        customBodyRender: function renderCreatedAt(
          value,
          tableMeta,
          updateValue,
        ) {
          return (
            <Typography variant="body1">
              {format(value, 'do MMM yyyy p')}
            </Typography>
          );
        },
      },
    },
  ];

  const data = [
    {
      name: 'Joe James',
      phoneNumber: '0728074074',
      date: new Date(),
      total: numberFormatText(3000, ''),
    },
    {
      name: 'John Walsh',
      phoneNumber: '0728074074',
      date: new Date(),
      total: numberFormatText(1200, ''),
    },
    {
      name: 'Bob Herm',
      phoneNumber: '0728074074',
      date: new Date(),
      total: numberFormatText(4000, ''),
    },
    {
      name: 'James Houston',
      phoneNumber: '0728074074',
      date: new Date(),
      total: numberFormatText(800, ''),
    },
  ];

  const options = {
    filterType: 'dropdown',
    rowHover: true,
    selectableRows: 'none',
    rowsPerPageOptions: [5, 10, 20, 30, 50, 100],
    onRowClick: (rowData, rowMeta) => {
      navigate(`/admin/categories/detail/${rowData[0]}`);
    },
  };
  return (
    <Box sx={{ p: 2, background: grey[200] }}>
      <Stack direction="column" sx={{ p: 2 }} spacing={2}>
        <div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/add"
            endIcon={<AddBoxIcon />}
          >
            Add Prescription
          </Button>
        </div>

        <MUIDataTable data={data} columns={columns} options={options} />
      </Stack>
    </Box>
  );
};

export default PrescriptionsList;
