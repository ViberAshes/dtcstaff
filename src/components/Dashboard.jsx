import React, { useState, useEffect } from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DirectionsBus, Route, AccessTime, Group } from '@mui/icons-material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  height: 140,
  justifyContent: 'space-between',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 60,
  height: 60,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

const Dashboard = () => {
  const [activeAdmins, setActiveAdmins] = useState(0);
  const stats = [
    { title: 'Total Routes', value: '259', icon: <Route fontSize="large" /> },
    { title: 'Active Buses', value: '3,200', icon: <DirectionsBus fontSize="large" /> },
    { title: 'On-Time Performance', value: '81%', icon: <AccessTime fontSize="large" /> },
    { title: 'Daily Ridership', value: '16,50,000', icon: <Group fontSize="large" /> },
    { title: 'Active Admins', value: '17', icon: <Group fontSize="large" /> },
  ];

  useEffect(() => {
    // Generate a random number for active admins between 1 and 100
    const getActiveAdmins = () => {
        const randomCount = Math.floor(Math.random() * 16) + 1; // Random number between 5 and 20
      setActiveAdmins(randomCount);
    };
    
    getActiveAdmins();
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StyledPaper elevation={3}>
              <IconWrapper>
                {stat.icon}
              </IconWrapper>
              <Box>
                <Typography variant="h6" color="primary">
                  {stat.title}
                </Typography>
                <Typography variant="h4">
                  {stat.value}
                </Typography>
              </Box>
            </StyledPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;