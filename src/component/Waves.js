import React from "react";
export function AnimatedWaves({classnames}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={classnames}
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

export function SimpleWaves({classnames}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={classnames}
      preserveAspectRatio="none"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#fff"
        d="M0 288l60-21.3C120 245 240 203 360 160s240-85 360-96 240 11 360 53.3C1200 160 1320 224 1380 256l60 32v32H0z"
      />
    </svg>
  )
}

export function CloseX() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-x"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}

export function Setting () {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather-settings"
    >
      <circle cx={12} cy={12} r={3} />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  )
}