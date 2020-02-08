---
layout: post
lang: de
title:  "Änderungen bei Jabber"
date:   2018-12-13 18:30:00
translation_id: 12220b50d7a232bab4c753c3dd2fcce2
---

Heute haben wir das TLS-Zertifikat des Jabber-Servers auf [LetsEncrypt](https://letsencrypt.org/) umgestellt.
Damit ist auch der letzte langfristige Fingerprint von unserer Website verschwunden. Seht dazu nochmal unsere [ursprüngliche Ankündigung]({% post_url 2017-10-18-Lets-Encrypt-de %}).

Weiterhin speichern wir nun standardmäßig eine Woche den Verlauf von Multi-User-Chats (MUC) auf Festplatte. Das ist notwendig, damit wir den Jabber-Server neustarten können, ohne dass ihr den Verlauf verliert. Natürlich gucken wir nicht in eure Inhalte und nach einer Woche werden sie automatisch gelöscht.
Wenn ihr das trotzdem nicht möchtet, könnt ihr die Speicherung entweder in der Konfiguration des MUCs abschalten oder ihr verwendet einen Jabber-Client, welcher OMEMO kann (z.B. [Conversations](https://conversations.im/)). Mit OMEMO lassen sich auch MUCs verschlüsseln.

Zuletzt haben wir [https://jabber.systemli.org](https://jabber.systemli.org) auf [Converse](https://conversejs.org/) umgestellt. Der alte Web-Jabber wurde nicht mehr gepflegt. Converse unterstützt auch OMEMO, aber bisher leider nur in 1-zu-1-Unterhaltungen. Wenn ihr uns dabei helfen könnt, einen Custom-Build von Converse zu erzeugen, [meldet euch bitte bei uns](/kontakt.html). 
