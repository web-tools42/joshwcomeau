import React from "react"

import Hero from "@modules/landing/components/Hero"
import Explainer from "@modules/landing/components/Explainer"
import MaxWidthWrapper from "@modules/ui/components/MaxWidthWrapper"
import BuildCardsGroup from "@modules/landing/components/BuildCardsGroup"
import { SEO } from "@modules/seo/components/SEO"

const Index = () => {
  return (
    <MaxWidthWrapper>
      <SEO
        title="Gatsby Build Benchmarks"
        description="Compare historical build times of Gatsby example sites built on Gatsby Cloud, with data sourced from popular CMS (Content Management System) providers."
      />
      <Hero />
      <Explainer />
      <BuildCardsGroup />
    </MaxWidthWrapper>
  )
}

export default Index
