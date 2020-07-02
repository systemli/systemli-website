---
layout: page
title: E-Mail
aliases:
    - /service/mail.html
menu_group: service
translation_key: a20ccbe9557775d06f0e75bbedb0f07a
icon: mail80.png
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

Um deine E-Mails vor dem Auslesen zu schützen, solltest du GPG verwenden. Am praktikabelsten ist hierbei eine Kombination aus Thunderbird [(Einrichtungsanleitung im Wiki)](https://wiki.systemli.org/howto/howto/thunderbird_systemli) und [Enigmail](https://www.thunderbird-mail.de/lexicon/entry/17-enigmail/).

Zusätzlich kannst du deine E-Mails auch per Browser mit unserem <a href="https://mail.systemli.org">Web-Client</a> abrufen.

## Features

* Die Postfächer auf unsereren Servern sind mit eurem persönlichen Passwort verschlüsselt
* Versand von E-Mails mit bis zu 40 MB Anhängen
* Datenschutz: keine Speicherung von IP-Adressen oder nicht benötigter Metadaten
* Sieve: Serverseitige Filterung von E-Mails
* [Unendlich Subadressen der Form username+stichwort@systemli.org](https://www.systemli.org/de/tipps%20und%20tricks/2014/06/29/nutzerdatenweitergabe-verfolgen.html)
* Integration von anderen E-Mail-Accounts
* [Roundcube Webmail für unterwegs](https://mail.systemli.org)
* GnuPG E-Mail-Verschlüsselung im Web-Client (nur in Ausnahmefällen zu empfehlen, [siehe Wiki-Artikel](https://wiki.systemli.org/howto/webmail_enigma))
* Onion Service
* Die Ordner Spam/Junk und Müll/Trash werden automatich nach 30 Tagen geleert
* Inaktive Accounts werden nach zwei Jahren automatisch deaktiviert

## Verbindungsdaten

```
Server (Posteingang/Ausgang):   mail.systemli.org
Benutzer:                       &lt;username&gt;@systemli.org
Protokoll (Empfang):            IMAP
Port:                           993
Protokoll (Versand):            SMTP
Port:                           587 (StartTLS)
```

### Onion Service Adresse

```
llqiiswupgezsco4ux47cco3bxsaihbss5c3piefv6bhvpgfofyk7kad.onion
```