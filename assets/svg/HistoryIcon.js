import * as React from 'react';
const HistoryIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}>
    <g clipPath="url(#a)">
      <path
        stroke="#9763FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 9v5h4m7 0c0 6.075-4.925 11-11 11S3 20.075 3 14 7.925 3 14 3s11 4.925 11 11Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h28v28H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default HistoryIcon;
