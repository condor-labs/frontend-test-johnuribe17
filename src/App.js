import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Widget1 from './widgets/Widget1';

function App() {
  const [venues, setVenues] = useState({});
  const [loadingVenues, setLoadingVenues] = useState(true);
  const [forecast, setForecast] = useState({});
  const [cities, setCities] = useState({});

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

  return (
    <div className="layout">
      <main>{!loadingVenues && <Widget1 venues={venues} />}</main>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
}

export default App;
