import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Main.css';
import CardsView from '../../views/CardsView/CardsView';

const Main = () => (
  <main className='content-container'>
    <Switch>
      <Route exact path='/' component={CardsView} />
    </Switch>
  </main>
)

export default Main;