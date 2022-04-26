---
layout: PageLayout
metaTitle: null
metaDescription: null
addTitleSuffix: true
socialImage: null
metaTags: []
title: Empty page
colors: colors-a
backgroundImage:
  url: /images/bg2.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 80
sections:
  - type: TextSection
    colors: colors-f
    variant: variant-a
    title: This in an empty page
    text: >-
      Start adding sections by clicking the + button on the page or through the
      sidebar.
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-12
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
  - type: FeaturedProjectsSection
    colors: colors-d
    elementId: ''
    showDate: false
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    actions:
      - type: Link
        label: See all projects
        altText: See all projects
        url: /projects
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: center
    title: null
    subtitle: 'Projects:'
    projects:
      - content/pages/projects/project-one.md
      - content/pages/projects/project-two.md
      - content/pages/projects/project-three.md
---
