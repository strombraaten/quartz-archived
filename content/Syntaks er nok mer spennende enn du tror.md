---
date: 04 Mar, 2023
lastmod: 29 Apr, 2023
tags:
  - oversikt
aliases:
  - notes/syntaks/
  - syntaks
title: "Syntaks er nok mer spennende enn du tror"
---
Syntaks er et ord jeg utelukkende forbinder med programmering, med kode. Med andre ord, ting jeg ikke kan.

Som designer derimot er det naturlig at mange av samtalene mine i løpet av en dag, er med de folka som får designet til å funke – nemlig utviklere (som skriver kode). Og de, de forholder seg til syntaks! Jeg derimot, gjør ikke det. Or so I thought.

> [!hint]- Blomst 🪴
>
> Detta er en tanke jeg har kommet tilbake til gjentatte ganger, og bearbeida videre for å gi mening i mitt eget liv. Det betyr ikke at den er "ferdig" for alltid, men heller at det er noe jeg kan stå for.
> 
> Om dette konseptet er nytt for deg kan det være nyttig å vite at i en [[notes/digitalt hagearbeid|digital hage]] finner du notater som er i ulike [[notes/stadier av gjennomtenkthet|stadier av gjennomtenkthet]].

## Alt starta med en Aha-opplevelse på side 56

