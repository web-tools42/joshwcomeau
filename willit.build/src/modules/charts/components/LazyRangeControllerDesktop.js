import React from "react"

const LazyRangeControllerDesktop = delegated => {
  const [Component, setComponent] = React.useState(() => () => null)

  React.useEffect(() => {
    import("./RangeControllerDesktop.js").then(mod => {
      setComponent(() => mod.default)
    })
  }, [])

  return <Component {...delegated} />
}

export default LazyRangeControllerDesktop
