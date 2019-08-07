import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IRadioPlayerProps {
  source: {
    high: string;
    low: string;
  };
}

const RadioPlayer: React.FC<IRadioPlayerProps> = ({ source }) => {
  const [play, setPlay] = useState(true);
  const [bolt, setBolt] = useState('low');

  useEffect(() => {
    const player = document.getElementById('player') as HTMLAudioElement;
    const source = document.getElementById(`source-${bolt}`) as HTMLSourceElement;
    player.src = source.src;
    player.load();
    setPlay(true);
  }, [source, bolt]);

  const handlePlayerControllerClick = () => {
    const player = document.getElementById('player') as HTMLAudioElement;
    if (play) {
      player
        .play()
        .then(() => {
          setPlay(false);
        })
        .catch((error) => {
          setPlay(true);
          console.error(error);
        });
      return;
    }
    player.pause();
    setPlay(true);
  };

  const handleChange = (e: any) => {
    const player = document.getElementById('player') as HTMLAudioElement;
    const source = document.getElementById(`source-${e.target.value}`) as HTMLSourceElement;
    player.src = source.src;
    player.load();
    setPlay(true);
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
        <audio id="player">
          <source src={source.low} type="audio/ogg" id="source-low" />
          <source src={source.high} type="audio/mpeg" id="source-high" />
          Your browser does not support the audio element.
        </audio>
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
