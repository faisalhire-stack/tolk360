"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

// ── Country/language knowledge base ──
const landSprog: Record<string, { sprog: string[]; info: string }> = {
  "afghanistan": { sprog: ["Dari", "Pashto"], info: "I Afghanistan taler man primært dari (afghansk persisk) og pashto. Dari tales mest i byerne og pashto i syd og øst. Mange afghanere taler begge sprog." },
  "albanien": { sprog: ["Albansk"], info: "I Albanien taler man albansk — et unikt indoeuropæisk sprog. Der er to hoveddialekter: gegisk (nord) og toskisk (syd)." },
  "algeriet": { sprog: ["Arabisk", "Berbisk", "Fransk"], info: "I Algeriet tales arabisk (algerisk dialekt), berbisk/amazigh og fransk. Mange algeriere er tre- eller flersprogede." },
  "angola": { sprog: ["Portugisisk"], info: "I Angola er portugisisk det officielle sprog. Der tales også mange bantusprog som kimbundu, umbundu og kikongo." },
  "argentina": { sprog: ["Spansk"], info: "I Argentina taler man spansk med den karakteristiske 'rioplatense'-dialekt. Italiensk indvandring har præget udtalen." },
  "armenien": { sprog: ["Armensk"], info: "I Armenien taler man armensk, som har sit eget unikke alfabet opfundet i år 405. Russisk er også udbredt." },
  "aserbajdsjan": { sprog: ["Aserbajdsjansk"], info: "I Aserbajdsjan taler man aserbajdsjansk, et tyrkisk sprog. Russisk er stadig udbredt blandt ældre generationer." },
  "australien": { sprog: ["Engelsk"], info: "I Australien er engelsk det dominerende sprog. Der tales også over 250 aboriginal sprog, hvoraf mange er truede." },
  "bahrain": { sprog: ["Arabisk"], info: "I Bahrain taler man arabisk (bahraini-dialekt). Engelsk er udbredt i forretningsliv." },
  "bangladesh": { sprog: ["Bengali"], info: "I Bangladesh taler man bengali (bangla). Sproget har sit eget skriftsystem og er verdens 7. mest talte sprog." },
  "belgien": { sprog: ["Flamsk", "Fransk", "Tysk"], info: "Belgien er flersproget: flamsk (nederlandsk) i nord, fransk i syd (Vallonien) og tysk i øst. Bruxelles er officielt tosproget." },
  "belarus": { sprog: ["Hviderussisk"], info: "I Belarus tales hviderussisk og russisk. Russisk dominerer i dagligdagen, men hviderussisk er det nationale sprog." },
  "bosnien": { sprog: ["Bosnisk"], info: "I Bosnien-Hercegovina taler man bosnisk, som er indbyrdes forståeligt med serbisk og kroatisk. Sproget kan skrives med både latinsk og kyrillisk alfabet." },
  "bosnien-hercegovina": { sprog: ["Bosnisk"], info: "I Bosnien-Hercegovina taler man bosnisk, som er indbyrdes forståeligt med serbisk og kroatisk." },
  "brasilien": { sprog: ["Portugisisk"], info: "I Brasilien taler man brasiliansk portugisisk, som adskiller sig fra europæisk portugisisk i udtale og visse udtryk." },
  "bulgarien": { sprog: ["Bulgarsk"], info: "I Bulgarien taler man bulgarsk, som bruger det kyrilliske alfabet. Tyrkisk og romani tales også af minoriteter." },
  "burkina faso": { sprog: ["Fransk"], info: "I Burkina Faso er fransk det officielle sprog. Mooré, dioula og fulfulde er de mest udbredte lokale sprog." },
  "burundi": { sprog: ["Kirundi", "Fransk"], info: "I Burundi taler næsten alle kirundi. Fransk er det andet officielle sprog og bruges i administration." },
  "cambodja": { sprog: ["Khmer"], info: "I Cambodja taler man khmer. Khmer-alfabetet er et af verdens ældste stadig brugte skriftsystemer." },
  "cameroun": { sprog: ["Fransk", "Engelsk"], info: "Cameroun er tosproget med fransk og engelsk. Der tales også over 250 lokale sprog." },
  "canada": { sprog: ["Engelsk", "Fransk"], info: "Canada er officielt tosproget: engelsk og fransk. Fransk tales primært i Quebec og dele af New Brunswick." },
  "chile": { sprog: ["Spansk"], info: "I Chile taler man spansk med en hurtig og unik dialekt. Mapudungun tales af mapuche-folket." },
  "colombia": { sprog: ["Spansk"], info: "I Colombia taler man spansk med en af de klareste og mest forståelige dialekter i Latinamerika." },
  "congo": { sprog: ["Fransk"], info: "I Republikken Congo er fransk det officielle sprog. Lingala og kikongo er de mest udbredte lokale sprog." },
  "cuba": { sprog: ["Spansk"], info: "I Cuba taler man spansk med caribisk dialekt, kendetegnet ved blødere konsonanter." },
  "danmark": { sprog: ["Dansk"], info: "I Danmark taler man dansk. Dansk har mange dialekter, men rigsdansk er standardformen." },
  "dr congo": { sprog: ["Fransk", "Lingala", "Swahili"], info: "I DR Congo er fransk det officielle sprog. Lingala, swahili, tshiluba og kikongo er nationale sprog." },
  "egypten": { sprog: ["Arabisk"], info: "I Egypten taler man egyptisk arabisk, som er den mest udbredte arabiske dialekt pga. film og tv." },
  "elfenbenskysten": { sprog: ["Fransk"], info: "I Elfenbenskysten er fransk det officielle sprog. Dioula er det mest udbredte lokale handelssprog." },
  "eritrea": { sprog: ["Tigrinya", "Arabisk"], info: "I Eritrea er tigrinya det mest talte sprog. Arabisk og engelsk bruges også officielt. Der er 9 anerkendte sprog." },
  "estland": { sprog: ["Estisk"], info: "I Estland taler man estisk, som er beslægtet med finsk. Russisk tales af ca. 25% af befolkningen." },
  "etiopien": { sprog: ["Amharisk", "Tigrinya", "Oromo"], info: "Etiopien har over 80 sprog. Amharisk er det officielle, men oromo er det mest talte. Tigrinya tales i nord." },
  "filippinerne": { sprog: ["Filipino", "Tagalog"], info: "I Filippinerne er filipino (baseret på tagalog) og engelsk de officielle sprog. Der tales over 170 sprog." },
  "finland": { sprog: ["Finsk"], info: "I Finland taler man finsk og svensk (officielt). Finsk er ikke beslægtet med skandinaviske sprog." },
  "frankrig": { sprog: ["Fransk"], info: "I Frankrig er fransk det officielle sprog. Regionale sprog som bretonsk, occitansk og alsacisk tales også." },
  "georgien": { sprog: ["Georgisk"], info: "I Georgien taler man georgisk, som har sit eget unikke alfabet — et af kun 14 i verden der stadig bruges." },
  "ghana": { sprog: ["Engelsk", "Akan"], info: "I Ghana er engelsk det officielle sprog. Akan (twi/fante) er det mest udbredte af over 80 lokale sprog." },
  "grækenland": { sprog: ["Græsk"], info: "I Grækenland taler man moderne græsk. Sproget har verdens længste dokumenterede historie — over 3.400 år." },
  "indien": { sprog: ["Hindi", "Urdu", "Bengali", "Tamil", "Telugu", "Gujarati", "Panjabi"], info: "Indien har 22 officielle sprog og hundredvis af dialekter. Hindi og engelsk er de mest udbredte. Det er vigtigt at kende borgerens hjemstat for at finde det rette sprog." },
  "indonesien": { sprog: ["Indonesisk"], info: "I Indonesien taler man bahasa indonesia som officielt sprog. Der tales over 700 lokale sprog." },
  "irak": { sprog: ["Arabisk", "Kurdisk"], info: "I Irak tales arabisk og kurdisk (sorani i det kurdiske område). Det er vigtigt at afklare om borgeren er arabisk- eller kurdisktalende." },
  "iran": { sprog: ["Farsi", "Kurdisk"], info: "I Iran taler man farsi (persisk). Kurdisk, aserbajdsjansk, arabisk og baluchi tales af minoriteter. De fleste iranere taler farsi." },
  "irland": { sprog: ["Irsk", "Engelsk"], info: "I Irland taler man engelsk og irsk (gælisk). Irsk er officielt førstesprog men tales dagligt af under 10%." },
  "island": { sprog: ["Islandsk"], info: "I Island taler man islandsk, som har ændret sig meget lidt siden vikingetiden. Islændinge kan stadig læse de gamle sagaer." },
  "israel": { sprog: ["Hebraisk", "Arabisk"], info: "I Israel tales hebraisk og arabisk. Mange indvandrere taler også russisk, amharisk eller fransk." },
  "italien": { sprog: ["Italiensk"], info: "I Italien taler man italiensk. Der er mange stærke regionale dialekter som kan være svære at forstå indbyrdes." },
  "japan": { sprog: ["Japansk"], info: "I Japan taler man japansk. Sproget har tre skriftsystemer: hiragana, katakana og kanji." },
  "jordan": { sprog: ["Arabisk"], info: "I Jordan taler man levantinsk arabisk. Mange palæstinensiske og irakiske flygtninge bor også i landet." },
  "kasakhstan": { sprog: ["Kasakhisk", "Russisk"], info: "I Kasakhstan tales kasakhisk og russisk. Mange kasakhstanere er tosproget." },
  "kenya": { sprog: ["Swahili", "Engelsk"], info: "I Kenya tales swahili og engelsk officielt. Der er over 60 lokale sprog og stammesprog." },
  "kina": { sprog: ["Kinesisk (Mandarin)", "Kantonesisk"], info: "I Kina taler de fleste mandarin. Kantonesisk tales i Guangdong og Hongkong. Der er mange andre dialekter og sprog." },
  "kosovo": { sprog: ["Albansk", "Serbisk"], info: "I Kosovo taler flertallet albansk (gegisk dialekt). Serbisk tales af den serbiske minoritet." },
  "kroatien": { sprog: ["Kroatisk"], info: "I Kroatien taler man kroatisk, som er indbyrdes forståeligt med serbisk og bosnisk." },
  "kuwait": { sprog: ["Arabisk"], info: "I Kuwait taler man golf-arabisk. Mange fremmedarbejdere taler også hindi, urdu, tagalog og engelsk." },
  "laos": { sprog: ["Laotisk"], info: "I Laos taler man lao, som er nært beslægtet med thai og bruger et lignende alfabet." },
  "letland": { sprog: ["Lettisk"], info: "I Letland taler man lettisk. Russisk tales af ca. 30% af befolkningen som modersmål." },
  "libanon": { sprog: ["Arabisk", "Fransk"], info: "I Libanon tales levantinsk arabisk. Fransk og engelsk er også udbredte. Mange libanesere er flersprogede." },
  "libyen": { sprog: ["Arabisk"], info: "I Libyen tales libysk arabisk. Berbisk tales af amazigh-minoriteten." },
  "litauen": { sprog: ["Litauisk"], info: "I Litauen taler man litauisk — et af de ældste og mest konservative indoeuropæiske sprog." },
  "malaysia": { sprog: ["Malaysisk"], info: "I Malaysia er malayisk (bahasa melayu) det officielle sprog. Engelsk, kinesisk og tamil tales også." },
  "mali": { sprog: ["Fransk", "Bambara"], info: "I Mali er fransk det officielle sprog, men bambara er det mest talte sprog i dagligdagen." },
  "marokko": { sprog: ["Arabisk", "Berbisk", "Fransk"], info: "I Marokko tales darija (marokkansk arabisk), amazigh/berbisk og fransk. Darija er meget forskellig fra standardarabisk." },
  "mexico": { sprog: ["Spansk"], info: "I Mexico taler man spansk. Der er også 68 officielle indfødte sprog, herunder nahuatl og maya." },
  "moldova": { sprog: ["Rumænsk"], info: "I Moldova taler man rumænsk (moldovisk). Russisk tales af en stor minoritet, især i Transnistrien." },
  "mongoliet": { sprog: ["Mongolsk"], info: "I Mongoliet taler man mongolsk (khalkha). Sproget kan skrives med kyrillisk eller det traditionelle mongolske alfabet." },
  "montenegro": { sprog: ["Montenegrinsk"], info: "I Montenegro taler man montenegrinsk, som er meget tæt på serbisk, bosnisk og kroatisk." },
  "mozambique": { sprog: ["Portugisisk"], info: "I Mozambique er portugisisk det officielle sprog. Makua, sena og changana er store lokale sprog." },
  "myanmar": { sprog: ["Burmesisk"], info: "I Myanmar taler man burmesisk. Der er over 100 etniske minoritetssprog, herunder karen, shan og chin." },
  "nederlandene": { sprog: ["Hollandsk"], info: "I Nederlandene taler man hollandsk (nederlandsk). Frisisk er et officielt minoritetssprog i Friesland." },
  "nepal": { sprog: ["Nepalesisk"], info: "I Nepal taler man nepali (nepalesisk). Der tales over 120 sprog i dette lille bjergland." },
  "niger": { sprog: ["Fransk", "Hausa"], info: "I Niger er fransk det officielle sprog. Hausa og zarma/songhai er de mest talte lokale sprog." },
  "nigeria": { sprog: ["Engelsk", "Hausa", "Yoruba", "Igbo"], info: "Nigeria har over 500 sprog. Engelsk er officielt, men hausa (nord), yoruba (sydvest) og igbo (sydøst) er dominerende. Det er vigtigt at kende borgerens region." },
  "nordkorea": { sprog: ["Koreansk"], info: "I Nordkorea taler man koreansk. Dialekten adskiller sig fra sydkoreansk pga. isolationen." },
  "nordmakedonien": { sprog: ["Makedonsk"], info: "I Nordmakedonien taler man makedonsk, et sydslavisk sprog tæt på bulgarsk. Albansk tales af en stor minoritet." },
  "norge": { sprog: ["Norsk"], info: "I Norge taler man norsk (bokmål eller nynorsk). Sproget er tæt på dansk og svensk." },
  "new zealand": { sprog: ["Engelsk", "Maori"], info: "I New Zealand tales engelsk og maori. Te reo maori oplever en renæssance." },
  "oman": { sprog: ["Arabisk"], info: "I Oman taler man omansk arabisk. Swahili og baluchi tales også af minoriteter." },
  "pakistan": { sprog: ["Urdu", "Panjabi", "Pashto"], info: "I Pakistan er urdu det officielle sprog, men panjabi er mest talt. Pashto tales i vest. Sindhi og baluchi er også store sprog. Det er vigtigt at kende borgerens region." },
  "palæstina": { sprog: ["Arabisk"], info: "I Palæstina taler man palæstinensisk arabisk (levantinsk dialekt), som ligner jordansk og syrisk arabisk." },
  "peru": { sprog: ["Spansk", "Quechua"], info: "I Peru taler man spansk og quechua (inkaernes sprog). Aymara tales også i syd." },
  "polen": { sprog: ["Polsk"], info: "I Polen taler man polsk. Sproget er et vestligt slavisk sprog med mange hvislelyde og 7 kasus." },
  "portugal": { sprog: ["Portugisisk"], info: "I Portugal taler man europæisk portugisisk, som adskiller sig mærkbart fra brasiliansk portugisisk." },
  "qatar": { sprog: ["Arabisk"], info: "I Qatar tales golf-arabisk. Pga. mange arbejdsmigranter tales også hindi, urdu, tagalog og engelsk." },
  "rumænien": { sprog: ["Rumænsk"], info: "I Rumænien taler man rumænsk, det eneste romanske sprog i Østeuropa. Ungarsk tales af minoriteter i Transsylvanien." },
  "rusland": { sprog: ["Russisk"], info: "I Rusland taler man russisk. Der er over 100 minoritetssprog, herunder tatarisk, tjetjensk og basjkirsk." },
  "rwanda": { sprog: ["Kinyarwanda", "Fransk"], info: "I Rwanda taler alle kinyarwanda. Fransk og engelsk er også officielle sprog." },
  "saudi-arabien": { sprog: ["Arabisk"], info: "I Saudi-Arabien taler man golf-arabisk (najdi og hejazi dialekter). Mange fremmedarbejdere taler urdu, tagalog og hindi." },
  "senegal": { sprog: ["Fransk", "Wolof"], info: "I Senegal er fransk officielt, men wolof er det mest talte sprog i dagligdagen. Over 90% forstår wolof." },
  "serbien": { sprog: ["Serbisk"], info: "I Serbien taler man serbisk, som kan skrives med både kyrillisk og latinsk alfabet. Ungarsk tales i Vojvodina." },
  "slovenien": { sprog: ["Slovensk"], info: "I Slovenien taler man slovensk, et sydslavisk sprog med over 40 dialekter i et lille land." },
  "slovakiet": { sprog: ["Slovakisk"], info: "I Slovakiet taler man slovakisk, som er tæt beslægtet med tjekkisk. Ungarsk tales i syd." },
  "somalia": { sprog: ["Somali", "Arabisk"], info: "I Somalia taler man somali og arabisk. Somali har flere dialekter: standard (maha-tiri), maay og benaadir. De fleste somaliere i Danmark taler standard-somali." },
  "spanien": { sprog: ["Spansk", "Catalansk", "Baskisk"], info: "I Spanien taler man spansk (castiliansk). Catalansk tales i Catalonien, baskisk i Baskerlandet og galicisk i Galicien." },
  "sri lanka": { sprog: ["Singalesisk", "Tamil"], info: "I Sri Lanka tales singalesisk og tamil. Det er vigtigt at afklare om borgeren er singaleser eller tamil." },
  "storbritannien": { sprog: ["Engelsk"], info: "I Storbritannien taler man engelsk. Walisisk, skotsk gælisk og irsk tales også som minoritetssprog." },
  "sudan": { sprog: ["Arabisk"], info: "I Sudan tales sudanesisk arabisk. Der er også mange afrikanske sprog som nubisk, fur og beja." },
  "sverige": { sprog: ["Svensk"], info: "I Sverige taler man svensk. Finsk, samisk og meänkieli er officielle minoritetssprog." },
  "schweiz": { sprog: ["Tysk", "Fransk", "Italiensk", "Rætoromansk"], info: "Schweiz har fire officielle sprog: tysk (63%), fransk (23%), italiensk (8%) og rætoromansk (0,5%). Kanton afgør sproget." },
  "sydafrika": { sprog: ["Afrikaans", "Engelsk", "Zulu"], info: "Sydafrika har 11 officielle sprog. Zulu er mest talt, men engelsk bruges i forretning. Afrikaans stammer fra hollandsk." },
  "sydkorea": { sprog: ["Koreansk"], info: "I Sydkorea taler man koreansk. Det koreanske alfabet hangul blev opfundet i 1443 og er et af verdens mest logiske skriftsystemer." },
  "sydsudan": { sprog: ["Engelsk", "Arabisk"], info: "I Sydsudan er engelsk det officielle sprog. Arabisk (juba-dialekt), dinka og nuer er de mest talte sprog." },
  "syrien": { sprog: ["Arabisk", "Kurdisk"], info: "I Syrien taler man levantinsk arabisk. Kurdisk (kurmanji) tales i nord. Mange syrere i Danmark taler enten arabisk eller kurdisk — det er vigtigt at afklare." },
  "tadsjikistan": { sprog: ["Tadsjikisk"], info: "I Tadsjikistan taler man tadsjikisk, som er en variant af persisk/farsi skrevet med kyrillisk alfabet." },
  "tanzania": { sprog: ["Swahili"], info: "I Tanzania taler man swahili som nationalt sprog. Engelsk bruges i uddannelse og administration." },
  "tchad": { sprog: ["Fransk", "Arabisk"], info: "I Tchad er fransk og arabisk de officielle sprog. Der tales over 120 lokale sprog." },
  "thailand": { sprog: ["Thai"], info: "I Thailand taler man thai. Sproget har 5 toner og sit eget alfabet med 44 konsonanter." },
  "tibet": { sprog: ["Tibetansk"], info: "I Tibet taler man tibetansk, som er beslægtet med burmesisk. Tibetansk skrift stammer fra indisk skrift." },
  "tjekkiet": { sprog: ["Tjekkisk"], info: "I Tjekkiet taler man tjekkisk, som er tæt beslægtet med slovakisk. Sproget har mange konsonantgrupper." },
  "tunesien": { sprog: ["Arabisk", "Fransk"], info: "I Tunesien tales tunesisk arabisk (derja) og fransk. Derja er stærkt påvirket af berbisk, fransk og italiensk." },
  "turkmenistan": { sprog: ["Turkmensk"], info: "I Turkmenistan taler man turkmensk, et tyrkisk sprog tæt på aserbajdsjansk og tyrkisk." },
  "tyrkiet": { sprog: ["Tyrkisk", "Kurdisk"], info: "I Tyrkiet taler man tyrkisk. Kurdisk (kurmanji) tales af ca. 15-20% af befolkningen, primært i sydøst." },
  "uganda": { sprog: ["Swahili", "Engelsk"], info: "I Uganda er engelsk og swahili officielle sprog. Luganda er det mest talte lokale sprog." },
  "ukraine": { sprog: ["Ukrainsk"], info: "I Ukraine taler man ukrainsk. Russisk tales også, især i øst og syd. De fleste ukrainere forstår begge sprog." },
  "ungarn": { sprog: ["Ungarsk"], info: "I Ungarn taler man ungarsk (magyar), som er et finsk-ugrisk sprog uden slægtskab med naboernes sprog." },
  "usa": { sprog: ["Engelsk", "Spansk"], info: "I USA tales primært engelsk. Spansk er det næststørste sprog med over 40 mio. talere." },
  "usbekistan": { sprog: ["Usbekisk"], info: "I Usbekistan taler man usbekisk, et tyrkisk sprog. Russisk er stadig udbredt." },
  "vietnam": { sprog: ["Vietnamesisk"], info: "I Vietnam taler man vietnamesisk. Sproget har 6 toner og bruger det latinske alfabet med diakritiske tegn." },
  "yemen": { sprog: ["Arabisk"], info: "I Yemen tales yemenitisk arabisk, som har flere unikke dialekter. Socotrisk tales på Socotra-øen." },
  "østrig": { sprog: ["Tysk"], info: "I Østrig taler man tysk (østrigsk dialekt). Dialekterne kan være svære at forstå for nordtyskere." },
  "de forenede arabiske emirater": { sprog: ["Arabisk"], info: "I UAE tales golf-arabisk. Pga. den store andel af fremmedarbejdere tales også hindi, urdu, tagalog og engelsk." },
  "kirgisistan": { sprog: ["Kirgisisk", "Russisk"], info: "I Kirgisistan tales kirgisisk og russisk. Kirgisisk er et tyrkisk sprog." },
};

