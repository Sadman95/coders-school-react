import { Grid } from "@mui/material";
import React from "react";
import Course from "../Course/Course";


const Courses = (props) => {
    console.log(props)
    const {courses} = props;
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {courses.map(course => (
      <Grid item xs={2} sm={4} md={4} key={course.course_id}>
        <Course course={course}></Course>
      </Grid>
    ))}
  </Grid>
  );
};

export default Courses;
