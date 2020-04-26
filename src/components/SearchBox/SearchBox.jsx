import React from 'react';
import { DebounceInput } from 'react-debounce-input';
import Poi from '../../Icons/poi.png';

const SearchBox = (props) => {
  return (
    <div className="flex flex-row items-center justify-start px-4 bg-green-500 p-3 rounded-full">
      <img className="h-6" src={Poi} alt="POI" />
      <DebounceInput minLength="3" debounceTimeout={300} className="bg-green-500 mx-2 px-2 w-full text-base outline-none" name="location" id="location" value={props.location} onChange={props.changeLocation} />
    </div>
  );
}

export default SearchBox;