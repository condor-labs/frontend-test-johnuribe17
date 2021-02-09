import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Details from '../components/Details';

function Card({ listItem }) {
  const tempC = Math.round(listItem.main.temp - 273.15);
  const humidity = listItem.main.humidity;
  const wind = Number.parseFloat(listItem.wind.speed).toFixed(2);
  const dayIndex = new Date(listItem.date).getDay();

  const days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };

  return (
    <div>
      <p className="widget2-text-day">{days[dayIndex]}</p>
      <p className="widget-temperature widget2-text-temp">{`${tempC}º C`}</p>
      <Details humidity={humidity} wind={wind} />
    </div>
  );
}

function Widget2({ forecast }) {
  const [index, setIndex] = useState(0);
  const [list, setList] = useState(forecast.data.list.slice(0, 3));

  console.log(forecast);
  console.log(list);

  function handlePrev() {
    if (index === 0) {
      setList(forecast.data.list.slice(index, index + 3));
    }
    if (index > 0) {
      setList(forecast.data.list.slice(index, index + 3));
      setIndex((prev) => prev - 1);
      console.log(list);
    }
  }

  function handleNext() {
    if (index === 2) {
      setList(forecast.data.list.slice(index + 1, index + 4));
    } else if (index < 2) {
      setList(forecast.data.list.slice(index + 1, index + 4));
      setIndex((prev) => prev + 1);
      console.log(list);
    }
  }

  return (
    <div id="widget-carousel">
      <div className="widget2-header">
        <h1 className="widget2-title">FORECAST EXTENDED</h1>
        <button className="widget2-button" onClick={handlePrev}>
          <i className="wi wi-direction-left"></i>
        </button>
        <button className="widget2-button" onClick={handleNext}>
          <i className="wi wi-direction-right"></i>
        </button>
      </div>
      <div className="widget2-list-container">
        {list.map((listItem) => (
          <div className="widget-carousel-item widget2-item" key={uuidv4()}>
            <Card listItem={listItem} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Widget2;
