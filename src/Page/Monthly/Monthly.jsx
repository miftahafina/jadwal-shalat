import React, { Fragment } from 'react';

const Monthly = (props) => {
  const isEven = (val) => {
    return (val % 2 === 0);
  }

  const getMonthPrefix = (val) => {
    const monthIndo = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'];
    return monthIndo[val];
  }

  const getDayPrefix = (val) => {
    const dayIndo = ['Ahd','Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    return dayIndo[val];
  }

  const isToday = (val) => {
    const today = new Date();
    const todayString = `${today.getFullYear()}-${('0' + (today.getMonth() + 1)).slice(-2)}-${today.getDate()}` ;
    return val === todayString ? 'font-bold' : 'font-normal';
  }

  return (
    <>
      <h1 className="mt-6 leading-none">Jadwal Shalat</h1>
      <table className="table-auto w-full my-6">
        <thead>
          <tr>
            <th className="bg-gray-500 text-white border-2 border-gray-100 font-normal p-1 text-xs rounded-tl-lg">Tanggal</th>
            <th className="bg-teal-500 text-white border-2 border-gray-100 font-normal p-1 text-xs">Shubuh</th>
            <th className="bg-teal-500 text-white border-2 border-gray-100 font-normal p-1 text-xs">Dzuhur</th>
            <th className="bg-teal-500 text-white border-2 border-gray-100 font-normal p-1 text-xs">Ashar</th>
            <th className="bg-teal-500 text-white border-2 border-gray-100 font-normal p-1 text-xs">Maghrib</th>
            <th className="bg-teal-500 text-white border-2 border-gray-100 font-normal p-1 text-xs rounded-tr-lg">Isya</th>
          </tr>
        </thead>
        <tbody>
        {
          props.monthlyPrayerTimes.map((data, index) => {
            return (
              <Fragment key={index}>
                {
                  new Date(data.date.gregorian).getDay() === 0 ?
                  <tr key={index + 'separator'}>
                    <td></td>
                    <td colSpan="5" className="text-xs text-gray-600">-</td>
                  </tr>
                  : false
                }
                <tr>
                  <td className={`p-1 text-xs text-center border-gray-100 text-gray-700 ${isToday(data.date.gregorian)}`}>
                    {getDayPrefix(new Date(data.date.gregorian).getDay())}{', '}
                    {new Date(data.date.gregorian).getDate()} {' '}
                    {getMonthPrefix(new Date(data.date.gregorian).getMonth())}
                  </td>
                  <td className={`${isEven(index) ? 'bg-gray-300' : 'bg-gray-200'} border-x-2 border-gray-100 p-1 text-xs ${isToday(data.date.gregorian)}`}>{data.times.Fajr}</td>
                  <td className={`${isEven(index) ? 'bg-gray-300' : 'bg-gray-200'} border-x-2 border-gray-100 p-1 text-xs ${isToday(data.date.gregorian)}`}>{data.times.Dhuhr}</td>
                  <td className={`${isEven(index) ? 'bg-gray-300' : 'bg-gray-200'} border-x-2 border-gray-100 p-1 text-xs ${isToday(data.date.gregorian)}`}>{data.times.Asr}</td>
                  <td className={`${isEven(index) ? 'bg-gray-300' : 'bg-gray-200'} border-x-2 border-gray-100 p-1 text-xs ${isToday(data.date.gregorian)}`}>{data.times.Maghrib}</td>
                  <td className={`${isEven(index) ? 'bg-gray-300' : 'bg-gray-200'} border-x-2 border-gray-100 p-1 text-xs ${isToday(data.date.gregorian)}`}>{data.times.Isha}</td>
                </tr>
              </Fragment>
              );
            }
          )
        }
        </tbody>
      </table>
    </>
  );
}

export default Monthly;