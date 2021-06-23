import logo from './logo.svg';
import React, {useState} from 'react';
//import Images from './images.js';
import Tabs from './components/Tabs';
import MuscleContainer from './components/MuscleContainer.js';
import CollectionOne from './components/CollectionOne.js';
import CollectionTwo from './components/CollectionTwo.js';
import Matches from './components/Matches.js';
import './App.css';

function App() {
  const [data,setData]=useState({});

  return (
    <div className="App">
      <div id="muscleContainer">
        <div id="credit">Credit to Brian Bonanno for classification and name inforamtion</div>
      <Tabs>
        <div className="tab" label="Master Checklist">
        </div>
        <div className="tab" label="Collection One">
        </div>
        <div className="tab" label="Collection Two">
        </div>
        <div className="tab" label="Matches">
        </div>
      </Tabs>
      </div>
    </div>
  );
}

export default App;
