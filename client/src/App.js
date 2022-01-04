import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Achivements from './components/Achivements';
import Profile from './components/Profile';


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
