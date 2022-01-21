import React from "react"

import SelectControl, { SelectControlOption } from "./SelectControl"

export default {
  title: "SelectControl",
  component: SelectControl,
}

export const numPages512 = () => (
  <SelectControl label="Pages" initialValue="512">
    <SelectControlOption
      id="512"
      url="http://localhost:6006/?path=/story/selectcontrol--numPages512"
    >
      512
    </SelectControlOption>
    <SelectControlOption
      url="http://localhost:6006/?path=/story/selectcontrol--numPages4096"
      id="4096"
    >
      4096
    </SelectControlOption>
    <SelectControlOption
      url="http://localhost:6006/?path=/story/selectcontrol--numPages65535"
      id="65535"
    >
      65,535
    </SelectControlOption>
  </SelectControl>
)
export const Other = () => <SelectControl>Beep Boop</SelectControl>
