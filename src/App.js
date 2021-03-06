import { Box } from '@mui/system';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './componenets/About/About';
import Contact from './componenets/Contact/Contact';
import Courses from './componenets/Courses/Courses';
import Enrolled from './componenets/Enrolled/Enrolled';
import Footer from './componenets/Footer/Footer';
import Header from './componenets/Header/Header';
import Home from './componenets/Home/Home';
import NotFound from './componenets/NotFound/NotFound';
import Processing from './componenets/Processing/Processing';




function App() {

  const [courses, setCourses] = useState([]);
  useEffect(() =>{
      fetch('https://sadman95.github.io/course_data/course_json/data.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])

  return (
    <Box className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home courses={courses}></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/courses'>
            <Courses courses={courses}></Courses>
          </Route>
          <Route path='/enrolled/:courseId'>
            <Enrolled></Enrolled>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/processing'>
            <Processing></Processing>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </Box>
  );
}

export default App;
