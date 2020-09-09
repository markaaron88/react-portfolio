import React from 'react';
import { Grid } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import Moses from '../assets/mosesg.gif.sb-fb371311-onbH6e';
import Chris from '../assets/christp.gif.sb-fb371311-mHGnO1';
import Brain from '../assets/brainjs.png';
import Leeway from '../assets/index.png';
import Python from '../assets/python.jpg';
import Java from '../assets/java.jpg';
import Justine from '../assets/justinem.gif';
import Vue from '../assets/vue.png';
import Reactphoto from '../assets/react.png';

const Content = () => {
  return (
    <div>
      <section>
        <div className="space">
          {' '}
          <ProjectCard
            title="Leewayz.com"
            imgSrc={Leeway}
            description="Crated a full stack E-commerce Group Capstone Project to help with solving the Bay Area housing crisis with allowing for rooms to be rented in a safe and ethical manner."
            technologies="&nbsp;Express Web Framework &nbsp; Node.js &nbsp;JavaScript &nbsp; HTML &nbsp;CSS &nbsp; Docker &nbsp; MYSQL DB"
          />
        </div>

        <div className="space">
          <ProjectCard
            title="El Amgio"
            imgSrc={Vue}
            description="Created a Resturant Ordering Service Full stack web application.Implemented Firebase authentication for admin user."
            technologies="&nbsp;Vue Web Framework &nbsp; Vuex Router &nbsp; Firebase"
          />
        </div>
        <div className="space">
          <ProjectCard
            title="Searchable Tv Show Application using an API"
            imgSrc={Reactphoto}
            description="•	Front-end was implemented using the JavaScript framework React.js
            •	Used styled-components and Sass to style front-end.
            •	Built components that display response data from an API."
            technologies="&nbsp;Vue Web Framework &nbsp; Vuex Router &nbsp; Firebase"
          />
        </div>
      </section>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <ProjectCard
            title="course management system (CMS) web applicaton"
            imgSrc={Python}
            description="CST363 Midterm Group Project- Created a course management system (CMS) web applicaton that allows users to log into; based on their user level (student, teacher, administrator).The project is centered around displaying different information based on account access levels."
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <ProjectCard
            title="Brain.js Project"
            imgSrc={Brain}
            description="Used Brain.js, a GPU accelerated library for Neural Networks ,created JSON data with possible texts that could be flagged as “unsafe” , returned unsafe or null depending on what out input was passed to the network."
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ProjectCard
            title="Service Oriented Architecture"
            imgSrc={Java}
            description="Service Oriented Architecture (SOA) design that implement two back end micro services and a front end. Application was created
          using the Java Spring Boot framework. The Web application uses HTTP REST
          and Messaging (RabbitMQ)."
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ProjectCard
            title="Product Display Website"
            imgSrc={Justine}
            description="Created a responsive static website using HTML5, Sass and JavaScript"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ProjectCard
            title="Student Porfolio"
            imgSrc={Moses}
            description="Created a responsive static website using HTML5, Css and JavaScript"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ProjectCard
            title="Lifestyle Porfolio"
            imgSrc={Chris}
            description="Created a responsive static website using HTML, CSS and JavaScript."
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Content;
