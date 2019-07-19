---
layout: post
lang: de
title: Neue Features im User-Portal
date: 2019-07-19 12:00:00
translation_id: d0006a92f5acab6b182ad706dfe77dc2
---
![haveibeenpwned](/assets/img/haveibeenpwned.png)
In der neusten Version unseres [User-Portals](https://users.systemli.org) haben wir die Passwort&shy;sicherheit erhöht.
Wenn ihr ein neues Passwort setzt, wird es automatisch gegen die [Passwortdatenbank von "Have I been pwned"](https://haveibeenpwned.com/Passwords) getestet.
Zuerst, wird dein Passwort "test" mittels der SHA-1-Hashfunktion zu "a94a8<wbr>fe5cc<wbr>b19ba<wbr>61c4c<wbr>0873d<wbr>391e9<wbr>87982<wbr>fbbd3" transformiert.
<!--more-->
Dann werden die ersten 5 Zeichen "a94a8" zu "Have I been pwned" gesendet.
Dieser Dienst liefert dann eine Liste möglicher Treffer aus Datenbanken zurück, welche von Passwort-Crackern verwendet werden.
Unser User-Portal überprüft zuletzt, ob tatsächlich ein kompletter Treffer vorliegt und warnt euch gegebenenfalls.
"Have I been pwned" sieht niemals dein tatsächliches Passwort, einen Teil davon oder deine IP-Adresse.
Auch [andere Software](https://haveibeenpwned.com/API/Consumers) bietet diese Funktionalität.
Besonders sinnvoll ist die Integration mit einem Passwort-Manager wie z.B. [KeePass](https://github.com/andrew-schofield/keepass2-haveibeenpwned) oder [Pass](https://gitlab.com/darnir/pass-audit).

![language_switcher](/assets/img/language_switcher.png)
Das [User-Portal](https://users.systemli.org) unterstützt nun die Sprachen Deutsch, Englisch, Spanisch, Portugiesisch und Bokmål.
Ihr werdet automatisch auf eine passende Sprache weitergeleitet oder könnt sie oben rechts bewusst aussuchen.
Bitte helft uns die derzeitigen Übersetzungen zu verbessern oder fügt neue Übersetzungen bei [Weblate](https://hosted.weblate.org/engage/userli/) hinzu!
