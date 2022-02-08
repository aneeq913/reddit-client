import { CardContent, Grid, Paper } from '@mui/material';
import React from 'react';
import './App.css';
import Header from './app/features/Header/Header';
import { styled } from '@mui/material/styles';

import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div>
      <Header />
      <br/>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>

        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>

      </Grid>

      <br/>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="error" gutterBottom>
            This is a card
          </Typography>
        </CardContent>
      </Card>
      <br/>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="error" gutterBottom>
            This is a card
          </Typography>
        </CardContent>
      </Card>
      <br/>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="error" gutterBottom>
            This is a card
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
