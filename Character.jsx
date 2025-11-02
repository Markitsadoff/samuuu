import React from 'react'

const levelToAsset = {
  1: '/src/assets/samurai_lvl1.png',
  2: '/src/assets/samurai_lvl2.png',
  3: '/src/assets/samurai_lvl3.png',
  4: '/src/assets/samurai_lvl4.png',
  5: '/src/assets/samurai_lvl5.png',
  6: '/src/assets/samurai_lvl5.png'
}

export default function Character({ level = 1, onClick }) {
  const src = levelToAsset[level] || levelToAsset[1];
  return (
    <div className="character">
      <img src={src} alt={`Samurai level ${level}`} draggable="false" onClick={onClick} />
      <div className="hint">Click the samurai to upgrade</div>
    </div>
  )
}
