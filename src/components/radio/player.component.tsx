import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RadioPlayer: React.FC = () => {
  const [play, setPlay] = useState(true);
  const [bolt, setBolt] = useState('low');
  const handleClick = () => {
    if (play) {
      setPlay(false);
      return;
    }

    setPlay(true);
  };
  const handleChange = (e: any) => {
    setBolt(e.target.value);
  };
  return (
    <section className="radio-player__container">
      <header className="radio-player__header">
        <aside></aside>
      </header>
      <footer className="radio-player__footer d-flex align-middle justify-content-around">
        <div className="d-flex player-button" >
          <button type="button" className="player-button" onClick={handleClick}>
            <FontAwesomeIcon icon={play ? 'play' : 'pause'} />
          </button>
        </div>
        <div className="d-flex align-middle justify-content-between player-button player-button--group">
          <label htmlFor="low" className={`d-flex ${bolt === 'low' && 'active'}`}>
            <input type="radio" name="low" id="low" value="low" checked={bolt === 'low'} onChange={handleChange} />
            LOW
          </label>
          <div className="d-flex player-button player-button--bolt">
            <FontAwesomeIcon icon="bolt" />
          </div>
          <label htmlFor="high" className={`d-flex ${bolt === 'high' && 'active'}`}>
            <input type="radio" name="high" id="high" value="high" checked={bolt === 'high'} onChange={handleChange} />
            HIGH
          </label>
        </div>
        <div className="d-flex player-button" >
          <button type="button" className="player-button">
            Greeting
          </button>
        </div>
      </footer>
    </section>
  );
}

export default RadioPlayer;
