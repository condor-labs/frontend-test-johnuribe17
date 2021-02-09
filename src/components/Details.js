import React from 'react';

function Details({ tempC, humidity, wind }) {
  return (
    <div className="details">
      {tempC && (
        <>
          <i className="fas fa-circle circle-temp"></i>
          <p>{`${tempC}º C`}</p>
        </>
      )}
      {humidity && (
        <>
          <i className="fas fa-circle circle-humidity"></i>
          <p>{`${humidity} %`}</p>
        </>
      )}
      {wind && (
        <>
          <i className="fas fa-circle circle-wind"></i>
          <p>{`${wind} m/s`}</p>
        </>
      )}
    </div>
  );
}

export default Details;
