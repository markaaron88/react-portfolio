import React from 'react';
import Buttons from './Buttons';

const Title = () => {
  return (
    <div className="Title">
      <h1>
        Hello, my name is <em>Mark Mariscal</em>. I am recent graduate of
        California State University Monterey Bay.I majored in Computer Science
        and web development is my passion.
        <Buttons title="GitHub" />
        <Buttons title="LinkedIn" />
      </h1>
    </div>
  );
};

export default Title;
