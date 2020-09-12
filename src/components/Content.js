import React from 'react';
import { Grid } from '@material-ui/core';
import { MarkGithubIcon } from '@primer/octicons-react';
import { FaDesktop } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import './projectCard.css';
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
    <Grid container spacing={4}>
      <Grid item xs={12} sm={4}>
        <ProjectCard
          title="Leewayz.com"
          imgSrc={Leeway}
          description="Created a full stack E-commerce Group Capstone Project to help with solving the Bay Area housing crisis with allowing for rooms to be rented in a safe and ethical manner."
          technologies="&nbsp;Express Web Framework &nbsp; Node.js &nbsp;JavaScript &nbsp; HTML &nbsp;CSS &nbsp; Docker &nbsp; MYSQL DB"
        />
        <div className="projectBtn">
          <a href="https://github.com/markaaron88">
            <MarkGithubIcon size={64} />
          </a>
          <a href="https://github.com/markaaron88">
            <FaDesktop size={64} />
          </a>
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <ProjectCard
          title="El Amgio"
          imgSrc={Vue}
          description="Created a Restaurant Ordering Service Full stack web application.Implemented Firebase authentication for admin user."
          technologies="&nbsp;Vue Web Framework &nbsp; Vuex Router &nbsp; CSS &nbsp; Firebase"
        />
        <div className="projectBtn">
          <a href="https://github.com/markaaron88/Vue-project">
            <MarkGithubIcon size={64} />
          </a>
          <a href="https://elamigorest.netlify.app/">
            <FaDesktop size={64} />
          </a>
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <ProjectCard
          title="Searchable Tv Show Application using an API"
          imgSrc={Reactphoto}
          description="Created a web application to search for shows and actors using an external API."
          technologies="&nbsp;React Web Framework &nbsp; React Router &nbsp; Sass &nbsp; API"
        />
        <div className="projectBtn">
          <a href="https://github.com/markaaron88/react-api">
            <MarkGithubIcon size={64} />
          </a>
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <ProjectCard
          title="Course management system (CMS) web applicaton"
          imgSrc={Python}
          description="CST363 Midterm Group Project- Created a course management system (CMS) web applicaton that allows users to log into; based on their user level (student, teacher, administrator).The project is centered around displaying different information based on account access levels."
          technologies="&nbsp;Python &nbsp; MYSQL DB &nbsp; HTML &nbsp; CSS"
        />
        <div className="projectBtn">
          <a href="https://github.com/markaaron88/cmslogin">
            <MarkGithubIcon size={64} />
          </a>
        </div>
      </Grid>

      <Grid item xs={12} sm={4}>
        <ProjectCard
          title="Brain.js Project"
          imgSrc={Brain}
          description="Used Brain.js, a GPU accelerated library for Neural Networks ,created JSON data with possible texts that could be flagged as “unsafe” , returned unsafe or null depending on what out input was passed to the network."
          technologies="&nbsp;JavaScript &nbsp; Brain.js"
        />
        <div className="projectBtn">
          <a href="https://github.com/markaaron88/Brainjs_words">
            <MarkGithubIcon size={64} />
          </a>
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <ProjectCard
          title="Service Oriented Architecture"
          imgSrc={Java}
          description="Service Oriented Architecture (SOA) design that implement two back end micro services and a front end. Application was created
          using the Java Spring Boot framework. The Web application uses HTTP REST
          and Messaging (RabbitMQ)."
          technologies="&nbsp;Java &nbsp; Spring Boot framework &nbsp; MYSQL DB &nbsp; HTML &nbsp; CSS"
        />
        <div className="projectBtn">
          <a href="https://github.com/evilmurries/CST438_order_service">
            <MarkGithubIcon size={64} />
          </a>
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <ProjectCard
          title="Product Display Website"
          imgSrc={Justine}
          description="Created a responsive static website."
          technologies="&nbsp;HTML5&nbsp;CSS&nbsp;JavaScript"
        />
        <div className="projectBtn">
          <a href="https://justinespapercraft.netlify.app/">
            <FaDesktop size={64} />
          </a>
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <ProjectCard
          title="Student Porfolio"
          imgSrc={Moses}
          description="Created a responsive static website."
          technologies="&nbsp;HTML5 &nbsp;SCSS &nbsp;JavaScript"
        />
        <div className="projectBtn">
          <a href="https://mosesmgk.netlify.app/">
            <FaDesktop size={64} />
          </a>
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <ProjectCard
          title="Lifestyle Porfolio"
          imgSrc={Chris}
          description="Created a responsive static website."
          technologies="&nbsp;HTML&nbsp;CSS"
        />
        <div className="projectBtn">
          <a href="https://chrispsite.netlify.app/">
            <FaDesktop size={64} />
          </a>
        </div>
      </Grid>
    </Grid>
    // </div>
  );
};

export default Content;
