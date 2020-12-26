---
layout: post 
title:  "Ansible-Role to setup a Jabber server"
aliases:
    - /en/2016/03/08/jabberrolle-en.html
date:   2016-03-08 17:00:00
translationKey: 3bfa1d3c3201f8e884a89f5b13a06e5c
---
The [Jabber server]({{< ref "xmpp" >}}) of Systemli.org is maybe one of the favored ones in Germany. Especially since 
jabber.ccc.de has closed its registration, the number of daily registrations increased.

All along the goal of Jabber/XMPP-protocol was federation. Everyone should operate his/her own Jabber server which is 
able to communicate with other Jabber servers. Thus, you are not locked down to your own universe, like Google, 
Facebok, Whatsapp, etc... 

Unfortunately it's not that easy to setup and configure your own server. But sharing is caring and we are part of the
opensource community. Therefore, we decided to publish our ansible role on 
[Github](https://github.com/systemli/ansible-role-prosody). We use this role to setup and configure our Jabber server 
which is based on [Prosody](https://prosody.im/).

With this role, everybody can setup his/her own Jabber server in minutes. The resulting server is configured with the 
[same safetyfeatures](https://xmpp.net/result.php?domain=jabber.systemli.org&type=client) such as our Jabber server. 

To setup your own server you need an SSL-Certificate and the configuration management tool 
[Ansible](http://www.ansible.com/).
