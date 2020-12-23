---
layout: post
title:  "Hintergrund: Sicherheit ist keine Einbahnstraße"
aliases:
    - /de/hintergrund/2013/09/10/sicherheit-ist-keine-einbahnstrasse.html
date:   2013-09-10 19:53:00
translationKey: 1402209c98fd0ccb40c0216a4de9bb45
---
Wir möchten in unregelmäßigen Abständen wichtige Grundlagen vermitteln, wie ihr eure Privatsphäre im Internet und auf 
eurem Computer schützen könnt.

Alle Server und Dienste von systemli.org werden von einem linken Tech-Kollektiv betreut. Die Server selbst sind 
verschlüsselt. Die Verbindungen zu unseren Servern sind ausschließlich SSL-verschlüsselt möglich. Es werden nur 
minimale Logs erhoben, die zum Betrieb der Server notwendig sind und natürlich sind auch diese verschlüsselt.

Das heißt, wenn Du und Deine Gesprächspartner/in Jabber über systemli.org (erkennbar an den Nutzeradressen: 
…@jabber.systemli.org) nutzen, ist klar, dass es eine vollständige Verschlüsselungskette per SSL gibt. Das entspricht 
der Verschlüsselung z.B. beim Online-Banking und gilt als sicher. Es gibt auch andere Jabber-Server: jabber.ccc.de vom 
Chaos Computer Club kann bei eingestellter SSL-Verschlüsselung als ähnlich empfehlenswert gelten. Wir können allerdings 
nicht garantieren, dass andere Jabber-Server nicht speichern und vernünftig verschlüsseln!

Was Dritte sehen, wenn du unsere Services nutzt und 
[SSL-Verschlüsselung verwendest](https://www.eff.org/pages/tor-and-https).

Wenn Du SSL (und/oder uns) und der gewählten technischen Lösung nicht ganz über den Weg traust und eine zusätzliche 
Verschlüsselung wünschst: Nutze Off-The-Record Verschlüsselung (OTR) oder GPG zusätzlich zu SSL: 
[OTR/Pidgin](https://www.cypherpunks.ca/otr/)

## Grundlagen

**Wir können nur die Sicherheit der Kommunikationswege gewährleisten, wenn du auch etwas dafür tust!**

**1. Du solltest immer wieder die Fingerprints der Zertifikate überprüfen!**

Am besten mit denen von Freund/innen und die du bei uns findest oder auf 
[Twitter](https://twitter.com/systemli). Wenn diese nicht übereinstimmen, ist irgendetwas faul und möglicherweise hört 
jemand deine Gespräche mit. Wenn du Probleme hast oder eine ungewöhnliche Warnung erscheint, dann 
[kontaktiere uns]({{< ref "kontakt" >}}) am besten und wir versuchen dem Problem auf den Grund zu gehen. Wenn die Zertifikate 
geändert werden, geben wir dies auf unserer Seite und über unseren Twitter Account bekannt.

**2. Wir können uns nur um die Server kümmern, für deinen Computer bist du verantwortlich.**

Wenn dein Computer unverschlüsselt ist und du z.B. bei deinem Jabber-Client das Nachrichten-Logging (speichern) nicht 
ausgeschaltet hast, ist das so, als würden sie ausgedruckt auf deinem Schreibtisch liegen und jeder Besucher/in könnte 
diese Nachrichten lesen. Wenn diese Personen dich nicht leiden können, ist das meist sehr unvorteilhaft.

Also wenn du unsere Services nutzt - verschlüssel deinen Rechner und schalte die Log-Funktion deines Jabber-Clients ab.

**Anleitungen zur Rechnerverschlüsselung:**

- [Microsoft Windows: Verschlüsselung der Systempartition mit Truecrypt](http://www.fixmbr.de/truecrypt-anleitung-verschlsselung-der-systempartition/)
- [Ubuntu: Verschlüsselung der Version 12.10 oder älter](http://www.rationallyparanoid.com/articles/ubuntu-12-lts-security.html)
- [Ubuntu: Verschlüsselung ab 12.10](http://www.linuxbsdos.com/2012/09/04/full-disk-encryption-and-lvm-configuration-in-ubuntus-graphical-installer/)
- [Apple OS X: Verschlüsselung mit FileVault 2 ab OS X Lion](https://linksunten.indymedia.org/de/node/52399)

**Jabber-Logging abschalten**

- [Anleitung: Jabber bei systemli.org](https://wiki.systemli.org/howto/jabber)
- [Anleitung: Deaktivierung der Gesprächsmitschnitte](https://wiki.systemli.org/howto/jabber#a_mitschnitte)
