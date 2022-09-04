import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Menu from './components/Menu';
import Contacts from './pages/Contacts';
import Error from './pages/Error';
import Projects from './pages/Projects';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/">
      <Menu/>
      <Homepage />
      </Route>
      <Route path="/projects">
      <Menu/>
        <Projects/>
      </Route>
      <Route path="/contact-me">
      <Menu/>
        <Contacts  />
      </Route>
      <Route path="*">
        <Error />
      </Route> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
