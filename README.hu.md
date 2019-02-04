# uCoz Táska forráskód

([English](https://github.com/ucoztaska/ucoztaska/blob/master/README.md) | Hungarian)

Ez a repository tartalmazza a [uCoz Táska weboldal](http://ucoztaska.ucoz.hu) sablonjának forráskódját. A sablon szabadon használható bármilyen személyes vagy kereskedelmi célra.

## Fontos megjegyzések

Ez a kód 2016-ban volt írva és azóta keveset lett átnézve, illetve módosítva. Megeshet, hogy a kód bizonyos részei nem fognak az elvárásnak megfelelően működni. Amennyiben egy hibára találtál és ki szeretnéd javítani, bátran létrehozhatsz egy pull request-et. Közbenjárásodat nagyra értékeljük!

Ez a sablon sok helyen más emberek vagy szervezetek kódját használja fel. Ezeknek legtöbbje megtalálható a többi GitHub-os repository-nkban. Nem tartjuk fenn a jogot az előbb említett kódok felett.

## Telepítés

### Repository klónolása

A GitHub repository klónolásához használhatod a `git` programot:

```sh
git clone git@github.com:ucoztaska/ucoztaska
```

illetve használhatod a GitHub felületén levő "Download ZIP" gombot vagy letöltheted a legújabb [release](https://github.com/ucoztaska/ucoztaska/releases)-t.

### Alap-telepítés

1. Töltsd fel a **files** mappa tartalmát a weboldaladra a Fájlkezelőn vagy FTP-n kerszesztül.

2. Cseréld le a **Stílusok táblázata (CSS)** sablon tartalmát a `my.css` fájlban található kódra.

3. Cseréld le a szükséges sablonokat a **templates** mappában található forráskódokkal. Ajánlott ilyenkor lecserélni a Vezérlőpult nyelvét angolra.

4. Hozd létre az informereket az **informers** mappában található adatok alapján.

*Megj.: az informerek azonosítói 10 és 11, ahogy a uCoz Táskán vannak. Megeshet, hogy a te informereidnek nem ezek lesznek az azonosítói. Ebben az esetben le kell cserélned a `$MYINF_10$` és `$MYINF_11$` változókat a saját változóiddal a forráskódban.*

### Erőforrások (Cikkek katalógusa modul) beállítása

A uCoz Táska legfontosab részlege az Erőforrások részleg volt, amely szkripteket, sablonokat, grafikákat, illetve segédleteket tartalmazott a uCoz rendszerrel kapcsolatosan. Ez volt a weboldal fő modulja.

A beállításhoz engedélyezned kell a **Szerző neve**, **Szerző weboldala**, illetve **Forrás** mezőket, majd át kell nevezned az első kettőt **Demo**, illetve **Letöltési link**re.

### Prémium szkriptek (Honlapkatalógus modul) beállítása

A Prémium szkriptek a uCoz Táska egyik megszűnt részlege volt. Ezt arra használtuk, hogy a uScript.pro-n levő szkripteket listázzuk magyarul. Mivel nem volt ennek a részlegnek aktív felhasználója, felmondtunk az ötlettel. Mindezek ellenére rendelkezésre állítjuk a részleghez használt forráskódot.

A szekció beállításához engedélyezned kell a **Kiegészítő mező 1** és **Kiegészítő mező 2** mezőket, majd átnevezned őket **Ár**, illetve **Régi ár**ra. Mindezek mellett a **Honlap URL címe** mezőt is át kell nevezned **uScript.pro link**re.

### Kérdések (Fájlkatalógus modul) beállítása

Ez volt a weboldalunk egyik legjobb funkciója, mivel rendelkezésre állította a kérdések feltevésének, megválaszolásának, illetve megválaszoltnak jelölésének lehetőségét. **Ehhez a szekcióhoz PHP szkriptek futtatásának lehetősége szükségeltetik**, amely az **Optimális** fizetős csomagtól kezdve érhető el.

Sajnos már nincs hozzáférésünk az eredeti PHP szkripthez, melyet a kérdések megválaszoltnak jelöléséhez használtunk és jelenleg nem szándékozunk egy új változatot írni.

Amennyiben megírtad a saját PHP szkriptedet a modulhoz, engedélyezned kell a **Szerző neve** mezőt, majd átnevezned **Megoldás**ra. Ha a mező üres/nincs megadva, akkor ez azt jelenti, hogy az adott kérdés nem lett megválaszolva. Ha a mező értéke 1, a kérdés megválaszoltként volt jelölve.

## Problémák/kérdések

Amennyiben valamilyen kérdésed van vagy szembesültél egy problémával a sablonnal kapcsolatban, írd azt meg a [repository issue tracker-jébe](https://github.com/ucoztaska/ucoztaska/issues).

## Licensz

Copyright 2016-2019 József Sallai & IntoMedia Group. MIT alatt licenszelve. További részletekért lásd a [LICENSE](https://github.com/ucoztaska/ucoztaska/blob/master/LICENSE) fájlt.
