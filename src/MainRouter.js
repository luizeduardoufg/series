import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Search from './pages/Search';
import About from './pages/About';

const MainRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/search/' component={Search} />
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default MainRouter;