---
layout: post
title: "Neuer Service: Verschlüsselte Mailinglisten"
aliases:
    - /de/2019/09/12/schleuder-listen.html
date: 2019-09-12 00:00:00
translationKey: bb5ca025ba136276df4438c2f8eccf172
---
![schleuder](/assets/img/schleuder.png)

Nach längerem internen Test bieten wir ab heute verschlüsselte [Schleuder-Listen]({{< ref "schleuder" >}}) 
zur sicheren internen Kommunikation für Gruppen und Zusammenhänge an. Schleuder-Listen sind Mailinglisten, bei denen 
eingehende, sowie ausgehende Mails OpenPGP-verschlüsselt sind.

Die Benutzung und Verwaltung solcher Schleuder-Mailinglisten ist etwas komplexer als bei normalen Mailinglisten. Im 
Gegenzug schützen sie den Inhalt der E-Mails auf ihrem Weg durch das Internet vor neugierigen Augen. Alle Beteiligten 
sollten mit OpenPGP-Verschlüsselung für E-Mails umgehen können.

Unter der [Service-Beschreibung]({{< ref "schleuder" >}}) findet ihr weitere Details zu Schleuder-Listen und Links zu 
Dokumentation.

Wie üblich haben wir auch unsere 
[Ansible-Rolle zum Konfigurieren von Schleuder auf Debian Linux Systemen](https://github.com/systemli/ansible-role-schleuder) 
veröffentlicht.

Wenn ihr eine Schleuder-Liste anlegen wollt, [meldet euch bitte per Mail]({{< ref "kontakt" >}}).
