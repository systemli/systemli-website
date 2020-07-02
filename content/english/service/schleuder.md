---
layout: page
title: Schleuder
aliases:
    - /en/service/schleuder.html
menu_group: service
translation_key: 85b2e44682de63869bf61ee45d5d3db9
description: Encrypted mailing lists for secure group communication
icon: Schleuderliste-beta-8.png
service_bar_title: schleuder
links:
    web:
        url: https://cryptolists.systemli.org
        text: Web Interface
---
We provide encrypted Schleuder mailing lists for groups and organizations. The body of mails to/from Schleuder lists is encrypted with OpenPGP and therefore protected from snoopy eyes. For that reason, Schleuder lists are most useful for internal communication.

Schleuder mailing lists are slightly more complex to use and maintain than normal mailing lists. In return they protect your communication from third parties on its way through the internet. All subscribers should know how to use OpenPGP encryption for mails.

Please note that Schleuder lists are _not_ end-to-end encrypted. Mails to schleuder lists are encrypted while being delivered to the Schleuder server, will be decrypted there and are sent again encrypted to all subscribers of the list immediately. Naturally we don't look into the mails, but please keep in mind that you still have to trust us as your Schleuder server admins.

## Features

* OpenPGP encrypted mailing lists
* Administration of subscribers and settings via web interface or mail commands
* Messages to lists are not archived

## Request a Schleuder list

To get a Schleuder list you have to [contact us via mail](/en/kontakt). This mail should contain the following information:

* a short introduction of your project
* desired listname, e.g. _yourschleuderlist@cryptolists.systemli.org_
* mail address of the list administrator and associated OpenPGP key

## Documentation

Since Schleuder lists are a bit more complex to use and administrate, you find a selection of links to documentation below.

* [Official Schleuder documentation for subscribers](https://schleuder.org/schleuder/docs/subscribers.html) (English)
* [Official Schleuder documentation for list admins](https://schleuder.org/schleuder/docs/list-admins.html) (English)
* [Translated and enhanced Schleuder docs by Nadir](https://www.nadir.org/news/schleuderdoku.html) (German)


### Onion Service for web-interface

```
hzij2upbir4nxyqumx26pswe2dfmahc3pzuc4ds7lskycfkexzqvvdad.onion
```
