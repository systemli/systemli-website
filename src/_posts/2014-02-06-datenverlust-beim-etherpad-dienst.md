---
layout: post
title:  "Datenverlust beim Etherpad Dienst"
date:   2014-02-06 19:56:00
categories: update
excerpt: Leider sind Daten unseres Etherpad Dienstes durch ein technisches Problem verlorengegangen. Dies betrifft Datensätze des Monats Januar 2014. Diese können nicht wiederhergestellt werden. Der Ausfall hat nichts mit unserer kürzlich eingeführten Speicherfrist von 30 Tagen zu tun.
---

Leider sind Daten unseres [Etherpad Dienstes](/service/etherpad.html) durch ein technisches Problem verlorengegangen. Dies betrifft Datensätze des Monats Januar 2014. Diese können
nicht wiederhergestellt werden. Der Ausfall hat nichts mit unserer kürzlich eingeführten Speicherfrist von 30 Tagen zu tun.

*Hintergrund:* Zur Datenhaltung der Pads benutzen wir [Redis](http://redis.io/). Diese Key-Value-Datenbank liegt komplett auf dem Arbeitsspeicher und speichert in definierten Abständen eine Kopie dieser Daten auf der Festplatte. Durch ein technisches Problem innerhalb dieser Datenbank konnte keine lokale Sicherungskopie angelegt werden. Bei einem Update des Servers und somit Neustart der Datenbank wurde eine alte Version dieser Sicherungskopie in den Arbeitsspeicher geladen, sodass aktuelle Pads nicht mehr verfügbar sind.

Wir bitten den Ausfall zu entschuldigen. Das Monitoring des Dienstes wurde weiter erhöht, sodass solche schweren Verluste nicht mehr vorkommen werden.