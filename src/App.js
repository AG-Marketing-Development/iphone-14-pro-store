import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Landing from './Landing/Pages/Landing';
import MainNavigation from './Shared/Navigation/MainNavigation';
import MainFooter from './Shared/Footer/MainFooter';

const App = () => {


  return (

    <Router>

        <MainNavigation />

        <main>
            <Switch>

                <Route path='/' exact>
                    <Landing />
                </Route>

                <Redirect to='/' />

            </Switch>
        </main>

        <MainFooter />

    </Router>

  );
};

export default App;
