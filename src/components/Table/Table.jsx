import React from 'react';

const Table = (props) => {
  return (
    <>
    <div className="flex flex-row items-center space-x-4 justify-between mt-20">
      <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-green-700 rounded-lg">
        <p className="text-2xl text-white">{props.prayerTimes.Fajr}</p>
        <small className="text-white">Subuh</small>
      </div>
      <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-green-700 rounded-lg">
        <p className="text-2xl text-white">{props.prayerTimes.Sunrise}</p>
        <small className="text-white">Terbit</small>
      </div>
      <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-green-700 rounded-lg">
        <p className="text-2xl text-white">{props.prayerTimes.Dhuhr}</p>
        <small className="text-white">Zuhur</small>
      </div>
    </div>

    <div className="flex flex-row items-center space-x-4 justify-between mt-4">
      <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-green-700 rounded-lg">
        <p className="text-2xl text-white">{props.prayerTimes.Asr}</p>
        <small className="text-white">Asar</small>
      </div>
      <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-green-700 rounded-lg">
        <p className="text-2xl text-white">{props.prayerTimes.Maghrib}</p>
        <small className="text-white">Magrib</small>
      </div>
      <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-green-700 rounded-lg">
        <p className="text-2xl text-white">{props.prayerTimes.Isha}</p>
        <small className="text-white">Isya</small>
      </div>
    </div>
    </>
  );
}

export default Table;