// Common alternative names and search terms
const aliaser: Record<string, string> = {
  "uae": "de forenede arabiske emirater", "emirater": "de forenede arabiske emirater", "dubai": "de forenede arabiske emirater",
  "palæstinenser": "palæstina", "gaza": "palæstina", "vestbredden": "palæstina",
  "persisk": "iran", "perser": "iran",
  "afghaner": "afghanistan", "afghan": "afghanistan",
  "somalier": "somalia",
  "tyrker": "tyrkiet", "tyrkisk": "tyrkiet",
  "araber": "saudi-arabien", "arabien": "saudi-arabien",
  "syrer": "syrien", "syrisk": "syrien",
  "iraker": "irak", "irakisk": "irak",
  "iraner": "iran", "iransk": "iran",
  "kurd": "irak", "kurder": "irak",
  "polak": "polen",
  "rumæner": "rumænien",
  "ukrainer": "ukraine",
  "russer": "rusland",
  "kineser": "kina", "kinesisk": "kina",
  "eritreer": "eritrea", "eritreisk": "eritrea",
  "etiopier": "etiopien", "etiopisk": "etiopien",
  "libaneser": "libanon",
  "egypter": "egypten",
  "marokkaner": "marokko",
  "thai": "thailand",
  "inder": "indien", "indisk": "indien",
  "pakistaner": "pakistan", "pakistansk": "pakistan",
  "bosnier": "bosnien", "bosniak": "bosnien",
  "kroat": "kroatien",
  "serber": "serbien",
  "albaner": "albanien",
  "kosovaner": "kosovo", "kosovar": "kosovo",
  "grønland": "danmark", "grønlandsk": "danmark",
  "england": "storbritannien", "skotland": "storbritannien", "wales": "storbritannien",
  "usa": "usa", "amerika": "usa", "amerikansk": "usa",
  "brasilianer": "brasilien",
  "nigerianer": "nigeria",
  "ghanesisk": "ghana", "ghaneser": "ghana",
  "congoleser": "dr congo", "congolese": "dr congo", "kongolesisk": "dr congo",
  "burmeser": "myanmar", "burmesisk": "myanmar", "burma": "myanmar",
  "sydamerika": "colombia", // default
  "mellemøsten": "irak", // default
  "nordafrika": "marokko", // default
};

