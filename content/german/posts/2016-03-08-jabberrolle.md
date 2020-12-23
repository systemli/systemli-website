---
layout: post 
title:  "Ansible-Rolle zum Aufsetzen eines Jabberservers"
aliases:
    - /de/2016/03/08/jabberrolle-de.html
date:   2016-03-08 17:00:00
translationKey: 3bfa1d3c3201f8e884a89f5b13a06e5c
---
Systemli.org betreibt vermutlich einen der beliebtesten [Jabber-Server]({{< ref "xmpp" >}}) in Deutschland. Besonders 
seitdem jabber.ccc.de keine neuen User mehr zulässt, ist die Zahl der täglichen Registrierungen deutlich gestiegen.

Das Ziel des Jabber/XMPP-Protkolls war schon immer die Dezentralisierung. Jede:r soll einen eigenen Jabber-Server 
betreiben können, der mit anderen kommunizieren kann. Dadurch ist man nicht im eigenen Universum eingesperrt, wie bei 
Google, Facebook, Whatsapp, etc...

Leider ist gar nicht so einfach, einen eigenen Jabber-Server zu konfigurieren, der eine angemessene Sicherheit bietet.
Aber Sharing ist Caring und wir ein Teil der OpenSource-Community. Deswegen haben wir die Konfiguration unseres Servers 
vor Kurzem auf [Github veröffentlicht](https://github.com/systemli/ansible-role-prosody).

Somit kann sich nun jede:r in wenigen Minuten einen Server konfigurieren, der mit den 
[gleichen Sicherheitsstandards](https://xmpp.net/result.php?domain=jabber.systemli.org&type=client) konfiguriert ist, 
wie unser Jabber-Server. Die Basis unseres Jabber-Servers bildet [Prosody](https://prosody.im/).

Zum Aufsetzen eines Jabber-Servers wird ein SSL-Zertifikat und das Automatisierungs-Tool 
[Ansible](http://www.ansible.com/) benötigt.
