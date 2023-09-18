---
date: 09 Sep, 2023
lastmod: 09 Sep, 2023
tags:
  - læring
  - oversikt
aliases: 
title: Typescript
---
Okei, her er det bare å ta et dypt pust og sette i gang.

## Hva veit jeg så langt?

### Sammenhengen til Javascript

Du kan ikke snakke om Typescript uten å nevne [[notes/Javascript|Javascript]]. Typescript er nemlig en "strengere" variant av [[notes/Javascript|Javascript]]. Med "strengere" så mener jeg at det er tydeligere regler på hva som er greit, og hva som ikke er greit, mens med [[notes/Javascript|Javascript]] er det mer flytende og dynamisk. Det kan by på problemer dersom du skal sette deg inn i en stor mengde kode som du ikke har skrevet sjøl, og verdiene av en variabel endres utover i koden, uten noe særlig godt grunnlag f. eks.

Skal sies at det sikkert finnes bedre eksempler enn akkurat det der, men det er det eneste jeg kjenner til for øyeblikket.

Siden det henger såpass tett sammen med [[notes/Javascript|Javascript]] (JS) så betyr det at alt du lærer deg om JS vil også hjelpe deg med å forstå Typescript. Det vil si at hvis du sliter med et problem med Typescript, men klarer ikke å finne svaret på det, så er det godt mulig at du kan finne svaret gjennom å søke på lignende problemer med Javascript.

> [!hint]- Frø  🌱
>
> Det her må du nok ta med en klype salt, for denne tanken er helt i babystadiet. Det er altså godt mulig at noe av det jeg sier er feil, ufullstendig, eller at jeg ombestemmer meg ettersom jeg får tenkt mer gjennom det.
> 
> Om dette konseptet er nytt for deg kan det være nyttig å vite at i en [digital hage](notes/digitalt%20hagearbeid.md) finner du notater som er i [ulike stadier av gjennomtenkthet](notes/stadier%20av%20gjennomtenkthet.md).

### Særegenheter og finurligheter

Alle kodespråk har sine finurligheter, og det vil være lettere å forstå bakgrunnen for de finurlighetene når du kjenner til historien til kodespråket. I [[notes/Javascript|Javascript]] sitt tilfelle blei det opprinnelig brukt i veldig små mengder på en nettside, og siden det var så små mengder så blei det utført ganske sakte av nettleserne på den tida. Ettersom språket blei mer og mer populært derimot så blei det brukt i større grad, som krevde en effektivisering av hvordan koden blei tolka (*dynamic compilation*), og hva man kunne gjøre med det (som å legge til APIer). Siden [[notes/Javascript|Javascript]] som et språk blei designa med på tanke på mindre formål, og har nå vokst til å være et språk som brukes til å skrive applikasjoner med enorme mengder kode, så er det mange finurligheter som du kan snuble over.

## Funker det her a?

En av fordelene med Typescript er at du får beskjed om noe funker eller ikke, mens du skriver koden din. Så du trenger ikke å lure på om det kommer til å fungere eller ikke, fram til du faktisk kjører koden. Du får heller beskjed mens du skriver det. Såvidt jeg har skjønt.

Her er det riktignok en forskjell mellom *static checking* og *static **type** checking*. 

*Static checking* klarer jeg ikke beskrive sjøl, men det beskrives sånn her:

>Detecting errors in code without running it is referred to as _static checking_.

*Static type checking* derimot gir deg en melding basert på verdiene (og variablene?) du har definert.

```
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;
```

Den koden vil lede til denne feilmeldinga:

> [!warning] Property 'heigth' does not exist on type '{ width: number; height: number; }'. Did you mean 'height'?

Feilmeldinga dukker altså opp fordi selve *typen* av variabelen som heter `obj` er stavet feil – `heigth` i stedet for `height`.

## Spilleregler

Siden Typescript er basert på [[notes/Javascript|Javascript]] så betyr det at de deler samme [[notes/Syntaks er nok mer spennende enn du tror|syntaks]], eller de samme spillereglene foråsirresånn. Det som er grei oppførsel i [[notes/Javascript|Javascript]] er mer eller mindre greit i Typescript og ut fra måten du skriver koden din. Forskjellen derimot er at Typescript legger til noen regler om hvordan ulike typer variabler kan brukes. Som i eksempelet over, hvor det er en type verdi som er stavet feil.

---

## Ressurser for å lære mer

- [Dokumentasjonen til Typescript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- 