type Message = { role: "user" | "bot"; text: string; cta?: boolean };

function findCountry(input: string): { land: string; data: { sprog: string[]; info: string } } | null {
  const lower = input.toLowerCase().trim();

  // Sort keys by length descending so longer names match first (e.g. "somalia" before "mali")
  const sortedLande = Object.entries(landSprog).sort((a, b) => b[0].length - a[0].length);

  // Direct match
  for (const [land, data] of sortedLande) {
    const escaped = land.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (new RegExp(`\\b${escaped}\\b`, "i").test(lower)) return { land, data };
  }

  // Alias match
  const sortedAliaser = Object.entries(aliaser).sort((a, b) => b[0].length - a[0].length);
  for (const [alias, land] of sortedAliaser) {
    const escaped = alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (new RegExp(`\\b${escaped}\\b`, "i").test(lower)) {
      const data = landSprog[land];
      if (data) return { land, data };
    }
  }

  return null;
}

function generateResponse(input: string): Message[] {
  const match = findCountry(input);

  if (match) {
    const { land, data } = match;
    const landName = land.charAt(0).toUpperCase() + land.slice(1);
    const messages: Message[] = [
      { role: "bot", text: data.info },
      { role: "bot", text: `Vi anbefaler tolk på: ${data.sprog.join(", ")}.\n\n${data.sprog.length > 1 ? "Tip: Spørg borgeren hvilket sprog de foretrækker — det kan gøre en stor forskel for kvaliteten af samtalen." : ""}` },
      { role: "bot", text: `Hos Tolk360 har vi certificerede tolke i ${data.sprog.join(", ")} klar med kort varsel — både til telefon-, video- og fremmødetolkning. Vi er Danmarks største tolkebureau med over 7.000 tolke.`, cta: true },
    ];
    return messages;
  }

  // Check for greeting
  if (/^(hej|hallo|goddag|hi|hey|god morgen|god eftermiddag)/i.test(input.trim())) {
    return [{ role: "bot", text: "Hej! Jeg er Tolk360's sprogrådgiver. Fortæl mig hvilket land din borger kommer fra, så hjælper jeg dig med at finde det rette sprog og den rette tolk. Du kan fx skrive \"Borgeren er fra Somalia\" eller bare \"Afghanistan\"." }];
  }

  // Check for "help" or generic question
  if (/hjælp|hvad kan du|hvordan/i.test(input)) {
    return [{ role: "bot", text: "Jeg kan hjælpe dig med at finde ud af, hvilket sprog en borger taler baseret på deres hjemland. Skriv blot navnet på landet — fx \"Syrien\", \"Eritrea\" eller \"Afghanistan\" — og jeg fortæller dig hvilke sprog der tales der, samt hvordan du bestiller den rette tolk." }];
  }

  // Check for language query
  const sprogMatch = input.match(/(?:tale[rs]?|snakke[r]?|sprog(?:et)?)\s+(\w+)/i);
  if (sprogMatch) {
    return [{ role: "bot", text: `Prøv at fortæl mig hvilket land borgeren kommer fra, så kan jeg bedre hjælpe dig med at finde det rigtige sprog og den rette tolk.` }];
  }

  // Default
  return [{ role: "bot", text: "Jeg er ikke helt sikker på, hvad du mener. Prøv at skriv et land — fx \"Somalia\", \"Tyrkiet\" eller \"Afghanistan\" — så fortæller jeg dig hvilke sprog der tales der, og hjælper dig med at finde den rette tolk." }];
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hej! Jeg er Tolk360's sprogrådgiver. Hvilken borger har du brug for tolk til? Fortæl mig hvilket land de kommer fra, så finder vi det rette sprog." },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  function handleSend() {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = { role: "user", text };
    const botResponses = generateResponse(text);

    setMessages((prev) => [...prev, userMsg, ...botResponses]);
    setInput("");
  }

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[var(--brand-accent)] text-white shadow-lg hover:brightness-110 transition-all flex items-center justify-center group"
          aria-label="Åbn sprogrådgiver"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ff6b35] rounded-full text-[10px] font-bold flex items-center justify-center">?</span>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-3rem)] flex flex-col rounded-2xl shadow-2xl border border-gray-200 bg-white overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-[var(--brand-primary)] text-white shrink-0">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.97.633-3.794 1.708-5.282" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">Sprogrådgiver</div>
              <div className="text-xs text-white/70">Tolk360 — vi finder den rette tolk</div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
              aria-label="Luk chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-[var(--brand-accent)] text-white rounded-br-md"
                      : "bg-white text-gray-800 border border-gray-100 shadow-sm rounded-bl-md"
                  }`}
                >
                  {msg.text}
                  {msg.cta && (
                    <div className="mt-3 flex flex-col gap-2">
                      <a
                        href="tel:+4570604060"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[var(--brand-accent)] text-white text-xs font-semibold hover:brightness-110 transition-all"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        Ring til os: +45 70 60 40 60
                      </a>
                      <Link
                        href="/faa-tilbud"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[var(--brand-accent)] text-[var(--brand-accent)] text-xs font-semibold hover:bg-[var(--brand-light)] transition-all"
                      >
                        Få et uforpligtende tilbud
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="shrink-0 px-3 py-3 bg-white border-t border-gray-100">
            <form
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Skriv et land, fx 'Somalia'..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-[var(--brand-accent)] transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl bg-[var(--brand-accent)] text-white flex items-center justify-center hover:brightness-110 transition-all disabled:opacity-40 shrink-0"
                aria-label="Send"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
