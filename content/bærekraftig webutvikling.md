---
date: 2023-05-29
lastmod: 2023-05-29
title: Bærekraftig webutvikling
tags:
  - bærekraft
---
Hva betyr bærekraft i sammenhengen av å lage digitale greier? Det er et spørsmål jeg har tenkt en del på, og som jeg prøver å forstå i større grad.

Her er det nemlig flere faktorer som spiller inn, som kan gjøre det vanskelig å beholde fokus på hva man prøver å oppnå. Så hva er det man egentlig prøver å oppnå? Utover det å lage en god brukeropplevelse, og at det skal treffe visse forretningsmål, så er det to ting man vil oppnå:
1. Begrense karbonutslippet til tjenestene du lager
2. Gå fram som et godt eksempel for hvordan vi kan lage bærekraftige digitale greier. 

> [!hint]- Frø  🌱
>
> Det her må du nok ta med en klype salt, for denne tanken er helt i babystadiet. Det er altså godt mulig at noe av det jeg sier er feil, ufullstendig, eller at jeg ombestemmer meg ettersom jeg får tenkt mer gjennom det.
> 
> Om dette konseptet er nytt for deg kan det være nyttig å vite at i en [digital hage](digitalt%20hagearbeid.md) finner du notater som er i [ulike stadier av gjennomtenkthet](stadier%20av%20gjennomtenkthet.md).

Så hvordan kan du gjøre det? Jeg tenker jeg bare starter det hele med å gi deg en punktliste med en gang, så kan du heller lese videre for å få en bedre forståelse for de ulike grepene.

## Hva kan du gjøre?

Som et utgangspunkt baserer jeg det her på "The low impact manifesto", som jeg også kommer til å nevne seinere, men jeg håper også på å kunne utdype denne lista ettersom jeg lærer mer og mer. For om du lager en nettside f. eks så er det flere grep du kan ta:

1. Informer folk om "kostnaden" av bruken deres, sånn at man faktisk har et bevisst forhold til klimaaspektet av å bruke digitale greier
2. Begrens energibruken som kreves for å laste inn sida di på telefonen/tableten/dataen til personen i andre enden
4. Komprimer filer så godt du kan
3. Ikke bruk filmer som spilles av automatisk, og vurder om du trenger filmer i det hele tatt
5. Begrens bruken av skrifttyper som må lastes inn eksternt
6. Vær bevisst over hva som lastes inn, med tanke på "scripts, frameworks and cookies"
7. Ikke last inn bilder før brukeren har spesifikt bedt om det
	1. Det starter riktignok med hvordan selve brukeropplevelsen lages, at det skal være en naturlig handling, så det ligger vel så mye på designeren som på utvikleren
8. "Adapt (the content) to reflect the amount of renewable energy it's currently running on" (sitat)

