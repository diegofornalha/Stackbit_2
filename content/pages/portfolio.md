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
    colors: colors-e
    elementId: ''
    showDate: false
    showDescription: false
    showFeaturedImage: false
    showReadMoreLink: false
    variant: variant-b
    actions: []
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
          Daniele è una persona super affidabile e puntale con i tempi di
          consegna, per il mio sito e la mia pagina Facebook è stato molto
          professionale. 


          Mi ha seguito fin da subito cercando di creare qualcosa di semplice ma
          che colpisse nel segno proprio come volevo io e non solo è rimasto a
          disposizione anche nel post-realizzazione per aiutarmi a continuare a
          far crescere la mia pagina con le giuste pubblicazioni! 


          Vi assicuro che dietro al business online c'è un grande lavoro e
          Daniele è la persona giusta per potervi aiutare!
        name: Angela Cupo
        title: CMC Ricambi
        image:
          type: ImageBlock
          url: /images/person-3.jpg
          altText: Johnna Doe
      - quote: >
          Ho iniziato a lavorare insieme a Daniele nel team marketing e
          comunicazione in CybeRefund, una startup Insurtech.

          Daniele in poco tempo ed è diventato un UX Designer e Product Designer
          in grado di trovare soluzioni sempre creative, soddisfando le
          richieste dei vari organi aziendali.



          Ha collaborato infatti con Product Managers e Developers per integrare
          di innovazioni i nuovi e già presenti prodotti.



          Posso dire di aver imparato molto dalle sue approfondite competenze
          organizzative e dagli strumenti suggeriti, migliorando la qualità
          della mia produttività.



          Daniele è sicuramente una risorsa essenziale per un team.



          Condivide sempre idee originali e processi creativi inaspettati e
          innovativi, in grado di aggiungere valore etico e morale in qualunque
          ambiente professionale fisico o digitale.
        name: Federica Arcangeli
        title: Customer Service Manager
        image:
          type: ImageBlock
          url: /images/person-2.jpg
          altText: John Doe
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
          placeholder: Qual è il tuo indirizzo email?
          isRequired: true
          width: full
        - type: TextareaFormControl
          name: message
          label: Come mai vuoi parlare con me?
          hideLabel: true
          placeholder: Come mai vuoi parlare con me?
          isRequired: true
          width: full
      submitLabel: Facciamo una call!
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
