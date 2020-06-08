import React,{ useState, useEffect } from 'react';
import './App.css';
import {options,proxyuri,key} from './utils/utils';

const App:React.FC = () => {

  const [radius,setRadius] = useState<number>(5000);
  const [latitude,setLatitude] = useState<number | undefined>();
  const [longitude,setLongitude] = useState<number | undefined>();
  const [results,setResults] = useState<any[] | undefined>();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( position => {
        let latitude = position.coords.latitude
        setLatitude(latitude)
        let longitude = position.coords.longitude
        setLongitude(longitude)
      });
    }
    else {
      alert("Enable location")
    }
  },[])

  const getResults = () => {
    const url:string = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&type=hospital&radius=${radius}&key=${key}`;
    fetch(proxyuri+url)
      .then(res => res.json())
      .then(data => setResults(data.results))
      .catch(error => alert(error))
  }

  return (
    <>
      <header className="header">
        <div className="header__text">
          <h1 className="header__primary">
            Hospital Locator
          </h1>
          <span className="header__secondary">Locate Nearby Hospitals Close to Your Location</span>
          <a className="header__btn" href="#search">Give it a try</a>
        </div>
      </header>
      <main className="main" id="search">
        <div className="row margin--b">
          <h2 className="main__row--text">Select Search Radius</h2>
          <select 
            className="main__row--radius"
            onChange = {(e)=> setRadius(+e.target.value)}
          >
            {options.map(option => (
              <option key={option.label} 
              value={option.value}>{option.label}</option>
            ))}
          </select>
          <button 
            className="main__btn--search"
            onClick={getResults}
          >
            Search
          </button>
        </div>
        <div className="row">
          {results && results.map(result => (
            <div 
              className="row display"
              key={result.id}
            >
              <span className="main__results">Hospital Name: {result.name}</span>
              <span className="main__results">Operational Status: {result.business_status}</span>
              <span className="main__results">Hospital Address: {result.vicinity}</span>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default App;
