import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router";

const Course = (props) => {
  const { img_url, course_title, description } = props.course;

  const history = useHistory();
  const handleEnrolled = () =>{
      history.push('/enrolled');
  }

  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 1,textAlign: 'left'}}>
      <CardMedia
        component="img"
        height="140"
        image={img_url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {course_title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleEnrolled} variant='contained' size="medium">Enroll Now</Button>
      </CardActions>
    </Card>
  );
};

export default Course;
