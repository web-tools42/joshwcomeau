import * as React from 'react';

const Crocodile = ({ size }) => (
  <svg
    width={size}
    viewBox="0 0 144 76"
    fill="none"
    style={{ display: 'block' }}
  >
    <g clipPath="url(#arm-clip)">
      <path
        d="M65.18 12.98C68.14 5.41 75.53 0 84.12 0H102.88C103.61 0 104.2 0.59 104.2 1.32V4.2C104.2 6.52 102.32 8.4 100 8.4H134.99C137.31 8.4 139.19 10.28 139.19 12.6C139.19 14.08 138.43 15.37 137.27 16.12H139.25C141.57 16.12 143.45 18 143.45 20.32C143.45 22.64 141.57 24.52 139.25 24.52H137.27C138.42 25.27 139.19 26.57 139.19 28.04C139.19 30.36 137.31 32.24 134.99 32.24H127.72C130.04 32.24 131.92 34.12 131.92 36.44C131.92 38.76 130.04 40.64 127.72 40.64H84.12V40.63C81.37 40.63 78.74 40.07 76.34 39.07"
        fill="#00E5AE"
      />
      <path
        d="M134.85 16.14H108.74"
        stroke="white"
        strokeWidth="1.1488"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M98.3 8.41H88.54"
        stroke="white"
        strokeWidth="1.1488"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M134.85 23.86H108.74"
        stroke="white"
        strokeWidth="1.1488"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M126.81 32.27H105.79"
        stroke="white"
        strokeWidth="1.1488"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M78.09 18.95C78.75 18.4 65.82 50.01 14 61.34"
        stroke="#00E5AE"
        strokeWidth="28"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="arm-clip">
        <rect width="143.47" height="75.34" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Crocodile;
