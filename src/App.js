import React, { useEffect, useState } from 'react';
import Poi from './Icons/poi.png';
import axios from 'axios';

function App() {
  // const [location, setLocation] = useState('Pemalang');
  const [date, setDate] = useState(23);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://api.aladhan.com/v1/calendarByAddress?address=Pemalang,%20indonesia&month=04&year=2020&method=5')
      .then((res) => {
        console.log(res.data.data[date - 1].timings.Fajr);
        setData(res.data.data[date - 1].timings.Fajr.replace(' (WIB)', ''));
      });
    
  }, [date])

  return (
  <div className="container h-screen p-4 text-center bg-gray-200 mx-auto">

    <div className="flex flex-row items-center justify-start px-4 bg-gray-400 p-3 rounded-full">
      <img className="h-6" src={Poi} alt="POI" />
      <input type="text" className="bg-gray-400 mx-2 px-2 w-full text-base outline-none" name="location" id="location" value="Pemalang" />
    </div>

    <div className="mt-20 text-6xl leading-none">04.24</div>
    <div className="text-base">Rabu, 22 April 2020</div>

    <div className="flex flex-row items-center space-x-4 justify-between mt-20">
      <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-gray-500 rounded-lg">
        <p className="text-2xl text-white">{data}</p>
        <small className="text-white">Shubuh</small>
      </div>
      <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-gray-500 rounded-lg">
        <p className="text-2xl text-white">17.49</p>
        <small className="text-white">Terbit</small>
      </div>
      <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-gray-500 rounded-lg">
        <p className="text-2xl text-white">17.49</p>
        <small className="text-white">Dhuhur</small>
      </div>
    </div>

    <div className="flex flex-row items-center space-x-4 justify-between mt-4">
      <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-gray-500 rounded-lg">
        <p className="text-2xl text-white">17.49</p>
        <small className="text-white">Ashar</small>
      </div>
      <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-gray-500 rounded-lg">
        <p className="text-2xl text-white">17.49</p>
        <small className="text-white">Maghrib</small>
      </div>
      <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-gray-500 rounded-lg">
        <p className="text-2xl text-white">17.49</p>
        <small className="text-white">Isya</small>
      </div>
    </div>

    <footer className="text-xs mt-8">
      Data diperoleh dari API <a href="https://muslimsalat.com/">MuslimSalat</a><br/>
      dengan penyesuaian mengikuti <a href="https://bimasislam.kemenag.go.id/jadwalshalat">Kemenag RI</a>.
    </footer>
  </div>
  );
}

export default App;
