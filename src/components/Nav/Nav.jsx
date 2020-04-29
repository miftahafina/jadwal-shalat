import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import DiaryIcon from '../../Icons/diary.png';
import CalendarIcon from '../../Icons/calendar.png';
import ForestIcon from '../../Icons/forest.png';

const Nav = () => {
  const history = useHistory();

  const handleClick = (val) => {
    history.push(val);
  }

  return (
    <section className="block fixed inset-x-0 bottom-0 z-10 bg-gray-300 shadow">
      <div className="flex flex-row items-center justify-around">
        <button className="text-xs pt-2 pb-1 w-full bg-white text-center">
          <img src={DiaryIcon} alt="Diary Icon" className="w-6 mb-1 mx-auto" onClick={() => handleClick('/')} />
          Harian
        </button>

        <button className="text-xs pt-2 pb-1 w-full bg-white text-center">
          <img src={CalendarIcon} alt="Calendar Icon" className="w-6 mb-1 mx-auto" onClick={() => handleClick('/monthly')} />
          Bulanan
        </button>
        
        <button className="text-xs pt-2 pb-1 w-full bg-white text-center">
          <img src={ForestIcon} alt="Forest Icon" className="w-6 mb-1 mx-auto" onClick={() => handleClick('/')} />
          Jelajah
        </button>
      </div>
    </section>
  );
}

export default Nav;