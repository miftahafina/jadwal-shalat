import React from 'react';

const Container = (props) => (
  <div className="container p-4 text-center bg-green-100 mx-auto h-screen"> {/* h-screen */}
    {props.children}
  </div>
);

export default Container;