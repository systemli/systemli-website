---
layout: page
title: Jabber
aliases:
    - /service/xmpp.html
menu_group: service
translationKey: 405fa099b89ec281d5df6c1eea477213
icon: xmpp.svg
description: Offene Instant-Messaging Alternative zu Whatsapp und Co.
links:
    web:
        url: "https://www.systemli.org/jabber"
        text: "Web-Jabber"
    messengers:
        url: "https://wiki.systemli.org/howto/jabber-ubersicht"
        text: "Übersicht Jabber-Messenger"
    pidgin:
        url: "https://wiki.systemli.org/howto/jabber"
        text: "Anleitung: Jabber-Nutzung mit Pidgin"
---

**Unser Jabber Server wird am 31.08.2023 [abgeschaltet](https://www.systemli.org/2023/02/06/abschaltung-von-jabber.systemli.org-am-31.08.2023/). Neue accounts können nicht mehr erstellt werden.**

Jabber (oder auch XMPP) ist ein Instant Messaging bzw. Chat-Dienst und damit Alternative zu Facebook-Chat, ICQ, MSN oder ähnlichem. Wir betreiben seit vielen Jahren kontinuierlich einen Jabber-Server (jabber.systemli.org) mit offener Registrierung.

Im Gegensatz zu den oben genannten Diensten speichern wir weder deine Inhalte, noch deine Verbindungsdaten. Unser Server lässt nur verschlüsselte Verbindungen zu.

Um eine Verbindung mit unserem Server herzustellen, benötigst du  ein Chat-Programm. Es gibt verschiedene Programme, mit denen du Jabber nutzen kannst. Zum Beispiel [Gajim](https://gajim.org/) (Windows/Linux), [Monal](https://itunes.apple.com/us/app/monal-free-xmpp-chat/id1060957067?mt=12) (OS X), [ChatSecure](https://chatsecure.org) (iOS) oder [Conversations](https://conversations.im) (Android).

Wir empfehlen ein Programm auf dem Rechner zu nutzen. Ist dies nicht möglich (zum Beispiel in der Uni oder auf der Arbeit), nutzt unseren Web-Jabber.

## Verbindungsdaten

```
Server:   jabber.systemli.org
Port:     5222 (STARTTLS)
Bosh-URL: https://www.systemli.org/jabber/bosh
```
### Onion Service Adresse

<pre>
razpihro3mgydaiykvxwa44l57opvktqeqfrsg3vvwtmvr2srbkcihyd.onion
</pre>

## Jabber-Nutzung

Bei der Nutzung von jabber.systemli.org sind folgende Dinge zu beachten:

* **Nutze zusätzliche Verschlüsselung: OMEMO, OTR oder GnuPG.**
* **Schalte das Logging in deinem Jabber-Client ab.**
* Unterstütze deine Freund*innen beim Logging-Abschalten und der Nutzung zusätzlicher Verschlüsselung.
* Beachte unsere [Anleitung (für Pidgin)](https://wiki.systemli.org/howto/jabber).
* **Inaktive Accounts werden nach einem Jahr automatisch deaktiviert.**
* Inhalte von Gruppenchats sind flüchtig und gehen bei Server-Neustarts verloren.
* Übertragungen großer Dateien zu Accounts auf anderen Servern passieren unter Umständen unverschlüsselt.

[![](/assets/img/messaging.one-badge.svg)](https://check.messaging.one/result.php?domain=jabber.systemli.org&amp;type=client)
