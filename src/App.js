import React from 'react';
import logo from './logo.svg';
import './App.css';
import InfoKnobs from './components/info-knobs/info-knobs.component'
import MapComponent from './components/map/map.component'

function App() {
  return (
    <div className="App">
      <InfoKnobs />
      <MapComponent />
    </div>
  );
}

export default App;
