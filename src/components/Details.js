import React from 'react';

function Details({ tempC, humidity, wind }) {
  return (
    <div className="details">
      {tempC && (
        <>
          <i className="fas fa-circle circle-temp"></i>
          <p className="widget-temperature">{`${tempC}º C`}</p>
        </>
      )}
      {humidity && (
        <>
          <i className="fas fa-circle circle-humidity"></i>
          <p className="widget-humidity">{`${humidity} %`}</p>
        </>
      )}
      {wind && (
        <>
          <i className="fas fa-circle circle-wind"></i>
          <p className="widget-wind">{`${wind} m/s`}</p>
        </>
      )}
    </div>
  );
}

export default Details;
