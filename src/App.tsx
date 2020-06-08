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
      <main className="main">
        <div className="row">
          <h2 className="main__row--text">Select Search Radius</h2>
          <select className="main__row--radius">
            <option value="5000">5km</option>
          </select>
          <button className="main__btn--search">Search</button>
        </div>
      </main>
    </>
  )
}

export default App;
