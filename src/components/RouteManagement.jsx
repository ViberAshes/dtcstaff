import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

const initialRoutes = [
  { id: 1, name: 'Route 1', start: 'Badarpur Border', end: 'Shashi Chowk / Sector 36/37 Noida', stops: 15 },
  { id: 2, name: 'Route 2', start: 'Chauhan Patti', end: 'Anand Vihar ISBT (Viveka Nand ISBT)', stops: 14 },
  { id: 3, name: 'Route 3', start: 'Bhajanpura', end: '	Noida Sector 37', stops: 12 },
    { id: 4, name: 'Route 4', start: 'Shivaji Stadium', end: ' Mundka', stops: 10 },
];

const RouteManagement = () => {
  const [routes, setRoutes] = useState(initialRoutes);
  const [open, setOpen] = useState(false);
  const [newRoute, setNewRoute] = useState({ name: '', start: '', end: '', stops: '' });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    setNewRoute({ ...newRoute, [e.target.name]: e.target.value });
  };

  const handleAddRoute = () => {
    setRoutes([...routes, { ...newRoute, id: routes.length + 1, stops: parseInt(newRoute.stops) }]);
    setNewRoute({ name: '', start: '', end: '', stops: '' });
    handleClose();
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Route Management
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClickOpen} sx={{ mb: 2 }}>
        Add New Route
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Route Name</TableCell>
              <TableCell>Start Point</TableCell>
              <TableCell>End Point</TableCell>
              <TableCell>Number of Stops</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {routes.map((route) => (
              <TableRow key={route.id}>
                <TableCell>{route.name}</TableCell>
                <TableCell>{route.start}</TableCell>
                <TableCell>{route.end}</TableCell>
                <TableCell>{route.stops}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Route</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Route Name"
            type="text"
            fullWidth
            variant="standard"
            value={newRoute.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="start"
            label="Start Point"
            type="text"
            fullWidth
            variant="standard"
            value={newRoute.start}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="end"
            label="End Point"
            type="text"
            fullWidth
            variant="standard"
            value={newRoute.end}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="stops"
            label="Number of Stops"
            type="number"
            fullWidth
            variant="standard"
            value={newRoute.stops}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddRoute}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RouteManagement;