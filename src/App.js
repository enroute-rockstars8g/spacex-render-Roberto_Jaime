import React from 'react';
import './App.css';
import {Hed} from "./components/header/header"
import { Foot } from './components/footer/footer';
import { SpaceX } from './components/card/card';

function App(){
  return (
    <div className="App">
     <Hed/>
     <SpaceX/>
     <Foot/>
    </div>
  );
}

export default App;
