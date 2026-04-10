export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  category: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "hvad-koster-en-tolk",
    title: "Hvad koster en tolk? Priser og prismodeller forklaret",
    excerpt:
      "Prisen på tolkeydelser varierer afhængigt af sprog, tolketype og varighed. Vi gennemgår de mest almindelige prismodeller, så du kan budgettere korrekt og undgå overraskelser.",
    date: "2026-03-15",
    category: "Priser",
    content: [
      "Når du skal bestille en tolk for første gang, er det naturligt at spørge: hvad koster det egentlig? Svaret afhænger af flere faktorer, herunder hvilket sprog der tolkes, hvilken tolkningsform du vælger, og hvor lang opgaven er. I Danmark ligger timeprisen for fremmødetolkning typisk mellem 500 og 1.200 kr. ekskl. moms, mens telefon- og videotolkning ofte er billigere, fordi der ikke er transporttid og -omkostninger involveret.",
      "De fleste tolkebureauer opererer med én af tre prismodeller. Den mest udbredte er timepris, hvor du betaler for den faktiske tid tolken er til rådighed – ofte med et minimumsforbrug på 1-2 timer. Derudover tilbyder flere bureauer minutafregning ved telefontolkning, hvilket er ideelt til korte samtaler på under 30 minutter. Endelig findes der faste projektpriser ved større opgaver som konferencetolkning eller fleretages retssager, hvor bureauet giver et samlet tilbud baseret på opgavens omfang.",
      "Sproget har stor betydning for prisen. Almindelige europæiske sprog som engelsk, tysk og fransk er generelt billigere end sjældnere sprog som dari, tigrinya eller somali. Det skyldes ganske enkelt udbud og efterspørgsel: der er færre certificerede tolke i de sjældnere sprog, og efterspørgslen er ofte høj inden for offentlige instanser som kommuner, hospitaler og retsvæsen. Specialiserede fagområder som jura og medicin er også dyrere, fordi tolkene skal have dokumenteret ekspertise.",
      "Transportomkostninger er en faktor, der ofte overses. Ved fremmødetolkning vil mange bureauer tillægge kørselstid og -godtgørelse, særligt hvis opgaven ligger uden for de store byer. Det er derfor, telefon- og videotolkning er blevet markant mere populært de seneste år – du sparer ikke bare penge, men også ventetid og logistik. Hos Tolk360 tilbyder vi altid et gennemsigtigt tilbud, så du kender den præcise pris, før opgaven starter.",
      "Vores anbefaling er at indhente tilbud fra flere bureauer og sammenligne ikke kun prisen, men også kvaliteten af tolkene, bureauets certificeringer og responstiden. Det billigste tilbud er ikke altid det bedste – en dygtig tolk kan spare dig for misforståelser og fejl, der i sidste ende koster langt mere end prisforskellen. Kontakt os for et uforpligtende tilbud, der er tilpasset netop din situation.",
    ],
  },
  {
    slug: "forskellen-paa-tolkningstyper",
    title:
      "Forskellen på fremmødetolkning, telefontolkning og videotolkning",
    excerpt:
      "Hvilken tolkningsform passer bedst til din situation? Vi sammenligner fremmøde-, telefon- og videotolkning og hjælper dig med at vælge den rigtige løsning.",
    date: "2026-02-28",
    category: "Tolkningstyper",
    content: [
      "Der findes tre hovedtyper af tolkning, som dækker langt de fleste behov i Danmark: fremmødetolkning, telefontolkning og videotolkning. Hver type har sine styrker og begrænsninger, og det rette valg afhænger af samtalens karakter, de involveredes behov og de praktiske omstændigheder. At vælge den forkerte tolkningsform kan betyde tab af nuancer, lavere effektivitet eller unødvendigt høje omkostninger.",
      "Fremmødetolkning er den klassiske form, hvor tolken møder fysisk op på lokationen – det kan være i retten, på hospitalet, til et kommunalt møde eller ved en forretningsforhandling. Fordelen er, at tolken kan aflæse kropssprog, ansigtsudtryk og stemningen i rummet, hvilket giver en mere præcis og nuanceret tolkning. Det er særligt vigtigt i følsomme situationer som psykologsamtaler, retssager og læge-patient-konsultationer, hvor nonverbal kommunikation spiller en stor rolle.",
      "Telefontolkning er den hurtigste løsning. Hos de fleste bureauer kan du få en telefontolk inden for få minutter, hvilket gør det ideelt til akutte situationer som skadestuebesøg, borgerhenvendelser eller uventede møder med fremmedsprogede. Telefontolkning afregnes ofte per minut, så det er også den mest økonomiske løsning til korte samtaler. Ulempen er, at tolken ikke kan se parterne, hvilket kan gøre det sværere at tolke i komplekse eller følelsesladede samtaler.",
      "Videotolkning kombinerer mange af fordelene ved fremmøde- og telefontolkning. Tolken kan se parterne via kamera, hvilket muliggør aflæsning af mimik og kropssprog, samtidig med at der ikke er nogen transporttid. Det kræver dog stabilt internet og det rette udstyr. Videotolkning er blevet særdeles populært siden 2020, og mange offentlige institutioner har nu fast aftale med tolkebureauer om videotolkning til standardsamtaler.",
      "Vores anbefaling er enkel: Brug fremmødetolkning til komplekse, følsomme eller juridisk bindende samtaler. Vælg telefontolkning, når det haster, eller ved korte, ukomplicerede henvendelser. Og brug videotolkning som et alsidigt mellemvalg, der giver en god balance mellem kvalitet, pris og fleksibilitet. Hos Tolk360 tilbyder vi alle tre former og hjælper dig gerne med at vælge den løsning, der passer bedst til dit behov.",
      "Det er værd at huske, at kvaliteten af tolkningen ikke kun afhænger af formen, men i høj grad af tolkens kompetencer og erfaring. En certificeret tolk med faglig viden inden for det relevante område vil altid levere et bedre resultat end en ukvalificeret tolk – uanset om det er fremmøde, telefon eller video.",
    ],
  },
  {
    slug: "saadan-vaelger-du-tolkebureau",
    title: "Sådan vælger du det rigtige tolkebureau",
    excerpt:
      "Markedet for tolkeydelser er stort, og kvaliteten varierer. Her er de vigtigste kriterier, du bør kigge efter, når du vælger tolkebureau til din virksomhed eller institution.",
    date: "2026-02-10",
    category: "Guide",
    content: [
      "At vælge det rigtige tolkebureau kan have stor betydning for kvaliteten af kommunikationen, og i mange tilfælde kan det have juridiske og menneskelige konsekvenser. I Danmark findes der hundredvis af tolkebureauer, men kvaliteten varierer markant. Nogle bureauer arbejder udelukkende med certificerede tolke, mens andre anvender ukvalificerede tolke til selv komplekse opgaver. Det er derfor afgørende at vide, hvad du skal se efter.",
      "Det første kriterium bør være tolkenes kvalifikationer. Spørg bureauet, om deres tolke er uddannede og certificerede – f.eks. statsautoriserede translatører eller tolke med beståede prøver fra Styrelsen for International Rekruttering og Integration (SIRI). Et seriøst bureau kan dokumentere deres tolkes kompetencer og matcher den rette tolk til den rette opgave baseret på sprog, fagområde og erfaring.",
      "Responstid og tilgængelighed er også afgørende, særligt hvis du arbejder i sundhedsvæsenet, retsvæsenet eller den kommunale sektor, hvor behovet for tolkning ofte opstår akut. Et godt bureau har tolke til rådighed inden for kort tid – gerne inden for én time for telefontolkning og inden for 24 timer for fremmødetolkning. Spørg også om bureauets dækning i aften- og weekendtimer, da mange tolkebehov opstår uden for normal arbejdstid.",
      "Gennemsigtighed i prissætningen er et tredje vigtigt kriterium. Seriøse bureauer giver klare og forståelige tilbud uden skjulte gebyrer. Bed om en detaljeret prisliste, og sørg for at forstå, hvad der er inkluderet – f.eks. minimumsforbrug, kørselsgodtgørelse og eventuelt tillæg for specifikke sprog eller fagområder. Sammenlign gerne tilbud fra 2-3 bureauer, men husk at kvalitet og pålidelighed ofte er vigtigere end den laveste pris.",
      "Endelig bør du vurdere bureauets teknologiske setup og kundeservice. Har de en brugervenlig bestillingsplatform? Kan du booke tolke online og få bekræftelse med det samme? Er der en fast kontaktperson, du kan ringe til ved problemer? Hos Tolk360 har vi investeret i en moderne platform, der gør bestilling, administration og fakturering enkel – så du kan fokusere på det, der virkelig betyder noget.",
    ],
  },
  {
    slug: "tolkning-i-sundhedsvaesenet",
    title: "Tolkning i sundhedsvæsenet – rettigheder og regler",
    excerpt:
      "Patienter med begrænset dansk har ret til en tolk i sundhedsvæsenet. Vi gennemgår reglerne, og hvad det betyder i praksis for hospitaler, lægeklinikker og kommuner.",
    date: "2026-01-20",
    category: "Sundhed",
    content: [
      "I det danske sundhedsvæsen er det afgørende, at patienter forstår deres diagnose, behandlingsmuligheder og medicinering. Når en patient ikke taler tilstrækkeligt dansk, er tolkning ikke blot en service – det er en nødvendighed for patientsikkerheden. Sundhedsloven fastslår, at regionsrådene skal sikre tolkebistand til patienter, der har behov for det i forbindelse med behandling hos alment praktiserende læge og på sygehusene.",
      "Siden 2018 har der dog været indført egenbetaling for tolkebistand for patienter, der har boet i Danmark i mere end tre år. Betalingen gælder for patienter, der ikke kan tale tilstrækkeligt dansk, og som har haft ophold i Danmark i mere end tre år. Der er en række undtagelser, bl.a. for patienter med høretab, patienter der er senildemente, samt patienter der har brug for tolkning i akutte, livstruende situationer. Regionen opkræver gebyret, som er fastsat til en fast takst per konsultation.",
      "For sundhedspersonalet er det vigtigt at forstå, at brug af familiemedlemmer eller venner som tolke ikke er en acceptabel løsning i de fleste kliniske sammenhænge. Uprofessionel tolkning indebærer risiko for misforståelser, udeladelser og farvede oversættelser – særligt i situationer med følsomme emner som psykisk sygdom, terminale diagnoser eller seksuel sundhed. En professionel tolk har tavshedspligt og er trænet i at forholde sig neutralt og præcist.",
      "Videotolkning har vundet stor udbredelse i sundhedsvæsenet, fordi det kombinerer hurtig adgang med visuel kontakt. Mange hospitaler har i dag faste aftaler med tolkebureauer om videotolkning via tablets eller skærme på afdelingerne. Det reducerer ventetiden markant og sikrer, at tolken kan aflæse patientens ansigtsudtryk og kropssprog, hvilket er vigtigt for en korrekt vurdering af patientens tilstand.",
      "Hos Tolk360 arbejder vi med sundhedsfagligt uddannede tolke, der forstår medicinsk terminologi og de særlige krav, der stilles i kliniske miljøer. Vi tilbyder fremmøde-, telefon- og videotolkning til hospitaler, lægeklinikker og kommunale sundhedscentre i hele Danmark. Kontakt os for at høre, hvordan vi kan hjælpe jeres institution med at sikre tryg og præcis kommunikation med alle patienter.",
      "Det er også værd at nævne, at korrekt tolkning i sundhedsvæsenet ikke kun handler om lovkrav – det handler om tillid. En patient, der føler sig forstået, er mere tilbøjelig til at følge behandlingsplanen, give korrekte oplysninger og vende tilbage til kontrol. Investering i kvalitetstolkning er derfor også en investering i bedre behandlingsresultater.",
    ],
  },
  {
    slug: "hvornaar-har-du-ret-til-tolk",
    title: "Hvornår har du ret til en tolk? Lovgivning og praksis",
    excerpt:
      "Retten til tolkning i Danmark er reguleret af flere love. Vi giver dig det fulde overblik over, hvornår du eller dine borgere har ret til en professionel tolk.",
    date: "2026-01-05",
    category: "Lovgivning",
    content: [
      "I Danmark er retten til tolkning ikke samlet i én lov, men fordelt på tværs af flere lovgivningsområder. Det kan gøre det uoverskueligt at navigere i, hvornår en borger, patient eller tiltalte har ret til en tolk – og hvem der skal betale. Her giver vi et overblik over de vigtigste regler, så du kan sikre, at dine rettigheder eller dine borgeres rettigheder bliver overholdt.",
      "Inden for retsvæsenet er retten til tolkning klart defineret. Retsplejeloven sikrer, at enhver, der skal møde i retten og ikke behersker dansk i tilstrækkelig grad, har ret til en tolk. Det gælder både i straffesager, civile sager og fogedsager. Tolken beskikkes og betales af retten, og der stilles krav om, at tolken er upartisk og kvalificeret. I straffesager har den tiltalte desuden ret til at få alle dokumenter af væsentlig betydning oversat.",
      "I det kommunale regi er billedet mere nuanceret. Forvaltningsloven kræver, at myndigheder sikrer, at borgere forstår den afgørelse, der træffes om dem. Det betyder i praksis, at kommunen skal tilbyde tolkning, når en borger ikke taler tilstrækkeligt dansk til at deltage meningsfuldt i en samtale om f.eks. kontanthjælp, integration, børnesager eller boligstøtte. Det er dog kommunen, der vurderer behovet, og praksis varierer desværre fra kommune til kommune.",
      "Inden for sundhedsvæsenet har regionsrådene pligt til at stille tolkebistand til rådighed, som beskrevet i sundhedsloven. Bemærk dog reglerne om egenbetaling for patienter med over tre års ophold i Danmark. I akutte situationer og ved livstruende tilstande er tolkning altid gratis. Børn under 18 år skal aldrig bruges som tolke i sundhedsvæsenet – det er både uetisk og kan føre til alvorlige misforståelser.",
      "På integrationsområdet har nyankomne flygtninge og familiesammenførte typisk ret til tolkning i forbindelse med integrationsprogrammet. Det omfatter samtaler med jobcenter, sprogskole og kommunale integrationsmedarbejdere. Tolkning betales som udgangspunkt af kommunen. Det er vigtigt at understrege, at tolkning ikke kun er en rettighed – det er et redskab, der sikrer ligebehandling og retssikkerhed for alle borgere, uanset sprogbaggrund.",
      "Hvis du er i tvivl om, hvornår du har ret til en tolk, anbefaler vi, at du kontakter den relevante myndighed og beder om en skriftlig begrundelse, hvis de afviser. Du kan også kontakte Tolk360, så hjælper vi dig med at afklare dine muligheder og finde den rette tolkningsløsning.",
    ],
  },
  {
    slug: "juridisk-oversaettelse-guide",
    title: "5 ting du skal vide om juridisk oversættelse",
    excerpt:
      "Juridisk oversættelse kræver præcision og faglig indsigt. Vi deler fem vigtige punkter, du bør kende, før du bestiller oversættelse af kontrakter, domme og andre juridiske dokumenter.",
    date: "2025-12-18",
    category: "Oversættelse",
    content: [
      "Juridisk oversættelse er en af de mest krævende discipliner inden for sprogindustrien. Et enkelt forkert oversat ord i en kontrakt kan ændre betydningen af en hel klausul og potentielt koste millioner. Derfor er det afgørende at vælge en oversætter med specifik erfaring i juridiske tekster – ikke bare en dygtig generalist. Her er fem ting, du bør vide, før du bestiller juridisk oversættelse.",
      "For det første: Juridisk terminologi er ikke universel. Begreber som 'consideration' i angelsaksisk ret eller 'Schuldverhältnis' i tysk ret har ikke direkte ækvivalenter på dansk. En kompetent juridisk oversætter kender disse forskelle og kan vælge den mest præcise formulering – eller tilføje en forklarende note, hvor det er nødvendigt. Oversættelsen skal ikke bare være sprogligt korrekt, men også juridisk meningsfuld i målsprogets retssystem.",
      "For det andet: Certificering og legalisering er ofte påkrævet. Hvis din oversættelse skal bruges i en retssag, ved en myndighed eller i forbindelse med international handel, kan der stilles krav om, at oversættelsen er udført af en statsautoriseret translatør og eventuelt forsynet med en apostille. Sørg for at afklare kravene på forhånd, så du undgår forsinkelser. Hos Tolk360 tilbyder vi certificerede juridiske oversættelser, der opfylder danske og internationale krav.",
      "For det tredje: Fortrolighed er altafgørende. Juridiske dokumenter indeholder ofte følsomme oplysninger – persondata, forretningshemmeligheder eller processtrategier. Et professionelt oversættelsesbureau har NDA-aftaler med alle oversættere og sikre systemer til håndtering af dokumenter. Spørg altid ind til bureauets sikkerhedsprocedurer, før du sender fortroligt materiale.",
      "For det fjerde: Korrekturlæsning af en anden jurist eller oversætter er stærkt anbefalet ved kritiske dokumenter. Et ekstra sæt øjne kan fange nuancer og fejl, som selv den dygtigste oversætter kan overse. Det er en relativt lille meromkostning, der kan forhindre store problemer. Mange bureauer tilbyder en integreret kvalitetssikringsproces, hvor oversættelsen gennemgås af en uafhængig fagperson.",
      "For det femte: Planlæg tid til oversættelsen. Juridiske tekster tager længere tid at oversætte end standardtekster, fordi hvert ord og hver formulering skal vejes nøje. En kontrakt på 10 sider kan tage 3-5 arbejdsdage at oversætte korrekt, afhængigt af kompleksiteten og sprogkombinationen. Bestil i god tid, og kommunikér eventuelle deadlines tydeligt, så bureauet kan allokere de rette ressourcer til din opgave.",
    ],
  },
];
