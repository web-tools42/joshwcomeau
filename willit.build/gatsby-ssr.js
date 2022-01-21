import React from "react"

import App from "@modules/ui/components/App"

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>
}
