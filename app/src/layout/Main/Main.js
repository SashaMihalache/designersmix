import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Main.scss';

import LandingView from '../../views/LandingView/LandingView';
import MixesView from '../../views/MixesView/MixesView';

const Main = () => (
  <main className='content-container'>
    <Switch>
      <Route exact path='/' component={LandingView} />
      <Route exact path='/mixes' component={MixesView} />
    </Switch>
  </main>
)

export default Main;