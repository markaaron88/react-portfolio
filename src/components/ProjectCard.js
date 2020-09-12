import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import Typography from '@material-ui/core/Typography';

// import Link from '@material-ui/core/Link';
// import IconButton from '@material-ui/core/IconButton';
// import GitHubIcon from '@material-ui/icons/GitHub';

const ProjectCard = props => {
  const { title, subtitle, description, imgSrc, technologies } = props;

  return (
    <Card>
      <CardHeader
        style={{
          textAlign: 'center',
        }}
        title={title}
        subheader={subtitle}
      />
      <CardMedia style={{ height: '250px' }} image={imgSrc} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
          <br />
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" component="p">
          Technologies:{technologies}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
