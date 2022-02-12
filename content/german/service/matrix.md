---
layout: page
title: Matrix
menu_group: service
service_bar_title: matrix
translationKey: 632316f5ecdb9bba3b7c55b570911aaf
icon: matrix.svg
beta: true
description: Ende-zu-Ende-verschlüsselter Messenger
links:
    element:
        url: https://element.systemli.org
        text: Webclient
---
Matrix ist ein dezentraler und Ende-zu-Ende verschlüsselter Messenger Dienst mit guter Unterstützung für Gruppenchats. 
Es ist eine freie und offene Alternative zu Signal und Slack.

## Features

- Ende-zu-Ende-Verschlüsselung für Einzel- und Gruppenchats
  - ⚠️ Es existieren Clients die die Ende-zu-Ende-Verschlüsselung nicht unterstützen
- Multi-Device-Support (Smartphone, Browser, Desktop)
- Vernetzung mit Personen und Gruppen auf [anderen Matrix-Servern](https://matrix.org/) (Föderation)
- Brücken zu anderen Messenger-Diensten ([siehe Wiki-Artikel](https://wiki.systemli.org/howto/matrix-bridges))
- Nur bei Systemli:
  - Nachrichten werden nach 30 Tagen automatisch auf dem Server gelöscht
  - IP-Adressen werden nicht gespeichert

## Voraussetzungen

Für unseren Server ist ein Email-Account bei systemli notwendig. Wie bei E-Mail oder Jabber, können anderen 
Matrix-Konten auf anderen Matrix-Servern kontaktiert werden.

## Verbindungsdaten

```
Homeserver: matrix.systemli.org
```

## Benutzung

Um sich mit Matrix zu verbinden, kann statt [unserem Webclient](https://element.systemli.org) auch 
[eine App](https://element.io/get-started) installiert werden. Dabei gilt es zu beachten, dass der Homeserver beim 
Login auf `matrix.systemli.org` geändert werden muss (Standardmäßig steht dieser auf matrix.org). Eine gute 
Dokumentation des Clients [bietet die TU Dresden an](https://doc.matrix.tu-dresden.de).

ℹ️ Element benutzt standardmäßig die Ende-zu-Ende-Verschlüsselung.

ℹ️ Neben den von uns empfohlenen Client Element gibt es weitere Clients für Matrix. Dabei kann es vor kommen, dass 
diese nicht alle Features (auch sicherheitsrelevante) eingebaut haben. Du solltest dir die 
[Features genau ansehen](https://matrix.org/clients-matrix/) und abwägen welchen Client du benutzt.
