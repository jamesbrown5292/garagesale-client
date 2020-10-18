import { Grid } from '@material-ui/core';
import React from 'react';
import SaleCard from './SaleCard';

const fakeData = [
  { title: 'title1', location: 'location', description: 'description' },
  { title: 'title2', location: 'location', description: 'description' },
  { title: 'title3', location: 'location', description: 'description' },
  { title: 'title4', location: 'location', description: 'description' },
  { title: 'title5', location: 'location', description: 'description' }
];

const SaleCardList = () => (
  <>
    <Grid container spacing={3} wrap="wrap" component="div">
      {fakeData.map(data => (
        <Grid lg={3} item key={data.title}>
          <SaleCard {...data} />
        </Grid>
      ))}
    </Grid>
  </>
);

export default SaleCardList;
