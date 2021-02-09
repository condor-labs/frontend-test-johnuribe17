import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Widget1 from './widgets/Widget1';
import Widget2 from './widgets/Widget2';

function App() {
  const [venues, setVenues] = useState({});
  const [forecast, setForecast] = useState({});
  const [cities, setCities] = useState({});
  const [loadingVenues, setLoadingVenues] = useState(true);
  const [loadingForecast, setLoadingForecast] = useState(true);
  const [loadingCities, setLoadingCities] = useState(true);

  const getVenues = async () => {
    const endpoint =
      'https://run.mocky.io/v3/818d0158-727b-461e-9f76-06734ed7e582';

    try {
      const info = await axios.get(endpoint);
      setVenues(info);
      setLoadingVenues(false);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    getVenues();
  }, []);

  const getForecast = async () => {
    const endpoint =
      'https://run.mocky.io/v3/73c29128-d158-40db-aeae-ea78a0d762b7';

    try {
      const info = await axios.get(endpoint);
      setForecast(info);
      setLoadingForecast(false);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    getForecast();
  }, []);

  return (
    <div className="layout">
      <main>{!loadingVenues && <Widget1 venues={venues} />}</main>
      <section>{!loadingForecast && <Widget2 forecast={forecast} />}</section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
}

export default App;
