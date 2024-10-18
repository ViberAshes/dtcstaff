import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const initialSchedules = [
  { id: 1, route: 'Route 1', departureTime: '08:00', arrivalTime: '09:30', driver: 'Aaryan Raj', bus: 'DL1PC1234' },
  { id: 2, route: 'Route 2', departureTime: '09:00', arrivalTime: '10:45', driver: 'Sashwat Kumar', bus: 'DL1PC5678' },
  { id: 3, route: 'Route 3', departureTime: '10:00', arrivalTime: '11:15', driver: 'Ashish Satpathy', bus: 'DL1PC9012' },
    { id: 4, route: 'Route 4', departureTime: '11:00', arrivalTime: '11:45', driver: 'Dhananjay Kumar', bus: 'DL1PC9012' },
];

const Scheduling = () => {
  const [schedules, setSchedules] = useState(initialSchedules);
  const [selectedRoute, setSelectedRoute] = useState('');

  const handleRouteChange = (event) => {
    setSelectedRoute(event.target.value);
  };

  const filteredSchedules = selectedRoute
    ? schedules.filter((schedule) => schedule.route === selectedRoute)
    : schedules;

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Bus Scheduling
      </Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="route-select-label">Route</InputLabel>
        <Select
          labelId="route-select-label"
          id="route-select"
          value={selectedRoute}
          label="Route"
          onChange={handleRouteChange}
        >
          <MenuItem value="">
            <em>All Routes</em>
          </MenuItem>
          <MenuItem value="Route 1">Route 1</MenuItem>
          <MenuItem value="Route 2">Route 2</MenuItem>
          <MenuItem value="Route 3">Route 3</MenuItem>
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Route</TableCell>
              <TableCell>Departure Time</TableCell>
              <TableCell>Arrival Time</TableCell>
              <TableCell>Driver</TableCell>
              <TableCell>Bus Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSchedules.map((schedule) => (
              <TableRow key={schedule.id}>
                <TableCell>{schedule.route}</TableCell>
                <TableCell>{schedule.departureTime}</TableCell>
                <TableCell>{schedule.arrivalTime}</TableCell>
                <TableCell>{schedule.driver}</TableCell>
                <TableCell>{schedule.bus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Scheduling;