import ContentfulIcon from "./assets/icons/ContentfulIcon"
import CosmicjsIcon from "./assets/icons/CosmicjsIcon"
import DatocmsIcon from "./assets/icons/DatocmsIcon"
import DrupalIcon from "./assets/icons/DrupalIcon"
import MarkdownIcon from "./assets/icons/MarkdownIcon"
import MdxIcon from "./assets/icons/MdxIcon"
import WordpressIcon from "./assets/icons/WordpressIcon"

import GatsbyIcon from "./assets/icons/GatsbyIcon"

import BlogIcon from "./assets/icons/BlogIcon"
import BlogThumbnail from "./assets/thumbnails/BlogThumbnail.png"

import {
  BasePageCount,
  BaseSiteType,
  BaseContentSource,
  BaseBuildType,
} from "../../../base-constants"

export { buildTypeIds } from "../../../base-constants"

const Icons = {
  BLOG: BlogIcon,
  CONTENTFUL: ContentfulIcon,
  COSMICJS: CosmicjsIcon,
  DATOCMS: DatocmsIcon,
  DRUPAL: DrupalIcon,
  MDX: MdxIcon,
  MARKDOWN: MarkdownIcon,
  WORDPRESS: WordpressIcon,
  GATSBY_CLOUD: GatsbyIcon,
}

const Thumbnails = {
  BLOG: BlogThumbnail,
}

export const PageCount = BasePageCount

export const BuildType = BaseBuildType

export const SiteType = Object.entries(BaseSiteType).reduce(
  (acc, [key, val]) => {
    val.Icon = Icons[key] || null
    val.thumbnail = Thumbnails[key] || null
    acc[key] = val

    return acc
  },
  {}
)

export const ContentSource = Object.entries(BaseContentSource).reduce(
  (acc, [key, val]) => {
    val.Icon = Icons[key] || null
    acc[key] = val

    return acc
  },
  {}
)

export const ArtificiallySlowContentSources = {
  MARKDOWN: true,
  MDX: true,
}
