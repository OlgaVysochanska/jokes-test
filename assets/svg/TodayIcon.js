import * as React from 'react';
const TodayIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}>
    <g clipPath="url(#a)">
      <path
        stroke="#C1C3C6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.004 15.842 14.771 3.418c.424-.49 1.229-.19 1.229.459V10.3a.7.7 0 0 0 .7.7h6.767a.7.7 0 0 1 .53 1.159L13.228 24.581c-.424.49-1.229.19-1.229-.459V17.7a.7.7 0 0 0-.7-.7H4.533a.7.7 0 0 1-.529-1.158Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h28v28H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default TodayIcon;
