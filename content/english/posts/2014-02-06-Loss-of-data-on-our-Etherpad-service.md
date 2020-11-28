---
layout: post
title:  "Loss of data on our Etherpad service"
aliases:
    - /en/update/2014/02/06/Loss-of-data-on-our-Etherpad-service.html
date:   2014-02-06 19:56:00
excerpt: Unfortunately the data of our [Etherpad service](/en/service/etherpad.html) is lost due to a technical problem. This concerns the data of the month January 2014. They cannot be restored. This loss has nothing to do with our recently introduced 30 day storage period.
translationKey: b6ef4fd04ae6ae0c184ce6141793cbfb
---

Unfortunately the data of our [Etherpad service](/en/service/etherpad.html) is lost due to a technical problem. This concerns the data of the month January 2014. They cannot be restored. This loss has nothing to do with our recently introduced 30 day storage period.

Background: To store data we use [Redis](http://redis.io/). This Key-Value-database covers the complete working memory and does a backup copy of this data on the hard drive in defined intervals. Due to a technical problem within this database it was not possible to generate a local backup copy. During an update of the servers respectively reboot of the database an old version of the backup copy was loaded into the working memory, resulting in recent Pads not being available anymore.

We apologize for this loss. The monitoring of the service has been increased so that a loss as severe as this will not occur again.
