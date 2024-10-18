import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const passengerData = [
  { name: 'Mon', passengers: 40000 },
  { name: 'Tue', passengers: 30000 },
  { name: 'Wed', passengers: 20000 },
  { name: 'Thu', passengers: 27800 },
  { name: 'Fri', passengers: 18900 },
  { name: 'Sat', passengers: 23900 },
  { name: 'Sun', passengers: 34900 },
];

const onTimePerformanceData = [
  { name: 'Week 1', performance: 85 },
  { name: 'Week 2', performance: 83 },
  { name: 'Week 3', performance: 87 },
  { name: 'Week 4', performance: 89 },
];

const Analytics = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Analytics
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Daily Passenger Count
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={passengerData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="passengers" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              On-Time Performance
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={onTimePerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="performance" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Analytics;