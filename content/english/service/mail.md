---
layout: page
title: E-Mail
aliases:
    - /en/service/mail.html
menu_group: service
translation_key: a20ccbe9557775d06f0e75bbedb0f07a
icon: mail80.png
service_bar_title: e-mail
description: Mailboxes without ads or analysis of your emails
links:
    registration:
        url: https://users.systemli.org
        text: Registration & administration
    client:
        url: https://mail.systemli.org/
        text: Web Interface
---
Since many years we offer an email service for friends and sympathisers. To register an email account, you need an invitation code. Every email account receives [three invitation codes](https://users.systemli.org) 7 days after registering. The codes can be passed on to friends and used for registering.

We have taken a conscious decision against an open registration system in order to prevent misuses of the service.

To protect your emails from being read by third parties, you should use GPG. The best solution is a combination of Thunderbird [(setup guide in the Wiki - german only)](https://wiki.systemli.org/howto/howto/thunderbird_systemli) and [Enigmail](https://www.enigmail.net/home/index.php).</p>

Additionally you can access your emails via browser with our [web client](https://mail.systemli.org/).

## Features

* Mailboxes on our servers are encrypted with your personal password
* Sending emails with attachments of up to 40 MB
* Data protection: no logging of IP addresses or non-relevant meta data
* Sieve: filtering of emails directly on the server
* [Infinite subaddresses like username+keyword@systemli.org](https://www.systemli.org/en/tips%20and%20tricks/2014/06/29/monitor-your-user-data.html)
* Integration of other email accounts
* [Roundcube Webmail](https://mail.systemli.org) for managing emails on the road
* GnuPG email encryption in the web client (not recommended except for rare cases, see the [wiki article](https://wiki.systemli.org/howto/webmail_enigma_en))
* Onion Service
* The folders Junk and Trash will be automatically emptied after 30 days
* Inactive accounts will be automatically deactivated after two years

## Connection Data

```
Server (Incoming & Outgoing):    mail.systemli.org
User:                            &lt;username&gt;@systemli.org
Protocol (Receive):              IMAP
Port:                            993
Protocol (Send):                 SMTP
Port:                            587 (StartTLS)
```

### Onion Service Address

```
llqiiswupgezsco4ux47cco3bxsaihbss5c3piefv6bhvpgfofyk7kad.onion
```
