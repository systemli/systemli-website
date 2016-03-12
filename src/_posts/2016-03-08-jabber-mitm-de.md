---
layout: post 
lang: de 
title:  Man-in-the-Middle Angriffe auf Jabberuser via Tor 
date:   2016-03-08 12:00:00

translation_id: a3a730d6c3bef7cac9b580487bbcff41
---

In den vergangen Tagen wurde von unseren Freund*innen von [immerda.ch](https://www.immerda.ch/) ein
Man-in-the-Middle Angriff auf Jabberuser via Tor entdeckt.
 
Diesen Usern wurde unter Umständen ein falsches Zertfikat präsentiert. Dies sollte in einer 
Zertifikatwarnung deines Jabberclients resultiert haben. Wenn diese ignoriert wurde, könnte dies zu einem Belauschen
der Verbindung geführt haben.

Folgende Server waren auf jedenfall betroffen:

<pre>
freifunk.im
jabber.ccc.de
jabber.systemli.org
jappix.org
jodo.im
pad7.de
swissjabber.ch
tigase.me
</pre>

Soweit wir wissen, waren User die den Tor Hidden Service unseres Jabberservers verwenden, nicht betroffen.

Mehr (technische Informationen) findest du in der [Zusammenfassung von immerda](https://tech.immerda.ch/2016/03/xmpp-man-in-the-middle-via-tor/)