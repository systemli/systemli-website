---
layout: post 
title:  "Man-in-the-Middle attack on Jabber server via tor"
aliases:
    - /en/2016/03/08/jabber-mitm-en.html
date:   2016-03-08 12:00:00
translationKey: a3a730d6c3bef7cac9b580487bbcff41
---
During the last days our friends of [immerda.ch](https://www.immerda.ch/) discovered a man-in-the-middle-attack on 
jabber users who connect to their favoured jabber server through Tor.

The malicious Tor exit-nodes presented a fake(wrong) certificate to those users. This should result in a certificate 
warning on the client side. If you ignored this warning, may someone eavesdropped on your connection.

Those servers were victims of the attack:

```
freifunk.im
jabber.ccc.de
jabber.systemli.org
jappix.org
jodo.im
pad7.de
swissjabber.ch
tigase.me
```

As far as we know, users who connect through our Tor Hidden Service were not affected.

You can find more detailed information in 
[immerda's summary](https://tech.immerda.ch/2016/03/xmpp-man-in-the-middle-via-tor/)
