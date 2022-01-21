import React from "react"

const LazyChart = delegated => {
  const [Component, setComponent] = React.useState(() => () => null)

  React.useEffect(() => {
    import("./Chart.js").then(mod => {
      setComponent(() => mod.default)
    })
  }, [])

  return <Component {...delegated} />
}

export default LazyChart
