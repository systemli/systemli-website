---
layout: post 
title:  Man-in-the-Middle Angriffe auf Jabberuser via Tor 
date:   2016-03-08 12:00:00
---

During the last days our friends of [immerda.ch](https://www.immerda.ch/) discovered a
man-in-the-middle-attack on jabberusers who connect to their favoured jabberserver through Tor.

The malicious Tor exit-nodes presented a fake(wrong) certificate to those users. This should result in a certificate warning on the client side.
If you ignored this warning, may someone eavesdropped on your connection.

Those servers were victims of the attack:

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

As far as we know, users who connect through our Tor Hidden Service were not affected.

You can find more detailed information in [immerda's summary](https://tech.immerda.ch/2016/03/xmpp-man-in-the-middle-via-tor/)
