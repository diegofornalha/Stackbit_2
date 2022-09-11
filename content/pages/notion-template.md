---
layout: PageLayout
metaTitle: null
metaDescription: null
addTitleSuffix: true
socialImage: null
metaTags: []
title: Notion Template
colors: colors-a
sections:
  - type: TextSection
    colors: colors-f
    elementId: ''
    variant: variant-a
    text: >-
      <Script src="https://gumroad.com/js/gumroad-embed.js" />


      <div class="gumroad-product-embed"><a
      href="https://danieledamico.gumroad.com/l/easy-second-brain">Caricamento</a></div>
    styles:
      self:
        height: screen
        width: narrow
        padding:
          - pt-0
          - pb-0
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      text:
        textAlign: center
  - type: FeaturedProjectsSection
    colors: colors-f
    elementId: ''
    showDate: false
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-a
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
---
