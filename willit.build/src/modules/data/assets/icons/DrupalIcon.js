import React from "react"
import { toCamelCase } from "@modules/data/utils/transformName"
import { generateId } from "../../../../utils"

export default ({
  height = 25,
  width = 25,
  inverted,
  title = `Drupal logo`,
  ...rest
}) => {
  const titleId = `${toCamelCase(title)}SvgTitle_${generateId(3)}`

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill={inverted ? "#fff" : "#2BA9E0"}
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      role="img"
      {...rest}
    >
      <title id={titleId}>{title}</title>
      <path d="M11.6579 15.5723C9.5669 15.5723 7.87109 17.2681 7.87109 19.3591C7.87109 21.4501 9.5669 23.1459 11.6579 23.1459C13.7489 23.1459 15.4447 21.4501 15.4447 19.3591C15.4447 17.2681 13.7489 15.5723 11.6579 15.5723Z" />
      <path d="M16.3751 14.8456C17.496 16.0169 18.1858 17.6049 18.1858 19.3582C18.1858 21.5786 17.0792 23.533 15.3906 24.7115C18.5164 23.7486 21.1032 21.3989 22.2601 18.5534C23.8625 14.6157 22.3679 11.6552 19.8673 8.96777C19.9463 9.31268 19.9894 9.67915 19.9894 10.0456C19.9822 12.3306 18.4589 14.2492 16.3751 14.8456Z" />
      <path d="M12.0898 10.053C12.0898 11.6554 13.3904 12.9488 14.9857 12.9488C16.5809 12.9488 17.8886 11.6482 17.8886 10.053C17.8886 8.45064 16.588 7.15723 14.9928 7.15723C13.3976 7.15723 12.0898 8.45064 12.0898 10.053Z" />
      <path d="M6.66555 23.5622C5.70986 22.4269 5.13501 20.961 5.13501 19.3586C5.13501 16.0173 7.64279 13.2652 10.8835 12.8844C10.3302 12.0796 9.99968 11.1023 9.99968 10.0532C9.99968 7.29395 12.2344 5.0664 14.9937 5.0664C15.2236 5.0664 15.4464 5.08078 15.662 5.10952C14.0308 3.70114 12.3997 2.2712 11.1135 0.711914C11.7673 7.55263 4.88351 5.0664 2.33261 11.3754C0.629619 15.6005 2.16734 20.8245 6.66555 23.5622Z" />
    </svg>
  )
}
