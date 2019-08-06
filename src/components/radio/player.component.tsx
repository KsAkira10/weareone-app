import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RadioPlayer: React.FC = () => {
  const [play, setPlay] = useState(true);
  const [bolt, setBolt] = useState('low');
  const handlePlayerControllerClick = () => {
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
      <main className="radio-player__main">
        <header className="radio-player__header">
          <aside></aside>
        </header>
      </main>
      <footer className="radio-player__footer d-flex align-items-center justify-content-around">
        <div className="player-button d-flex" >
          <button type="button" className="player-button" onClick={handlePlayerControllerClick}>
            <FontAwesomeIcon icon={play ? 'play' : 'pause'} />
          </button>
        </div>
        <div className="player-button player-button--group d-flex align-items-center justify-content-between">
          <label htmlFor="low" className={`${bolt === 'low' && 'active'} d-flex`}>
            <input type="radio" name="low" id="low" value="low" checked={bolt === 'low'} onChange={handleChange} />
            LOW
          </label>
          <div id="bolt" className="player-button player-button--bolt d-flex">
            <FontAwesomeIcon icon="bolt" />
          </div>
          <label htmlFor="high" className={`${bolt === 'high' && 'active'} d-flex`}>
            <input type="radio" name="high" id="high" value="high" checked={bolt === 'high'} onChange={handleChange} />
            HIGH
          </label>
        </div>
        <div className="player-button d-flex" >
          <button type="button" className="player-button">
            <span>Greeting</span>
          </button>
        </div>
      </footer>
    </section>
  );
}

export default RadioPlayer;
