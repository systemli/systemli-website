---
layout: post
lang: de
title: Neue Features im User-Portal
date: 2019-07-16 18:00:00
translation_id: d0006a92f5acab6b182ad706dfe77dc2
---
![haveibeenpwned](/assets/img/haveibeenpwned.png)
In der neusten Version unseres [User-Portals](https://users.systemli.org) haben wir die Passwortsicherheit erhöht.
Wenn ihr ein neues Passwort setzt, wird es automatisch gegen die Passwortdatenbank von ["Have I been pwned"](https://haveibeenpwned.com/Passwords) getestet.
Dabei wir nur ein Teil eures Passwort-Hashes an diesen Dienst übertragen.
"Have I been pwned" liefert dann eine Liste möglicher Treffer aus Datenbanken zurück, welche von Passwort-Crackern verwendet werden.
Unser User-Portal überprüft dann, ob tatsächlich ein kompletter Treffer vorliegt und warnt euch gegebenenfalls.
Auch [andere Software](https://haveibeenpwned.com/API/Consumers) bietet diese Funktionalität.
Besonders sinnvoll ist die Integration mit einem Passwort-Manager wie z.B. [KeePass](https://github.com/andrew-schofield/keepass2-haveibeenpwned) oder [Pass](https://gitlab.com/darnir/pass-audit).

![language_switcher](/assets/img/language_switcher.png)
Das User-Portal unterstützt nun die Sprachen Deutsch, Englisch, Spanisch, Portugiesisch und Bokmål.
Ihr werdet automatisch auf eine passende Sprache weitergeleitet oder könnt sie oben rechts bewusst aussuchen.
Bitte helft uns die derzeitigen Übersetzungen zu verbessern oder fügt neue Übersetzungen bei [Weblate](https://hosted.weblate.org/engage/userli/) hinzu!
