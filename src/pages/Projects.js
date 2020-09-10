/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid } from '@material-ui/core';
import Content from '../components/Content';

const Projects = () => {
  return (
    <div className="project-section" id="projects">
      <h1>Some Projects I've created.</h1>
      <Content />
      <Grid />
    </div>
  );
};

export default Projects;
