import React from "react"

export default ({ height = 24, width = 24, ...rest }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M1.5 6.75H12"
      stroke="#B7B5BD"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 2.25V6.75"
      stroke="#B7B5BD"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12.75V2.25H3C2.60218 2.25 2.22064 2.40804 1.93934 2.68934C1.65804 2.97064 1.5 3.35218 1.5 3.75V20.25C1.5 20.6478 1.65804 21.0294 1.93934 21.3107C2.22064 21.592 2.60218 21.75 3 21.75H21C21.3978 21.75 21.7794 21.592 22.0607 21.3107C22.342 21.0294 22.5 20.6478 22.5 20.25V12.75H12Z"
      stroke="#B7B5BD"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 5.25H22.5"
      stroke="#B7B5BD"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 9H22.5"
      stroke="#B7B5BD"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.75 2.25V12.75"
      stroke="#B7B5BD"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.25 2.25V12.75"
      stroke="#B7B5BD"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
