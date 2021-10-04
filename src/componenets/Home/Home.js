import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Courses from '../Courses/Courses';

const Home = (props) => {
    const {courses} = props;
    const slicedCourses = courses.slice(0,3);
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Courses courses={slicedCourses}></Courses>
            <Contact></Contact>
        </div>
    );
};

export default Home;