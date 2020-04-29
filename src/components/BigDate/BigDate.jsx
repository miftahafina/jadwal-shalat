import React from 'react';

import ChevronLeftIcon from '../../Icons/chevron-left.png';
import ChevronRightIcon from '../../Icons/chevron-right.png';

const BigDate = (props) => {
  return (
    <div className="flex flex-row items-center justify-between my-12">
      <button className="outline-none" onClick={() => props.changeDate(-1)}>
        <img src={ChevronLeftIcon} alt="Chevron left icon" className="h-10" />
      </button>

      <div className="flex flex-col items-center justify-between">
        <div className="text-6xl leading-none font-normal" onClick={() => props.changeDate(1)}>{props.dayIndo}</div>
        <div className="text-base">{props.dateIndo}</div>
      </div>

      <button className="outline-none" onClick={() => props.changeDate(1)}>
        <img src={ChevronRightIcon} alt="Chevron right icon" className="h-10"/>
      </button>
    </div>
  );
}

export default BigDate;