For da jeg satt i senga her forleden dag, og leste i boka [The Shallows](https://www.goodreads.com/book/show/9778945-the-shallows?ref=simen-skriver) på morgenkvisten, fikk jeg en aha-opplevelse på side 56. Forfatteren, [Nicholas Carr](https://www.nicholascarr.com/?ref=simen-skriver), har gitt meg mange sånne øyeblikk, men denne gangen handla det altså om syntaks.

Denne gangen derimot i en mer kjent sammenheng, nemlig språk. Ikke programmeringsspråk, som Javascript, C#, HTML, CSS også videre. Neida. I denne sammenhengen var det latin, engelsk, og gjennom mine refleksjoner om det, også norsk.

### Men hvordan er det relevant for deg?

Syntaks for hvermansen er alle de reglene som vi tar helt for gitt. Bare tenk deg hvor mye lettere det er å lese _denne_ setningen, sammenligna med "HVORMYELETTEREDETERÅLESEDENNESETNINGEN".

Men hva er egentlig forskjellen der? Mellom de to setningene.

1.  Stor forbokstav (for å indikere starten av setningen)
2.  Bruk av mellomrom (for å skille ordene fra hverandre)

Og om det hadde blitt flere setninger ville også punktsetting utgjort nok en essensiell forskjell. For sånt dreiv man ikke med på den tida.

Dette kalles "_[scriptio continua](https://www.quora.com/How-could-people-distinguish-words-written-in-scriptio-continua?ref=simen-skriver)_", og var sånn det skriftlige språket så ut i sin tidligste form.

## Et kjapt blikk på historien til skriftspråk

Tanken bak _scriptio continua_ var tilsynelatende at det skulle etterligne hvordan vi snakker muntlig – som en kontinuerlig flyt av ord som kommer etter hverandre. For når du snakker går lyden av ett ord inn i lyden av et annet ord, uten pauser.

Det er også derfor folk flest, i skriftspråkets spede begynnelse, leste høyt. Nettopp for å høre den kontinuerlige flyten av ord, for å forstå hva det var snakk om.

Du lurer kanskje på når i verdenshistorien det her foregikk, sånn omtrent. Det gav meg riktignok flere spørsmål enn svar, men kort fortalt var det mellom år 750 før Kristus og fram til cirka år 700 _etter_ Kristus.

Da regner vi fra grekerne oppfant det første alfabetet, med bokstaver som gjenskaper lyder, og fram til menneskeheten begynte med det vi anser som helt normal setningsoppbygning den dag i dag.

### Lesing var ikke for hvem som helst

Det her førte jo til at det var helsikkes vanskelig å lese noe i det hele tatt. Og dermed var det også få folk i et samfunn som faktisk kunne lese, fordi det var både tidkrevende og vanskelig å forstå hva som stod der. For det var neimen ikke lett å vite hvor ett ord starta, og et annet ord slutta.

Nicholas Carr skriver at å lese på denne tida var mer som å løse et kryssord. Siden du i stor grad måtte forstå hva slags rolle et ord spilte i den større helheten du hadde foran deg. Og det er jo klart at ikke hvermansen har tid til å prioritere sånt, så da blei det et slags "kunnskaps-gap" i befolkninga.

Det er her syntaks kommer inn i bildet.

### Hvordan vi lærte å forstå hverandre

For i det vi beveger vårs utover 1000-tallet, blei det vanlig for flere og flere å skrive, og da blei det også gradvis innført noen regler. Og det hele startet med mellomrommet. Innen 1300/1400-tallet er scriptio continua mer eller mindre historie.

Grunnen til at vi forholder vårs til syntaks er for å gjøre det lettere for andre å forstå hva vi skriver. Det fungerer riktignok bare så lenge vi bruker samme språk.

## Praktiske eksempler

Nylig skulle jeg skrive noen kommentarer i koden til [håndboka vår i Variant](https://handbook.variant.no/?ref=simen-skriver), og på mitt primitive vis skreiv jeg `/*` for å starte kommentaren min, og `*/` for å avslutte den. Lite visste jeg om hvorfor det ikke fungerte, før jeg fikk beskjed om at det var ikke sånn man "definerte" en kommentar i det tilfellet. Syntaksen i det kodespråket var nemlig annerledes.

Jeg hadde lært meg bittelitt Javascript, og tenkte at "kommentarer er da kommentarer", men reglene som blei brukt i denne sammenhengen var noe annet.

Det blir som når du skal skrive ordet postkasse på norsk, hvor det er sammensatt av to ord, og skrives uten mellomrom, mens det på engelsk deles i to, og skrives som "mail box".

### Syntaks i kode

Overskriften du ser over her, eller _mellomtittelen_ som vi også kan se på det som, er skrevet med _[Markdown](https://daringfireball.net/projects/markdown/syntax?ref=simen-skriver)_-syntaksen.

Markdown kan jeg nok definitivt skrive mer om seinere, men for øyeblikket kan jeg nevne at alle artiklene mine er skrevet på den måten. Det er sånn jeg sørger for at de orda jeg har "definert" som en overskrift også _forblir_ en overskrift når jeg flytter teksten fra notatprogrammet til nettleseren, hvor skriveriet publiseres.

### Hva betyr det helt konkret?

Når det kommer til en sånn overskrift, eller mellomtittel som jeg refererte til istad, så skriver jeg tre `#-symboler` før selve ordene som utgjør overskriften. Det kalles en "Heading level 3", siden det er den tredje største overskriften. Hvordan tror du at du skriver den største overskriften i så fall?

![[Pasted image 20230303171233.png]]

Jo, "Heading level 1" har kun ett `#-symbol`, og brukes til tittelen på hele artikkelen (eller nettsida/appen). Den nest største overskriften, som jeg gjerne bruker på mellomtitlene her har tre # -symboler. Og sånn kan du fortsette videre nedover i hierarkiet.

Det er syntaks i Markdown. En liten del av den iallefall. Og beleilig nok er det også det samme i blant annet HTML.

### Så hva er syntaks, sånn egentlig?

Syntaks er altså et sett med regler. Det er struktur. Det er hvordan vi formaterer tekst for å gjøre det mer forståelig for andre

Det er som å føye seg etter kulturelle regler. De fleste av vårs ville ikke prompa høylydt mens du sitter i en stille kinosal. Når du ser på film hjemme aleine derimot så tenker du ikke over at du gjør det en gang.

Det er tegnet på "regler" som er innarbeida over tid, og sånn sett kan du si at syntaks er noe vi forholder vårs til hele tida. Selv om ordet i seg sjøl er fremmed for mange av vårs, meg sjøl inkludert.

Fram til den aha-opplevelsen på side 56.

---

_Boka ["The Shallows"](https://www.goodreads.com/book/show/9778945-the-shallows?ref=simen-skriver) handler forøvrig om hvordan internett påvirker hjernen vår. Det som er utrolig fascinerende, spør du meg, er at forfatteren sammenligner hvordan hjernen vår har blitt påvirka av andre teknologier også. Som f. eks introduksjonen av kart, og ikke minst å se på tid i form av timer, minutter og sekunder, i stedet for bare soloppgang og solnedgang._
