import React from 'react';

const Container = (props) => (
  <div className="container h-screen p-4 text-center bg-green-100 mx-auto">
    {props.children}
  </div>
);

export default Container;