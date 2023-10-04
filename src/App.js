import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Landing from './Landing/Pages/Landing';
import Legal from './Legal/Pages/Legal';
import Order from './Order/Pages/Order';
import Support from './Support/Pages/Support';
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

                <Route path='/legal' exact>
                    <Legal />
                </Route>

                <Route path='/order' exact>
                    <Order />
                </Route>

                <Route path='/support' exact>
                    <Support />
                </Route>

                <Redirect to='/' />

            </Switch>
        </main>

        <MainFooter />

    </Router>

  );
};

export default App;
