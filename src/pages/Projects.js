import React from 'react';
import { Grid } from '@material-ui/core';
import Content from '../components/Content';

const Projects = () => {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid xs={0} sm={2} />
        <Grid xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid xs={0} sm={2} />
      </Grid>
    </Grid>
  );
};

export default Projects;
