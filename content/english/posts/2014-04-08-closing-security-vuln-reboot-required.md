---
layout: post
title:  "Closing of a security gap requires rebooting of services"
date:   2014-04-08 11:00:00
---

Tonight a critical vulnerability in the open source library OpenSSL was published. This security gab enables assailants to steal the secret keys and decrypt alleged safe data traffic. This fault has been rectified, but it requires the reboot of all services that use OpenSSL.

**In our case all our services are affected without exceptions (Web-server, Jabber-server and Mail-server). Because of this we will reboot our services one after the other today at 12 am.** As a consequence, there will be short blackouts. On the Jabber-server, just like during every reboot, the messages of the group chats will be deleted.

You can find further information about the security gap on [heartbleed.com](https://heartbleed.com). On [filippo.io/Heartbleed](http://filippo.io/Heartbleed/) you can check if you website is affected.
