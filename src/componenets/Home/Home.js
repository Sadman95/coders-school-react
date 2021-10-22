import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Courses from '../Courses/Courses';
import MapBox from '../Map/MapBox/MapBox';


const Home = (props) => {
    const {courses} = props;
    const slicedCourses = courses.slice(0,4);
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Courses courses={slicedCourses}></Courses>
            <Contact></Contact>
            <MapBox></MapBox>
        </div>
    );
};

export default Home;