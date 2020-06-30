---
layout: page
title: Metadaten Cleaner
aliases:
    - /service/metadata.html
menu_group: service
translation_key: 000a6d7ddead6291f30892e804886274
icon: metadata.svg
teaser: Bereinige verschiedene Dateitypen von verräterischen Metadaten
beta: true
links:
    web:
        url: https://metadata.systemli.org
        text: Web Interface
---
Unter [metadata.systemli.org](https://metadata.systemli.org) kannst du Medien-Dateien hochladen und sie von Metadaten bereinigen lassen. Das ist unter anderem sinnvoll, um Rückschlüsse darauf zu erschweren, wer die Dateien erstellt und/oder bearbeitet hat. Zum Löschen der Metadaten wird das Programm [mat2](https://0xacab.org/jvoisin/mat2) verwendet.

**Wichtig:** Es ist wesentlich besser und sicherer, das Programm [mat2](https://0xacab.org/jvoisin/mat2) auf dem eigenen Computer zu installieren und laufen zu lassen. Wenn du diesen Webservice benutzt, musst du uns vertrauen, was bei lokal installiertem Programm nicht nötig ist.

Wir haben den Service möglichst sicher konfiguriert:

* Der Service ist nur transportverschlüsselt erreichbar
* Hochgeladene Dateien werden in einem verschlüsselten Container abgelegt, dessen Schlüssel zufällig und auch uns nicht bekannt ist
* Hochgeladene Dateien werden beim anschließenden Download automatisch gelöscht
* Dateien, die älter als fünf Mintuen sind, werden umgehend gelöscht

Die Größe hochladbarer Dateien ist auf 128MB beschränkt.

### Onion Service Adresse

```
liqr2cbsjzxmpw6savgh274tuzl34x6cd56h7m7ceatnrokveffm66ad.onion
```
