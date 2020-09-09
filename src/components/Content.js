import React from 'react';
import { Grid } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import Coding from '../assets/coding.jpg';

const Content = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={4}>
        <ProjectCard
          title="Leewayz"
          subtitle="Capstone Project"
          imgSrc={Coding}
        />
      </Grid>
    </Grid>
  );
};

export default Content;
