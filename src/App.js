import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useGeolocation from 'react-hook-geolocation';

import Container from './components/Container/Container';
import SearchBox from './components/SearchBox/SearchBox';
import Table from './components/Table/Table';
import Footer from './components/Footer/Footer';

import DiaryIcon from './Icons/diary.png';
import CalendarIcon from './Icons/calendar.png';
import ForestIcon from './Icons/forest.png';

function App() {
  const [location, setLocation] = useState('Pemalang');
  const [date, changeDate] = useState(new Date());
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
    <>
      <Container>
        <SearchBox location={location} changeLocation={(val) => changeLocation(val)}/>

        <div className="flex flex-row items-center justify-center mt-20 bg-gray-300">
          <div className="flex flex-col items-center justify-between">
            <div className="text-6xl leading-none" onClick={nextDate}>{dayIndo}</div>
            <div className="text-base" onClick={nextDate}>{dateIndo}</div>
          </div>
        </div>

        {/* <p>
          {
            !geolocation.error ? geolocation.latitude : 'geolocation error'
          }
        </p> */}

        <Table prayerTimes={prayerTimes}/>
        <Footer />
      </Container>

      <section className="block fixed inset-x-0 bottom-0 z-10 bg-gray-300 shadow">
        <div className="flex flex-row items-center justify-around">
          <a href="a" className="text-xs pt-2 pb-1 w-full bg-white text-center">
            <img src={DiaryIcon} alt="Diary Icon" className="h-8 mb-2 mx-auto" />
            Harian
          </a>

          <a href="b" className="text-xs pt-2 pb-1 w-full bg-white text-center">
            <img src={CalendarIcon} alt="Calendar Icon" className="h-8 mb-2 mx-auto" />
            Pekanan
          </a>
          
          <a href="c" className="text-xs pt-2 pb-1 w-full bg-white text-center">
            <img src={ForestIcon} alt="Forest Icon" className="h-8 mb-2 mx-auto" />
            Jelajah
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
