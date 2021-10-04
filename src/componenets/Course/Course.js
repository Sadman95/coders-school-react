import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Course = (props) => {
  const { course_id, img_url, course_title, course_fee, description } = props.course;



  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 1,textAlign: 'left'}}>
      <CardMedia
        component="img"
        height="200"
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
        <Typography variant="h3" component="div">
          ${course_fee}
        </Typography>
      </CardContent>
      <CardActions>
        <Link style={{textDecoration:'none'}} to={`/enrolled/${course_id}`}>
        <Button variant='contained' size="medium">Enroll Now</Button></Link>
      </CardActions>
    </Card>
  );
};

export default Course;
