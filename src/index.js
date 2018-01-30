import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import AudiosAndVideos from './AudiosAndVideos';
import DropdownMenus from './DropdownMenus';
import Comment from './Comment';
import SVGsCardsAnimation from './SVGsCardsAnimation';
import '../public/index.css';

ReactDOM.render(
  (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={App}/>

        <Route
          exact
          path="/dropdown-menus"
          component={DropdownMenus}/>

        <Route
          exact
          path="/audios-and-videos"
          component={AudiosAndVideos}/>

        <Route
          exact
          path="/comment"
          component={Comment}/>

        <Route
          exact
          path="/svg-cards-animation"
          component={SVGsCardsAnimation}/>

      </Switch>
    </BrowserRouter>
  ),
  document.getElementById('root')
);
