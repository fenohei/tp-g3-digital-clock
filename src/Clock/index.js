import { useState } from 'react';
import DisplayComponent from './DisplayComponent';
import BtnComponent from './BtnComponent';
import './styles.css';
import { type } from '@testing-library/user-event/dist/type';

export default function Clock() {
  const [time, setTime] = useState({s:20, m:1, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 1000));
  };

  var updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {

    if(updatedS === 0){
      updatedM--;
      updatedS = 60;
    }
    if(updatedM === 0){
      updatedH--;
      updatedM = 59;
    }
    
    updatedS--;
    return setTime({s:updatedS, m:updatedM, h:updatedH});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({s:20, m:1, h:0})
  };

  const resume = () => start();
  
  return (
    <>
      <div className="clock-container">
        <p className="clock">
          <DisplayComponent time={time}/>
          <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>
        </p>
        
      </div>
      
    </>
  );
}