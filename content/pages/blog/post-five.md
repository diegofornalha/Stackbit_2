---
title: 'Perchè '
colors: colors-e
layout: PostLayout
date: '2021-12-02'
author: content/data/team/doris-soto.json
excerpt: More context that may or may not be helpful
featuredImage:
  type: ImageBlock
  url: /images/featured-Image5.jpg
  altText: Post thumbnail image
bottomSections:
  - elementId: ''
    type: RecentPostsSection
    colors: colors-f
    variant: variant-d
    subtitle: Recent posts
    showDate: true
    showAuthor: false
    showExcerpt: true
    recentCount: 2
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
          - pb-56
          - pr-4
          - pl-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: center
    showFeaturedImage: true
    showReadMoreLink: true
  - type: ContactSection
    backgroundSize: full
    title: Stay up-to-date with my words ✍️
    colors: colors-f
    form:
      type: FormBlock
      elementId: sign-up-form
      destination: ''
      action: /.netlify/functions/submission_created
      fields:
        - name: firstName
          label: First Name
          hideLabel: true
          placeholder: First Name
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: lastName
          label: Last Name
          hideLabel: true
          placeholder: Last Name
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: updatesConsent
          label: Sign me up to recieve my words
          isRequired: false
          width: full
          type: CheckboxFormControl
      submitLabel: "Submit \U0001F680"
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-4
          - mr-4
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
metaTags: []
---
Notion è uno dei prodotti che più mi piace perché oltre il "prendere appunti". 

Ecco 3 cose che ti permette di fare e migliorano davvero la tua vita + 1 considerazione di product management applicato a Notion 👇👇👇

1️⃣ widget: puoi utilizzare i widget per inserire visualizzazioni live di informazioni, da altri siti web o database;

2️⃣ siti web: puoi creare dei siti web utilizzando pagine del tuo workspace Notion, con tanto di dominio personalizzato ed analytics;

3️⃣ tutto automatico: puoi automatizzare l'inserimento di informazioni nei database che hai creato sul tuo workspace senza accedere per forza a Notion.

Lo so, non sono utilizzi canonici dell'app ma dal momento in cui hanno pubblicato l'API, il team di Notion è stato autore di una mossa vincente sia in termini di soddisfazione del cliente che in termini strategici.

Credo, infatti, che proprio grazie alla pubblicazione dell'API siano stati capaci di estendere il proprio PMF tramite l'aggiunta di una feature, in pratica due cose al prezzo di una, l'essenza vera di allineamento strategico e focus.

Cosa ne pensi di queste funzioni di Notion nascoste e di questa mia considerazione?
