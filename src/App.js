import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useGeolocation from 'react-hook-geolocation';

import Container from './components/Container/Container';
import SearchBox from './components/SearchBox/SearchBox';
import BigDate from './components/BigDate/BigDate';
import Table from './components/Table/Table';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

function App() {
  const [location, setLocation] = useState('Pemalang');
  const [date, settingDate] = useState(new Date());
  const [prayerTimes, setPrayerTimes] = useState([]);

  const [dateFormatted, setDateFormatted] = useState('');
  const [dayIndo, setDayIndo] = useState('');
  const [dateIndo, setDateIndo] = useState('');

  const geolocation = useGeolocation();

  useEffect(() => {
    if (dateFormatted !== '') {
      axios.get(`https://api.pray.zone/v2/times/day.json?city=${location}&date=${dateFormatted}&school=5`)
      .then((res) => {
        // console.log(res.data.results);
        setPrayerTimes(res.data.results.datetime[0].times);
      });      
    }
  }, [dateFormatted, location]);
  
  useEffect(() => {
    setDateFormatted(`${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getDate()}`);
  }, [date])

  const getPrayerTimesByLocation = () => {
    
  }

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
    <>
      <Container>
        <SearchBox location={location} changeLocation={(val) => changeLocation(val)} />
        <BigDate dateIndo={dateIndo} dayIndo={dayIndo} changeDate={(val) => changeDate(val)}/>

        {/* <p>
          {
            !geolocation.error ? geolocation.latitude : 'geolocation error'
          }
        </p> */}

        <Table prayerTimes={prayerTimes} />
        <Footer />
      </Container>
      <Nav />
    </>
  );
}

export default App;
