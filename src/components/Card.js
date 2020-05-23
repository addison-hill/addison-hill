import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "../images/profile-pic2.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  media: {
    height: 300,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Avatar}
          alt="profile picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Addison Hill
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Web Developer
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <LinkedInIcon />
        <GitHubIcon />
      </CardActions>
    </Card>
  );
}
