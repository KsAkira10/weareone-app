import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';

const Pages: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={() => (<h1>404 Not Found</h1>)} />
      </Switch>
    </BrowserRouter>
  );
}

export default Pages;
