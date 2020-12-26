---
layout: post
title: "New service: encrypted mailing lists"
aliases:
    - /en/2019/09/12/schleuder-lists.html
date: 2019-09-12 00:00:00
translationKey: bb5ca025ba136276df4438c2f8eccf172
---
![schleuder](/assets/img/schleuder.png)

After longer internal testing, as of today we publicly offer encrypted [Schleuder lists]({{< ref "schleuder" >}}) to 
groups and organizations for secure internal communication. Schleuder lists are special because incoming and outgoing 
mails are OpenPGP encrypted.

Schleuder mailing lists are slightly more complex than normal mailing lists to use and maintain. In return, they 
protect the content of mails from snoopy eyes on it's way through the internet. All subscribers should know how to use 
OpenPGP encryption for mails.

You find further information and links to documentation at the [service description]({{< ref "schleuder" >}}).

As usual, we also published our 
[Ansible role to deploy Schleuder on Debian Linux systems](https://github.com/systemli/ansible-role-schleuder).

If you want to create a list, [please contact us via e-mail]({{< ref "contact" >}}).
