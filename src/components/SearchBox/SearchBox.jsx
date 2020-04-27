import React from 'react';
import { DebounceInput } from 'react-debounce-input';

import PoiIcon from '../../Icons/poi.png';
import LoadingIcon from '../../Icons/loading.png';

const SearchBox = (props) => {
  return (
    <div className="flex flex-row items-center justify-start px-4 bg-white border-solid border border-gray-300 p-3 rounded-full">
      <img className="h-6" src={PoiIcon} alt="POI" />
      <DebounceInput minLength="3" debounceTimeout={300} className="bg-white mx-2 px-2 w-full text-base outline-none" name="location" id="location" value={props.location} onChange={props.changeLocation} />
      {
        !props.loading ? '' :
        <img src={LoadingIcon} alt="Loading icon" className="loader w-4" />
      }
    </div>
  );
}

export default SearchBox;