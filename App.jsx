import React, { useEffect, useState } from 'react'
import Character from './components/Character'

const thresholds = [10,20,30,40,50];

function computeLevel(clicks) {
  if (clicks >= 50) return 6;
  if (clicks >= 40) return 5;
  if (clicks >= 30) return 4;
  if (clicks >= 20) return 3;
  if (clicks >= 10) return 2;
  return 1;
}

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    const saved = localStorage.getItem('samurai_clicker_progress');
    if (saved) {
      const obj = JSON.parse(saved);
      setClicks(obj.clicks || 0);
      setLevel(computeLevel(obj.clicks || 0));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('samurai_clicker_progress', JSON.stringify({ clicks, level }));
  }, [clicks, level]);

  function handleClick() {
    const n = clicks + 1;
    setClicks(n);
    setLevel(computeLevel(n));
  }

  function resetProgress() {
    setClicks(0);
    setLevel(1);
    localStorage.removeItem('samurai_clicker_progress');
  }

  return (
    <div className="app">
      <div className="panel">
        <h1>Samurai Clicker</h1>
        <div className="user">Offline mode — progress is saved in your browser</div>
        <div className="content">
          <Character level={level} onClick={handleClick} />
          <div className="info">
            <div className="score">{clicks}</div>
            <div className="label">Clicks</div>
            <div className="level">Armor level: {level}</div>
            <div className="thresholds">Next upgrades: 10,20,30,40,50</div>
            <button className="btn" onClick={resetProgress}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}
