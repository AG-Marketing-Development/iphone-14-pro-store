import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import Landing from './Landing/Pages/Landing';
import CreditCardForm from './Landing/Pages/form';
import MainNavigation from './Shared/Navigation/MainNavigation';
import MainFooter from './Shared/Footer/MainFooter';

const App = () => {
  
  return (

    <Router>


        <MainNavigation />

        <main>
            <Switch>

                <Route path='/' exact>
                    <Landing/>
                </Route>
                <Route path='/checkout/:string' exact>
                   <CreditCardForm/>
                </Route>

                <Redirect to='/' />

            </Switch>
        </main>

        <MainFooter />

    </Router>

  );
};

export default App;
