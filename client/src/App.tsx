import React from 'react';
import logo from './logo.svg';
import ClickTracker from './ClickTracker';
import { MqttProvider } from './MqttClient';
import './App.css';

const App: React.FC = () => {
  return (
    <MqttProvider url="mqtt://localhost:9001">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ClickTracker />
        </header>
      </div>
    </MqttProvider>
  );
};

export default App;
