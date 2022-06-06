---
layout: PageLayout
addTitleSuffix: true
metaTags: []
title: Daniele D'Amico Portfolio
colors: colors-a
sections:
  - type: HeroSection
    elementId: homepage-hero-1
    title: 'Ciao sono '
    text: |
      un giovane **product designer** in costante crescita!
    actions:
      - type: Button
        label: Scrivimi
        url: /
        style: primary
        elementId: hero-main-button
      - type: Link
        label: Facciamo una call
        altText: ''
        url: /
        showIcon: false
        icon: arrowRight
        iconPosition: right
        elementId: ''
    styles:
      self:
        height: screen
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
    title2: Daniele D'Amico
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
    title: UX  e Product Design
    subtitle: Una selezione dei progetti più interessanti a cui ho lavorato
    projects:
      - content/pages/projects/project-three.md
      - content/pages/projects/project-two.md
      - content/pages/projects/project-one.md
      - content/pages/tags/projectlayout-dqskjgezt.md
      - content/pages/tags/projectlayout-8wqke584h.md
      - content/pages/tags/projectlayout-s2adadr6s.md
      - content/pages/tags/projectlayout-7p8cjgxsw.md
      - content/pages/tags/projectlayout-gquec2hcz.md
      - content/pages/tags/projectlayout-id2tmojto.md
  - type: TestimonialsSection
    colors: colors-c
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
          Daniele è una persona super affidabile e puntale con i tempi di
          consegna, per il mio sito e la mia pagina Facebook è stato molto
          professionale mi ha seguito fin da subito cercando di creare qualcosa
          di semplice ma che colpisse nel segno proprio come volevo io e non
          solo è rimasto a disposizione anche nel post-realizzazione per
          aiutarmi a continuare a far crescere la mia pagina con le giuste
          pubblicazioni! Vi assicuro che dietro al business online c'è un grande
          lavoro e Daniele è la persona giusta per potervi aiutare!
        name: Angela Cupo
        title: CMC Ricambi
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
  - type: ContactSection
    colors: colors-f
    elementId: ''
    backgroundSize: full
    title: Facciamo 4 chiacchiere?
    form:
      type: FormBlock
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: name
          placeholder: Come ti chiami?
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          placeholder: Your email
          isRequired: 'true'
          width: 1/2
        - type: TextareaFormControl
          name: message
          label: Tell me about your project
          hideLabel: true
          placeholder: Tell me about your project
          isRequired: true
          width: full
        - type: CheckboxFormControl
          name: updates
          label: Sign me up to receive updates
          isRequired: 'false'
          width: full
      submitLabel: Send Message
    media: null
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-28
          - pb-36
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      text:
        textAlign: center
---
