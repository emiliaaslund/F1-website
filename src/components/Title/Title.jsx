import React from "react";

//Tänker att vi skapar en headerprops som funkar på alla sidor, samma design och återanvändbar

function Title({ title, subtitle, light }) {
  return (
    <div
      className="main-title-wrapper"
      style={{ borderColor: light ? "#ededed" : "#111111" }}
    >
      <h1 className="title" style={{ color: light ? "#ededed" : "#111111" }}>
        {title}
      </h1>
      {subtitle && <h2 className="subtitle">{subtitle}</h2>}
    </div>
  );
}

export default Title;
