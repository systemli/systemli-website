---
layout: post
lang: de
title:  "Schließung einer Sicherheitslücke benötigt Neustart der Dienste"
date:   2014-04-08 11:00:00
categories:
    - update
translationKey: 086d9fbd42fc19d1583506c093414b0a
---
Heute Nacht wurde eine kritische Sicherheitslücke in der quelloffenen Bibliothek OpenSSL veröffentlicht. Diese ermöglicht es Angreifern die geheimen Schlüssel zu stehlen und somit den vermeintlich gesicherten Datenverkehr zu entschlüsseln. Dieser Fehler wurde mittlerweile behoben, benötigt allerdings einen Neustart von allen Diensten, die OpenSSL benutzen.

**In userem Fall sind davon ausnahmslos alle Dienste betroffen (Webserver, Jabberserver und Mailserver). Daher werden wir heute gegen 12.00 Uhr die Dienste nacheinander neustarten.** Dies hat zur Folge, dass es zu kurzen Ausfällen kommt. Beim Jabberserver werden, wie bei jedem Neustart, die Nachrichten der Gruppenchats verschwinden.

Weitere Informationen zu der Sicherheitslücke findet ihr unter [heartbleed.com](http://heartbleed.com). Ob deine Website betroffen ist, kannst du unter [filippo.io/Heartbleed/](http://filippo.io/Heartbleed/) testen.