Du kan forresten se hele [kildekoden til "the low impact website" på github](https://github.com/Organic-Basics/ob-low-impact-website).

## Hva vil du unngå?

Du vil unngå at at nettsida di skal være "tung å laste", men hva vil det egentlig si? Jo, du vil begrense den totale filstørrelsen som mottakeren må laste ned på sin ende for å kunne se innholdet ditt. Kort forklart. Det påvirker nemlig strømforbruket som kreves for å vise nettsida di.

En annen part som spiller inn der er også hvor strømmen kommer fra. Om serverne forsynes med strøm som kommer fra gass- og kull, eller om det er vannkraft f. eks. Det kan du faktisk sjekke på [The Green Web Foundation](https://www.thegreenwebfoundation.org/).

Men hva er det som påvirker "tyngden" av nettsida di? Hva som kan gjøre den "tung å laste" inn eller ned? En åpenbar ting er størrelsen på bildefilene du bruker. Om jeg tar et bilde med telefonen f. eks (en iPhone 13 mini) så blir størrelsen på bildefila mellom 2-4 megabyte, og størrelsen på et stående bilde er 3024  ×  4032 pixler. Er det strengt talt nødvendig? Nei. Svaret er nei.

Du kan fint komprimere et bilde ned til noen få hundre kilobyte, og f. eks 1000 pixler i makslengde/bredde uten at det påvirker kvaliteten i for stor grad.

> [!NOTE]- Forbedringspotensiale
>
>*Her kunne jeg nok vist et eksempel på for å gjøre det enda tydeligere, men det kan jeg komme tilbake til hvis du vil det.*

### Effektiviteten av ulike kodespråk

Nå beveger jeg meg ut på tynn is, så gjerne korriger meg om jeg tar feil, men såvidt jeg veit så vil en side som kun er basert på enkel [[notes/HTML|HTML]] og [[notes/CSS|CSS]], med noen tekstfiler i [[Markdown]], sees på som en lettvekter i internettverden.

Når du derimot introduserer mer javascript så kan energibruken begynne å balle på seg. For når man skal være mer fancy, som f. eks med [[notes/den interaktive grafen|den interaktive grafen]] jeg har på forsida, så vil det også kreve mer å gjenskape det når du ser det.

### Disclaimer

Energibruken er riktignok bare én side av saken. For en annen del som spiller inn er også **hvor lite kode du kan klare deg med** – altså hvor effektivt er det skrevet.

For jeg har faktisk kikka litt på hva som inngår i "bærekraftig utvikling". Eller hva man kan ha i bakhodet for å gjøre nettsider mer bærekraftige. Og da er det jo som du sier flere faktorer som spiller inn, og at dark mode på sett og vis blir mer overfladisk.

## Hva er fordelene med bærekraftig utvikling?

Utover det at du bidrar i en positiv klimaretning så vil jeg trekke fram noe som en tidligere kollega av meg nevnte:

> *Det som er interessant med utvikling sånn sett er jo at det meste vi gjør, vil vi jo skal være raskt.. For at det skal være raskt så må vi jo optimalisere ting, og ringvirkningen er jo at energy impact blir lavere*

## Gode eksempler

### Low-tech magazine

[Low-tech magazine](https://www.lowtechmagazine.com/) er kanskje det aller beste eksempelet jeg veit om. Både med tanke på konseptet, men også hvordan det er gjennomført.

![[bærekraftig webutvikling-1685367041996.jpeg]]

Hele sida kjører nemlig på strømmen til et solcellepanel som befinner seg på kontoret til han ene som lager det. Det vil også si at den ikke vil fungere i blant, siden Barcelona har noen dager i ny og ne hvor det ikke er nok sol som slipper til. Om du vil så kan du [lese mer om hvordan Low-tech Magazine er lagd](https://solar.lowtechmagazine.com/about.html).

### En lav-utslipps-nettbutikk

Nettbutikken OrganicBasics har to versjoner av sida si, en ["typisk nettbutikk"-versjon](https://organicbasics.com/), og en ["lav-utslipp"-versjon](https://lowimpact.organicbasics.com/eur/collections/all-womens-products), som dessverre ikke funker for øyeblikket, men du kan iallefall få en bedre forståelse av valgene de har gjort:

> *The Low Impact version of our website reduces the carbon emissions associated with online shopping by up to 70% in comparison to our regular site. This is done by getting rid of most of the data-heavy elements like images and videos.*

### Det enkleste eksempelet av dem alle

En side som setter det hele veldig på spissen er https://motherfuckingwebsite.com/. Her er det ikke noe snikk-snakk, kun en enkel, responsiv, og på mange måter bærekraftig nettside.

## Hva er det som gjør det så vanskelig?

Kort fortalt så er det bare ufattelig mange perspektiver å ta hensyn til. For som en kompis av meg nevnte, så kan man diskutere fram og tilbake om [verdien av dark mode](https://endtimes.dev/actually-dark-mode-can-save-the-world/), men at du glemmer å tenke helhetlig, og kjører nettsida di på servere som får strømmen sin fra kull og gass. Da går vel vinninga opp i spinninga, som dem sier.

### Maskinkraft og menneskekraft

Du kan egentlig trekke det her ganske langt, for si at du skal digitalisere en prosess av noe slag. La vårs bruke en forenkla saksbehandling som eksempel. Da har du to alternativer.

Enten kan du logge deg inn på en nettside, laste ned et dokument, signere det digitalt, og laste det opp igjen, hvor systemet automatisk bekrefter at det er mottatt. Eller så kan du få et dokument tilsendt i posten, skrive under med penn på papir, og sende det i retur til annet sted i landet, som da bekreftes av en person i andre enden.

Hvordan sammenligner du karbonutslippet mellom de to prosessene?

### Strømforbruk

Det er vel og bra om nettsida di kjøres på servere med fornybar energi, og optimalt sett [kjøles ned basert på naturlige omgivelser](https://greenmountain.no/data-centers/cooling/) (luft og vann), men hva med mottakeren?

Her er det veldig mulig at jeg tar feil, så gjerne korriger meg, men du kan jo ikke kontrollere at mottakerens telefon eller data forsynes av fornybar energi. Eller kan du det?

Jeg har prøvd meg på en forenkla forklaring av hvordan noe sendes fra en server, eller datasenter, til deg som en slags sluttbruker. Men jeg veit ikke helt om det gir mening. Derfor starter jeg med poenget, også er du hjertelig velkommen til å hoppe over forklaringa, om du vil.

### Hva er det jeg vil fram til?

Poenget mitt er at man kan presisere hvor informasjon skal hentes fra.

Det betyr at om du ser på nettsida mi så kan jeg hypotetisk sett spesifisere at den informasjonen skal sendes til deg via de nærmeste serverne (basert på hvor du er) som er forsynt med fornybar energi. Det er iallefall min forståelse basert på det jeg har lest i denne artikkelen, om hvordan man kan bruke for "[containers for sustainable software-engineering](https://increment.com/containers/containers-for-sustainable-software-engineering/)"

### Fortell mer, er du grei.

Har du noen gang tenkt over hvordan du kan streame en film på Netflix uten at det hakker Filmen spilles jo av helt sømløst, uten problemer. For å forstå det må vi bare kjapt innom hvordan streaming fungerer, og igjen er det veldig mulig at jeg sier feil, men jeg gir det et forsøk.

Om du filmer noe på telefonen din så vil du også kunne spille det av uten problemer. Det vil ikke hakke, eller bufre/laste, selv om du ikke har internettdekning. Nettopp fordi filmen er lagra på telefonen din.

Det samme gjelder hvis du har hatt en film lagra på en ekstern harddisk. Så lenge harddisken er kobla til så går alt bra. Når vi snakker om streaming derimot så blir det litt som å ha en film på en harddisk som er kobla til internett. Bare at filmen ligger ikke på én harddisk, den ligger på mange harddisker, fordelt rundt omkring på ulike steder. Se for deg utallige harddisker stabla oppå hverandre, i en enorm lagerhall. Det er da vi snakker om et datasenter. En server er mer enn bare en harddisk kobla til internett, men det trenger vi ikke gå inn på nå.

Når du altså streamer en serie på dataen din så spør du Netflix: "*Hei! Kan jeg få se på Parks and Recreation, mer spesifikt episode 3 av sesong 4?*". Deretter sier Netflix, "Såklart! Her har du alle byggeklossene du trenger. Kos deg!". Hva mener jeg med byggeklosser, lurer du kanskje på? Jo, for at det ikke skal oppleves treigt så sender ikke Netflix deg hele filmen med en gang. For det ville tatt altfor lang tid. Derimot så brytes det ned i mange små byggeklosser (eller datapakker som det egentlig kalles), som settes sammen når det kommer fram til dataen din. 

Deretter får du se øyeblikk for øyeblikk. Ikke en 21-minutters episode, men heller det som skjer sekund for sekund, også sendes det nye byggeklosser hele tida. Det hadde i grunn vært interessant å vite hva som er den gjennomsnittlige varigheten på én datapakke. På den måten begrenses risikoen for at det skal hakke, fordi internettilkoblinga di ikke er kjapp nok til å vise alt på en gang.

Derfor presiserer Netflix at du skal få byggeklossene dine fra harddisker som er i nærheten av der du er akkurat nå. Eller fra det datasenteret som er nærmest deg. Igjen, for å sørge for at filmen ikke skal hakke akkurat når Ron Swanson er midt i en glimrende punchline.

## Avslutning

Som du skjønner så er det mange ting å tenke på, og det stopper egentlig ikke der heller. Men hvordan kommer vi til et punkt som er godt nok? Hva kan vi si vårs fornøyd med å ikke vite, og hvordan finner vi ut av det som er helt nødvendig?

Jeg tror det er spørsmålet vi må stille vårs. I stedet for å ha en komplett utregning av alle mulig variabler, som skal tilfredsstille alle perspektiver.
