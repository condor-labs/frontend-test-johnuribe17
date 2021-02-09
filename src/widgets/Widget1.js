import React from 'react';
import Details from '../components/Details';

function Widget1({ venues }) {
  const [mainHeadquarter] = venues.data.places.filter(
    (venue) => venue.main_headquarter === true
  );
  const image = mainHeadquarter.image;
  const [iconObj] = mainHeadquarter.weather;
  const name = mainHeadquarter.name;
  const tempC = mainHeadquarter.main.temp - 273.15;
  const humidity = mainHeadquarter.main.humidity;
  const wind = mainHeadquarter.wind.speed;

  return (
    <div style={{ backgroundImage: `url('${image}')` }} id="widget-header">
      <i className={`wi wi-${iconObj.icon} widget-icon widget1-icon`}></i>
      <div className="widget1-button-container">
        <div className="widget1-name-container">
          <div className="widget1-name-flex">
            <i className="fas fa-map-marker-alt fa-lg"></i>
            <div className="widget-headquarter widget1-name">{name}</div>
          </div>
        </div>
      </div>
      <p className="widget-temperature widget1-text1">{`${tempC}ºC`}</p>
      <div>
        <Details humidity={humidity} wind={wind} />
      </div>
      <p className="widget1-text2">Good Morning,</p>
      <p className="widget1-text3">
        <b>Condor!</b>
      </p>
    </div>
  );
}

export default Widget1;
