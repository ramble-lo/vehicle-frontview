import React, { useEffect, useState, useRef } from 'react'
import './normalize.css';
import './App.scss';

import FrontView from './components/FrontView';
import TimeStamp from './components/TimeStamp';
import noFrontView from './vidoes/no-frontview.mp4'
import haveFrontView from './vidoes/have-frontview.mp4'

interface KeyBoardEvent {
  key: string,
}

// interface App {
//   onClick(video: string): React.MouseEventHandler<HTMLButtonElement>;
// }

const App: React.FC = () => {
  const [keyInCode, setKeyInCode] = useState<string>('');
  const [startTime, setStartTime] = useState(0);
  const [recordTime, setRecordTime] = useState([0]);
  const [screenStyle, setScreenStyle] = useState<string>('');
  const [videoKind, setVideoKind] = useState<string>(noFrontView);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyIn, false);
    return () => {
      window.removeEventListener("keydown", handleKeyIn, false);
    };
  });
  useEffect(() => {
    let myVar = setInterval(() => setScreenStyle(''), 1000)
    return () => {
      clearInterval(myVar)
    }
  }, [screenStyle])

  const onClickHaveFrontViewVideoKind = () => {
    setVideoKind(haveFrontView);
    console.log('HaveFrontViewVideoKind');
    console.log(videoKind);

  }
  const onClickNoFrontViewVideoKind = () => {
    setVideoKind(noFrontView);
    console.log('NoFrontViewVideoKind');
    console.log(videoKind);
  }

  const onClickRecordTime = () => {
    let string = ''
    for (const time of recordTime) {
      if (time > 0) {
        console.log(time);
        string += time + ' '
      }
    }
    console.log(string);
  }

  const handleScreenStyle = (keyIn: string) => {
    let style
    if (keyIn === 'a') {
      style = 'alert-screen'
    } else if (keyIn === 's') {
      style = 'start-screen'
    } else {
      style = ''
    }
    setScreenStyle(style)
  }

  const handleKeyIn = (e: KeyBoardEvent) => {
    // let dateTime = Date.now();
    // let timestamp = Math.floor(dateTime / 100);

    let recoedTimeStamp: number
    let startTimeStamp = startTime;
    if (e.key === 's' && startTimeStamp === 0) {
      startTimeStamp = new Date().getTime()
    }
    if (e.key === 'a') {
      recoedTimeStamp = new Date().getTime()
    }

    handleScreenStyle(e.key)
    setKeyInCode((pre) => pre = e.key);
    setStartTime(startTimeStamp);
    setRecordTime(pre => { return [...pre, (recoedTimeStamp - startTimeStamp) / 1000] });
  }


  return (
    <div className='App'>
      <FrontView keyInCode={keyInCode} screenStyle={screenStyle} videoKind={videoKind} />
      <h2>Autonomous vehicle reaction test's timestamp</h2>
      <h1>{videoKind == '/static/media/no-frontview.6c40e73b.mp4' ? 'No front view' : 'Have front view'}</h1>
      <button onClick={onClickNoFrontViewVideoKind}>No front view</button>
      <button onClick={onClickHaveFrontViewVideoKind}>Have front view</button>
      <button onClick={onClickRecordTime}>Record Time</button>
      <TimeStamp recordTime={recordTime} />
    </div>
  );
}

export default App;
