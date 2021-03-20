import React from "react";

export function AnimatedWaves() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="waves"
      preserveAspectRatio="none"
      viewBox="0 24 150 28"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
        ></path>
      </defs>
      <g className="parallax">
        <use x="48" fill="rgba(255,255,255,0.7" xlinkHref="#gentle-wave"></use>
        <use
          x="48"
          y="3"
          fill="rgba(255,255,255,0.5)"
          xlinkHref="#gentle-wave"
        ></use>
        <use
          x="48"
          y="5"
          fill="rgba(255,255,255,0.3)"
          xlinkHref="#gentle-wave"
        ></use>
        <use x="48" y="7" fill="#fff" xlinkHref="#gentle-wave"></use>
      </g>
    </svg>
  );
}

export function SimpleWaves() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="simpleSvg">
      <path
        fill="#fff"
        d="M0 288l60-21.3C120 245 240 203 360 160s240-85 360-96 240 11 360 53.3C1200 160 1320 224 1380 256l60 32v32H0z"
      />
    </svg>
  )
}
