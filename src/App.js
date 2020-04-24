import React, { useEffect, useState } from 'react';
import Poi from './Icons/poi.png';
import axios from 'axios';
import { DebounceInput } from 'react-debounce-input';

function App() {
  const [location, setLocation] = useState('Pemalang');
  const [date, setDate] = useState(new Date());
  const [prayerTimes, setPrayerTimes] = useState([]);

  useEffect(() => {
    const dateFormatted = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getDate()}`
    axios.get(`https://api.pray.zone/v2/times/day.json?city=${location}&date=${dateFormatted}&school=5`)
      .then((res) => {
        console.log(res.data.results);
        setPrayerTimes(res.data.results.datetime[0].times);
      });
    
  }, [date, location])

  const getDayIndo = (val) => {
    const dayIndo = ['Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu'];
    return dayIndo[val.getDay()];
  }

  const getDateIndo = (val) => {
    const monthIndo = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    return `${val.getDate()} ${monthIndo[val.getMonth()]} ${val.getFullYear()}`;
  }

  const changeLocation = (event) => {
    console.log('location changed', event.target.value);
    setLocation(event.target.value)
  }

  return (
  <div className="container h-screen p-4 text-center bg-gray-200 mx-auto">

    <div className="flex flex-row items-center justify-start px-4 bg-gray-400 p-3 rounded-full">
      <img className="h-6" src={Poi} alt="POI" />
      <DebounceInput minLength="3" debounceTimeout={300} className="bg-gray-400 mx-2 px-2 w-full text-base outline-none" name="location" id="location" value={location} onChange={changeLocation} />
    </div>

    <div className="mt-20 text-6xl leading-none">{getDayIndo(date)}</div>
    <div className="text-base">{getDateIndo(date)}</div>

    <div className="flex flex-row items-center space-x-4 justify-between mt-20">
      <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-gray-500 rounded-lg">
        <p className="text-2xl text-white">{prayerTimes.Fajr}</p>
        <small className="text-white">Subuh</small>
      </div>
      <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-gray-500 rounded-lg">
        <p className="text-2xl text-white">{prayerTimes.Sunrise}</p>
        <small className="text-white">Terbit</small>
      </div>
      <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-gray-500 rounded-lg">
        <p className="text-2xl text-white">{prayerTimes.Dhuhr}</p>
        <small className="text-white">Zuhur</small>
      </div>
    </div>

    <div className="flex flex-row items-center space-x-4 justify-between mt-4">
      <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-gray-500 rounded-lg">
        <p className="text-2xl text-white">{prayerTimes.Asr}</p>
        <small className="text-white">Asar</small>
      </div>
      <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-gray-500 rounded-lg">
        <p className="text-2xl text-white">{prayerTimes.Maghrib}</p>
        <small className="text-white">Magrib</small>
      </div>
      <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-gray-500 rounded-lg">
        <p className="text-2xl text-white">{prayerTimes.Isha}</p>
        <small className="text-white">Isya</small>
      </div>
    </div>

    <footer className="text-xs mt-8">
      Data diperoleh dari API <a href="https://prayertimes.date/api/">Prayer Times</a><br/>
      dengan penyesuaian mengikuti <a href="https://bimasislam.kemenag.go.id/jadwalshalat">Kemenag RI</a>.
    </footer>
  </div>
  );
}

export default App;
