import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import InputFields from './InputFields'
import Paragraphs from './Paragraphs'
import Lists from './Lists'
import Radios from './Radios'
import DropdownMenus from './DropdownMenus'
import AudiosAndVideos from './AudiosAndVideos'
import Comment from './Comment'
import PopUpBoxes from './pop-up-boxes'
import IFrames from './iframes'
import SVGs from './SVGs'
import SVGsCardsAnimation from './SVGsCardsAnimation'
import Canvas from './canvas'
import Toggleswitch from './toggle-switch'
import CSSPositioning from './css-positioning'
import ResponsiveDesign from './responsive-design'
import Accessibility from './accessibility'
import APIUses from './api-uses'
import Security from './security'
import Analytics from './analytics'
import MatterJs from './MatterJs'
import GameKit from './game-kit'
import VirtualReality from './virtual-reality'
import Random from './random'
import '../public/index.css'

ReactDOM.render(
  (
    <BrowserRouter>
      <Switch>

        <Route
          exact
          path='/'
          component={App} />

        <Route
          exact
          path='/paragraphs'
          component={Paragraphs} />

        <Route
          exact
          path='/input-fields'
          component={InputFields} />

        <Route
          exact
          path='/lists'
          component={Lists} />

        <Route
          exact
          path='/radios'
          component={Radios} />

        <Route
          exact
          path='/dropdown-menus'
          component={DropdownMenus} />

        <Route
          exact
          path='/audios-and-videos'
          component={AudiosAndVideos} />

        <Route
          exact
          path='/comment'
          component={Comment} />

        <Route
          exact
          path='/pop-up-boxes'
          component={PopUpBoxes} />

        <Route
          exact
          path='/iframes'
          component={IFrames} />

        <Route
          exact
          path='/svgs'
          component={SVGs} />

        <Route
          exact
          path='/svg-cards-animation'
          component={SVGsCardsAnimation} />

        <Route
          exact
          path='/canvas'
          component={Canvas} />

        <Route
          exact
          path='/toggle-switch'
          component={Toggleswitch} />

        <Route
          exact
          path='/css-positioning'
          component={CSSPositioning} />

        <Route
          exact
          path='/responsive-design'
          component={ResponsiveDesign} />

        <Route
          exact
          path='/accessibility'
          component={Accessibility} />

        <Route
          exact
          path='/api-uses'
          component={APIUses} />

        <Route
          exact
          path='/security'
          component={Security} />

        <Route
          exact
          path='/analytics'
          component={Analytics} />

        <Route
          exact
          path='/matter-js'
          component={MatterJs} />

        <Route
          exact
          path='/game-kit'
          component={GameKit} />

        <Route
          exact
          path='/virtual-reality'
          component={VirtualReality} />

        <Route
          exact
          path='/random'
          component={Random} />

      </Switch>
    </BrowserRouter>
  ),
  document.getElementById('root')
)
