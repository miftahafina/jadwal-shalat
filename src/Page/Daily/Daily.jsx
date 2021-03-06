import React from 'react';

import BigDate from '../../components/BigDate/BigDate';
import Table from '../../components/Table/Table';

const Daily = (props) => {
  return (
    <>
      <BigDate dateIndo={props.dateIndo} dayIndo={props.dayIndo} changeDate={(val) => props.changeDate(val)}/>
      {
        !props.loading & !props.found ?
        <p>Data tidak ditemukan</p> :
        <Table prayerTimes={props.prayerTimes} />
      }
    </>
  );
}

export default Daily;