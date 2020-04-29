import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import useGeolocation from 'react-hook-geolocation';

import Container from './components/Container/Container';
import SearchBox from './components/SearchBox/SearchBox';

import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

import Daily from './Page/Daily/Daily';
import Monthly from './Page/Monthly/Monthly';

function App() {
  const [location, setLocation] = useState('');
  const [date, settingDate] = useState(new Date());
  const [prayerTimes, setPrayerTimes] = useState([]);
  const [monthlyPrayerTimes, setMonthlyPrayerTimes] = useState([]);

  const [dateFormatted, setDateFormatted] = useState('');
  const [dayIndo, setDayIndo] = useState('');
  const [dateIndo, setDateIndo] = useState('');

  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState(false);

  const geolocation = useGeolocation();

  // Harian
  useEffect(() => {
    if (dateFormatted !== '') {
      setLoading(true);
      setFound(false)

      axios.get(`https://api.pray.zone/v2/times/day.json?city=${location}&date=${dateFormatted}&school=5`)
      .then(res => {
        setPrayerTimes(res.data.results.datetime[0].times);
      })
      
      .then(() => {
        setLoading(false);
        setFound(true);
      })
      
      .catch(err => {
        setLoading(false);
        setFound(false)
        console.log(err);
      });
    }
  }, [dateFormatted, location]);

  // Bulanan
  useEffect(() => {
    axios.get(`https://api.pray.zone/v2/times/this_month.json?school=5&city=${location}`)
      .then(res => {
        setMonthlyPrayerTimes(res.data.results.datetime);
      });
  }, [location])
  
  useEffect(() => {
    setDateFormatted(`${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getDate()}`);
  }, [date])

  useEffect(() => {
    if (!localStorage.hasOwnProperty('location')) {
      localStorage.setItem('location', 'Pemalang');
    }

    setLocation(localStorage.getItem('location'));
  }, []);

  useEffect(() => {
    localStorage.setItem('location', location);
  }, [location])

  const getDayIndo = (val) => {
    const dayIndo = ['Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu'];
    setDayIndo(dayIndo[val.getDay()]);
  }

  const getDateIndo = (val) => {
    const monthIndo = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    setDateIndo(`${val.getDate()} ${monthIndo[val.getMonth()]} ${val.getFullYear()}`);
  }

  const changeDate = (day = 1) => {
    settingDate(new Date(date.setDate(date.getDate() + day)));
  }

  useEffect(() => {
    getDayIndo(date);
    getDateIndo(date);
  }, [date]);

  const changeLocation = (event) => {
    setLocation(event.target.value);
  }

  return (
    <Router>
      <Container>
        <SearchBox
          location={location}
          changeLocation={(val) => changeLocation(val)}
          loading={loading}
        />

        <Switch>
          <Route exact path="/">
            <Daily
              dateIndo={dateIndo}
              dayIndo={dayIndo}
              changeDate={(val) => changeDate(val)}
              prayerTimes={prayerTimes}
              loading={loading}
              found={found}
            />
          </Route>

          <Route exact path="/monthly">
            <Monthly monthlyPrayerTimes={monthlyPrayerTimes}/>
          </Route>
        </Switch>

        <Footer />
      </Container>
      <Nav />
    </Router>
  );
}

export default App;

/* <p>
  {
    !geolocation.error ? geolocation.latitude : 'geolocation error'
  }
</p> */