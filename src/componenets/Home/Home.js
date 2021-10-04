import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div>
            <h1>This is home</h1>
            <Banner></Banner>
            <About></About>
            <Courses></Courses>
            <Contact></Contact>
        </div>
    );
};

export default Home;