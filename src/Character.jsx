import React from "react";
import samurai1 from "./assets/samurai_lvl1.png";
import samurai2 from "./assets/samurai_lvl2.png";
import samurai3 from "./assets/samurai_lvl3.png";
import samurai4 from "./assets/samurai_lvl4.png";
import samurai5 from "./assets/samurai_lvl5.png";

const levelToAsset = {
  1: samurai1,
  2: samurai2,
  3: samurai3,
  4: samurai4,
  5: samurai5,
  6: samurai5,
};

export default function Character({ level = 1, onClick }) {
  const src = levelToAsset[level] || samurai1;

  return (
    <div className="character">
      <img
        src={src}
        alt={`Samurai level ${level}`}
        draggable="false"
        onClick={onClick}
        style={{ width: "200px", cursor: "pointer" }}
      />
      <div className="hint" style={{ color: "white", marginTop: "10px" }}>
        ⚔️ Click the samurai to upgrade ⚔️
      </div>
    </div>
  );
}
