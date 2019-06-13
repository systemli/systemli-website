---
layout: post
lang: de
title: "Neues Feature: E-Mail-Postfachverschlüsselung"
date: 2019-06-12 00:00:00
translation_id: d5006a92f5ab0a6b182ad706dfe77dc2
---

* systemli.org verwendet E-Mail-Postfachverschlüsselung
* [Generiert euch einen Wiederherstellungscode](/de/2019/03/03/password-recovery.html), um sie für euch zu aktivieren
* Verschlüsselt eure E-Mails unbedingt trotzdem [mit GnuPG](https://wiki.systemli.org/howto/howto/thunderbird_gpg)

Wir freuen uns, heute ein Feature anzukündigen zu können, auf das wir sehr stolz sind: die Verschlüsselung eurer E-Mails auf unseren Servern, auch bekannt als E-Mail-Postfachverschlüsselung. Dank dieser Technik werden eure E-Mails auf unseren Servern individuell für euch verschlüsselt. Nur mit dem Wissen eures persönlichen Passwortes (oder eures Wiederherstellungscodes) können die E-Mails gelesen werden. In anderen Worten: Selbst bösartige Angreifer\*innen mit Zugang zu den Servern könnten eure E-Mails nicht mehr ohne weiteres einsehen.

<!--more-->

### Hintergründe/Motivation und Grenzen dieser Sicherheitsfunktion

Ende-zu-Ende-Verschlüsselung von E-Mails (etwa mit GnuPG) ist bisher leider nicht weit verbreitet. Standardmäßig sind E-Mails unverschlüsselt und somit für Administrator\*innen des E-Mail-Servers oder Dritte, die sich Zugang verschafft haben, einsehbar. Daher halten wir Techniken zur Verschlüsselung, bei denen die E-Mails zusätzlich vor unberechtigten Zugriffen geschützt werden, für wichtig und treiben diese aktiv voran.

Auch diese Techniken haben Grenzen. Jede serverseitige Verschlüsselung kann auch serverseitig ausgehebelt werden. Auch mit Postfachverschlüsselung müsst ihr uns als Admins weiterhin vertrauen. So könnten wir - und jede andere Serveradministrator\*in - eure Passwörter beim Login auf dem E-Mail-Server mitschneiden und anschließend dafür verwenden, die verschlüsselten E-Mails zu lesen. Das machen wir selbstverständlich nicht. Wir finden es aber wichtig, diese Möglichkeit transparent zu machen. Das einzige, was eure E-Mails vor solchen Angriffen schützt, ist Ende-zu-Ende-Verschlüsselung. Daher einmal mehr unser Appell an euch: benutzt GnuPG und überzeugt eure Freund\*innen, das gleiche zu tun. In unserem Wiki findet ihr [Anleitungen hierzu](https://wiki.systemli.org/howto/howto/thunderbird_gpg).

Ihr solltet die Postfachverschlüsselung allerdings auf jeden Fall nutzen, da sie gegenüber GnuPG mehr Schutz vor Analyse der Metadaten (Wer, Wann, Betreff) bietet.

Außerdem solltet ihr euch unbedingt unter [users.systemli.org](https://users.systemli.org/) einen Wiederherstellungscode generieren (und abspeichern), damit ihr euren Account bei verlorenem Passwort wiederherstellen könnt. Details dazu haben wir [in einem früheren Artikel](https://www.systemli.org/de/2019/03/03/password-recovery.html) beschrieben.
