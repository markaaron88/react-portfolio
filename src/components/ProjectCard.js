import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import GitHubIcon from '@material-ui/icons/GitHub';

// const useStyles = makeStyles({
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

const ProjectCard = props => {
  const { title, subtitle, description, imgSrc, technologies } = props;

  return (
    <Card>
      <CardHeader title={title} subheader={subtitle} />
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
      <CardActions>
        <Button size="small">Live</Button>
        <Button size="small">Github</Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
