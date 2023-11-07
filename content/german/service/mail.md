---
layout: page
title: E-Mail
aliases:
    - /service/mail.html
menu_group: service
translationKey: a20ccbe9557775d06f0e75bbedb0f07a
icon: mail.svg
service_bar_title: e-mail
description: Postfächer ohne Werbung oder Analyse der Nachrichten
links:
    registration:
        url: https://users.systemli.org
        text: Registrierung & Verwaltung
    client:
        url: https://mail.systemli.org/
        text: Web Interface
---
Wir bieten seit vielen Jahren einen E-Mail Service für Freund:innen: und Sympathisant:innen an. Dies bedeutet, dass die Registrierung einen Einladungscode voraussetzt. Jeder E-Mail-Account bekommt nach 7 Tagen [drei Einladungscodes](https://users.systemli.org) gutgeschrieben. Diese können an Freund:innen verteilt und zur Registrierung genutzt werden.

Wir haben uns bewusst gegen eine offene Registrierung von E-Mail-Accounts entschieden. Damit möchten wir hauptsächlich vermeiden, dass der Dienst missbraucht wird.

Um deine E-Mails vor dem Auslesen zu schützen, solltest du sie mit OpenPGP verschlüsseln. Praktikabel ist hierfür Thunderbird ([Einrichtungsanleitung im Wiki](https://wiki.systemli.org/howto/mail/thunderbird_pgp)).

Zusätzlich kannst du deine E-Mails auch per Browser mit unserem <a href="https://mail.systemli.org">Web-Client</a> abrufen.

## Features

* Die Postfächer auf unsereren Servern sind mit eurem persönlichen Passwort verschlüsselt
* Versand von E-Mails mit bis zu 40 MB Anhängen
* Datenschutz: keine Speicherung von IP-Adressen oder nicht benötigter Metadaten
* Sieve: Serverseitige Filterung von E-Mails
* [Unendlich Subadressen der Form username+stichwort@systemli.org](https://www.systemli.org/de/tipps%20und%20tricks/2014/06/29/nutzerdatenweitergabe-verfolgen.html)
* [Roundcube Webmail für unterwegs](https://mail.systemli.org)
* Veröffentlichung des OpenPGP-Schlüssel im Web Key Directory (WKD)
* GnuPG E-Mail-Verschlüsselung im Web-Client (nur in Ausnahmefällen zu empfehlen, [siehe Wiki-Artikel](https://wiki.systemli.org/howto/mail/webmail_pgp))
* Onion Service
* Die Ordner Spam/Junk und Müll/Trash werden automatisch nach 30 Tagen geleert
* Inaktive Accounts werden nach zwei Jahren automatisch deaktiviert

## Verbindungsdaten

```
Server (Posteingang/Ausgang):   mail.systemli.org
Benutzer:                       <username>@systemli.org
Protokoll (Empfang):            IMAP
Port:                           993 (SSL/TLS)
Protokoll (Versand):            SMTP
Port:                           465 (SSL/TLS)
```

### Onion Service Adresse

```
llqiiswupgezsco4ux47cco3bxsaihbss5c3piefv6bhvpgfofyk7kad.onion
```
