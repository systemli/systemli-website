---
layout: post
lang: de
title: "Let's Encrypt"
date: 2017-10-10 14:00:00
translation_id: eaeafa80a1b4ee2847b83f469ea4ee18
---

Seit Jahren halten wir euch dazu an, die Fingerprints unserer SSL-Zertifikate zu überprüfen - das hat jetzt (fast) ein Ende.

![Let's Encrypt Logo](https://letsencrypt.org/images/letsencrypt-logo-horizontal.svg)
Bisher mussten wir von euren Spenden teure SSL-Zertifikate von Zertifizierungsstellen erwerben, damit euer Browser euch nicht ständig sagte, dass die Verbindnung zu systemli unsicher sei. Seit einer Weile existiert nun die Initiative [Let's Encrypt](https://letsencrypt.org/), unter anderem angestoßen von [EFF](https://www.eff.org/) und [Mozilla](https://www.mozilla.org/de/). Dank Let's Encrypt können wir diese Zertifikate nun auch umsonst bekommen. Allerdings beträgt die Gültigkeit der Zertitfikate bei Let's Encrypt lediglich drei Monate. Unsere alten Zertifikate waren bis zu zwei Jahre gültig. Wir müssten nun also ständig neue Fingerprints auf der Homepage pflegen und ihr diese überprüfen. Das ist nicht so praktikabel. Wir werden daher die Fingerprints für Let's Encrypt-Zertifikate nicht mehr veröffentlichen. Für besonders kritische Services wie Jabber und Email werden wir aber vorerst weiterhin kommerzielle, zwei Jahre gültige Zertifikate verwenden und die Fingerprints wie gewohnt veröffentlichen.

Nun noch ein paar Informationen für die Leute die bisher wirklich Fingerprints verglichen haben. ;)

Um den Grad der verifizierbaren Authentizität eurer Kommunikation mit uns aber nicht zu verringern, haben wir in den letzten Monaten weitere Techniken eingeführt. So sind unsere Domains mit [DNSSEC](https://de.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) gesichert, so dass die Quelle der DNS Informationen verifiziert werden kann. Weiterhin haben wir [CAA-Records](https://de.wikipedia.org/wiki/DNS_Certification_Authority_Authorization) in unserem DNS-System hinterlegt, um festzulegen, welche Zertifizierungsstellen für uns Zertifikate ausstellen dürfen. Das sind Let's Encrypt und Gandi.net. Die Hashes der Zertifikate dieser beiden Zertifizierungsstellen haben wir auch in Form von [TLSA-Records](https://de.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities) im DNS hinterlegt. Um das ganze nicht händisch vergleichen zu müssen, gibt es beispielsweise das Browser-Plugin [DNSSEC/TLSA-Validator](https://www.dnssec-validator.cz).
