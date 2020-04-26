import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useGeolocation from 'react-hook-geolocation';

import Container from './components/Container/Container';
import SearchBox from './components/SearchBox/SearchBox';
import Table from './components/Table/Table';
import Footer from './components/Footer/Footer';

function App() {
  const [location, setLocation] = useState('Pemalang');
  const [date, changeDate] = useState(new Date());
  const [prayerTimes, setPrayerTimes] = useState([]);

  const [dayIndo, setDayIndo] = useState('');
  const [dateIndo, setDateIndo] = useState('');

  const geolocation = useGeolocation();

  useEffect(() => {
    const dateFormatted = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getDate()}`
    
    axios.get(`https://api.pray.zone/v2/times/day.json?city=${location}&date=${dateFormatted}&school=5`)
      .then((res) => {
        // console.log(res.data.results);
        setPrayerTimes(res.data.results.datetime[0].times);
      });
    
  }, [date, location])

  const getDayIndo = (val) => {
    const dayIndo = ['Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu'];
    setDayIndo(dayIndo[val.getDay()]);
  }

  const getDateIndo = (val) => {
    const monthIndo = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    setDateIndo(`${val.getDate()} ${monthIndo[val.getMonth()]} ${val.getFullYear()}`);
  }

  const nextDate = () => {
    changeDate(new Date(date.setDate(date.getDate() + 1)));
  }

  useEffect(() => {
    getDayIndo(date);
    getDateIndo(date);
  }, [date]);

  const changeLocation = (event) => {
    setLocation(event.target.value);
  }

  return (
    <Container>
      <SearchBox location={location} changeLocation={(val) => changeLocation(val)}/>

      <div className="mt-20 text-6xl leading-none" onClick={nextDate}>{dayIndo}</div>
      <div className="text-base" onClick={nextDate}>{dateIndo}</div>
      <p>
        {
          !geolocation.error ? <p>{geolocation.latitude}</p> : <p>geolocation error</p>
        }
      </p>

      <Table prayerTimes={prayerTimes}/>
      <Footer />
    </Container>
  );
}

export default App;
