import React from 'react';
import './style.css';
import Sidebar from './components/Sidebar/Sidebar';
import MainDash from './components/mainDash/MainDash';
import RightSide from './components/rightSide/RightSide';

export default function App() {
  return (
    <div className="app">
      <div className="appGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}
