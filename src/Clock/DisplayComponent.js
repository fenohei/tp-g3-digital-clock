import React from 'react';

function DisplayComponent(props) {
  const h = () => {
     if(props.time.h === 0){
       return '';
     }else {
       return <span>{props.time.h.toString().padStart(2, '0')}:</span>;
     }
  }
  return (
    <div>
      <span>{props.time.h.toString().padStart(2, '0')}</span>:
      <span>{props.time.m.toString().padStart(2, '0')}</span>:
      <span>{props.time.s.toString().padStart(2, '0')}</span>
    </div>
  );
}

export default DisplayComponent;