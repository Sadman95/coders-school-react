import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Course from "../Course/Course";


const Courses = (props) => {
    const {courses} = props;

  return (
    <Box>
        <h1 className='spanned'>Courses</h1>
        <Grid sx={{margin: '32px 0',padding: 3}} container spacing={{ xs: 2, md: 18, lg:10 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {courses.map(course => (
            <Grid item xs={2} sm={4} md={4} lg={3} key={course.course_id}>
                <Course course={course}></Course>
            </Grid>
            ))}
        </Grid>
        <Link style={{textDecoration: 'none'}} to='/courses'>
        {
            courses.length === 4?<Button variant='outlined'>More</Button>:''
        }
        </Link>
    </Box>
  );
};

export default Courses;
