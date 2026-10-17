# Kliatba Lesovíc — web pre hercov a organizátorov

Statický web, bez buildu. Hostovaný na GitHub Pages.

## Súbory

```
index.html           aplikácia — netreba meniť
data.js              VŠETOK OBSAH — jediný súbor na úpravy
assets/cover.jpg     cover na úvodnej stránke
assets/mapa.jpg      mapa Lesovíc (s popiskami, do sekcie Mapa)
assets/telo.jpg      ilustrácia tela k protokolu
assets/postavy/*.jpg portréty 8 postáv (benedikt, greta, ester, viliam,
                     agnes, karol, moritz, tadeus)
```

## Nasadenie

1. V repozitári nahraj všetky súbory (Add file → Upload files), pričom zachovaj priečinok `assets/`.
2. Settings → Pages → Source: „Deploy from a branch“, branch `main`, folder `/ (root)`.
3. Po pár minútach je web na `https://kusnirmarcel.github.io/m.mystery2026/`.

## Ako upraviť obsah

Otvor `data.js` na GitHube, klikni na ceruzku, zmeň text, dole „Commit changes“.
Po ~30 sekundách a obnovení stránky je zmena na webe.

Časté úpravy:

- **rekvizity** — `hotovo: true/false` (odškrtávanie funguje aj priamo na webe, ukladá sa do prehliadača)
- **nový dôkaz** — pridaj blok do `dokazy: [ ... ]`
- **nový záznam v časovej osi** — pridaj riadok do `casovaOs.zaznamy`
- **posun bodu na mape** — zmeň `x` a `y` (v percentách šírky/výšky obrázka)
- **nový dokument** — pridaj blok do `dokumenty: [ ... ]` a v dôkaze naň odkáž cez `dokument: "id"`

Pozor len na to, aby text v úvodzovkách neobsahoval nespárovanú úvodzovku `"`.
Ak sa web po úprave nenačíta, je to takmer vždy toto.

## Sekcie

| Sekcia | Obsah |
|---|---|
| Prehľad | cover s headlinom, kľúčové fakty, deň vraždy v 7 momentoch, obsadenie s portrétmi, dlaždice na všetky sekcie |
| Prípad | zadanie bez spoilerov pre tímy, profil obete a 7 podozrivých s portrétmi |
| Príbeh | 10 kapitol od moru 1482 po nález tela |
| Postavy | 7 hrateľných + obeť s portrétmi, sieť obvinení (kto koho obviňuje/chráni), postavy v pozadí (vrátane sestry Brunhildy); tlačiteľná karta pre herca |
| Súvislosti | klikacia myšlienková mapa — vyber postavu a uvidíš jej väzby, dôkazy, miesta a hodiny |
| Mapa | 13 bodov, klikacie, s udalosťami na mieste |
| Časová os | 41 záznamov, filter podľa postavy, „len kľúčové“, na mobile ako zoznam |
| Dôkazy | 13 dôkazov v poradí vypúšťania, prekliky na postavy a dokumenty |
| Dokumenty | plné znenie 10 herných dokumentov vrátane úvodného prejavu a záverečného slova otca Benedikta |
| Riešenie | zhrnutie, reťaz dôkazov (8 krokov), 10 falošných stôp |
| Réžia | scenár pre brata Martina krok za krokom (čo a kedy odovzdať, komu, čo povedať), ako sa veci dostanú k ľuďom (čo sa rozdáva a čo umiestňuje Brunhilda do priestoru), samostatná príručka pre herečku Brunhildy, zlaté pravidlá, príprava, harmonogram, dotazník s bodovaním, rekvizity s odškrtávaním, kontrola konzistencie |

Vyhľadávanie (lupa vpravo hore) hľadá naraz vo všetkom.
Každá sekcia má dole preklik na ďalšie dve sekcie.

## Scenár pre moderátora

Blok `scenar:` v `data.js` — `kto`, `zlatePravidla`, `priprava`, `doruc` (ako sa veci dostanú k ľuďom), `brunhilda` (príručka pre herečku), `kroky` (každý krok má
`cas`, `nadpis`, `co`, `komu`, `ako`, `otvara`). Časy krokov musia sedieť
s blokom `harmonogram:`, inak to vypíše kontrola konzistencie.

## Zadanie prípadu (bez spoilerov)

Blok `uvod:` — `intro` (odstavce), `obet` a `podozrivi`. Toto je verzia pre tímy.

## Momenty na úvodnej stránke

Sedem kariet „Deň vraždy v siedmich momentoch" sa berie z bloku `momenty:` v `data.js`.
Pole `ikona` prijíma: fist, cup, eye, flame, cart, moon, sun, skull, knife, herb, bottle, shirt, church, book, scroll, doc, key, candle, map, clock, glass, people, ring, beads, tankard, sheep, axe, heart, cross, scales.

## Kontrola konzistencie

V sekcii Réžia dole. Po každej úprave `data.js` sa tam automaticky prepočíta:

- veky postáv oproti dátumom narodenia (k 23. 10. 1503)
- odkazy na neexistujúce postavy/dokumenty vo vzťahoch, dôkazoch, mape a časovej osi
- súčet bodov výstupného dotazníka (musí byť 18)
- postavy, ktoré v čase vraždy nemajú v časovej osi žiadny záznam

## Otvorené rozhodnutia v obsahu

- **Ester v matrike** — v matrike z roku 1483 je pokrstená Ester, dcéra Hansa Dietricha a Margaréty. V tabuľke postáv je Ester Ecker, nar. 1481, rodičia Heinrich a Rosa. Ponechané ako zámerná falošná stopa.
- **Tadeusove nohavice** — protokol hovorí, že pri tele sa nenašiel žiaden odev, a v spise o oblečení sú len tri kusy (košeľa, blúzka, košeľa). Nohavice nikde. Ak sa na to tím opýta, treba mať pripravenú odpoveď.
