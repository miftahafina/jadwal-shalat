import React from 'react';

const Table = (props) => {
  return (
    <>
      <div className="flex flex-row items-center space-x-4 justify-between">
        <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-teal-500 text-white rounded-lg">
          <p className="text-2xl ">{props.prayerTimes.Fajr}</p>
          <small>Subuh</small>
        </div>
        <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-teal-500 text-white rounded-lg">
          <p className="text-2xl ">{props.prayerTimes.Sunrise}</p>
          <small>Terbit</small>
        </div>
        <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-teal-500 text-white rounded-lg">
          <p className="text-2xl ">{props.prayerTimes.Dhuhr}</p>
          <small>Zuhur</small>
        </div>
      </div>

      <div className="flex flex-row items-center space-x-4 justify-between mt-4">
        <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-teal-500 text-white rounded-lg">
          <p className="text-2xl ">{props.prayerTimes.Asr}</p>
          <small>Asar</small>
        </div>
        <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-teal-500 text-white rounded-lg">
          <p className="text-2xl ">{props.prayerTimes.Maghrib}</p>
          <small>Magrib</small>
        </div>
        <div className="flex flex-col items-center justify-center h-20 px-2 w-1/3 bg-teal-500 text-white rounded-lg">
          <p className="text-2xl ">{props.prayerTimes.Isha}</p>
          <small>Isya</small>
        </div>
      </div>
    </>
  );
}

export default Table;