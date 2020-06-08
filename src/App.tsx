import React from 'react';
import './App.css';

const App:React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="header__text">
          <h1 className="header__primary">
            Hospital Locator.<br></br>
            <span className="header__secondary">Locate Nearby Hospitals Close to Your Location</span>
          </h1>
          <a className="header__btn" href="/#">Give it a try</a>
        </div>
      </header>
      <div className="row">
      </div>
    </>
  )
}

export default App;
