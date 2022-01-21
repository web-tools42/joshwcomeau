import React from "react"

import { generateId } from "../../../utils"

export default function useRandomId(prefix) {
  const { current: randomId } = React.useRef(generateId())

  return `${prefix}_${randomId}`
}
