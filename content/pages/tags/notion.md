---
layout: ProjectLayout
metaTitle: null
metaDescription: null
addTitleSuffix: true
socialImage: null
metaTags: []
title: Notion
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg2.jpg
date: '2022-05-03'
description: >-
  Nunc rutrum felis dui, ut consequat sapien scelerisque vel. Integer
  condimentum dignissim justo vel faucibus.
bottomSections:
  - type: FeaturedPostsSection
    colors: colors-f
    elementId: ''
    showDate: false
    showAuthor: false
    showExcerpt: false
    showFeaturedImage: true
    showReadMoreLink: false
    variant: variant-c
    actions: []
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
    subtitle: Featured blog posts section example
    posts:
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
      - content/pages/blog/post-one.md
  - type: FeaturedPostsSection
    colors: colors-f
    elementId: ''
    showDate: true
    showAuthor: false
    showExcerpt: true
    showFeaturedImage: false
    showReadMoreLink: true
    variant: variant-c
    actions:
      - type: Link
        label: See all posts
        altText: See all posts
        url: /blog
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
        justifyContent: flex-end
    title: 'Posts:'
    subtitle: null
    posts:
      - content/pages/blog/post-five.md
      - content/pages/blog/post-four.md
      - content/pages/blog/post-three.md
---
