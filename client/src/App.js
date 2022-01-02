import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import NavBar from './components/navbar';
import Home from './components/home';
import Achivements from './components/achivements';
import Profile from './components/profile';


// CONTEXT
import { FeedbackProvider } from './context/FeedbackContext'
const App = () => {
  return (
    <FeedbackProvider>
    <div>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <AuthenticatedRoute path="/profile" component={Profile} />
          <AuthenticatedRoute path="/achivements" component={Achivements} />
        </Switch>
      </BrowserRouter>
    </div>
    </FeedbackProvider>
  );
};

export default App;
