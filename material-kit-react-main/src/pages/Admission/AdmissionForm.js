import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Container, Typography } from '@mui/material';
import './AdmissionForm.css';

import { Batch, Medium, names, FeesPackage } from './FormData';

// --------------------(select menu CSS)-----------------------------------------
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
// ------------------()-------------------------------------------

const AdmissionForm = () => {
  // ====================(Courses select)=========================================

  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };
  // ====================(Fees Package popUp)=========================================

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back
      </Typography>
      <Grid container spacing={3}>
        {/* =======================(1)================================================ */}
        <Grid item xs={12} md={6} lg={4}>
          <div id="form">
            <h5>1. Student Details</h5>
            <TextField required id="outlined-required" label="Student Name" className="w-100 " />
            <TextField required select label="Batch" defaultValue="Morning Batch" className="w-100  mt-4">
              {Batch.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField required select label="Medium" defaultValue="English" className="w-100  mt-4">
              {Medium.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField label="Start date" type="date" defaultValue="2017-05-24" className="w-100  mt-4" />
            <TextField label="Expected date" type="date" defaultValue="2017-05-24" className="w-100  mt-4" />
          </div>
        </Grid>
        {/* ========================(2)=============================================== */}
        <Grid item xs={12} md={6} lg={4}>
          <div id="form">
            <h5>2. Course Details</h5>
            <button className="btn FeesPackage  justify-content-center w-50" onClick={handleClickOpen}>
              Fees Package
            </button>
            <Dialog open={open} onClose={handleClose} className="Dialog">
              <DialogTitle>Fees Package</DialogTitle>
              <DialogContent>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus necessitatibus voluptatibus
                  assumenda dolorem commodi minima ipsam voluptates quaerat quia deleniti!
                </p>
                <table>
                  <tr>
                    <th>Course</th>
                    <th>fees</th>
                  </tr>
                  {FeesPackage.map((e) => {
                    return (
                      <tr>
                        <td>{e.Course}</td>
                        <td>{e.fees}</td>
                      </tr>
                    );
                  })}
                </table>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
              </DialogActions>
            </Dialog>
            {/* -------------------- */}
            <InputLabel id="leble" className="w-100 ">
              Courses
            </InputLabel>
            <Select
              className="w-100 "
              labelId="leble"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </div>
        </Grid>
        {/* ======================================================================= */}
        <Grid item xs={12} md={6} lg={4}>
          <div id="form">
            <TextField required id="outlined-required" label="Student Name" className="w-100 " />
            <TextField required select label="Batch" defaultValue="Morning Batch" className="w-100  mt-4">
              {Batch.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField required select label="Medium" defaultValue="English" className="w-100  mt-4">
              {Medium.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField label="Start date" type="date" defaultValue="2017-05-24" className="w-100  mt-4" />
            <TextField label="End date" type="date" defaultValue="2017-05-24" className="w-100  mt-4" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdmissionForm;

//   <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mb-5"> */
