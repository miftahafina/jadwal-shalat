import React from 'react';

const Monthly = (props) => {
  return (
    <table className="table-fixed w-full mt-8">
      <thead>
        <tr className="">
          <th className="bg-gray-100 font-normal p-1 text-xs w-1/6"></th>
          <th className="bg-teal-500 text-white border-2 border-gray-100 font-normal p-1 text-xs w-1/6 rounded-tl-lg">Subuh</th>
          <th className="bg-teal-500 text-white border-2 border-gray-100 font-normal p-1 text-xs w-1/6">Zuhur</th>
          <th className="bg-teal-500 text-white border-2 border-gray-100 font-normal p-1 text-xs w-1/6">Asar</th>
          <th className="bg-teal-500 text-white border-2 border-gray-100 font-normal p-1 text-xs w-1/6">Magrib</th>
          <th className="bg-teal-500 text-white border-2 border-gray-100 font-normal p-1 text-xs w-1/6 rounded-tr-lg">Isya</th>
        </tr>
      </thead>
      <tbody>
      {
        props.monthlyPrayerTimes.map((data, index) => {
          if (new Date(data.date.gregorian).getDate() % 2 === 0) {
            return (
              <tr>
                <td className="p-1 text-xs text-left border-gray-100">{new Date(data.date.gregorian).getDate()}</td>
                <td className="bg-gray-300 border-x-2 border-gray-100 p-1 text-xs">{data.times.Fajr}</td>
                <td className="bg-gray-300 border-x-2 border-gray-100 p-1 text-xs">{data.times.Dhuhr}</td>
                <td className="bg-gray-300 border-x-2 border-gray-100 p-1 text-xs">{data.times.Asr}</td>
                <td className="bg-gray-300 border-x-2 border-gray-100 p-1 text-xs">{data.times.Maghrib}</td>
                <td className="bg-gray-300 border-x-2 border-gray-100 p-1 text-xs">{data.times.Isha}</td>
              </tr>
            );
          } else {
            return (
              <tr>
                <td className="p-1 text-xs text-left border-gray-100">{new Date(data.date.gregorian).getDate()}</td>
                <td className="bg-gray-200 border-x-2 border-gray-100 p-1 text-xs">{data.times.Fajr}</td>
                <td className="bg-gray-200 border-x-2 border-gray-100 p-1 text-xs">{data.times.Dhuhr}</td>
                <td className="bg-gray-200 border-x-2 border-gray-100 p-1 text-xs">{data.times.Asr}</td>
                <td className="bg-gray-200 border-x-2 border-gray-100 p-1 text-xs">{data.times.Maghrib}</td>
                <td className="bg-gray-200 border-x-2 border-gray-100 p-1 text-xs">{data.times.Isha}</td>
              </tr>
            );
          }
        })
      }      
      </tbody>
    </table>
  );
}

export default Monthly;