import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './componenets/About/About';
import Contact from './componenets/Contact/Contact';
import Courses from './componenets/Courses/Courses';
import Footer from './componenets/Footer/Footer';
import Header from './componenets/Header/Header';
import Home from './componenets/Home/Home';
import NotFound from './componenets/NotFound/NotFound';
import Processing from './componenets/Processing/Processing';
import Trainers from './componenets/Trainers/Trainers';



function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/courses'>
            <Courses></Courses>
          </Route>
          <Route path='/trainers'>
            <Trainers></Trainers>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route to='/processing'>
            <Processing></Processing>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
