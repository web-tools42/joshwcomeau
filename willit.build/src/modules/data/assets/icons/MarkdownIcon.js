import React from "react"
import { toCamelCase } from "@modules/data/utils/transformName"
import { generateId } from "../../../../utils"

export default ({
  height = 25,
  width = 25,
  inverted,
  title = `Markdown logo`,
  ...rest
}) => {
  const titleId = `${toCamelCase(title)}SvgTitle_${generateId(3)}`

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill={inverted ? "#fff" : "black"}
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      role="img"
      {...rest}
    >
      <title id={titleId}>{title}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.33002 20.2907H22.9528C23.8869 20.2907 24.6055 19.4813 24.6055 18.5247V6.89878C24.6055 5.94221 23.815 5.13281 22.8809 5.13281H2.33002C1.39589 5.13281 0.605469 5.94221 0.605469 6.89878V18.5247C0.605469 19.4813 1.39589 20.2907 2.33002 20.2907ZM1.75535 6.89875C1.75535 6.60443 2.04277 6.3101 2.3302 6.3101H22.8811C23.1685 6.3101 23.4559 6.53084 23.4559 6.89875V18.5247C23.4559 18.819 23.2404 19.1134 22.8811 19.1134H2.3302C2.04277 19.1134 1.75535 18.8926 1.75535 18.5247V6.89875ZM4.05472 16.7588V8.66477H6.35412L8.65352 11.608L10.9529 8.66477H13.2523V16.7588H10.9529V12.1231L8.65352 15.0664L6.35412 12.1231V16.7588H4.05472ZM15.0484 12.8589L18.4975 16.7588L21.9466 12.7854H19.6472V8.66477H17.3478V12.8589H15.0484Z"
      />
    </svg>
  )
}
