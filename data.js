/* =====================================================================
   KLIATBA LESOVÍC — všetok obsah webu
   ---------------------------------------------------------------------
   TOTO JE JEDINÝ SÚBOR, KTORÝ SA UPRAVUJE.
   index.html je aplikácia a netreba ho meniť.

   Ako upraviť: klikni na ceruzku na GitHube, zmeň text, Commit changes.
   Po ~30 sekundách a obnovení stránky je zmena na webe.
   Pozor len na to, aby text v úvodzovkách nemal nespárované úvodzovky.
   ===================================================================== */

const DATA = {

/* ------------------------------------------------------------------ */
meta: {
  nazov: "Kliatba Lesovíc",
  podnazov: "Murder mystery · Lesovice, 23. októbra roku Pána 1503",
  verzia: "2.0",
  aktualizovane: "21. septembra 2026",
  brief: "Richtár Tadeus Schwarzenberg bol nájdený mŕtvy v kroví za šenkom, s prerezaným hrdlom. Biskup posiela do Lesovíc inkvizítorov — hráčske tímy. Dedina kričí o čarodejníctve a ukazuje prstom na bylinkárku Gretu. Úlohou tímov je oddeliť pravdu od povier, vypočuť sedem obyvateľov, pozbierať dôkazy a povedať, kto richtára zabil a prečo.",
  fakty: [
    { k: "Obeť", v: "Tadeus Schwarzenberg, richtár, 30 rokov" },
    { k: "Čas smrti", v: "Nedeľa 22. 10. 1503, medzi 18:00 a 19:00 — okolo 18:30" },
    { k: "Nájdené", v: "Pondelok 23. 10. 1503, o 7:00, v kroví za šenkom" },
    { k: "Našiel", v: "Viliam König, drevorubač" },
    { k: "Nástroj", v: "Kutáč (železo kuté, v ohni prechovávané)" },
    { k: "Páchateľ", v: "Agnes Schultz — v sebaobrane" },
    { k: "Hrateľné postavy", v: "7 (+ obeť a 5 postáv v pozadí)" },
    { k: "Dĺžka hry", v: "17:00 – 20:30, vyhodnotenie po 20:30" }
  ],
  akoToHrat: [
    "Tímy dostanú na začiatku pozvánku od biskupa, zoznam podozrivých, mapu, protokol z obhliadky tela a ilustráciu tela.",
    "Sedem hercov hrá obyvateľov Lesovíc. Tímy ich môžu vypočúvať — herci odpovedajú podľa svojej karty: niečo povedia vždy, niečo priznajú až pod ťarchou dôkazu.",
    "Brat Martin (moderátor) v presne daných časoch vypúšťa ďalšie dôkazy — pozri Réžiu.",
    "O 20:30 tímy odovzdajú výstupný dotazník. Spolu sa dá získať 18 bodov."
  ]
},

/* ------------------------------------------------------------------ */
pribeh: [
  {
    id: "mor",
    nadpis: "I. Mor a bylinkárka",
    text: [
      "Je rok 1482 a v Európe zúri morová epidémia. Do Lesovíc, ktoré sú takisto zasiahnuté, prichádza otec Benedikt, aby obyvateľom pomohol ako liečiteľ a duchovný v najtemnejších hodinách ich životov.",
      "Starajúc sa o bôľom zbedačených dedinčanov sprvu sám, našiel pomoc a podporu u samotárskej bylinkárky Heleny. Žila za dedinou, na samote blízko lesa. Všetci sa jej stránili, pretože ju podozrievali z čarodejníctva. V Lesoviciach sa znenazdajky zjavila v roku 1480, nikto nevie, odkiaľ prišla, no učarovala mužom v dedine, ktorí jej ochotne pomáhali so stavbou skromného obydlia. Poverčivosť žien, že ich mužov opantali temné kúzla a prinútili ich stavať čarodejnici príbytok, ju úplne vylúčili z komunity.",
      "Helena odvtedy žila sama a záhadná aura okolo nej len rástla a podporovala bludy dedinčanov o jej magickej sile. Keď vypukol mor, mnohí pripisovali túto hrôzu práve Helene, veriac, že je to jej trest za to, ako ju všetci zavrhli.",
      "Benedikt však uzrel pravú tvár a moc liečivých schopností Heleny, ktorá tkvela v jej znalostiach prírody, nie v kúzlach. Ohúrila ho svojou múdrosťou, šikovnosťou, duchaplnosťou a nápomocnosťou aj napriek tomu, že ju celá dedina zavŕhala."
    ]
  },
  {
    id: "hriech",
    nadpis: "II. Hriech, ktorý odišiel",
    text: [
      "Spočiatku bola ich spoločná prítomnosť vecou pomoci a podpory pri liečení, to však rýchlo prerástlo v city hlbšie než sú medzi dvoma liečiteľmi. Benedikt, mladý 29-ročný duchovný, a Helena, 24-ročná pohľadná žena, splanuli láskou.",
      "Svoj čin však Benedikt oľutoval. Odišiel z dediny a kajal sa z hriechu, ktorý učinil, a prosil, aby mohol zostať duchovným. Zaprel svoje city voči Helene a ako príčinu jeho hriechu označoval čarodejníctvo a kúzla, ktoré ho zviedli z duchovnej cesty.",
      "Dostal zmilovanie a ostal vo svojej farnosti ako duchovný aj naďalej. Síce žil v meste blízko Lesovíc, dedinu nenavštevoval a nedozvedel sa tak, že je otcom, ani len to, že Helena dala dieťa potajme pokrstiť."
    ]
  },
  {
    id: "navrat",
    nadpis: "III. Návrat otca Benedikta",
    text: [
      "V roku 1502 Helena zomrela. Dedinčania ju stále vinili z moru a všetkých útrap, ktoré ich stíhali. Či boli suché mesiace alebo hynul dobytok, verili vlastnému bludu, že jej duch naďalej prežíva v jej potomkovi. Odmietli údajnú čarodejnicu pochovať, tak ju pochovala jej dcéra, Greta. Vedľa opusteného domu sa pod stromami krčí malý hrob, ktorý chceli občania dať posvätiť duchovným.",
      "Cirkev poslala do Lesovíc otca Benedikta. Dedinčania v ňom ale nespoznali duchovného, ktorý v roku 1482 navštívil Lesovice. Mladé, 20-ročné dievča, bolo navlas podobné svojej nebohej matke. Pýtajúc sa jej na matku a na ich život pri Lesoviciach, utvrdil sa v tom, že otcom môže byť iba on.",
      "Potvrdilo sa mu to aj neskôr, keď v kostole triedil listiny zosnulého otca Ondreja a našiel medzi nimi aj list od Heleny. List bol adresovaný neznámemu, no on vedel, že to bolo preňho. Usúdil, že list dala Helena Ondrejovi v nádeji, že ho odovzdá Benediktovi. Otec Ondrej ale asi chcel aféru jedného zo svojich cirkevných bratov utajiť.",
      "V očiach Grety sa odrážal hriech Benediktovej mladosti, ktorý mu pripomínal zradu Boha a cirkvi. Vyhral strach o jeho vlastnú česť, ktorú si už dosť pošpinil, a rozhodol sa zotrvať vo svojom tvrdení o čarodejníckej moci Heleny. Neutíchli však všetky emócie, ktoré v sebe tak veľmi chcel zadusiť, a keď zočil svoju dcéru, otcovská láska sa prebudila.",
      "Požiadal o zotrvanie v Lesoviciach, aby mohol byť Grete nablízku. Zároveň však kázal tak, aby udržiaval Gretu na okraji spoločnosti — podporoval jej „čarodejnícku auru“, aby bola chránená pred neresťou obyvateľov Lesovíc a pred odhalením pravdy o ich spoločnej krvi.",
      "V Lesoviciach život ďalej plynie, no navonok pokojná, ničím výnimočná komunita, začína hniť v srdciach obyvateľov."
    ]
  },
  {
    id: "afera",
    nadpis: "IV. Aféra a vydieranie",
    text: [
      "Ester Schwarzenberg, richtárová žena, je vo vzťahu s odťažitým manželom. Toho zaujímajú iba Benediktove kázne a starostlivosť o cudný a kresťansky naplnený život v dedine. Manželstvo bez štipky vášne Ester frustruje a chodí sa často vyrozprávať Agnes.",
      "Ak to ale nestačí, Ester sa potajme zastaví v šenku. Práve tam viackrát natrafila na Viliama. V samote našli pochopenie a súznenie, čo dospelo až do mileneckého zväzku — ich láska vzplanula v decembri 1502.",
      "Dlho sa potajomky stretávali, čo nebádal nikto — až jeden večer, za dusného augustového večera, kedy ich videl Karol bozkávať sa pri mlyne, kam chodil pomlieť jačmeň na svoje pivo. Ester ho za jeho mlčanie podplatila a začala na týždennej báze uberať mince z manželovej truhlice.",
      "Naďalej sa však s Viliamom stretávala — ten totiž netušil, že ich Karol videl, zočila ho iba Ester. Inak ak Ester nebola so svojím milým alebo so svojím manželom, chodila plakať na ramene Agnes, aký má biedny život, no nikdy jej o svojej afére nepovedala."
    ]
  },
  {
    id: "sobota",
    nadpis: "V. Sobota 21. októbra — prasklo to",
    text: [
      "Deň predtým, 21. októbra napoludnie, Tadeus prichytil svoju ženu kradnúť peniaze z jeho truhlice. Vytiahol z nej priznanie o nevere a podplácaní krčmára Karola. Hneď ako sa Ester priznala k nevere a k tomu, že za Karolovo mlčanie doteraz utratila už 30 strieborných grošov, utiekla z domu.",
      "Zamierila si to cez most smerom k mlynu, aby zmiatla Tadeusa, ak by ju sledoval. Po chvíli most znova prekročila a uchýlila sa k Viliamovi.",
      "Medzitým sa Tadeus doma opil a celú noc bedákal. Ráno vstal odhodlaný vybaviť si účty s Viliamom a Karolom, ak ich stretne vychádzať z kostola."
    ]
  },
  {
    id: "nedela-rano",
    nadpis: "VI. Nedeľa 22. októbra — bitka po omši",
    text: [
      "22. októbra bola nedeľa, zahalená šedou oblohou. O ôsmej ráno Benedikt slúžil omšu. Tadeus, ešte stále v alkoholovom opojení, v kostole nebol. Čakal na Karola pred kostolom (ten totiž v kostole bol, Ester a Viliam nie).",
      "Tadeus naňho kričal ako rozzúrený brav (no nikto nepočul, čo mu vytýkal) a náhle mu vrazil do tváre, až Karol, skrvavený a so zlomeným nosom, ľahol do prachu zeme. Tadeus odišiel späť domov a Benedikt Karola vzal do sákristie ošetriť.",
      "Neskôr, večer, ho Benedikt navštívil, aby skontroloval, ako sa mu vodí, a vtedy sa Karol zlomil a vylial si svoje potemnelé srdce. Rozpovedal Benediktovi, ako v auguste uzrel neverníkov bozkávať sa pri mlyne, ako Ester vydieral a žiadal groše za jeho mlčanie, ba aj ako jej dával návrhy na ďalšie cudzoložstvo, čo ale Ester vehementne odmietala a Karol nenaliehal, aby jeho chlípnosť v amoku nevyzradila.",
      "Karol sa kajal zo svojich temných stránok, no ani Benediktovo chlácholenie mu neprinášalo pokoj. Farár ho tak odviedol domov, nalial mu pohár vína a kázal, aby si odpočinul."
    ]
  },
  {
    id: "nedela-den",
    nadpis: "VII. Nedeľa — kde bol kto",
    text: [
      "Ester sa nevrátila domov. Noc strávila u Viliama. Ten do kostola nešiel a každý si myslel, že bol zase opitý a nevládal. Po omši sa Ester potichu vytratila k Agnes, keď ju videla vracať sa domov z kostola. Strávila tam celý deň a povedala jej o všetkom, čo sa stalo.",
      "Agnes jej spočiatku poriadne vyčistila žalúdok, hovorila o jej necudnosti a hriechu, ktorý pácha. Potom preklenula svoje obvinenia do tvrdenia, že ju tak učarovala Greta a samu seba tým chlácholila. V konečnom dôsledku zvíťazili jej emócie voči Ester, ktorú mala rada ako dcéru.",
      "Keď našiel ráno prázdny dom, Viliam celý deň prepil od žiaľu, že ho Ester opustila, a od strachu z hnevu Tadeusa. Doobeda pil doma, potom sa chcel zastaviť v krčme, no bola zatvorená. Prešiel sa k mlynu, kde bolo pri rieke rybárske miesto, a tam preležal po celý zvyšok dňa nasávajúc, kým nezaspal.",
      "Tadeus sa vrátil domov a pil ďalej, potom celý deň chodil po dedine a nazeral do okien. Klopal na dvere a dopytoval sa na Ester, no nikto ju nevidel. K Viliamovi došiel až popoludní, keď doma nebol. Navštívil aj Moritzov statok, kde pri odchode nechtiac nezatvoril bránku od košiara s ovcami.",
      "Svoju cestu zakončil u Grety. U tej sa nervovo zrútil, vyplakal sa a uľavil svojej utrápenej duši, rozhorčenej a zmorenej z nevery manželky. Greta s jeho vnútornou samotou súcitila a našla súznenie v spoločných útrapách. Uvarila Tadeusovi kurací vývar na vytriezvenie a strávila s ním čas príjemným rozhovorom. Neskôr, už trochu triezvejší, sa jej Tadeus poďakoval, ospravedlnil sa, ako ju celý život odsudzoval a odišiel domov."
    ]
  },
  {
    id: "vrazda",
    nadpis: "VIII. Vražda",
    text: [
      "O šiestej večer, keď sa už zotmelo, vyrazil Tadeus od Grety. Po dedine sa zažali tlmené svetlá lámp a teplé svetlo sa mihotalo za oknami príbytkov. Prašná cesta domov viedla popri dome Agnes. Ostril na jej dvor, keď tam videl pohyb, a zbadal Agnes, ako kŕmi svine, ale so spoločnosťou — Ester. Zastavil a žmúril na nich, aby sa uistil, že vidí dobre. Keď ho Ester uvidela, rozutekala sa naspäť k Agnes. Tadeus ju rozzúrený nasledoval.",
      "Vrútil sa do domu, kde Agnes stála v strede miestnosti a vlastným telom chránila Ester. Tá zúfalo plakala a snažila sa cúvať, no za ňou stála horúca pec. Tadeus vrieskal na Ester a ignoroval Agnes, fučiacu od strachu, ale aj odhodlania chrániť svoju milovanú Ester stoj čo stoj.",
      "Keď sa Ester aj naďalej schovávala a nevystrkovala hlavu, Tadeus presunul pozornosť na Agnes. Začal jej nakazovať, aby ustúpila a pustila ho k tej nevernici. Kým na seba s Agnes ziapali, Ester využila, že si ju Tadeus práve nevšíma. Vyskočila spoza Agnes a trielila do padajúceho súmraku. S plačom bežala okolo kostola najskôr k Viliamovi a trieskala na dvere, akoby mala Tadeusa rovno v pätách. Keď nikto neotvoril, utekala popri rieke naspäť k svojmu domu, kde sa hneď zamkla.",
      "Tadeus začal byť viac agresívny, lebo Agnes mu začala vmietať do očí nezáujem o svoju ženu. Dlho sa hádali a Tadeus sotil Agnes o kozub uprostred domu a vyrútil sa na ňu. Pri kozube ležal kutáč, ktorého sa Agnes intuitívne chopila a bez rozmýšľania sa ním zahnala. Zasiahla Tadeusa do hrdla, ktoré mu prerezala. Ľahol na zem a hneď vykrvácal.",
      "V dome v tej chvíli už nebol nikto okrem Agnes a Tadeusa. Ester bola preč. Nešlo o ochranu Ester — Agnes sa bránila sama sebe."
    ]
  },
  {
    id: "zahladzanie",
    nadpis: "IX. Zahladzovanie stôp",
    text: [
      "Keď šok a hrôza nad tým, čo urobila, opadli, Agnes začala zakrývať stopy. Vyzliekla Tadeusovo zakrvavené oblečenie — prekryla mu iba rozkrok plátnom — a najskôr ho len pohodila vedľa koša so špinavým prádlom, ktoré mala vyprať pre celú dedinu.",
      "Potom oblečenie Tadeusa zhužvala (nechtiac k nemu prihodila aj kusy oblečenia, čo mala prať, konkrétne Viliamovu košeľu a blúzku Ester) a prihodila k nemu aj Tadeusov prsteň, čo nosil na ľavej ruke. Stiahla mu aj strieborný ruženec z krku, pričom mu zamazala tvár od jeho krvi a trochu ho aj poškriabala po tvári dlhými nechtami. Ruženec pohodila na stôl. Potom začala drhnúť dlážku.",
      "Keď vysala krv z dlážky, zbehla po fúrik a pristavila ho k dverám. Naložila naň jeho telo, potom do fúrika hodila aj guču oblečenia, v ktorej bol aj prsteň. Na ruženec zabudla, nechala ho u seba na stole. Prekryla telo plachtou a vyrazila ním tmavou dedinou. Mierila k domu Viliama, na ktorého chcela vraždu hodiť.",
      "Kráčajúc dedinou stretla Benedikta, ktorý sa vracal od Karola. Agnes mu povedala, že ide s fúrikom k Viliamovi po drevo, lebo jej došlo. Keď Benedikt zmizol, trhla vozíkom a pokračovala ďalej, no uzrela Moritza, ktorý sa motal dedinou, hľadajúc ovcu Vilmu. Zabočila tak v zmätku ku krčme, počas čoho si nevšimla, že Tadeusov prsteň vypadol z fúrika.",
      "Vyložila telo za šenkom v kroví, guču oblečenia odhodila do krovia pri rieke, ktoré však potom skĺzlo až do rieky a neskôr ho vyplaví pri brehu Viliamovho domu. To celé pozoroval cez rieku Viliam, no videl len siluetu, nevidel tvár Agnes. Tá potom zamierila naspäť k domu, iba s plachtou vo fúriku."
    ]
  },
  {
    id: "nalez",
    nadpis: "X. Pondelok 23. októbra — nález",
    text: [
      "23. októbra 1503 okolo 7:00 ráno objavil Viliam telo pri krčme, keď sa skoro ráno prebudil na rybárskom mieste a mieril domov. Benedikt dal hneď poslať po inkvizítorov.",
      "Brat Martin, prísažný lekár a ohliadač zo sídla biskupského, vykonal obhliadku tela a dal prehľadať dedinu i oba brehy rieky. Popoludní prichádzajú inkvizítori — hráčske tímy."
    ]
  }
],

/* ------------------------------------------------------------------ */
obet: {
  id: "tadeus",
  meno: "Tadeus Schwarzenberg",
  rola: "Richtár lesovický — obeť",
  vek: 30,
  narodenie: "—",
  rodicia: "Helmut Schwarzenberg (bývalý richtár) a jeho žena",
  opis: "Tadeus je richtár, syn bývalého richtára Helmuta Schwarzenberga. Bol to 30-ročný, cnostný muž, cenený komunitou a Benediktom za jeho neochvejnú vieru a oddanosť dedine a ľuďom. Zbožnosť uňho víťazila nad svetskou láskou voči svojej žene, ktorá preňho nikdy veľa neznamenala — do chvíle, keď si uvedomil, že o svoju ženu môže prísť.\n\nKeď sa 21. októbra dozvedel o nevere a o tom, že mu Ester kradla peniaze pre Karola, opil sa a celý nasledujúci deň chodil po dedine a hľadal ju. Zomrel v dome Agnes, pri kozube, v nedeľu 22. októbra okolo 18:30."
},

/* ------------------------------------------------------------------ */
postavy: [
  {
    id: "benedikt",
    meno: "Benedikt Muntz",
    rola: "Miestny duchovný",
    herec: "Marcel",
    vek: 50,
    narodenie: "14. február 1453",
    rodicia: "Friedrich Muntz, Brunhilda Muntz",
    opis: "Benedikt bol vzdelaný a Bohu a cirkvi oddaný mladý muž, ktorý prekvital vedomosťami a odhodlaním. Preto bol práve on poslaný v roku 1482 do Lesovíc, aby tam bojoval s morom.\n\nBenedikt, mladý 29-ročný duchovný, a Helena, 24-ročná pohľadná žena, považovaná za čarodejnicu, splanuli láskou, z ktorej vzišla Greta. O dcére však nevedel, dokiaľ sa po rokoch do Lesovíc nevrátil a nenavštívil hrob Heleny, kde prvýkrát stretol aj svoju dcéru. Našiel si jej krstný list v záznamoch otca Ondreja, čo mu potvrdilo, že Greta sa narodila po jeho afére s Helenou.\n\nOtec Benedikt je teraz pokrytec, ktorý síce s dobrým úmyslom, no predsa škodí vlastnej dcére — robí z nej vyvrheľ a ukazuje na ňu prstom ako na čarodejnicu. Ako znalec hriechov a mnohých tajomstiev tak nepriamo poukazuje v kázňach aj na skazenosť obyvateľov — obaľuje to však do rečí o kliatbe čarodejnice, ktorú na dedinu uvalila.",
    vztahSObetou: "Pozitívny — dobre spolu vždy vychádzali, Tadeus bol zbožný farník a v očiach Benedikta dobrý človek.",
    motiv: "Žiadny. Inkvizítori by ale mohli poukazovať na to, že sa mohol dozvedieť o Tadeusovej návšteve Grety a zabil ho preto, lebo sa naháňal za jeho dcérou.",
    vztahy: [
      { kto: "tadeus", popis: "Mal ho rád kvôli jeho zbožnosti a oddanosti, bol mu vzorom cudnosti, ktorú sám nemal" },
      { kto: "agnes", popis: "Jeho milovaná ovečka" },
      { kto: "ester", popis: "Kritizuje ju za neveru" },
      { kto: "greta", popis: "Pristupuje počas vyšetrovania odmerane a snaží sa na ňu nepoukazovať, aby ju chránil" },
      { kto: "viliam", popis: "Pozitívny kvôli zbožnosti, kritizoval jeho alkoholizmus, po prevalení aféry bol jeho prístup ešte kritickejší" },
      { kto: "karol", popis: "Spočiatku neutrálny vzťah, po prejavení aféry kritizoval Karolovu chlipnosť a chamtivosť, hlavne potom, ako vydieral Ester a Viliama, dal mu ale rozhrešenie — napriek tomu je rozčúlený z návrhov, čo dával Grete" },
      { kto: "moritz", popis: "Pozitívny, prostého chlapca mal rád, cenil si jeho zbožnosť a pracovitosť" }
    ],
    obvinuje: [
      { kto: "ester", popis: "Vie o jej nevere s Viliamom, keď mu to v deň vraždy Tadeusa prezradí Karol, berie to ako motív zabiť richtára" },
      { kto: "viliam", popis: "Rovnaký motív ako v prípade Ester" }
    ],
    chrani: [
      { kto: "greta", popis: "Je to jeho dcéra" },
      { kto: "karol", popis: "Bol s ním v čase vraždy" }
    ],
    vlastnosti: [
      "Je nástupcom otca Ondreja, ktorý zomrel krátko potom, ako Helena — preto sa stal farárom v Lesoviciach.",
      "Zapisuje si zhrnutia spovedí.",
      "Niekedy sa po západe slnka chodí dívať na Gretu.",
      "Kupuje si potajme alkohol od Viliama a zapíja ním smútok z nenaplneného vzťahu s dcérou, čítajúc jej krstný list.",
      "Má dlhé nechty.",
      "Vie čítať aj písať."
    ],
    vzdyHovori: [
      "Že vie o tom, že Karol vydieral Ester — aj to mu Karol v slabej chvíli prezradil.",
      "Že vie, že o vydieraní Viliam nevedel — Karol mu spomínal, že ich videl cudzoložiť, ale konfrontoval iba Ester.",
      "Že videl Ester aj Agnes večer — jednu videl utekať a plakať, druhú s fúrikom."
    ],
    taji: [
      "Aféru Ester a Viliama — nechce na to poukazovať, nevie o tom skoro nikto, prevalí sa to ale pod ťarchou dôkazu, hlavne kvôli jeho zoznamu hriechov, čo sa nájde počas hry bratom Martinom.",
      "Minulosť v Lesoviciach — prizná to až pod ťarchou dôkazov.",
      "Otcovstvo Grety — povie to až po nájdení listu od Heleny (nie po nájdení krstného záznamu).",
      "Alkoholizmus — bude tie obvinenia zmietať zo stola, ako aj to, že vraj chodí brať víno od Karola. Prizná ho až potom, ako sa nájde krstný záznam s červenými stopami — aby vyvrátil domnienku, že je to krv, povie, že si ten list čítal a rozlial víno."
    ],
    faq: [
      { q: "Odkiaľ má istotu, že Greta je jeho dcéra?", a: "Potvrdzuje to okrem matriky aj ľúbostný list, ktorý po matke zostal — našiel ho v papieroch zosnulého otca Ondreja, ktorého v Lesoviciach nahradil." },
      { q: "Ako sa dozvedel o nevere Ester s Viliamom?", a: "Zistil to až od Karola, v deň vraždy, keď sa večer u Karola zastavil, a ten mu všetko rozpovedal." },
      { q: "Kde fyzicky drží zoznam hriechov, krstný list a víno?", a: "V kostole, kde aj vzadu býva v malej izbe. Prehľadá to tam brat Martin a postupne predostrie dôkazy." },
      { q: "Videl ho niekedy niekto, ako sa po západe slnka chodí dívať na Gretu?", a: "Nikto ho nevidel, no tuší to Agnes — síce k nemu chová úctu, no bude tvrdiť, že vídavala viackrát Benedikta prechádzať sa po dedine v noci. Videla ho rovno na ceste pred domom." },
      { q: "Keď sa otcovstvo prevalí, odvolá svoje kázne o kliatbe čarodejnice?", a: "Potom zmäkne." }
    ]
  },

  {
    id: "greta",
    meno: "Greta (Muntz)",
    rola: "(Údajná) čarodejnica, bylinkárka",
    herec: "Soňa",
    vek: 20,
    narodenie: "12. jún 1483",
    rodicia: "Benedikt Muntz (nevie o tom), Helena",
    opis: "Mladé, dedinou odvrhované dievča, ktoré prevzalo remeslo svojej matky Heleny — bylinkárstvo.\n\nNesie sa s ňou stigma z vylúčenia z dedinskej komunity, čo ju naučila znášať jej matka. Učila ju samostatnosti a dobromilosti, no zároveň, aby nenastavovala milú tvár tejto pokryteckej dedine. Preto je Greta drzá a uštipačná a nemá o dedinčanov záujem. Svojím správaním ich zámerne straší, lebo si ich ani nechce pripúšťať k telu.\n\nKontakt máva iba s Karolom, od ktorého berie pravidelne jačmeň. Neznáša ho ale kvôli jeho slizkým poznámkam.\n\nNikto nepozná jej pravú tvár — ústretovú a priateľskú dievku, ktorá je pod ochrannou maskou sarkazmu a strašenia nepochopenou samotárkou. Jediný, kto to však vedel, bol Tadeus, čo zistil tesne pred svojou smrťou.",
    vztahSObetou: "Neutrálny — s miernou náklonnosťou ku koncu života obete. Viedli konverzáciu pred jeho vraždou, keď hľadal Ester. Po rozhovore mu ako vďaku za jeho milé správanie chcela pomôcť odvarom na vytriezvenie.",
    motiv: "Žiadny. Tým, že je pre dedinu vyvrheľ, nevychádza s nikým, a pokrytecké odsudzovanie môže niekto považovať za motív.",
    vztahy: [
      { kto: "tadeus", popis: "Zmena z negatívneho na neutrálny, z jej strany až mierne priateľský, tesne pred jeho smrťou" },
      { kto: "benedikt", popis: "Otec (nevie o tom), vzťahovo tam panuje nevraživosť (z jej strany úprimná)" },
      { kto: "karol", popis: "Negatívny, párkrát jej dával návrhy, no vždy ho odbila, berie od neho iba jačmeň z jeho mlyna" },
      { kto: "ester", popis: "Neutrálny (zo strany Ester nepriateľský)" },
      { kto: "agnes", popis: "Nepriatelia (lebo je vraj čarodejnica)" },
      { kto: "viliam", popis: "Neutrálny, nikdy sa k nej nevyjadroval, ale zdieľa čarodejnícky názor celej dediny" },
      { kto: "moritz", popis: "Neutrálny, nijako neinteragujú, Moritz sa jej ale trochu bojí, ona však voči nemu nemá žiadne negatívne emócie" }
    ],
    obvinuje: [
      { kto: "benedikt", popis: "Káže o tom, aby sa od nej občania dištancovali (iba z nevraživosti)" },
      { kto: "karol", popis: "Chlipný krčmár, ktorý jej nedá pokoj — povie o tom, ako ju v stredu obťažoval" },
      { kto: "agnes", popis: "Neznášajú sa a myslí si, že je pokrytec schovaný za cirkevný chrbát, a jej pasívna agresivita sa mohla pretaviť do agresie voči Tadeusovi" },
      { kto: "ester", popis: "Videla ju cez oblok sedieť v dome a plakať, keď tam chcela priniesť odvar pre Tadeusa — navyše berie jej neveru ako motív k vražde" }
    ],
    chrani: [
      { kto: "viliam", popis: "Dosť nepriamo — videla ho piť na rybárskom mieste, keď išla k mlynu po jačmeň, bolo to však dlho pred vraždou, takže si nie je tým istá" }
    ],
    vlastnosti: [
      "Má dlhé nechty — iba ona, Agnes a Benedikt majú dlhšie nechty, čo môže byť dôvod poukázať na manipuláciu s telom.",
      "Do dediny chodí len kvôli jačmeňu, inak si vystačí sama.",
      "Provokuje Agnes tým, že jej sem-tam hádže zvyšky sliepok na dvor.",
      "Pozná zloženia kľúčových odvarov.",
      "Nepovie, či má doma kutáč.",
      "Vie čítať aj písať."
    ],
    vzdyHovori: [
      "Návštevy dediny kvôli jačmeňu — chodí si poň vždy do mlyna, vždy tam stretáva Karola a počúva jeho úchylné reči."
    ],
    taji: [
      "Rozhovor s Tadeusom — prizná, že u nej bol, ale tají, že sa spolu dlho bavili. Bude vravieť, že len bol na dverách, dokiaľ ju nekonfrontujú s nájdeným odvarom.",
      "Návštevu Tadeusovho domu — nechce, aby ju brali ako podozrivú, prizná to až potom, ako si niekto spojí nájdený odvar na vytriezvenie a jej bylinkár."
    ],
    faq: [
      { q: "Tuší, kto je jej otec? Naznačila jej Helena pred smrťou niečo o Benediktovi?", a: "Netuší nič, otca nepokladá za dôležitého. Matka v súvislosti s jej otcom nechala iba list, ktorý dala otcovi Ondrejovi, čo Gretu krstil. Nepovedala ale nikdy, kto otcom je — dala mu list pre prípad, že by ju niekto hľadal. Stalo sa tak na sklonku jej života." },
      { q: "Čo presne si s Tadeusom povedali pri poslednom rozhovore?", a: "Prezradí jej aféru jeho ženy s Viliamom, ale už nie o Karolovi, že ju vydieral. Dala mu vývar, najedol sa a sťažoval sa, že sa cíti opustený, ona mu vyjavila svoje vlastné, rovnaké emócie — že trpí tým, ako ju celá dedina zavrhuje. Obaja boli potešení zo vzájomnej spoločnosti a jeden o druhom si urobili dobrú mienku." },
      { q: "Dokončila odvar na vytriezvenie a dostal sa až k Tadeusovmu domu?", a: "Odvar doniesla až k domu. Keď k nemu ale došla, počula dnu vzlyky. Cez okno si všimla, ako Ester plače. Ruch (Benedikt) ju vystraší, pri úteku odvar zahodí — nájde sa pod oknom bratom Martinom." },
      { q: "Kde je jej hranica pri obvinení z bosoráctva?", a: "Bude cynická a sarkastická, vysmievať sa ich preludom o jej čarodejníctve — ako o príčine obdobia dažďa a potom zase sucha, skazeného piva, kuracích kostí na dvore Agnes (čo ale na provokáciu robí)." },
      { q: "Prizná facku a škrabance Karolovi?", a: "Prizná to, bude o Karolovi hovoriť s odporom." }
    ]
  },

  {
    id: "ester",
    meno: "Ester Schwarzenberg",
    rola: "Mladá richtárova žena",
    herec: "Adelka",
    vek: 22,
    narodenie: "14. marec 1481",
    rodicia: "Heinrich Ecker, Rosa Ecker (obaja zomreli na mor)",
    opis: "Ester stratila rodičov, keď mala 2 roky. Počas morovej epidémie ju u seba prichýlila rodina Schwarzenbergovcov. Keď dospela, vzala si ich syna, Tadeusa. Ten bol voči nej ale príliš chladný, veľmi silný veriaci človek, ktorý jej neprejavoval žiadnu vášeň.\n\nEster je romantická a nešťastná duša, ktorá od života chcela len pravú lásku. Tej sa jej u adoptívnej rodiny nikdy nedostalo, preto ju sem-tam vyhľadávala u Agnes, ktorá jej v ťažkých dňoch bola ako matka. Všetko sa ale zmenilo, keď bližšie spoznala Viliama, ktorý sa, rovnako ako ona, cítil sám a opustený. Ich láska rýchlo vzplanula v decembri 1502 a až do augusta 1503 to vedeli utajiť, než na to prišiel krčmár Karol, keď ich načapal pri mlyne bozkávať sa.\n\nKarol to pod sľubom peňazí tajil, ale keď Tadeus pristihol Ester, že kradne peniaze a je neverná, svet sa jej zrútil a začala sa báť ani nie o svoje manželstvo, ani o milenca, ale o seba, svoje meno, a z paranoje aj o svoj život.",
    vztahSObetou: "Negatívny — manželstvo bez lásky a bez vášne, utekala do náruče iného. Boli manželia kvôli spoločenskej konvencii.",
    motiv: "Odhalenie aféry a krádež peňazí. Tadeus sa pred smrťou dozvedel o nevere Ester s Viliamom.",
    vztahy: [
      { kto: "tadeus", popis: "Manžel, s ktorým vo zväzku nie je šťastná" },
      { kto: "agnes", popis: "Dôverníčka, takmer ako matka. Poskytuje bezpečný priestor" },
      { kto: "viliam", popis: "Milenec" },
      { kto: "karol", popis: "Neznáša jeho chlipnosť a nenávidí ho kvôli vydieraniu a znalosti tajomstva" },
      { kto: "benedikt", popis: "Skôr negatívny, nemá rada jeho kázne a reči, ktoré oblbujú hlavu jej manžela" },
      { kto: "greta", popis: "Nemá ju rada, bojí sa, že je to bosorka" },
      { kto: "moritz", popis: "Nemá ho rada kvôli tomu, že je jednoduchý a menej chápavý chlapec, hnusí sa jej" }
    ],
    obvinuje: [
      { kto: "karol", popis: "Vedel o ich tajomstve a pobil sa s Tadeusom" },
      { kto: "greta", popis: "Bojí sa jej, verí, že je bosorka, a obviňuje ju z toho, že motá hlavy mužom v dedine (verí, že jej chce prebrať milenca)" },
      { kto: "benedikt", popis: "Len preto, lebo po ceste od Agnes musel ísť Tadeus okolo jeho domu — kostola" }
    ],
    chrani: [
      { kto: "agnes", popis: "Má s ňou vzťah ako s matkou" },
      { kto: "viliam", popis: "Jej milenec, ktorého si nesmierne chráni" }
    ],
    vlastnosti: [
      "Je hysterická, emotívna a povýšenecká.",
      "Bezdôvodne sa odporne správa k Moritzovi, len preto, lebo je iný.",
      "Tadeusovi odcudzila dohromady 30 strieborných grošov.",
      "Nevie, či má doma kutáč.",
      "Nevie čítať ani písať."
    ],
    vzdyHovori: [
      "Že bola u Viliama do večera — neprizná, že bola u Agnes, lebo má tušenie, že ona zabila Tadeusa."
    ],
    taji: [
      "Návštevu Agnes — tuší, že to ona zabila Tadeusa, ale chce ju kryť, ako aj seba, lebo by ju mohli obviniť, že ho zabila tiež, pričom tam už v čase jeho smrti nebola.",
      "Neveru — sprvu to neprezradí, až keď na to prídu detektívi."
    ],
    faq: [
      { q: "Ako presne odcudzila 30 grošov a kde ich Tadeus objavil?", a: "Brala ich po kúskoch, Tadeus si ale časom všimol úbytok. Po tvrdej konfrontácii povedala, koľko presne mu ukradla a prečo." },
      { q: "Vie, že Viliam o vydieraní netuší — a prečo mu to nikdy nepovedala?", a: "Nepovedala mu to, lebo sa bála, ako by reagoval — či by sa naštval, prepil na smrť, utiekol alebo napadol Tadeusa. Nielen že mu to nepovedala po tom, čo ich Karol prichytil, ale ani po tom, ako to vyklopila Tadeusovi. Keď od neho utiekla v sobotu, Viliamovi len plakala na ramene a bola psychicky na dne, čo Viliam pripísal jej citlivosti a nešťastnému životu s Tadeusom." },
      { q: "Kde bola a kde spala od odchodu od Agnes až po ráno?", a: "Bola doma." },
      { q: "Keď jej pôjde o kožu, obetuje Viliama?", a: "Viliama si bude chrániť. Keď sa prevalí dôkaz s oblečením, bude ukazovať prstom na Agnes." }
    ]
  },

  {
    id: "viliam",
    meno: "Viliam König",
    rola: "Drevorubač / alkoholik",
    herec: "Dávid",
    vek: 27,
    narodenie: "10. január 1476",
    rodicia: "Wilhelm König, Anastasia König (zomreli na mor 1483)",
    opis: "Samotársky drevorubač, ktorý osirel v rokoch, keď zúril mor. Odvtedy žil sám, iba s podporou dedinčanov, dokiaľ nedospel a nestal sa plne samostatným. Rýchlo vyrástol v samostatného muža, ale zlomeného samotou. Rokmi sa ale začal viac uzatvárať do seba. Žil iba pre dve veci — prácu a alkohol.\n\nAko roky bežali, stal sa z neho statný chlap, nemal však koho na dedine oslniť. Samotu a frustráciu zapíjal stále viac a viac, dokiaľ sa mu do života nezačala pliecť Ester. Tá, frustrovaná zo svojho manžela, našla u Viliama pochopenie a podporu. Ich puto bolo silné natoľko, že Viliam aj značne obmedzil alkohol.\n\nKeď sa odhalila jeho aféra a Ester od strachu zdúchla (ako si sprvu myslel), opäť vliezol do náruče alkoholu a opil sa pod obraz Boží. Jeho aféra je silným motívom, ako aj jeho matné spomienky na celý deň a noc.",
    vztahSObetou: "Neutrálny až negatívny — osobne spolu navonok normálne vychádzali a fungovali, až do chvíle, ako sa Tadeus dozvedel o jeho afére s Ester.",
    motiv: "Odhalenie aféry. Tadeus sa pred smrťou dozvedel o nevere Ester s Viliamom.",
    vztahy: [
      { kto: "tadeus", popis: "Neutrálny, ale skôr negatívny, keďže Ester sa s ním trápila. Nebola medzi nimi zlá krv, až dokiaľ sa Tadeus nedozvedel o afére" },
      { kto: "ester", popis: "Milenka, spriaznená duša" },
      { kto: "karol", popis: "Obchodné vzťahy, príležitostné debaty v šenku. Nevie, že Karol vedel o afére" },
      { kto: "benedikt", popis: "Skôr pozitívny, Viliam chodí do kostola, čo Benedikt chváli, ale kritizuje, že pije" },
      { kto: "agnes", popis: "Neutrálny až negatívny, kritizuje ho, že pije" },
      { kto: "greta", popis: "Neutrálny až negatívny, tiež sa bojí, že to je bosorka" },
      { kto: "moritz", popis: "Pozitívny vzťah, bývajú blízko, Moritzovi pomáha s opravami, Moritz mu dodáva mäso a syr" }
    ],
    obvinuje: [
      { kto: "karol", popis: "Vie, prečo sa pobil s Tadeusom, a podozrieva ho, že vraždou chce zakryť svoju rolu na cudzoložstve — že o tom vedel a nič nepovedal. Navyše ho videl v noci pri rieke na druhom brehu" }
    ],
    chrani: [
      { kto: "ester", popis: "Neverí, že by bola schopná vraždiť" },
      { kto: "agnes", popis: "Vie, že je dôverníčkou Ester, aj keď mu to Ester tají" }
    ],
    vlastnosti: [
      "Je nesmierne tichý, s hlavou večne sklopenou.",
      "Rozžiari sa iba pri Ester.",
      "Doma páli čerešňovicu.",
      "Celé vyšetrovanie má opicu.",
      "Je ľavák.",
      "Nevie čítať ani písať."
    ],
    vzdyHovori: [
      "Že uňho vraj bola Ester — bude ju kryť a klamať.",
      "Že o 11:00 išiel na rybárske miesto piť. Do tohto času vie klamať o prítomnosti Ester u seba doma. Nepovie, že išiel piť zo strachu, že ho Ester opustila, ale že si po prevalení ich aféry chcel prevetrať hlavu.",
      "Že videl siluetu naproti rybárskemu miestu pri šenku o 20:45 — nevie ale, kto to bol.",
      "Že videl Karola vracať cez rieku o 21:30."
    ],
    taji: [
      "Že od neho Ester ráno odišla — nevie, či vraždila, a chce jej poskytnúť alibi, ktoré ale bude lámať samotná Ester. Ráno u Viliama bola, potom už nie, no tá nebude priznávať, že bola u Agnes.",
      "Kam išla Agnes — nevie, kam išla, ale vie o blízkom vzťahu Ester aj Agnes, aj keď o tom nepovedal ani Ester."
    ],
    faq: [
      { q: "Kde je hranica jeho matných spomienok?", a: "Keď bola Agnes pri šenku, pamätá si len siluetu a vŕzganie fúrika. Keď bol pri šenku vracať Karol, pamätá si to presne — prebral sa na jeho vracanie, videl ho, ako po vracaní rumázga na kraji rieky, potom sa vracia do šenku." },
      { q: "Odkiaľ videl siluetu o 20:45 a Karola o 21:30?", a: "Ležal na druhom brehu rieky, na tráve, opitý." },
      { q: "Vie o jeho ľavorukosti niekto v dedine?", a: "Nie, je to len vsuvka. Rana na krku je na ľavej strane — nie je to nijako smerodajný údaj, ale môže to inkvizítorov miasť." },
      { q: "Kedy naposledy videl Ester a mali nejaký plán?", a: "Naposledy, keď spolu večer v sobotu, 21. októbra, líhali do postele. Žiadny plán nemali, ani len nevedel, že Tadeus už o afére vie. Keď sa ráno prebral a Ester bola preč (odišla k Agnes), myslel si, že ho opustila, tak pil ďalej celý deň." },
      { q: "Ako zareaguje, keď Ester jeho alibi zlomí sama?", a: "Stále ju bude kryť, lebo ju miluje a nemá nikoho iného — rovnako ako ona." }
    ]
  },

  {
    id: "agnes",
    meno: "Agnes Schultz",
    rola: "Poverčivá dedinská tetka — PÁCHATEĽKA",
    herec: "Megi",
    vek: 51,
    narodenie: "22. február 1452",
    rodicia: "Gerhard Schultz, Emilia Schultz",
    opis: "Chudobná vdova, ktorá stratila manžela ešte počas morovej rany v roku 1483. Stalo sa tomu tak ešte predtým, ako stihli splodiť dieťa. Agnes zlomil žiaľ nad smrťou manžela a nad nenaplnením rodinného života, tak sa zmierila so životom vdovy, čo ale viedlo k obrovskej frustrácii. Ostala zatrpknutá, závistlivá a poverčivá.\n\nJe vždy prvá v kostole, hodnotí ľudí podľa toho, či do kostola prídu alebo nie, aj podľa toho, kto príde skôr a kto neskôr. Hltá farárove slová bez kritiky a pochybností, Benedikt je stredobodom jej náboženského života, ku ktorému sa upína. Pre Benedikta je niekedy až otravná, lebo je to žena plná poverčivosti, komplexov, zášte a hnevu.\n\nNenaplnené rodičovstvo jej kompenzuje Ester, sem-tam aj Moritz. Voči týmto osobám má najhlbší vzťah, dokonca ešte silnejší, ako voči Benediktovi. Ester bude chrániť za každú cenu a nedá na ňu dopustiť aj napriek jej hriechom.",
    vztahSObetou: "Neutrálny/negatívny — v jej očiach bol sklamaním svojej ženy, nedokázal naplniť ich vzťah a nevedel sa o ňu postarať. Podľa nej sa on sám pričinil o neveru svojej ženy.",
    motiv: "Správanie Tadeusa voči jeho žene. Jej konzervativizmus Tadeusa odsudzoval ako muža, ktorý nie je schopný postarať sa o svoju ženu. Skutočný priebeh: sebaobrana.",
    vztahy: [
      { kto: "tadeus", popis: "Sprvu pozitívny, keď ho vnímala ako zbožného a oddaného dedine. Keď sa ale v deň vraždy Ester vyrozprávala, Agnes bola z Tadeusovho nezáujmu pohoršená" },
      { kto: "ester", popis: "Je jej ako dcéra, chvíľu ju po prevalení aféry odsudzovala, no chráni ju" },
      { kto: "benedikt", popis: "Veľmi ho rešpektuje, je pre ňu stelesnením Boha na zemi" },
      { kto: "karol", popis: "Neutrálny až negatívny, nemá ho rada, lebo jeho šenk podnecuje k hriechu" },
      { kto: "greta", popis: "Nesmierne sa jej bojí, je presvedčená, že je bosorka" },
      { kto: "viliam", popis: "Skôr negatívny, nemá rada, ako pije, je pre ňu tiež veľkým hriešnikom" },
      { kto: "moritz", popis: "Má ho rada, pomáha mu, keď niečo potrebuje" }
    ],
    obvinuje: [
      { kto: "greta", popis: "Obviňuje ju z bosoráctva a že čarami richtára zavraždila" },
      { kto: "viliam", popis: "Aby prerušila necudný zväzok medzi ním a Ester" }
    ],
    chrani: [
      { kto: "ester", popis: "Má ju rada ako dcéru" },
      { kto: "moritz", popis: "Je jej ako syn" },
      { kto: "benedikt", popis: "Miluje jeho kázne proti čarodejnici a kritiku necudnosti obyvateľov, je pre ňu stelesnenie svätosti" }
    ],
    vlastnosti: [
      "Má dlhé nechty — KĽÚČOVÝ FAKTOR. Poškriabala nechtiac Tadeusa na tvári, keď manipulovala jeho telom, pričom mu aj nechtiac rozotrela krv po tvári.",
      "Veľa kričí, súdi a prežehnáva sa na každom rohu, kde sa deje čokoľvek „zlé“ — aj keď len vidí ženy smiať sa na verejnosti.",
      "Perie odevy celej dedine (nájde sa zakrvavená guča oblečenia Tadeusa so zamiešanou košeľou Viliama a blúzou Ester, vyplavená pri Viliamovom dome).",
      "Ničí sudy s pivom Karolovi.",
      "Keď sa jej opýtajú na fúrik, povie, že ho má každý — no ostatní to budú popierať.",
      "Priamo ju môže zlomiť strieborný ruženec alebo kutáč — bude tvrdiť, že kutáč doma nemá.",
      "Nevie čítať ani písať."
    ],
    vzdyHovori: [
      "Že nevie o afére — toto musí hovoriť, nakoľko podľa výpovede Ester bola celý deň sama a stretla iba Moritza. Nemala sa tak o afére odkiaľ dozvedieť, v čase vyšetrovania to nevie každá postava.",
      "Že u nej bol Moritz — priznáva obe návštevy.",
      "Že u nej bol Tadeus hľadať Ester o 12:30."
    ],
    taji: [
      "Prítomnosť Tadeusa v dome — prizná iba jeho popoludňajšiu návštevu na dverách o 12:30.",
      "Prítomnosť Ester v dome — bude vravieť, že bola u Viliama, a ak to Viliam bude popierať, bude poukazovať na to, že Viliam bol celý deň opitý a mimo domu, čo dosvedčí Greta.",
      "Znalosť aféry — ak by priznala, že to vie, priznala by, že v deň vraždy bola s Ester, čo bude popierať.",
      "SAMOTNÚ VRAŽDU — prizná sa až pod ťarchou strieborného ruženca alebo kutáča."
    ],
    faq: [
      { q: "Zabila Tadeusa úmyselne, alebo v afekte?", a: "Nebol to úmysel, iba inštinktívna reakcia po tom, ako ju sotil na zem a naštvaný sa k nej vyrútil." },
      { q: "Ako sa do zakrvavenej guče prania dostala Viliamova košeľa a Esterina blúza?", a: "Náhoda. Oblečenie pri vyzliekaní tela pohodila k vypranému, zhodou okolností ku košeli Viliama a blúzke Ester, ktoré potom omylom zbalila s Tadeusovým oblečením." },
      { q: "Čo presne musia detektívi urobiť, aby ju to zlomilo?", a: "O ruženci musia s istotou vedieť, že je jediná, čo má krížik iný ako drevený — ako všetci ostatní. O kutáči im treba iba sa spýtať, či doma kutáč má — a ten bude mať doma každý okrem Moritza. Ester nevie, či ho doma majú, Greta to nepotvrdí ani nepoprie." }
    ]
  },

  {
    id: "karol",
    meno: "Karol Kolmann",
    rola: "Krčmár / mlynár",
    herec: "Gabo",
    vek: 31,
    narodenie: "9. marec 1472",
    rodicia: "Peter Kolmann, Laura Kolmann",
    opis: "Krčmár Karol nalieva obyvateľom a stará sa iba o to, aby si namastil kapsy, aby si ľudia poriadne prepláchli hrdlá a vychrlili z nich svoje frustrácie a tajomstvá. Nebudí ale dobrý dojem, pôsobí zákerne a ľudia si naňho dávajú pozor — pokiaľ to ale nepreženú. Je samotár a jediná slobodná dievka, na ktorú si trúfa, je Greta, čo pred všetkými prísne tají. Vždy to na ňu skúša pri mlyne, no neúspešne.\n\nOkrem toho, že je zdrojom všetkých nápojov, je aj dodávateľom mletého jačmeňa či pšenice pre dedinčanov. Predáva ich do každej jednej domácnosti. Vo veľkom vyrába pivo, ale takisto aj skupuje alkohol od Viliama, ktorý páli čerešňovicu.\n\nOd bitky od Tadeusa sa v ňom zlomilo viac, ako nos. Jeho česť utrpela a v očiach richtára si ju veľmi pošpinil, čo veľmi ľutuje. S tým prišla aj ľútosť nad tým, aký zákerný bol aj voči ostatným dedinčanom.",
    vztahSObetou: "Pozitívny — richtár bol preňho autorita. Nebol štamgast, ale bol osobou, ktorú rešpektoval a mal s ním dobré vzťahy, až do potýčky po omši.",
    motiv: "Bitka a vydieranie. Karol vedel o tom, že je Tadeusova žena neverná, a je príčinou, prečo jeho žena kradla Tadeusove peniaze pre Karola.",
    vztahy: [
      { kto: "tadeus", popis: "Pozitívny, podlizoval sa mu, no pred jeho smrťou si to uňho pokazil" },
      { kto: "viliam", popis: "Obchodný vzťah s veľmi povrchným priateľstvom. Trochu sa ho bude báť potom, ako sa prejaví, že vedel o afére, a bude Viliama obviňovať z vraždy" },
      { kto: "ester", popis: "Nevraživosť z podozrenia z vraždy a zlá krv kvôli vydieraniu" },
      { kto: "benedikt", popis: "Neutrálny, neskôr na hrane — dostal ale rozhrešenie, keď sa priznal k hriechom" },
      { kto: "agnes", popis: "Nemá ju rád, lebo kritizuje jeho biznis, je preňho iba stará poverčivá babizňa" },
      { kto: "greta", popis: "Robí si na ňu zálusk, neverí rečiam o čarodejnici, dáva jej návrhy" },
      { kto: "moritz", popis: "Nemá proti nemu nič, nijako ho nerieši, no nevie, ako veľmi sa ho Moritz bojí" }
    ],
    obvinuje: [
      { kto: "ester", popis: "Kvôli jej afére a jej odhaleniu" },
      { kto: "viliam", popis: "Vedel o konflikte, ktorý má s Tadeusom kvôli Ester" }
    ],
    chrani: [
      { kto: "benedikt", popis: "Bol pri ňom po bitke s Tadeusom a dával mu rozhrešenie za chamtivosť, ktorej sa dopustil" },
      { kto: "moritz", popis: "Je mu toho prostého chlapca ľúto, ale nevie, že Moritz ho vníma negatívne a bojí sa ho" }
    ],
    vlastnosti: [
      "Má tušenie, že Benedikta videl kedysi v dedine, ale nemá dôkaz.",
      "Robí si čiarky za každý pokus, čo dal Grete návrhy, a verí, že ak to dôjde do čísla 100, že sa mu zadarí.",
      "V stredu sa „hriechu necudného dopustil“, keď obťažoval Gretu pri mlyne — strelila mu facku a poškriabala mu líce. Dôležité, aby škrabance viedli pozornosť ku Grete.",
      "Napriek tomu, že je vykreslený ako slizký a zákerný, správa sa počas vyšetrovania pokorne — zmenilo sa to po tom, čo ho Tadeus udrel.",
      "Vie čítať aj písať."
    ],
    vzdyHovori: [
      "Množstvo peňazí od Ester — za celý čas vydierania mu dala 30 strieborných mincí (povie to, iba ak sa ho na to priamo spýtajú).",
      "O alkoholizme Benedikta — bude to ale vravieť pokorne, nakoľko po bitke prešiel uvedomením a nechce škodiť nikomu, no chce byť transparentný pred inkvizítormi.",
      "Nákup alkoholu od Viliama — ten mu predával svoju domácu čerešňovicu."
    ],
    taji: [
      "Svoj zápisník o dedinčanoch — chce hlavne chrániť, čo si píše o Benediktovi. O ňom bude hovoriť iba to, že si ho nejasne pamätá.",
      "Aféru Ester a Viliama — povie, kedy a kde ich načapal a že od Ester pýtal peniaze, až potom, čo sa ich nevera prevalí, a až keď ho s týmto faktom inkvizítori konfrontujú.",
      "Pamäť na Benedikta — rozrozpráva sa až potom, ako sa odhalí jeho zápisník po prehľadaní kostola. Potom povie, že si pamätá, že tu bol liečiť, že pomáhal vtedy aj tej čarodejnicinej mame Helene, potom zrazu zmizol. Bude ale vravieť, že to nevie s istotou.",
      "Na koho mal v stredu zálusk — na Gretu, keď prišla k jeho mlynu, bol to 27. pokus. Povie to až po tom, ako sa ho na to niekto spýta po prečítaní jeho zápiskov."
    ],
    faq: [
      { q: "Čo presne sa stalo pri bitke po omši?", a: "Tadeus mu vykričal, že je odporný človek, že vedel o hriechu jeho ženy a Viliama a že nič nepovedal, a že navyše hrešil ďalej tým, že jeho ženu vydieral. Potom, ako to všetko chŕlil zo seba von, Karolovi v návale hnevu vrazil. Nikto slová ich hádky nepočul. Karol povedal, o čo išlo, Benediktovi až večer." },
      { q: "Od kedy do kedy bol u Benedikta?", a: "Od 9:30 do 10:00 — vtedy ho Benedikt liečil. Potom od 18:30 do 20:30 — zlomil sa a vyspovedal." },
      { q: "Je jeho pokora skutočná zmena, alebo vypočítavosť?", a: "Je skutočná. Dôkazmi pokory bude jeho prelepený zlomený nos a dobitá tvár, ako aj sumár špiny o sebe, ktorú bude sám priznávať s pokorou." }
    ]
  },

  {
    id: "moritz",
    meno: "Moritz Hüter",
    rola: "Bača",
    herec: "Adam",
    vek: 25,
    narodenie: "23. október 1478 — dnes má narodeniny",
    rodicia: "Neznámi",
    opis: "Prostoduchý mladý muž, ktorý sa iba celý deň stará o to, aby boli ovce napasené a očistené.\n\nChlapec nemá pôvod v Lesoviciach — nikto nevie, odkiaľ prišiel. Raz, keď mal 4 roky, sa vynoril z lesa celý špinavý a natrafil na Agnes, ktorej sa spýtal, či nevidela jeho ovcu Hildu. Dospelo sa k záveru, že chlapca nechali napospas osudu v lese. Ten si pamätal iba deň, kedy sa narodil.\n\nMoritz nerobí nič iné, než sa stará o ovce. Ráno ich vyženie pásť sa, celý deň ich stráži, večer naháňa do košiarov. Keď dozrie čas, ovce zareže a mäso spracováva pre celú dedinu.\n\nVychádza v dedine s každým, okrem Karola a Ester. Moritz sa ho bojí a hlavne sa desí, keď Karol chodí pýtať mäso do svojho šenku. Ester hľadí na chlapca s odporom — závidí pozornosť, ktorá sa chlapcovi kvôli jeho jednoduchosti dostáva.\n\nMoritzov košiar otvoril opitý Tadeus a ovca Vilma z neho utiekla. Celý čas ju tak Moritz hľadá a popritom každému pripomína, že má dnes narodeniny — a to stále dookola.",
    vztahSObetou: "Neutrálny — Moritz žil osamotene, objavoval sa v kostole a bol zadobre aj s Tadeusom, ktorému dodával mäso. Tadeus s ním inak nijako neinteragoval.",
    motiv: "Žiadny. Môže byť ale vnímaný ako páchateľ kvôli Tadeusovmu prsteňu, ktorý našiel a nosí na ruke.",
    vztahy: [
      { kto: "tadeus", popis: "Neutrálny, skoro vôbec neinteragovali" },
      { kto: "agnes", popis: "Berie ju ako náhradnú mamu, pomáha mu a má ju rád" },
      { kto: "ester", popis: "Neznáša ju, lebo ona neznáša jeho" },
      { kto: "karol", popis: "Bojí sa ho, jeho aura uňho vzbudzuje hrôzu, vníma ho ako zlého človeka" },
      { kto: "viliam", popis: "Má ho rád, pomáha mu, akoby bol jeho starší brat" },
      { kto: "benedikt", popis: "Skôr pozitívny, vídavajú sa v kostole a Moritz aj jemu nosí mäso a syr" },
      { kto: "greta", popis: "Trochu sa jej bojí, lebo si tiež myslí, že je bosorka" }
    ],
    obvinuje: [
      { kto: "karol", popis: "Bojí sa ho a myslí si, že je „veľmi nedobrý človek“. Čistý strach a to, že nie je teraz pod ochranou Benedikta, ho vedie k tomu, aby ukazoval prstom práve na niekoho, z koho cíti najväčší strach" },
      { kto: "ester", popis: "Vie, že ho nemá rada, myslí si, že je zlý človek, a toto dáva ako jediný jej motív" },
      { kto: "benedikt", popis: "Len preto, lebo ho večer videl, keď hľadal Vilmu" }
    ],
    chrani: [
      { kto: "agnes", popis: "Má ju rád, lebo mu pomáha" },
      { kto: "viliam", popis: "Má ho rád, lebo mu pomáha" }
    ],
    vlastnosti: [
      "Matne si pamätá, že Benedikt bol v Lesoviciach pred 21 rokmi. Benedikt to bude popierať, dokiaľ sa nenájde dôkaz — list od Heleny.",
      "Dnes, 23. októbra, má 25. narodeniny a rád o tom bude každému hovoriť. Nebude však hovoriť, koľko rokov má, dokiaľ sa ho na to niekto priamo neopýta.",
      "Neustále hľadá svoju ovcu Vilmu.",
      "Nemá doma kutáč.",
      "Nevie čítať ani písať."
    ],
    vzdyHovori: [
      "Všetko okrem svojho veku.",
      "DÔLEŽITÉ: Ester videl u Agnes iba raz, o 12:00, potom už nie."
    ],
    taji: [
      "Svoj vek — ten priamo povie iba vtedy, ak sa ho na to priamo spýtajú."
    ],
    faq: [
      { q: "Rozumie vôbec, že ho môžu obviniť z vraždy?", a: "Rozumie tomu, ale nezaujíma ho nič iné, ako Vilma a jeho narodeniny." },
      { q: "Kde a kedy našiel Tadeusov prsteň?", a: "O 20:45 medzi kostolom a šenkom, kadiaľ Agnes prechádzala a kde sa zľakla Benedikta, pričom mykla fúrikom a prsteň vypadol. Nechal si ho, lebo sa mu proste páčil." },
      { q: "Kde a kedy videl Benedikta v ten večer?", a: "Benedikta stretol pred kostolom, ten sa práve vracal od Karola, ale zdržal sa, keď videl trieliť Gretu popri kostole. Benedikt sa prechádzal okolo kostola a hľadal niečo, čo by mu povedalo, prečo tam bola, a vtedy natrafil aj na Moritza." },
      { q: "Ako reaguje, keď naňho začnú inkvizítori tlačiť?", a: "Bude chcieť ísť ďalej hľadať Vilmu. Nebude kričať, bude sa tváriť nenútene, akoby tam ani nebol, akoby inkvizítorov ani len nevnímal, ani nenaviaže očný kontakt — iba ak sa bude pýtať na Vilmu a spomínať svoje narodeniny." }
    ]
  }
],

/* ------------------------------------------------------------------ */
pozadie: [
  { meno: "Helena", rola: "Bylinkárka, matka Grety", text: "Prišla do Lesovíc v roku 1480, nikto nevie odkiaľ. Dedina ju považovala za čarodejnicu. Pomáhala Benediktovi liečiť počas moru 1482, splanuli láskou. Porodila Gretu 12. júna 1483 a dala ju potajme pokrstiť otcom Ondrejom. Zomrela v roku 1502. Dedinčania ju odmietli pochovať — pochovala ju Greta pri ich dome. Zanechala list pre Benedikta, ktorý odovzdala otcovi Ondrejovi." },
  { meno: "Otec Ondrej", rola: "Predošlý farár lesovický", text: "Viedol matriku pokrstených. Pokrstil Gretu s poznámkou „Otec: ignotus“. Dostal od Heleny list pre Benedikta, ale nikdy ho neodovzdal — chcel aféru cirkevného brata utajiť. Zomrel krátko po Helene. Benedikt je jeho nástupca a v jeho papieroch našiel ten list." },
  { meno: "Brat Martin", rola: "Prísažný lekár a ohliadač zo sídla biskupského", text: "Moderátor hry. Vykonal obhliadku tela a spísal protokol. Dal prehľadať dedinu a oba brehy rieky — našiel guču oblečenia pod mólom pri Viliamovom dome. Počas hry postupne vypúšťa ďalšie dôkazy." },
  { meno: "Biskup", rola: "Odosielateľ inkvizítorov", text: "Poslal tímom pozvánku a mandát. Žiada oddeliť zrno pravdy od pliev babských povier — a konať s rozvahou, nie horlivosťou viery zaslepenou." },
  { meno: "Helmut Schwarzenberg", rola: "Bývalý richtár, Tadeusov otec", text: "Rodina Schwarzenbergovcov prichýlila osirelú Ester po more v roku 1483. Keď dospela, vydala sa za Tadeusa." }
],

/* ------------------------------------------------------------------ */
mapa: {
  obrazok: "assets/mapa.jpg",
  body: [
    { id: "greta-dom", x: 75, y: 22, nazov: "Grétin dom", postavy: ["greta"], udalosti: [
      "Celý deň: Greta zbiera a suší šípky, varí, číta zborník o liečivých nektároch.",
      "16:00 — prichádza opitý Tadeus, Greta mu servíruje kuraciu polievku a dlho sa rozprávajú.",
      "18:00 — Tadeus odchádza, trochu triezvejší.",
      "20:00 — Greta odchádza k Tadeusovmu domu s odvarom na vytriezvenie."
    ]},
    { id: "hrob", x: 64.5, y: 27, nazov: "Hrob Heleny", postavy: ["greta", "benedikt"], udalosti: [
      "Tu Helena leží od roku 1502 — dedina ju odmietla pochovať na cintoríne.",
      "Tu Benedikt prvýkrát stretol Gretu, keď prišiel hrob posvätiť.",
      "12:00 v nedeľu — Greta čistí matkin hrob."
    ]},
    { id: "agnes-dom", x: 41, y: 34, nazov: "Dom Agnes — MIESTO ČINU", postavy: ["agnes", "ester"], udalosti: [
      "09:30 — Agnes sa vracia z kostola, stretáva Ester, ktorá tam čaká.",
      "10:00–18:00 — Ester je u nej celý deň. Vyrozprávanie, spoločný obed, modlitby, vyšívanie.",
      "12:00 a 14:30 — prichádza Moritz po jablká. Prvýkrát Ester vidí, druhýkrát už nie.",
      "12:30 — Tadeus klope, Agnes ho odbije pred dverami.",
      "18:00 — Tadeus ich vidí kŕmiť svine a vtrhne dnu.",
      "18:30 — VRAŽDA pri kozube. Kutáč do hrdla.",
      "19:00–20:00 — Agnes čistí dlážku, balí telo, nakladá do fúrika.",
      "Strieborný ruženec ostáva na stole — na ten zabudla."
    ]},
    { id: "moritz-dom", x: 23.5, y: 37, nazov: "Moritzov dom a košiar", postavy: ["moritz"], udalosti: [
      "Celý deň: Moritz kŕmi ovce, šúpe jablká, pečie koláč (dvakrát neúspešne).",
      "15:30 — Tadeus ho navštívi a pri odchode nechtiac nechá otvorenú bránku košiara. Ovca Vilma uteká.",
      "20:00 — Moritz počíta ovce, Vilma chýba. Začína ju hľadať."
    ]},
    { id: "kostol", x: 55.5, y: 44, nazov: "Kostol a fara", postavy: ["benedikt"], udalosti: [
      "08:00 — ranná omša, kázeň o bosorkách.",
      "09:00 — pred kostolom bitka: Tadeus vrazí Karolovi, zlomí mu nos.",
      "09:15–10:00 — Benedikt ošetruje Karola v sákristii.",
      "15:30 — Benedikt vyťahuje krstný list Grety a podnapitý plače. Víno pofŕka list.",
      "18:15 — Benedikt vidí utekať uplakanú Ester.",
      "20:30 — Benedikt zazrie Gretu trieliť popri kostole.",
      "20:45 — pred kostolom stretáva Moritza, všimne si na ňom zvláštny prsteň.",
      "V kostole brat Martin nájde: záznamy spovedí, krstný list Grety, fľašu vína."
    ]},
    { id: "richtar-dom", x: 65, y: 46, nazov: "Richtárov dom", postavy: ["tadeus", "ester"], udalosti: [
      "Sobota 21. 10. napoludnie — Tadeus prichytí Ester pri truhlici. Priznanie k nevere a 30 grošom.",
      "Nedeľa 05:00–15:00 — Tadeus sa sem opakovane vracia piť.",
      "18:30 ďalej — Ester sa sem vráti, zamkne sa a plače až do vyčerpania.",
      "20:00 — Greta prinesie odvar, cez okno vidí plačúcu Ester, zľakne sa a odvar zahodí pod okno.",
      "Tam ho ráno nájde brat Martin."
    ]},
    { id: "senk", x: 50, y: 58, nazov: "Šenk (krčma)", postavy: ["karol"], udalosti: [
      "Nedeľa cez deň je zatvorený — Karol leží doma s rozbitou tvárou.",
      "18:30–20:30 — Benedikt je u Karola: kontrola rán, spoveď, rozhrešenie. Karol odovzdá zápisník.",
      "20:45 — Agnes vykladá telo do krovia za šenkom.",
      "21:30 — Karol si oplachuje tvár v rieke za šenkom, kráča tesne vedľa tela, ale ho neuvidí. Cez rieku ho vidí Viliam."
    ]},
    { id: "most", x: 66, y: 62, nazov: "Most cez rieku", postavy: [], udalosti: [
      "Sobota — Ester cez most prejde k mlynu, aby zmiatla Tadeusa, potom sa vráti a ide k Viliamovi."
    ]},
    { id: "mlyn", x: 71.5, y: 78, nazov: "Mlyn", postavy: ["karol", "greta"], udalosti: [
      "August 1503 — Karol tu prichytí Ester a Viliama, ako sa bozkávajú. Začiatok vydierania.",
      "Streda pred vraždou — Karol tu obťažuje Gretu, dostane facku a škrabance na líci (27. pokus).",
      "11:30 v nedeľu — Greta si tu sama naberie jačmeň, Karol tu nie je. Vidí piť Viliama."
    ]},
    { id: "telo", x: 56, y: 76, nazov: "Miesto nálezu tela", postavy: ["tadeus", "viliam"], udalosti: [
      "20:45 nedeľa — Agnes tu vyloží telo v kroví za šenkom, pri rieke.",
      "07:00 pondelok — Viliam tu nájde telo cestou domov.",
      "Pod telom sotva na dlaň krvi, žiadne striekance, žiadne stopy zápasu — telo bolo presunuté."
    ]},
    { id: "viliam-dom", x: 30, y: 80, nazov: "Dom Viliama", postavy: ["viliam", "ester"], udalosti: [
      "Sobota večer — Ester sem uteká, prespí tu.",
      "06:00 nedeľa — Ester sa budí a potichu odchádza k Agnes.",
      "09:15 — Viliam ju hľadá po dome a dvore, myslí si, že ho opustila.",
      "10:00–11:00 — pije čerešňovicu doma.",
      "18:10 — Ester sem búcha na dvere, nikto neotvára.",
      "Pod mólom pri dome sa zachytí guča oblečenia — ráno ju nájde brat Martin."
    ]},
    { id: "rybarske", x: 53, y: 92, nazov: "Rybárske miesto", postavy: ["viliam"], udalosti: [
      "11:30 – 06:30 — Viliam tu leží na tráve a pije, potom spí.",
      "14:30 — vidí prichádzať Tadeusa, uteká sa schovať medzi stromy, potom sa vracia.",
      "20:45 — prebudí ho vzdialené vŕzganie fúrika, vidí siluetu pri šenku. Nerozozná, kto to je.",
      "21:30 — prebudí ho špliechanie vody, jasne vidí Karola. Potom spí do rána."
    ]},
    { id: "cintorin", x: 12, y: 58, nazov: "Cintorín", postavy: [], udalosti: [
      "Tu leží väčšina obetí moru 1482–1483 — 74 pochovaných len za rok 1483.",
      "Helena tu pochovaná NIE JE — dedina ju odmietla prijať."
    ]}
  ]
},

/* ------------------------------------------------------------------ */
casovaOs: {
  poradie: ["tadeus", "benedikt", "greta", "ester", "viliam", "agnes", "karol", "moritz"],
  dni: [
    { id: "ned", nazov: "Nedeľa 22. októbra 1503" },
    { id: "pon", nazov: "Pondelok 23. októbra 1503" }
  ],
  zaznamy: [
    { den: "ned", cas: "05:00", klic: false, r: { tadeus: "Skoré prebudenie", benedikt: "Prebudenie a ranná hygiena", greta: "Prebudenie", agnes: "Prebudenie", moritz: "Prebudenie" } },
    { den: "ned", cas: "05:30", klic: false, r: { tadeus: "Ďalej pije", benedikt: "Ranné modlitby", greta: "Natrhanie zeleniny v záhrade", agnes: "Ranná modlitba", moritz: "Kŕmenie oviec" } },
    { den: "ned", cas: "06:00", klic: true, r: { benedikt: "Príprava na kázeň", greta: "Raňajky", ester: "Prebudenie u Viliama", agnes: "Raňajky a príprava do kostola, nasadzuje si ruženec", karol: "Prebudenie", moritz: "Umývanie" } },
    { den: "ned", cas: "07:00", klic: false, r: { greta: "Čítanie zborníka o liečivých nektároch", agnes: "Postávanie pri kostole a sledovanie príchodu ostatných, pričom na nich pod nosom šomre", karol: "Raňajky — klobása a pivo", moritz: "Chlieb s vodou na raňajky" } },
    { den: "ned", cas: "08:00", klic: true, r: { tadeus: "Postáva pri kostole a čaká, či vyjde Karol", benedikt: "Ranná omša — kázeň o bosorkách", greta: "Zber šípok na čistinách", ester: "Vyparila sa počas omše, aby ju nikto nevidel, a utiekla k domu Agnes", agnes: "Ranná omša", karol: "Ranná omša", moritz: "Ranná omša" } },
    { den: "ned", cas: "09:00", klic: true, r: { tadeus: "Konfrontácia s Karolom, potom odchádza domov", benedikt: "Svedok bitky Tadeusa a Karola", greta: "Sušenie šípok", ester: "Čaká za domom Agnes", viliam: "Prebudenie doma", agnes: "Svedok bitky Tadeusa a Karola", karol: "BITKA S TADEUSOM — zlomený nos", moritz: "Svedok bitky Tadeusa a Karola" } },
    { den: "ned", cas: "09:15", klic: false, r: { tadeus: "Ďalej pije", benedikt: "Odvádza Karola k sebe do kostola, kde ho ošetrí — odbíja dobiedzavú Agnes", viliam: "Hľadá po dome a na dvore Ester", agnes: "Snaha zistiť od Benedikta, o čo išlo — neúspešne, Benedikt ju odbíja (a sám to ešte vtedy nevie)", moritz: "Bitku nerieši, vracia sa domov" } },
    { den: "ned", cas: "09:30", klic: false, r: { benedikt: "Ošetruje Karola", greta: "Príprava zásob odvaru zo šípok zo starších šípok", ester: "Stretáva Agnes pri návrate domov", agnes: "Návrat domov — stretáva Ester", karol: "Ošetrovaný Benediktom" } },
    { den: "ned", cas: "10:00", klic: true, r: { benedikt: "Odprevádza Karola domov — uisťuje ho, že ho večer skontroluje", ester: "Hovorí Agnes všetko o nevere a vydieraní", viliam: "Z obáv, že ho Ester opustila, začína piť a pije celý deň čerešňovicu", agnes: "Počúva Ester", karol: "Odvedený Benediktom domov", moritz: "Priebežné ochutnávanie jabĺk — polku zjedol" } },
    { den: "ned", cas: "10:30", klic: false, r: { ester: "Čistenie žalúdka od Agnes", agnes: "Pohoršuje sa nad Ester a jej hriechmi", karol: "Ľahá si a v bolestiach odpočíva", moritz: "Začiatok prípravy koláča" } },
    { den: "ned", cas: "11:00", klic: false, r: { greta: "Odbieha hodiť pár kuracích kostí Agnes na dvor", ester: "Tichá domácnosť", viliam: "Vyberá sa k rybárskemu miestu s fľaškou", agnes: "Tichá domácnosť", karol: "Zaspáva", moritz: "Nedostatok jabĺk" } },
    { den: "ned", cas: "11:30", klic: false, r: { greta: "Cesta k mlynu po mletý jačmeň na kašu — Karol tam nie je, naberie si sama. Vidí pijúceho Viliama", ester: "Objatie s Agnes", viliam: "Rozloží sa na rybárskom mieste, leží na tráve a pije", agnes: "Po dlhej chvíli ticha objíma Ester a za seba jej odpúšťa, čo urobila", moritz: "Hľadanie ďalších jabĺk" } },
    { den: "ned", cas: "12:00", klic: true, r: { tadeus: "Začína obchádzať dedinu, hľadá Ester — pýta sa Benedikta", benedikt: "Hovorí Tadeusovi, že nevidel Ester, a snaží sa zistiť, čo sa deje, no Tadeus odíde preč", greta: "Čistenie matkinho hrobu", ester: "UVIDENÁ MORITZOM", agnes: "Prichádza do domu Moritz po jablká — uzrie Ester, ale nereaguje na ňu", moritz: "Cesta k Agnes po jablká — VIDÍ ESTER" } },
    { den: "ned", cas: "12:30", klic: true, r: { tadeus: "Zastavuje sa u Agnes, ale len pred dverami, tá neprezradí, že je u nej Ester", benedikt: "Modlitba a obed", ester: "Schováva sa za domom, keď prichádza Tadeus", agnes: "Odvrkne Tadeusovi, že u nej nie je Ester", moritz: "Pokračovanie v príprave" } },
    { den: "ned", cas: "13:00", klic: false, r: { tadeus: "Vracia sa domov, aby si ešte vypil", greta: "Lov na králika", ester: "Príprava obeda spolu s Agnes", agnes: "Príprava obeda spolu s Ester" } },
    { den: "ned", cas: "13:30", klic: false, r: { tadeus: "Klope na Karolove dvere, ale neotvára", benedikt: "Zapisuje si posledné udalosti v Lesoviciach", karol: "Prebudí ho klopanie, ale neotvára, keď počuje kričať Tadeusa", moritz: "Koláč mu spadol" } },
    { den: "ned", cas: "14:00", klic: false, r: { tadeus: "Prichádza k Viliamovmu domu, ale ani ten neotvára — nie je doma", greta: "Vzdala to", ester: "Obed s Agnes", agnes: "Obed s Ester", karol: "Vyberá víno a pije", moritz: "Jedol jablká zo zeme a rozmýšľal, čo ďalej" } },
    { den: "ned", cas: "14:30", klic: false, r: { tadeus: "Vyráža k mlynu a rybárskemu miestu, Viliam ho uvidí prichádzať", benedikt: "Začína písať kázeň podľa svojich poznámok", greta: "Odseknutie hlavy sliepke na jej statku a varenie", ester: "Keď sa opäť Moritz vrátil, tentokrát sa radšej schovala", viliam: "Keď uzrie prichádzať Tadeusa, rýchlo uteká schovať sa medzi stromy na okraji lesa, kým neodíde, potom sa vracia na rybárske miesto a ďalej pije", agnes: "Prišiel Moritz po ďalšie jablká", moritz: "Cesta k Agnes po ďalšie jablká — všimol si, že Ester tam už nie je" } },
    { den: "ned", cas: "15:00", klic: false, r: { tadeus: "Opäť prichádza domov vypiť si", benedikt: "Počas písania kázne otvára víno a pije", ester: "Upratovanie", agnes: "Upratovanie", moritz: "Šúpanie jabĺk" } },
    { den: "ned", cas: "15:30", klic: true, r: { tadeus: "Navštevuje ešte Moritza — NECHÁVA OTVORENÚ BRÁNKU KOŠIARA", benedikt: "Vyťahuje krstný list Grety a podnapitý plače (víno pofŕka list)", greta: "Príprava na neskorý obed", moritz: "Prerušil ho Tadeus hľadaním Ester" } },
    { den: "ned", cas: "16:00", klic: true, r: { tadeus: "Prichádza opitý ku Grete", benedikt: "Ďalej píše kázeň", greta: "Príchod opitého Tadeusa", ester: "Modlitby s Agnes", agnes: "Modlitby s Ester", karol: "Opitý zaspí", moritz: "Začiatok prípravy ďalšieho koláča" } },
    { den: "ned", cas: "16:30", klic: false, r: { tadeus: "Vylieva si srdce, zhovárajú sa", greta: "Servírovanie kuracej polievky Tadeusovi a dlhý rozhovor", ester: "Vyšíva s Agnes", agnes: "Vyšíva s Ester" } },
    { den: "ned", cas: "17:00", klic: false, r: { benedikt: "Je chlieb", moritz: "Úspešné prenesenie koláča do pece" } },
    { den: "ned", cas: "17:30", klic: false, r: { ester: "Začiatok kŕmenia svíň", agnes: "Začiatok kŕmenia svíň", moritz: "Strúhanie flauty na dvore" } },
    { den: "ned", cas: "18:00", klic: true, r: { tadeus: "Odchod od Gréty. ZOČENIE ESTER U AGNES", greta: "Tadeus odchádza, trochu triezvejší, než prišiel", ester: "Je videná rozzúreným Tadeusom, odchádzajúcim od Gréty, ako pasie svine spolu s Agnes — hneď zalezie do domu", agnes: "S Ester pasie svine, keď uvidia rozzúreného Tadeusa, zalezú do domu" } },
    { den: "ned", cas: "18:10", klic: true, r: { tadeus: "Kričí na Ester aj Agnes, Ester zatiaľ utečie", benedikt: "Oblieka sa na cestu ku Karolovi", greta: "Upratovanie", ester: "ÚTEK — beží dedinou k Viliamovi", agnes: "Ester unikla — Agnes zdržiava Tadeusa", moritz: "Uvedomenie si, že koláč sa pečie" } },
    { den: "ned", cas: "18:15", klic: true, r: { tadeus: "Začiatok hádky s Agnes", benedikt: "Vidí bežať uplakanú Ester, volá na ňu, tá ale rýchlo zalezie do domu", ester: "Viliam nie je doma — tak uteká k sebe domov, po ceste ju uplakanú zazrie Benedikt", agnes: "Hádka s Tadeusom o tom, aký je zlý manžel", moritz: "Koláč sa spálil" } },
    { den: "ned", cas: "18:30", klic: true, r: { tadeus: "† SMRŤ", benedikt: "Návšteva Karola — kontrola rán", greta: "Zatváranie zvierat do ohrád a klietok", ester: "Plíži sa do domu z obavy, že tam už bude Tadeus — keď sa uistí, že nie, trpne sediac na posteli", viliam: "Opitý spí", agnes: "★ VRAŽDA — kutáč do hrdla", karol: "Príchod Benedikta", moritz: "Krájanie koláča, či v ňom nie je niečo požívateľné" } },
    { den: "ned", cas: "19:00", klic: true, r: { benedikt: "Karol sa modlí a spovedá zo všetkých svojich hriechov — tu prezradí, že má zápisky s tajomstvami dedinčanov", greta: "Večera jačmennú kašu", ester: "Plače a plače", agnes: "Zabalenie tela", karol: "Prezrádza všetko, čo vie o Ester a Viliamovi, ako aj o tom, ako ich vydieral", moritz: "Vzdal to" } },
    { den: "ned", cas: "19:30", klic: true, r: { benedikt: "Dostáva zápisník od Karola", agnes: "Čistenie dlážky od krvi, zbalenie krvavého oblečenia do guče a spolu s prsteňom hodenie do fúrika", karol: "Dáva Benediktovi svoj zápisník", moritz: "Kŕmenie oviec" } },
    { den: "ned", cas: "20:00", klic: true, r: { benedikt: "Rozhrešenie Karolovi a spoločné modlitby", greta: "Cesta k domu Tadeusa s odvarom na vytriezvenie. Pozoruje Ester chvejúcu sa na posteli v slzách", agnes: "Naloženie do fúrika a prekrytie plachtou", karol: "Rozhrešenie a spoločné modlitby", moritz: "Počítanie oviec — VILMA CHÝBA" } },
    { den: "ned", cas: "20:30", klic: true, r: { benedikt: "Odchod — stretnutie Agnes na ceste. Hneď na to pri kostole zazrel, ako k svojmu domu trieli Greta", greta: "Uteká domov, Benedikt ju na moment zočil", ester: "Počuje vŕzganie kolieska fúrika", agnes: "Stretnutie Benedikta na ceste s fúrikom medzi kostolom a šenkom — VYPADÁVA PRSTEŇ z fúrika, bez interakcie s Benediktom", karol: "Zapíjanie bolesti", moritz: "Začiatok hľadania Vilmy" } },
    { den: "ned", cas: "20:45", klic: true, r: { benedikt: "Stretnutie Moritza, všimne si, že má nejaký zvláštny prsteň na ruke, no až keď bol Moritz na odchode", greta: "Večera", ester: "Stále plače", viliam: "Preberie ho vzdialené vŕzganie fúrika — VIDÍ SILUETU v blízkosti šenku, ale nevie rozoznať, o koho ide. Ďalej spí", agnes: "VYHADZUJE TELO pri šenku, zhužvané oblečenie do krovia pri rieke za šenkom", moritz: "Obchádzanie dediny hľadajúc Vilmu — na ceste medzi šenkom a kostolom NÁJDE PRSTEŇ a navlečie si ho na ruku. Hneď nato stretne Benedikta pred kostolom a pýta sa ho na Vilmu" } },
    { den: "ned", cas: "21:00", klic: false, r: { benedikt: "Neskorá večera", greta: "Večera", agnes: "Cesta domov — na fúriku nesie plachtu, ktorou prekryla telo", moritz: "Stretne Viliama, ale nepodarí sa mu ho zobudiť" } },
    { den: "ned", cas: "21:15", klic: false, r: { ester: "Plač ju vyčerpá — zaspáva", agnes: "Plač", karol: "Ide sa von vyvracať" } },
    { den: "ned", cas: "21:30", klic: true, r: { benedikt: "Modlitby a čítanie Biblie", greta: "Spánok", viliam: "Prebudí ho špliechanie vody cez rieku, opäť zočí siluetu, tentokrát jasnejšie, a vie, že to je KAROL — rýchlo ale opäť zaspí a spí do rána", agnes: "Ďalej čistí zem od krvi", karol: "Oplachuje si tvár v rieke za šenkom — kráča tesne vedľa tela, no neuzrie ho. Vidí ho cez rieku Viliam", moritz: "Vzdáva hľadanie" } },
    { den: "ned", cas: "22:00", klic: false, r: { agnes: "Modlitby do rána — vôbec nespala", karol: "Spánok", moritz: "Večera" } },
    { den: "ned", cas: "22:30", klic: false, r: { benedikt: "Spánok", moritz: "Rozmýšľanie, ako sa píše číslo 25 — chce si ho ráno aspoň nakresliť soľou na chlieb" } },
    { den: "ned", cas: "23:00", klic: false, r: { karol: "Spánok", moritz: "Zaspáva počas rozmýšľania" } },
    { den: "pon", cas: "06:30", klic: false, r: { viliam: "Prebudenie na rybárskom mieste" } },
    { den: "pon", cas: "07:00", klic: true, r: { viliam: "★ NÁJDENIE TELA pri rieke, keď tadiaľ kráčal domov" } }
  ]
},

/* ------------------------------------------------------------------ */
dokazy: [
  { id: "d1", cas: "17:00", poradie: 1, nazov: "Pozvánka biskupa pre inkvizítorov", typ: "Vizuálna pomôcka",
    kde: "Od brata Martina, na úvod", postavy: [],
    dokazuje: "Úvodný brief — zadanie hry, tón a právomoci vyšetrovateľov.", dokument: "pozvanka" },
  { id: "d2", cas: "17:00", poradie: 1, nazov: "Zoznam podozrivých", typ: "Vizuálna pomôcka",
    kde: "Od brata Martina, na úvod", postavy: [],
    dokazuje: "Orientácia tímov na začiatku vyšetrovania — kto je kto a aký má vzťah k obeti." },
  { id: "d3", cas: "17:00", poradie: 1, nazov: "Ilustrácia tela obete", typ: "Vizuálna pomôcka",
    kde: "Od brata Martina, na úvod", postavy: ["tadeus"],
    dokazuje: "Vizuálna opora k protokolu z obhliadky — rana na krku, poloha tela.", obrazok: "assets/telo.jpg" },
  { id: "d4", cas: "17:00", poradie: 1, nazov: "Protokol z obhliadky tela", typ: "Kľúčový dokument",
    kde: "Od brata Martina, na úvod", postavy: ["tadeus"],
    dokazuje: "Čas smrti (18:00–19:00), nástroj (roztrhnutá rana, hrdzavé šupiny = kuté železo, NIE nôž), telo bolo presunuté (málo krvi pod ním), krv na tvári rozotretá post mortem, štyri škrabance od dlhých nechtov, chýba prsteň a ruženec.", dokument: "protokol" },
  { id: "d5", cas: "17:00", poradie: 1, nazov: "Mapa Lesovíc", typ: "Vizuálna pomôcka",
    kde: "Od brata Martina, na úvod", postavy: [],
    dokazuje: "Priestorová orientácia, umožňuje overiť trasy a alibi." },
  { id: "d6", cas: "17:30", poradie: 2, nazov: "Bylinkár (zápisník odvarov Grety)", typ: "Fyzický dôkaz",
    kde: "Nájdený bratom Martinom pri prehliadke domu Grety — niekde pri kvetinách", postavy: ["greta"],
    dokazuje: "Je tam popis odvaru zo šípok, čo v ten deň robila, aj odvaru na vytriezvenie pre Tadeusa (palina, rebríček, MÄTA).", dokument: "odvary" },
  { id: "d7", cas: "18:00", poradie: 3, nazov: "Fľaštička so zvyškom odvaru na vytriezvenie", typ: "Fyzický dôkaz",
    kde: "Našla sa pri Tadeusovom dome, pod oknom. Nápis „Pre Tadeusa“", postavy: ["greta", "tadeus"],
    dokazuje: "Dôkaz o návšteve Tadeusovho domu Grétou — podozrenie na otravu pred vraždou. Musí byť z nej citeľná MÄTA." },
  { id: "d8", cas: "18:30", poradie: 4, nazov: "Karolov zápisník", typ: "Kľúčový dokument",
    kde: "Od brata Martina (Karol ho večer odovzdal Benediktovi)", postavy: ["karol", "ester", "benedikt"],
    dokazuje: "Dôkaz vydierania Ester, motív pre Ester aj Viliama. Zmienka o Benediktovi v roku 1482. Čiarky pri Grete.", dokument: "zapisky" },
  { id: "d9", cas: "19:15", poradie: 5, nazov: "Benediktove záznamy spovedí a hriechov", typ: "Kľúčový dokument",
    kde: "V kostole, nájde brat Martin", postavy: ["benedikt", "tadeus", "karol", "ester", "agnes", "moritz", "viliam"],
    dokazuje: "Ofŕkané od vína — má to pôsobiť ako krv. Obsahuje hriechy všetkých: Karolov stredajší hriech, Moritzov utorkový, Agnesin moč v košeli, Viliamovo priznanie o zlom čine voči Tadeusovi.", dokument: "spovede" },
  { id: "d10", cas: "19:45", poradie: 6, nazov: "Matrika pokrstených (krstný záznam Grety)", typ: "Kľúčový dokument",
    kde: "V kostole, nájde brat Martin", postavy: ["greta", "benedikt", "ester"],
    dokazuje: "Greta, narodená 12. júna 1483, matka Helena, otec: IGNOTUS. Červené fľaky — majú vyzerať ako od krvi, sú však od vína. Pozor: je tu aj zápis o krste inej Ester (dcéra Hansa Dietricha) — falošná stopa.", dokument: "matrika" },
  { id: "d11", cas: "na vyžiadanie", poradie: 7, nazov: "List od Heleny", typ: "Kľúčový dokument",
    kde: "Od Benedikta, až po prepojení jeho otcovstva", postavy: ["benedikt", "greta"],
    dokazuje: "Dôkaz o otcovstve Benedikta. Dôvod na prelomenie spovedného tajomstva. Ofŕkaný od vína — má to pôsobiť ako krv.", dokument: "list" },
  { id: "d12", cas: "20:10", poradie: 8, nazov: "Spis o nájdenom oblečení", typ: "Kľúčový dokument",
    kde: "Od brata Martina — posledný dôkaz, cca 20 minút pred koncom hry", postavy: ["viliam", "ester", "agnes", "tadeus"],
    dokazuje: "Guča troch kusov pod mólom pri Viliamovom dome: Tadeusova zakrvavená košeľa s preťatým golierom, Esterina hodvábna blúzka (bez krvi, špinavá ako na pranie), Viliamova ľanová košeľa (bez krvi, hlina a drevené triesky). Kto perie celej dedine? Agnes.", dokument: "oblecenie" },
  { id: "d13", cas: "20:30", poradie: 9, nazov: "Výstupný dotazník", typ: "Záver",
    kde: "Od brata Martina", postavy: [],
    dokazuje: "Finálne výstupy detektívov, spolu 18 bodov." }
],

/* ------------------------------------------------------------------ */
rekvizity: [
  { nazov: "Pozvánka biskupa pre inkvizítorov", typ: "Vizuálna pomôcka", popis: "List oznamujúci vraždu richtára a poverujúci tímy vyšetrovaním", ks: 11, odkial: "Od nás", postava: "Cirkev / kontext hry", priorita: "Must-have", hotovo: true },
  { nazov: "Zoznam podozrivých", typ: "Vizuálna pomôcka", popis: "Karta so všetkými postavami, rolami a vzťahom k obeti", ks: 11, odkial: "Od nás", postava: "Všetky postavy", priorita: "Must-have", hotovo: false },
  { nazov: "Ilustrácia tela obete", typ: "Vizuálna pomôcka", popis: "Obrázok tela na vyšetrovacom stole s ranou na krku", ks: 11, odkial: "Od nás", postava: "Tadeus (obeť)", priorita: "Must-have", hotovo: true },
  { nazov: "Protokol z obhliadky tela", typ: "Vizuálna pomôcka", popis: "Opis nálezu tela, rany na krku, miesto nálezu (pri krčme)", ks: 11, odkial: "Od nás", postava: "Tadeus (obeť)", priorita: "Must-have", hotovo: true },
  { nazov: "Mapa Lesovíc", typ: "Vizuálna pomôcka", popis: "Mapa dediny so všetkými domami a krčmou/mlynom", ks: 11, odkial: "Od nás", postava: "Všetky postavy", priorita: "Must-have", hotovo: true },
  { nazov: "Bylinkár", typ: "Vizuálna pomôcka", popis: "Zápisník liečivých nápojov Gréty. Niekde pri kvetinách.", ks: 11, odkial: "V priestore", postava: "Greta", priorita: "Must-have", hotovo: true },
  { nazov: "Fľaštička so zvyškom odvaru na vytriezvenie", typ: "Fyzický dôkaz", popis: "Flakón s odvarom pohodený pri richtárovom dome, s nápisom „Pre Tadeusa“. Musí byť z neho citeľná mäta.", ks: 1, odkial: "Od nás", postava: "Greta, Tadeus", priorita: "Must-have", hotovo: false },
  { nazov: "Karolov zápisník", typ: "Fyzický dôkaz", popis: "Píše si poznámky o ľuďoch v dedine", ks: 11, odkial: "Od nás", postava: "Karol, Ester", priorita: "Must-have", hotovo: true },
  { nazov: "Benediktove záznamy spovedí a hriechov", typ: "Fyzický dôkaz", popis: "Ofŕkané od vína — má to pôsobiť ako krv", ks: 11, odkial: "V priestore", postava: "Tadeus, Karol, Ester", priorita: "Must-have", hotovo: true },
  { nazov: "Krstný/cirkevný záznam Gréty (matrika)", typ: "Fyzický dôkaz", popis: "Zápis o krste, meno otca neuvedené. Musí mať červené fľaky od vína.", ks: 11, odkial: "Od nás", postava: "Greta, Benedikt", priorita: "Must-have", hotovo: true },
  { nazov: "List od Heleny", typ: "Fyzický dôkaz", popis: "Dôkaz o otcovstve Benedikta. Ofŕkaný od vína.", ks: 11, odkial: "Od nás", postava: "Benedikt, Greta", priorita: "Must-have", hotovo: true },
  { nazov: "Spis o nájdenom oblečení", typ: "Fyzický dôkaz", popis: "Posledný dôkaz, cca 20 minút pred koncom hry", ks: 11, odkial: "Od nás", postava: "Viliam, Ester, Agnes", priorita: "Must-have", hotovo: true },
  { nazov: "Výstupný dotazník", typ: "Dokument", popis: "Finálne výstupy detektívov so súčtom 18 možných bodov", ks: 11, odkial: "Od nás", postava: "—", priorita: "Must-have", hotovo: true },
  { nazov: "Richtárov prsteň", typ: "Osobný predmet", popis: "Nájdený a nosený Moritzom, dôvod na podozrenie z vraždy", ks: 1, odkial: "Herci", postava: "Tadeus, Moritz", priorita: "Must-have", hotovo: false },
  { nazov: "Drevené krížiky", typ: "Osobný predmet", popis: "Nosíme všetci okrem Agnes — odlíšenie od strieborného ruženca", ks: 6, odkial: "Herci", postava: "Všetci", priorita: "Must-have", hotovo: false },
  { nazov: "Strieborný ruženec", typ: "Osobný predmet", popis: "Majetok zavraždeného Tadeusa, ktorý si nechtiac odela Agnes v to ráno, keď našli telo. PRIAMA STOPA.", ks: 1, odkial: "Herci", postava: "Agnes", priorita: "Must-have", hotovo: false },
  { nazov: "Kuracie kosti", typ: "Fyzická pomôcka", popis: "Zvyšky zo sliepok, hádzané na dvor Agnes. Nosí ich vo vreckách, aby ich ukazovala inkvizítorom.", ks: 10, odkial: "Agnes, v priestore", postava: "Agnes, Greta", priorita: "Must-have", hotovo: false },
  { nazov: "Fľaša vína", typ: "Fyzická pomôcka", popis: "Víno, ktoré Benedikt popíjal pri čítaní matričného listu. Príčina červených škvŕn.", ks: 1, odkial: "Od nás, Benedikt", postava: "Benedikt", priorita: "Must-have", hotovo: false },
  { nazov: "Fľaša domácej pálenky", typ: "Fyzická pomôcka", popis: "Použitá fľaša, časť obsahu vypitá. Musia z nej byť citeľné čerešne.", ks: 1, odkial: "V priestore", postava: "Viliam", priorita: "Nice-to-have", hotovo: false },
  { nazov: "Svätená voda", typ: "Fyzická pomôcka", popis: "Rekvizita Agnes, ktorú bude používať na svoju ochranu", ks: 1, odkial: "Agnes", postava: "Agnes, Greta", priorita: "Nice-to-have", hotovo: false },
  { nazov: "Pečať cirkvi a vosk", typ: "Fyzická pomôcka", popis: "Pečatný prsteň na potvrdenie dokumentov tímov", ks: 1, odkial: "Od nás", postava: "—", priorita: "Nice-to-have", hotovo: false },
  { nazov: "Vstupenky", typ: "Fyzická pomôcka", popis: "", ks: 11, odkial: "Od nás", postava: "—", priorita: "Must-have", hotovo: false }
],

/* ------------------------------------------------------------------ */
dokumenty: [
  { id: "pozvanka", nazov: "Pozvánka vyšetrovateľom", podnazov: "List a mandát biskupský", text: `In nomine Patris, et Filii, et Spiritus Sancti
Amen

†

My, z vôle Božej a milosti Stolice Apoštolskej, týmto listom a mandátom naším oslovujeme a mocou nám zverenou poverujeme Vás, verných synov a dcéry Cirkvi svätej a spravodlivosti znalých.

Do sluchu nášho od brata Benedikta doľahli chýrniky prežalostné z farnosti lesovickej. Richtár tamojší, svetskej moci predstaviteľ, bol nájdený bez dychu života, s krkom preukrutne preťatým. Aká sila nečistá tento skutok ohavný vykonala, zostáva zatiaľ pred zrakom ľudským zahalené.

Ťažko skúšaná je táto pospolitosť. Ešte v pamäti starcov živá je spomienka spred dvadsaťjeden liet, kedy čierna smrť, úmor veliký, rady ich preriedila. A hľa, sotva sa z rán týchto pozviechali, nová nákaza, horšia moru, duše ich máta.

Strach a povery zatemnili rozum ľudu prostého. Kričia o maleficium – diabolskom škodení – a prstom ukazujú na ženu z ich stredu, že táto, súc v spolku s nepriateľom ľudského pokolenia, skazu morovú a smrť richtárovi privodila a kliatbu na dedinu uvrhla.

Preto Vás, ako oči naše bedlivé a ruku našu trestajúcu, do Lesovíc vysielame. Vašou povinnosťou svätou jest oddeliť zrno pravdy od pliev babských povier. Telo znetvorené ohliadnite, svedkov s prísnosťou vypočujte, no hlasu davu rozvášneného slepo neverte.

Ak čarodejníctvo nezvratne preukážete, podľa práva kánonického tvrdo zakročte, by duša vinníčky ohňom očistená bola. Ak však ľudská podlosť za tým väzí, nech vinník právu útrpnému a majstrovi katovi vydaný jest.

Konajte s rozvahou a svetlom rozumu, nie len horlivosťou viery zaslepenou.

Dané v sídle našom biskupskom, roku Pána 1503` },

  { id: "protokol", nazov: "Protokol z obhliadky tela", podnazov: "Protocollum inspectionis corporis · Tadeus, richtár lesovický", text: `†

In nomine Patris, et Filii, et Spiritus Sancti

PROTOCOLLUM INSPECTIONIS CORPORIS
PROTOKOL Z OBHLIADKY TELA
Tadeus, richtár lesovický

Lesovice, dňa XXIII. mensis Octobris, Anno Domini MDIII

I. DE LOCO — Miesto a poloha tela

Telo bolo nájdené v pondelok dvadsiateho tretieho októbra, na svitaní — okolo siedmej hodiny rannej — v kroví za šenkom, na okraji rieky. Našiel ho Viliam, drevorubač lesovický, keď od vody domov mieril. Pod prísahou vypovedal, že sa tela nedotkol, neobracal ho ani nič z neho nesňal, lež odbehol rovno po pochopa; nič, čo som na tele našiel, tomu neodporuje.

Telo nebolo nahé celkom: odeté bolo jedine hrubým plátnom, niekoľko ráz obtočeným okolo bedier, tak ako som to zaznamenal na kresbe k tomuto protokolu pripojenej. Iného odevu na ňom nebolo a ani pri tele, ani v kroví blízkom sa odev žiaden nenašiel. Koža je zaprášená a od rannej rosy celkom mokrá; vlasy vlhké, na chrbte prilepené steblá a lístie.

Krvi bolo pod telom sotva na dlaň, hoci z rany muselo jej vyjsť množstvo veliké. Striekancov krvi na kroví ani na zemi navôkol niet, ani stôp zápasu.

Čo povedať teraz môžem je že miesto, kde telo drevorubačom bolo nájdené, niet miestom, kde richtár Tadeus dokonal.

II. DE TEMPORE MORTIS — Kedy smrť nastala

Sánka, krk i údy nebohého sú stuhnuté celkom a ohnúť sa nedajú; stuhnutie je práve dokonané, no povoľovať ešte nezačalo. Tuhosť tá na mŕtve telo neprichádza hneď, lež po niekoľkých hodinách, a celé ho zmocní ku koncu pol dňa; povoľovať začína až o deň neskôr.

Na stranách, na ktorých telo ležalo, presvitá koža do tmava, akoby podliata — to krv, keď srdce stíchne, klesá v tele nadol a tam sa usadzuje. Pritlačil som na tie miesta palcom a farba pod prstom už nevybledla; kým je krv čerstvo klesnutá, pod tlakom ustúpi a zas sa vráti, a keď neustúpi, je usadená napevno, čo trvá temer pol dňa. Telo je pritom studené skrz-naskrz, i pod pazuchou a v slabinách, kde sa teplo drží najdlhšie; to samo osebe málo znamená, lebo noc bola chladná a telo ležalo takmer nahé pri vode.

Súdim teda, že richtár Tadeus dokonal ešte v nedeľu, dňa dvadsiateho druhého októbra, podvečer — najskôr o šiestej a najneskôr o siedmej hodine večernej, teda okolo pol siedmej. Od tej hodiny do chvíle, keď ho Viliam našiel, prešlo dvanásť a pol hodiny. O hodinu skôr či neskôr mýliť sa môžem; o pol dňa nie.

III. DE VULNERE — Rana na hrdle

Rana je na ľavej strane hrdla, počína pod uchom a vedie šikmo nadol k jamke hrdelnej, na dĺžku štyroch prstov.

Okraje rany nie sú zubaté, roztrhané a po stranách do šírky palca rozmliaždené; rana je viac roztrhnutá než rezaná. Hĺbka nie je rovnaká: najhlbšia hneď pod uchom, ku koncu sa stráca. Na dolnom konci vybieha do boku krátka trhlina zahnutá, na spôsob háčika.

V rane a na jej okrajoch sú šupinky čierne, tvrdé, a prach hrdzavočervený — také, aké vídať na železe kutom a v ohni prechovávanom.

Rez taký, aký zanecháva nôž, dýka či britva — rovný, hladký, s okrajmi čistými — som na tele nenašiel nikde.

IV. DE SANGUINE FACIEI — Krv na tvári

Krv na tvári nebohého nie je zaschnutá v prúdoch, ako by sama stiekla, ale je rozotretá do strán — po líci, brade a čele — rukou, ktorá sa jej dotýkala, kým bola ešte vlhká.

V rozotretej krvi sú zreteľné odtlačky prstov. Či to bola ruka ženská, či ruka mladíka alebo muža, z toho určiť nemožno a tvrdiť sa to neopovažujem.

Okrem krvi sú na tvári i ryhy — štyri plytké škrabance na lícach. Rozstupy medzi nimi sa zhodujú s prstami ruky, ktorá po tvári krv rozotrela.

Tie škrabance nekrvácali. Okraje ich sú suché a bledé, bez opuchu a bez červeného lemu, aký sa okolo poranenia živého tela do hodiny ukáže. Ruka teda prešla po tvári až vtedy, keď srdce už netĺklo — post mortem, po smrti — a nie v zápase o život.

V. DE MANIBUS — Ruky nebohého

Pravá ruka: hánky boli obviazané pásom plátna, nedbalo uviazaným. Pod obväzom je koža na hánkach ukazováka a prostredníka strhnutá do živého, s chrastami čerstvými a opuchom navôkol. Plátno je zafarbené len krvou z hánok samotných, krvou z hrdla nie.

Ľavá ruka: na prstenníku je pás kože zreteľne bledší než koža okolitá, na šírku prsteňa, a mierne vhĺbený. Prsteň pri tele nebol.

Na zadnej strane krku, tesne pod vlasmi, je úzky bledý pás do kože mierne vhĺbený, aký zanecháva remienok či šnúrka dlho nosená; modriny ani odretej kože v ňom niet. To, čo na nej viselo, pri tele nebolo, rovnako ako prsteň.

Na predlaktiach ani dlaniach niet porezaní či modrín, akými sa bránia tí, čo pred ostrím uhýbajú. Nechty sú celé.

Telo je uložené v chlade, prikryté plachtou, a nikto k nemu bez môjho vedomia prístupu nemá.

Toto všetko som zapísal verne, ničoho nepridávajúc a ničoho nezamlčujúc, na spásu duše svojej prisahám.

Dané v Lesoviciach, dňa dvadsiateho tretieho októbra, roku Pána tisíc päťsto tretieho.

Brat Martin, prísažný lekár a ohliadač zo sídla biskupského

†` },

  { id: "oblecenie", nazov: "Spis o nájdenom oblečení", podnazov: "Relatio de vestibus repertis", text: `†

In nomine Patris, et Filii, et Spiritus Sancti

RELATIO DE VESTIBUS REPERTIS
ZÁZNAM O NÁJDENÝCH DÔKAZOCH

Lesovice, dňa XXIII. mensis Octobris, Anno Domini MDIII

I. DE LOCO — Miesto nálezu

Po obhliadke tela dal som prehľadať dedinu i oba brehy rieky. Na dolnom konci, pri dome drevorubačovom, jest mólo z dosák do vody vybiehajúce. Pod ním, medzi kolmi, kde sa prúd láme, zachytila sa guča odevu.

Z brehu ju vidieť nebolo. Našiel som ju až vtedy, keď som zišiel k vode a pod dosky nazrel. Odev bol vodou nasiaknutý celkom; medzi látkou uviazlo riečne lístie a riasa.

II. DE VESTIBUS — Čo sa našlo

Kusy tri, jeden od druhého neoddelené, ale do seba zamotané.

Prvý: košeľa mužská, z plátna hrubšieho, veľkosti statného muža. Po prednej strane a na ľavom pleci zafarbená hnedočerveno, farbou zaschnutej krvi; voda ju vylúhovala, no nevyprala. Na ľavej strane goliera jest látka preťatá a roztrhnutá, rez ide šikmo nadol.

Druhý: blúzka ženská, z hodvábneho zamatu. Krvi na nej niet nijakej. Zašpinená jest len tak, ako býva odev nosený a na pranie odložený — pod pazuchami a na golieri.

Tretí: košeľa mužská, z ľanu, hrubo šitá a mnoho ráz nosená. Krvi na nej tiež niet. Zato zamazaná jest hlinou a blatom, a vo švoch na rukávoch i za golierom uviazli triesky drevené.

III. DE ORDINE — Ako ležali

Tri tie kusy boli zhúžvané do jednej guče a tá guča vtisnutá pod dosky tak, že ju drevo držalo. Neboli poskladané, ani zavesené, ani jeden od druhého odložený. Ktokoľvek s nimi naposledy narábal, nerobil to s poriadkom.

IV. CONCLUSIO — Záver

Čo z toho plynie, nesúdim. Zaznamenal som len to, čo oko vidí: kde odev ležal, z čoho jest a v akom stave.

Veci tieto sú uložené v chlade a nikto k nim bez môjho vedomia prístupu nemá.

Dané v Lesoviciach, dňa dvadsiateho tretieho októbra, roku Pána tisíc päťsto tretieho.

Brat Martin, prísažný lekár a ohliadač zo sídla biskupského` },

  { id: "matrika", nazov: "Matrika pokrstených", podnazov: "Matricula baptizatorum ecclesiae lesovicensis · roku 1483", text: `†

Matricula baptizatorum ecclesiae lesovicensis

MATRIKA POKRSTENÝCH
farnosť lesovická
roku Pána tisíc štyristo osemdesiateho tretieho

Aj roku tohto, ako i roku predošlého, navštívil kraj mor veliký. Pokrstených jest pre nákazu málo, pochovaných mnoho. Knihu túto vedie rukou svojou Ondrej, farár lesovický.

Dňa dvadsiateho prvého januára. Pokrstená Ester, dcéra Hansa Dietricha, tkáča, a manželky jeho Margaréty. Krstní rodičia: Matej mlynár a Katarína, žena jeho. Krstil: Ondrej, farár lesovický.

Dňa dvadsiateho ôsmeho marca. Pokrstená Anna, dcéra Michala pastiera a manželky jeho Barbory. Krstní rodičia: Štefan kováč a Uršuľa, žena jeho. Krstil: Ondrej, farár lesovický.
† zomrela v mesiaci auguste toho istého roku, na mor.

Dňa siedmeho apríla. Pokrstený Blažej, syn Mateja mlynára a manželky jeho Kataríny. Krstní rodičia: Pavol oráč a Alžbeta, žena jeho. Krstil: Ondrej, farár lesovický.

Dňa pätnásteho júna. Pokrstená Greta, narodená dňa dvanásteho júna. Matka: Helena, bylinkárka, prišelkyňa, prebývajúca za dedinou pri lese. Otec: ignotus. Krstní rodičia: žiadni. Krstil: Ondrej, farár lesovický.

Dňa druhého septembra. Pokrstený Ondrej, syn Pavla oráča a manželky jeho Alžbety. Krstní rodičia: Michal pastier a Barbora, žena jeho. Krstil: Ondrej, farár lesovický.
† zomrel v mesiaci októbri toho istého roku, na mor.

Dňa dvadsiateho novembra. Pokrstená Katarína, dcéra Štefana kováča a manželky jeho Uršule. Krstní rodičia: Hans Dietrich, tkáč, a Margaréta, žena jeho. Krstil: Ondrej, farár lesovický.

Toho roku pokrstených šesť. Zomrelých v knihe pohrebnej zapísaných sedemdesiat a štyri.

†` },

  { id: "list", nazov: "List od Heleny", podnazov: "Nájdený v papieroch otca Ondreja", text: `Môj milovaný,

viem, že hanba za lásku, čo v nás vzplanula, Ťa umára, a tak Tvoje kroky odo mňa viedli späť do náruče Božej. Vedz, že tak rovnako, ako Teba porušenie sľubu Pánovi trápi, tak moju dušu Tvoje opustenie láme. V samote lesovickej mi Tvoja náruč jedinou útechou bola a Tvoj odchod mi ďalší bôľ privodil.

Smútok zo straty Teba ale o toľko utíšený je, že naša láska zrodila ďalšiu. Naša dcéra, ktorej som meno Greta po Margaréte z Antiochie dala, mi bude spomienkou na Teba, ktorá nevybledne.

Dňom i nocou, v moru útrapách či kvitnúcej jari radosti, budeme Ťa vyčkávať, ak Ťa srdce do Lesovíc opäť zavedie.

Či už Ťa tieto riadky zastihnú alebo nie, vedz, že láska, ktorou som k Tebe zahorela, opustí tento svet až s mojím posledným výdychom.

Navždy Tvoja Helena` },

  { id: "zapisky", nazov: "Karolove zápisky", podnazov: "„Špina špinavcov špinavých“", text: `Špina špinavcov špinavých

ESTER
Minule si ústa sa svojho muža otvorila. Za dverami richtárovho domu, zdá sa, mizéria prebýva. Manžel akoby tam ani nebol a záujem o svoju ženu neprejaví.

Nevernica! Cez deň cudné žieňa v očiach všetkých slepých, no v noci diabol vedie jej mlstný jazyk. Práve v dnešnú noc som ju uzrel, ako smilní s tým valibukom Viliamom! Striebro sa už leje"

Aspoň niečo z toho mám, keď už na sekeru popíja, a za chrbtom richtára tak robí

VILIAM
Ten čerešňový šunt, čo vyrába, by som ani do sračiek nevylial! Z tých aspoň hnojiva jest. Keby ostatní vedeli, že to robí z tej vody špinavej, čo dole riekou tečie, keď tá stará fúria perie.

Ale čo, predáva mi ho aj tak za minimum, a hlupák, keď sa ožerie, ešte aj za vlastnú pálenku znova zaplatí, keď sa domov dvíha. Veď by aj skúsil hubu si otvoriť, hneď sa richtár o jeho záletoch dozvie.

BENEDIKT
Toľko vína, čo pýta, na omšu je veľa pre celý Rím. Ten musí mať stále ovlažené hrdlo.

Už tu bol, ešte za čias moru, ešte v roku 1482! Musel to byť on! Bol som dieťa, ale pamäť mi vždy slúžila dobre a dodnes tak tomu je. Zase som skúšal niečo o ňom viac zistiť, no nepodarilo sa.

Stále nosí nejaký zdrap pri sebe. Minule si tu bol po ďalšie víno a nejaký papier vytratil. Hodil sa naň sťa sup. A na bránu nebeskú prisahám, že v sákristii minule, keď som mu tam vína doniesol, sa nad tým istým zdrapom hrbil. Napochytre ho ale schoval!

AGNES
Tá stará ropucha mi určite ničí sudy! Ostatní splachujú krky u mňa skoro každý deň, kto iný by to urobil? Už tretí sud za mesiac vytiekol! Pritom ten valibuk, keď mi ich vyrába, vždy dodáva kvalitu. Keď ja ju pristihnem, do rieky ju šmarím!!

GRETA
|||||  |||||  |||||  |||||   |||||  ||` },

  { id: "spovede", nazov: "Spovede obyvateľov lesovických", podnazov: "Zápisky otca Benedikta — v priebehu dní posledných", text: `Spovede obyvateľov lesovických v priebehu dní posledných

TADEUS SCHWARZENBERG
Richtára lesovického starosti o vlastné zisky mátajú. Strach ho obopína, že v jeho dome zbojník vraj bol. Strieborné mince mu z truhlice zmizli a on sa len za ochranu Božiu modlí. Cnostný to muž, však keď strasti mu do života prídu, démon zloby do jeho vnútra vstúpi. Potom hnev sa prederie na povrch a slušný človek sťa diabol kľaje. Dlho som upokojoval jeho zvieraciu náturu skrytú v pozlátku mladíka podľa pravidiel nebeských i svetských žijúceho.

ESTER SCHWARZENBERG
O myšlienkach necudných v kazateľnici rozprávala, tak ako mnohokrát predtým sa už udialo. Dievča prosí o odpustenie a hreší v mysli, o rozkoši fantazírujúc. Toľko len povedala, že jej muž predmetom jej túžob nebol. Ťažko krotiť vášne dievčaťa, nuž nech rozhrešenie utišuje srdce Evou skazené.

VILIAM KÖNIG
Že Viliam pijanom je, to dedina celá zná. Však že pri mlyne sa pôžitku opojnému oddáva a do vnútra mlyna Karolovho sa vkráda, doznal sa v chvíli slabej. Kým dedinčania sily zo sveta pekelného myslia že začuli, to len rumázganie ožrana sa vetrom nieslo. Tak hrôzy, ktoré jeho hlas vzbudzoval, môžem teraz svetským vysvetlením tíšiť.

Však ďalší hriech v moci opojenia vyjadril, a to, že s richtárom Tadeusom problémy môže mať, lebo sa zlého činu voči nemu dopustil. Tak jeho slová zneli a iba tie vyriekol. Potom ho strach schvátil a pobral sa preč, bez rozhrešenia.

AGNES SCHULTZ
K hriechu sa doznala, že pri praní košieľ dedinčanom tú, ktorá šenkerovi Karolovi patrila, v moči prasacom vymáčala. Tak mu šaty vrátila, vraviac, že voda plná špiny bola.

Tvrdí, že ju trescú zlé sily za to, že hriech páchala, lebo znamenia zlé na dvore svojom našla. Tam kosti kureniec sa z ničoho nič začali povaľovať a hrôzu do jej srdca zasievať. Agnes s hrôzou ráno vstáva a vždy nové kosti nachádza. Na sily čarodejné pomýšľa a vníma to ako trest Boží v šate sily nečistej.

MORITZ HÜTER
Chlapec s duchom prostým v utorok hriech špinavý spáchal. Vtedy sa necnostne cez plot na Ester, idúcu po ceste, díval, pokiaľ do domu Agnes nevstúpila. Chlapca zlé myšlienky premohli a k skutku sebanečistoty doviedli.

KAROL KOLMANN
Karol na jednu devu zálusk má, však na ktorú, to nechce prezradiť. Svedomie ho aspoň natoľko hrýzie, že sa zveril s týmto hriechom do milosti Božej, a vyjavil, že v stredu tejto deve necudné návrhy dával, aby s ním do jedného lôžka zaľahla.

Ešte k tomu mamon jeho ruky vedie, keď biednym, nečítajúcim dedinčanom mince má prerátať, a tak si berie viac, než jeho službám náleží. To hriech je, ktorý v dome Božom nepriznal, no nie jeden dedinčan s týmito chýrmi za mnou prišiel.` },

  { id: "odvary", nazov: "Bylinkárske odvary", podnazov: "Zápisník Grety", text: `ODVARY Z BYLINIEK

1. HARMANČEKOVÝ ODVAR
Zloženie: Sušené kvety harmančeka pravého, zaliate vriacou vodou a nechané lúhovať.
Postup: Dve hrste suchého kvetu daj do hlineného hrnca, zalej vriacou vodou a prikry. Nechaj stáť, kým sa tri razy Otčenáš pomodlíš. Sceď cez plátno a pi teplé.
Účel: Upokojenie žalúdka, hojenie drobných rán, navodenie spánku.
Efekt: Mierne upokojujúci a protizápalový účinok, uľavuje od kŕčov v bruchu.
Nežiaduce následky: Pri nadmernom užívaní ospalosť; u citlivejších osôb možná alergická vyrážka.

2. ŽIHĽAVOVÝ ODVAR
Zloženie: Čerstvé alebo sušené listy žihľavy dvojdomej, krátko povarené.
Postup: Listy chytaj cez plátno, nech nepopália, a opláchni ich v pramenitej vode. Zalej vodou na dva prsty nad ne a nechaj prejsť varom, nie dlhšie než jeden Otčenáš. Sceď a pi vlažné nalačno.
Účel: Jarné „prečistenie krvi“, posilnenie organizmu, zastavenie krvácania.
Efekt: Močopudný účinok, podporuje trávenie, mierne stavia krv.
Nežiaduce následky: Vo väčšom množstve dráždi žalúdok; neodporúčalo sa tehotným ženám.

3. LIPOVÝ KVETOVÝ ODVAR
Zloženie: Sušený kvet lipy zaliaty horúcou vodou.
Postup: Suchý kvet zalej vodou horúcou, no nie vriacou – prudký var vôňu vyženie. Prikry a nechaj lúhovať, kým sa dva razy Otčenáš pomodlíš. Sceď a pi pred spaním.
Účel: Liečba prechladnutia a horúčky, upokojenie pred spaním.
Efekt: Potopudný a upokojujúci účinok, uvoľňuje priedušky.
Nežiaduce následky: Pri dlhodobom a nadmernom užívaní môže zaťažovať srdce.

4. ODVAR NA VYTRIEZVENIE (PRE TADEUSA)
Zloženie: Palina pravá, rebríček obyčajný a MÄTA, zaliate vriacou vodou a preliate medom; podávané spolu s kúskom chleba.
Postup: Paliny vezmi máličko, len čo na tri prsty uchytíš, rebríčka a mäty po hrsti. Zalej vriacou vodou, prikry a nechaj stáť tri Otčenáše. Sceď cez plátno, vmiešaj lyžicu medu a podaj s kúskom chleba.
Účel: Uľaviť od opilosti a navodiť rýchlejšie vytriezvenie – pripravené Grétou pre podnapitého Tadeusa v deň jeho návštevy.
Efekt: Horký odvar podporuje trávenie a činnosť žalúdka, med dodá chýbajúci cukor, chlieb naviaže zvyšný alkohol v žalúdku – spolu navodia pocit úľavy a jasnejšiu hlavu.
Nežiaduce následky: Vo väčšom množstve môže palina spôsobiť nevoľnosť; inak ide o mierny a bežne používaný domáci prostriedok bez vážnejších rizík.

5. ODVAR Z DUBOVEJ KÔRY
Zloženie: Nastrúhaná kôra dubu letného, dlhšie varená vo vode.
Postup: Kôru z mladých konárov zoškrab a nastrúhaj. Zalej studenou vodou, priveď k varu a nechaj vrieť dlho, kým voda nestmavne ako pivo. Sceď a používaj vychladnuté – na obklad alebo na vyplachovanie.
Účel: Hojenie rán, zastavenie hnisania, liečba hnačky.
Efekt: Silno zvieravý (trieslovinový) účinok, spomaľuje krvácanie.
Nežiaduce následky: Pri vnútornom užívaní vo väčšom množstve zápcha a podráždenie žalúdka.

6. ODVAR ZO SKOROCELU
Zloženie: Čerstvé listy skorocelu kopijovitého, krátko povarené alebo lúhované.
Postup: Čerstvé listy pomni v dlaniach, nech pustia šťavu. Zalej vriacou vodou a nechaj prejsť krátkym varom. Sceď. Na ranu prikladaj vlažné na plátenku, na kašeľ pi teplé.
Účel: Hojenie rán a uhryznutí hmyzom, upokojenie dýchacích ciest.
Efekt: Protizápalový a hojivý účinok, mierne tlmí kašeľ.
Nežiaduce následky: Zriedkavo alergická reakcia na koži.

7. ODVAR Z BAZOVÝCH KVETOV
Zloženie: Sušené kvety čierneho bazu, zaliate vriacou vodou.
Postup: Suchý kvet zalej vriacou vodou a prikry tesne, nech para neujde. Nechaj stáť tri Otčenáše, sceď a pi horúce. Hneď nato ľahni a prikry sa, nech sa pot dostaví.
Účel: Liečba horúčky a nádchy.
Efekt: Silný potopudný účinok, pomáha „vyhnať“ horúčku potením.
Nežiaduce následky: Pri použití nezrelých bobúľ či listov namiesto kvetov hrozí otrava jedovatými glykozidmi – dôležité je použiť len kvety.

8. ODVAR ZO ŠÍPOK
Zloženie: Sušené plody voľne rastúcej šípky, dlhšie varené vo vode.
Postup: Suché plody rozdrv v mažiari, zalej studenou vodou a var dlho na miernom ohni, kým nezmäknú. Sceď dvakrát cez husté plátno, aby chĺpky neostali. Pi vlažné.
Účel: Posilnenie organizmu, doplnenie síl po chorobe.
Efekt: Povzbudzujúci účinok, priaznivo pôsobí na chuť do jedla a celkovú vitalitu.
Nežiaduce následky: Pri väčšom množstve tráviace ťažkosti, ak nie sú z plodov dôkladne odstránené jemné dráždivé chĺpky.` }
],

/* ------------------------------------------------------------------ */
riesenie: {
  zhrnutie: "Tadeusa zabila AGNES SCHULTZ, v sebaobrane, kutáčom, vo vlastnom dome, v nedeľu 22. októbra okolo 18:30. Nešlo o ochranu Ester — tá v tej chvíli už v dome nebola. Tadeus sotil Agnes o kozub a vyrútil sa na ňu; ona sa intuitívne chopila kutáča a zasiahla ho do hrdla. Potom telo vyzliekla, prevážala fúrikom a vyložila za šenkom, aby vraždu hodila na Viliama.",
  kroky: [
    { nadpis: "1. Telo bolo presunuté", text: "Pod telom sotva na dlaň krvi, žiadne striekance, žiadne stopy zápasu. Človek s prerezaným hrdlom vykrváca na mieste — tam by bolo krvi veľa. Miesto nálezu nie je miesto činu." },
    { nadpis: "2. Nástroj nie je nôž", text: "Rana je roztrhnutá, nie rezaná, okraje rozmliaždené, na konci háčik. V rane čierne šupiny a hrdzavočervený prach — kuté železo prechovávané v ohni. To je kutáč od kozuba, nie čepeľ." },
    { nadpis: "3. S telom manipuloval niekto s dlhými nechtami", text: "Krv na tvári je rozotretá rukou post mortem, štyri plytké škrabance bez opuchu a červeného lemu. Dlhé nechty majú v dedine iba traja: Greta, Agnes a Benedikt." },
    { nadpis: "4. Chýba prsteň a ruženec", text: "Bledý pás na prstenníku a bledý pás na krku — obe veci pri tele neboli. Prsteň nájde Moritz o 20:45 medzi kostolom a šenkom. Ruženec Agnes zabudla na stole a ráno si ho omylom odela — ako jediná v dedine nosí strieborný, všetci ostatní drevený." },
    { nadpis: "5. Fúrik", text: "Agnes stretla o 20:30 Benedikta s fúrikom. Tvrdila, že ide k Viliamovi po drevo. Viliam počul a videl o 20:45 siluetu pri šenku a vŕzganie kolieska. Keď sa jej opýtajú na fúrik, povie, že ho má každý — ostatní to popierajú." },
    { nadpis: "6. Oblečenie", text: "Guča troch kusov pod mólom pri Viliamovom dome: Tadeusova zakrvavená košeľa, Esterina blúzka bez krvi a Viliamova košeľa bez krvi. Prečo by boli spolu? Lebo Agnes perie celej dedine — mala ich v koši na pranie a nechtiac ich zabalila k telu." },
    { nadpis: "7. Čas", text: "Smrť medzi 18:00 a 19:00. Benedikt bol v tom čase u Karola (18:30–20:30), Greta doma, Ester utekala domov (videl ju Benedikt o 18:15), Viliam spal opitý na rybárskom mieste, Moritz pri peci. Bez alibi ostáva Agnes." },
    { nadpis: "8. Zlomenie", text: "Stačia dve otázky: „Prečo máte strieborný ruženec, keď všetci ostatní majú drevený?“ a „Máte doma kutáč?“ Kutáč má doma každý okrem Moritza — Agnes bude tvrdiť, že nemá." }
  ],
  falosneStopy: [
    { nazov: "Škrabance na tvári → Greta", text: "Greta má dlhé nechty a navyše v stredu poškriabala Karola po líci. Škrabance ukazujú na ňu, hoci ich spravila Agnes." },
    { nazov: "Odvar pri richtárovom dome → otrava Grétou", text: "Fľaštička „Pre Tadeusa“ pod oknom. Vyzerá ako pokus o otravu — v skutočnosti to bol dar vďaky a Greta ho zahodila, keď sa zľakla." },
    { nazov: "Červené fľaky na krstnom liste a liste od Heleny → krv", text: "Vyzerá to, že ten, kto tie papiere držal, mal na rukách Tadeusovu krv. Je to víno, ktoré Benedikt pri čítaní rozlial." },
    { nazov: "Benediktova minulosť v roku 1482 → motív", text: "Tají, že tu bol, tají otcovstvo, chodí sa po nociach dívať na Gretu. Vyzerá to ako muž, ktorý má čo skrývať — a má, len nie vraždu." },
    { nazov: "Viliamova košeľa v guči → vrah", text: "Jeho košeľa bola zabalená s telom a guča sa vyplavila pri jeho vlastnom dome. Bez krvi ale — a Viliam bol v čase smrti opitý na druhom brehu." },
    { nazov: "Esterina blúzka + motív + krádež → manželka", text: "Najsilnejší motív v hre. Jej vec bola pri tele. Ale o 18:15 ju Benedikt videl utekať domov a odvtedy bola zamknutá a plakala." },
    { nazov: "Prsteň na Moritzovej ruke → zlodej a vrah", text: "Nosí prsteň obete na ruke a priznáva to bez zábran. Len ho našiel na ceste, lebo sa mu páčil." },
    { nazov: "Karolova bitka s Tadeusom → pomsta", text: "Zlomený nos, verejné poníženie, vydieranie. Má motív aj temperament. Ale od 18:30 do 20:30 bol s Benediktom." },
    { nazov: "Rana na ľavej strane krku → ľavák Viliam", text: "Viliam je jediný ľavák v dedine. Poloha rany to ale nijako nedokazuje — čistá zavádzajúca zhoda." },
    { nazov: "Kliatba čarodejnice a kuracie kosti → Greta", text: "Celá dedina tomu verí, Benedikt to káže z kazateľnice a Agnes to opakuje. Kosti hádže na dvor sama Greta z provokácie." }
  ]
},

/* ------------------------------------------------------------------ */
dotaznik: [
  { otazka: "Kto zavraždil richtára Lesovíc — Tadeusa?", body: 4, odpoved: "Agnes Schultz" },
  { otazka: "Čo bolo dôvodom jeho vraždy?", body: 3, odpoved: "Sebaobrana Agnes (nie ochrana Ester — tá už v čase vraždy nebola v dome)" },
  { otazka: "Akým nástrojom bol Tadeus zavraždený?", body: 2, odpoved: "Kutáčom" },
  { otazka: "Dohromady koľko zlatých mincí ukradla Ester zosnulému Tadeusovi?", body: 2, odpoved: "Žiadnu — brala mu strieborné mince, konkrétne 30 strieborných grošov" },
  { otazka: "Ako sa volala matka Grety?", body: 2, odpoved: "Helena" },
  { otazka: "V aký deň sa šenkár Karol dopustil hriechu?", body: 1, odpoved: "V stredu, keď obťažoval Gretu" },
  { otazka: "Aký nápoj pil Viliam?", body: 1, odpoved: "Čerešňovicu" },
  { otazka: "V ktorom roku prvýkrát prišiel do Lesovíc otec Benedikt?", body: 1, odpoved: "1482" },
  { otazka: "Aká bylina bola cítiť v odvare pre Tadeusa?", body: 1, odpoved: "Mäta" },
  { otazka: "Koľko rokov dnes oslavuje Moritz?", body: 1, odpoved: "25" }
],

/* ------------------------------------------------------------------ */
momenty: [
  { cas: "09:00", ikona: "fist", nadpis: "Bitka po omši", text: "Tadeus čaká pred kostolom na Karola a zlomí mu nos. Nikto nepočul, čo mu vykričal." },
  { cas: "16:00", ikona: "cup", nadpis: "Posledný rozhovor", text: "Opitý Tadeus prichádza ku Grete. Uvarí mu polievku, hodinu sa zhovárajú. Odíde triezvejší a zmierený." },
  { cas: "18:00", ikona: "eye", nadpis: "Zočí Ester", text: "Cestou domov vidí svoju ženu na dvore Agnes. Vrúti sa dnu." },
  { cas: "18:30", ikona: "flame", nadpis: "Vražda", text: "Ester už utiekla. Tadeus sotí Agnes o kozub, tá sa chopí kutáča a zasiahne ho do hrdla." },
  { cas: "20:30", ikona: "cart", nadpis: "Fúrik v tme", text: "Agnes vezie telo dedinou. Stretne Benedikta, z fúrika vypadne Tadeusov prsteň." },
  { cas: "20:45", ikona: "moon", nadpis: "Telo za šenkom", text: "Vyloží ho do krovia, oblečenie hodí do rieky. Cez vodu to vidí opitý Viliam — ale len siluetu." },
  { cas: "07:00", ikona: "sun", nadpis: "Nález", text: "Viliam sa prebudí na rybárskom mieste a cestou domov nájde telo richtára." }
],

/* ------------------------------------------------------------------ */
harmonogram: [
  { cas: "17:00", co: "Štart — pozvánka biskupa, zoznam podozrivých, mapa, protokol z obhliadky, ilustrácia tela", kto: "Brat Martin" },
  { cas: "17:30", co: "Bylinkár Grety (nájdený pri prehliadke jej domu)", kto: "Brat Martin" },
  { cas: "18:00", co: "Fľaštička s odvarom „Pre Tadeusa“ (od richtárovho domu)", kto: "Brat Martin" },
  { cas: "18:30", co: "Karolov zápisník", kto: "Brat Martin" },
  { cas: "19:15", co: "Benediktove záznamy spovedí a hriechov", kto: "Brat Martin" },
  { cas: "19:45", co: "Matrika pokrstených — krstný záznam Grety", kto: "Brat Martin" },
  { cas: "20:10", co: "Spis o nájdenom oblečení — posledný dôkaz", kto: "Brat Martin" },
  { cas: "20:30", co: "Výstupný dotazník, koniec vyšetrovania", kto: "Brat Martin" },
  { cas: "po 20:30", co: "Vyhodnotenie, odhalenie páchateľa, vyhlásenie víťazov", kto: "Brat Martin" },
  { cas: "kedykoľvek", co: "List od Heleny — až keď tímy prepoja Benediktovo otcovstvo", kto: "Benedikt" }
]

};
