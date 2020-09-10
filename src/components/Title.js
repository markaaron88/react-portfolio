import React from 'react';
import Buttons from './Buttons';

const Title = () => {
  return (
    <div className="Title">
      <h1>
        Hello, my name is <em>Mark Mariscal</em>. I am a recent computer science
        graduate of California State University Monterey Bay. I am a proud
        member of the Society of Hispanic Professional Engineers and aspire to
        work in the tech industry.I have lived in the Bay Area my entire life
        and love all things technologies and creating web applications.
        <Buttons title="GitHub" />
        <Buttons title="LinkedIn" />
      </h1>
    </div>
  );
};

export default Title;
