---
layout: post
title:  "Storage period of our Etherpad service"
aliases:
    - /en/update/2014/01/01/Storage-period-of-our-Etherpad-service.html
date:   2014-01-01 19:09:09
translationKey: 6d13087624474abcf7a8caab9770d452
---
With the [successfull migration](/en/2013/12/21/Maintenance-work-on-our-Etherpad-service.html)  of our 
[Etherpad service]({{< ref "etherpad" >}}) we will restrict the storage period of the generated Pads. Up until now 
all Pads have been stored without a date of expiry. But this does not serve the purpose of our service and has a 
similar effect as data retention. Therefore all Pads will only be available 30 more days after the last time they have 
been edited. Older Pads will be completely removed from the system. Furthermore you have the possibility to request the 
removal of a Pad.
