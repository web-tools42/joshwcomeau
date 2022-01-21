import styled from "@emotion/styled"

import Box from "./box"

const Link = styled(Box)()

Link.defaultProps = {
  as: `a`,
  color: `purple.50`,
}

export default Link
