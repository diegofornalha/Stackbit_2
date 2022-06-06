---
layout: PageLayout
addTitleSuffix: true
metaTags: []
title: Daniele D'Amico Portfolio
colors: colors-a
backgroundImage:
  url: /images/bg2.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 100
sections:
  - type: HeroSection
    elementId: homepage-hero-1
    title: This Is A Big Hero Headline
    text: >-
      Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
      Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
      erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
      itae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
    actions:
      - type: Button
        label: Get Started
        url: /
        style: primary
        elementId: hero-main-button
    media:
      type: ImageBlock
      url: /images/hero.webp
      altText: Image alt text
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: FeaturedProjectsSection
    colors: colors-f
    elementId: ''
    showDate: false
    showDescription: false
    showFeaturedImage: false
    showReadMoreLink: false
    variant: variant-b
    actions:
      - type: Button
        label: View all
        url: /
        style: primary
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: center
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
      actions:
        justifyContent: center
    title: Featured
    subtitle: Featured projects section example
    projects:
      - content/pages/projects/project-three.md
      - content/pages/projects/project-two.md
      - content/pages/projects/project-one.md
      - content/pages/tags/projectlayout-dqskjgezt.md
---
