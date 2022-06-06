---
layout: PageLayout
addTitleSuffix: true
metaTags: []
title: Daniele D'Amico Portfolio
colors: colors-a
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
    subtitle: Featured projects section example
    projects:
      - content/pages/projects/project-three.md
      - content/pages/projects/project-two.md
      - content/pages/projects/project-one.md
      - content/pages/tags/projectlayout-dqskjgezt.md
      - content/pages/tags/projectlayout-8wqke584h.md
      - content/pages/tags/projectlayout-s2adadr6s.md
      - content/pages/tags/projectlayout-7p8cjgxsw.md
      - content/pages/tags/projectlayout-gquec2hcz.md
  - type: TestimonialsSection
    colors: colors-d
    elementId: ''
    variant: variant-b
    title: null
    subtitle: null
    testimonials:
      - quote: >
          "Our website is the core of our sales strategy. Doris helped us
          establish an easy-to-maintain Stackbit site with outstanding visuals!"
        name: John Doe
        title: CEO at Parks
        image:
          type: ImageBlock
          url: /images/person-2.jpg
          altText: John Doe
      - quote: >
          “Anytime I have a question, I know I can get in touch with Doris. She
          always helps me adjust my site to look as perfect as I’d hoped.”
        name: Johnna Doe
        title: Product Marketing Manager at Acme
        image:
          type: ImageBlock
          url: /images/person-3.jpg
          altText: Johnna Doe
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
---
