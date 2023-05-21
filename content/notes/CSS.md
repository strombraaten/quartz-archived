---
date: 21 May, 2023
lastmod: 21 May, 2023
tags:
  - læring
aliases:
  - 
title: "css"
---
## Egenskaper

Når du legger til en egenskap, som f. Eks `color`, med en verdi, som i `color: green;` så lager du en såkalt `declaration`, og det er altså [[notes/CSS|CSS]], og ikke [[notes/HTML|HTML]]. Et eksempel på det kan være f. eks:

```
<h1 style="color: green;">Fargerike blomster</h1>
```

Når du har valgt egenskapen du vil ha må du huske å avslutte med en kolon (`color:`), for å legge opp til verdien som skal brukes. Etter verdien må du legge til en semikolon (`color: green;`) for å avslutte deklarasjonen.

> [!hint]- Frø  🌱
>
> Det her må du nok ta med en klype salt, for denne tanken er helt i babystadiet. Det er altså godt mulig at noe av det jeg sier er feil, ufullstendig, eller at jeg ombestemmer meg ettersom jeg får tenkt mer gjennom det.
> 
> Om dette konseptet er nytt for deg kan det være nyttig å vite at i en [[notes/Digitalt hagearbeid|digital hage]] finner du notater som er i ulike [[notes/stadier av gjennomtenkthet|stadier av gjennomtenkthet]].

### Muligheter

Det er mange egenskaper der ute, eller `CSS properties`, som de heter. Om du vil endre på bakgrunnen til et element kan du f. eks bruke `background-color`. Legg merke til at det brukes bindestrek mellom to ord.

Det kan da se sånn ut:

```
<h1 style="background-color: darkGreen;">Grønn bakgrunn</h1>
```

Så lenge du avslutter med en semikolon, etter du har gitt en verdi til en spesifikk egenskap, så kan du også legge til flere, om du vil det. Som for eksempel:

```
<h1 style="color: pink; background-color: darkGreen;">Rosa skrift på grønn bakgrunn</h1>
```

Du kan legge til egenskaper på alle(?) slags elementer. Ikke bare overskrifter som jeg har brukt i det tilfellet her. Dersom du har skikkelig lyst på grønn tekst kan du f. Eks skriver:

```
<p style="color: green;">Denne teksten vil da være grønn</p>
```
