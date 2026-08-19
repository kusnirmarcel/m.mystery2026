# Kliatba Lesovíc — web pre hercov a organizátorov

Statický web. Žiadny build, žiadne závislosti. Nahodíš na GitHub Pages a máš odkaz,
ktorý môžeš poslať hercom. Obsah upravuješ v jedinom súbore `data.js` priamo
v prehliadači na GitHube — po commite je zmena na webe hneď po refreshi.

---

## Čo je v balíku

```
index.html          celá aplikácia (HTML + CSS + JS v jednom súbore) — NETREBA MENIŤ
data.js             ⬅ VŠETOK OBSAH. Toto je jediné, čo budeš upravovať.
assets/
  mapa.jpg          mapa Lesovíc (2800 px)
  hero.jpg          výrez mapy do úvodnej hlavičky
  mapa-small.jpg    zmenšenina (rezerva)
  telo.jpg          ilustrácia tela k protokolu
  ilustracie/*.svg  7 drevorytov k príbehu
README.md           tento návod
```

---

## 1. Nahodenie na GitHub Pages (raz, ~5 minút)

1. Choď na **github.com** → prihlás sa → vpravo hore **+** → **New repository**.
2. Názov napr. `kliatba-lesovic`. Nastav **Public**. Bez README. → **Create repository**.
3. Na stránke nového repozitára klikni **uploading an existing file**.
4. Presuň tam **všetko** z tohto balíka — `index.html`, `data.js`, `README.md`
   aj celý priečinok `assets` (dá sa pretiahnuť celý priečinok naraz).
5. Dole klikni **Commit changes**.
6. Hore v repozitári → **Settings** → v ľavom menu **Pages**.
7. V sekcii *Build and deployment* nastav **Source: Deploy from a branch**,
   **Branch: `main`**, priečinok **`/ (root)`** → **Save**.
8. Počkaj 1–2 minúty a obnov stránku. Hore sa objaví odkaz v tvare:

   ```
   https://TVOJE-MENO.github.io/kliatba-lesovic/
   ```

   **Toto je odkaz, ktorý posielaš hercom.** Nikdy sa nemení.

> Ak chceš, aby web nebol verejne dohľadateľný, daj repozitáru nenápadný názov.
> GitHub Pages na free účte vždy verejné sú — odkaz sa nedá dohľadať cez GitHub
> vyhľadávanie, ale kto ho pozná, otvorí ho.

---

## 2. Ako upraviť obsah

1. V repozitári klikni na **`data.js`**.
2. Vpravo hore ikona **ceruzky** (Edit this file).
3. Uprav text.
4. Dole **Commit changes** → **Commit changes**.
5. Počkaj ~30 sekúnd (GitHub prebuildí stránku) a na webe daj **refresh**.

Web si dáta ťahá s časovou pečiatkou, takže prehliadač ti nikdy nepodstrčí
starú verziu. Ak by sa aj tak niečo zaseklo, `Ctrl + Shift + R` (Mac: `Cmd + Shift + R`).

### Pravidlá, aby sa to nerozbilo

| Pravidlo | Príklad |
|---|---|
| Text vždy medzi rovné úvodzovky | `nazov: "Krvavá plachta"` |
| Úvodzovky **vnútri** textu píš slovenské | `„takto“` — nikdy `"takto"` |
| Za každou položkou zoznamu čiarka | `{ ... },` |
| `true` / `false` bez úvodzoviek | `hotovo: true` |
| Nemeň `id:` hodnoty | prepojenia medzi sekciami sa na ne viažu |

Ak sa web po úprave zobrazí ako chybová hláška, skoro vždy je to **chýbajúca
čiarka alebo úvodzovka**. Otvor konzolu (`F12` → Console) — napíše presný riadok.

---

## 3. Najčastejšie úpravy

### Odškrtnúť hotovú rekvizitu
Nájdi ju v sekcii `rekvizity:` a prepni `hotovo: false` na `hotovo: true`.
Percentá a filtre sa prepočítajú samé.

### Pridať rekvizitu alebo dôkaz
Do sekcie `rekvizity:` pridaj riadok — stĺpce sú rovnaké ako v tvojom xlsx:

```js
{ typ: "Fyzické dôkazy", nazov: "Názov", popis: "Popis", postava: "Agnes, Tadeus",
  ucel: "Účel / stopa pre tímy", priorita: "Must-have", hotovo: false },
```

### Doplniť nadpisy kapitol príbehu
V sekcii `pribeh:` má každá kapitola `nadpis: ""`. Napíš doň text a zobrazí sa
nad kapitolou. Ak ho necháš prázdny, kapitola nadpis nemá.

### Pridať bod do časovej osi
Do `casovaOs.zaznamy` pridaj:

```js
{ den: "d16", cas: "17:15", akcie: {
  greta: "Čo robí Greta.",
  karol: "Čo robí Karol." } },
```

Poradie v zozname určuje poradie na webe — vlož riadok na správne miesto.

### Presunúť bod na mape
V `mapa.body` uprav `x` a `y` — sú to **percentá** šírky a výšky obrázka
(0 = ľavý/horný okraj, 100 = pravý/dolný).

### Zmeniť úvodnú hlavičku
V `meta:` je `hero` (obrázok na pozadí úvodu) a `uryvok` (veta pod názvom).
Ak `uryvok` vymažeš, veta sa nezobrazí.

### Zmeniť verziu v päte
V `meta:` uprav `verzia` a `aktualizovane`.

---

## Alternatíva bez GitHubu

Ak by ti GitHub nesadol: celý priečinok pretiahni na **app.netlify.com/drop**.
Dostaneš odkaz do 10 sekúnd. Nevýhoda — pri každej úprave musíš pretiahnuť
celý priečinok znova a odkaz sa môže zmeniť.

---

## Poznámky

* Web funguje aj offline — stačí otvoriť `index.html` dvojklikom.
  (Fonty sa vtedy nenačítajú, použije sa systémový Georgia. Inak všetko ide.)
* Funguje na mobile aj na desktope. Mapa sa dá ťahať a približovať prstami.
* `Ctrl + P` vytlačí čitateľnú verziu — napr. profil postavy pre herca.
* V texte funguje `**tučné**` a `*kurzíva*`.
