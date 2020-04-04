---
layout: post
title:  "Mail-TLS-Helper"
date:   2018-09-29 17:00:00
---

Wir hatten bereits 2017 angekündigt, dass wir versuchen, die [verschlüsselte Übertragung von Mails zu erzwingen]({% post_url 2017-06-22-infrastruktur-verbesserungen-bei-systemli-de %}). Lange Zeit hieß es, dies sei unmöglich, da die E-Mail-Infrastruktur zu alt und zu schlecht gepflegt sei. Unsere Tests über die letzten 1,5 Jahren zeichnen allerdings ein anderes Bild.

Waren wir anfangs bei 2-3% E-Mails ohne Transportverschlüsselung, konnten wir die Rate mithilfe von [mail-tls-helper](https://github.com/systemli/mail-tls-helper) inzwischen auf unter 1% drücken.

Diese kleine Anzahl von Mailserver-Betreibenden, welche kein TLS aktivieren, gefährdet die Sicherheit aller Nutzer\*innen. Obwohl wir diese Administrator\*innen regelmäßig über den schlechten Zustand ihrer Systeme informiert haben, zeigte sich nur wenigen der Wille zur Verbesserung. Wir haben den Versand der [Erinnerungsmails](https://github.com/systemli/mail-tls-helper/blob/master/mail-tls-helper.py#L120) daher momentan wieder eingestellt. Zusätzlich hat sich gezeigt, dass viele Administrator\*innen `postmaster@<domain>` überhaupt nicht empfangen, obwohl dies [in den offiziellen Protokoll-Standards vorgesehen](https://en.wikipedia.org/wiki/Postmaster_%28computing%29) ist.

Positiv zeigt sich, dass auch andere Menschen [mail-tls-helper](https://github.com/systemli/mail-tls-helper/) nützlich fanden und weiterentwickelt haben, sodass es inzwischen auch [als Monitoring-Plugin verfügbar](https://github.com/systemli/mail-tls-helper/pull/23#issuecomment-398909504) ist.
