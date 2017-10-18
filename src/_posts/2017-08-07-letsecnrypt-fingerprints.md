---
layout: post
lang: de
title:  "Langsamer Abschied von SSL-Fingerprints"
date:   2017-10-18 08:30:00
translation_id: eae1b180a1b43e2847b83f469ea4ee18
---

Seit Jahren halten wir euch dazu an, die Fingerprints unserer SSL-Zertifikate zu überprüfen - das hat jetzt (fast) ein Ende. 

Bisher mussten wir von euren Spenden teure SSL-Zertifikate von Zertifizierungsstellen erwerben. Das haben wir gemacht, damit euer Browser sich nicht beschwerte, dass die Verbindnung zu systemli.org, unsicher sei. Seit einer Weile existiert nun die Initiative [Let's Encrypt](https://letsencrypt.org/), unter anderem angestoßen von der EFF  und Mozilla. Dank Let's Encrypt können wir SSL-Zertifikate nun auch umsonst bekommen. 

Bisher haben wir Zertifikate verwendet, die bis zu zwei Jahre gültig waren. Die dazugehörigen Fingerabdrücke der Zertifikate, waren auf unserer Startseite zu sehen. Mit diesen "Fingerprints" der Zertifikate, konnte jeder User nachvollziehen, ob ihm das richtige SSL-Zertifikat ausgeliefert wurde oder er/sie Opfer eines Machine-In-The-Middle-Angriffs geworden ist. 

Die Gültigkeit der kostenlosen Zertitfikate von Let's Encrypt beträgt lediglich drei Monate. Wir müssten nun also ständig neue Fingerprints auf der Homepage pflegen und ihr diese überprüfen. Das ist nicht so praktikabel. Wir werden daher die Fingerprints für Let's Encrypt-Zertifikate nicht mehr veröffentlichen. 

Nun noch ein paar Informationen für die Leute die bisher wirklich Fingerprints verglichen haben. :)

Um den Grad der verifizierbaren Authentizität eurer Kommunikation mit uns aber nicht zu verringern, haben wir in den letzten Monaten weitere Techniken eingeführt. So sind unsere Domains mit [DNSSEC](https://de.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) gesichert, so dass die Quelle der DNS Informationen verifiziert werden kann. Weiterhin haben wir [CAA-Records](https://de.wikipedia.org/wiki/DNS_Certification_Authority_Authorization) in unserem DNS-System hinterlegt, um festzulegen, welche Zertifizierungsstellen für uns Zertifikate ausstellen dürfen. Das sind Let's Encrypt und Gandi.net. Die Hashes der Zertifikate dieser beiden Zertifizierungsstellen haben wir auch in Form von [TLSA-Records](https://de.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities) im DNS hinterlegt. Um das ganze nicht händisch vergleichen zu müssen, gibt es beispielsweise das Browser-Plugin [DNSSEC/TLSA-Validator](https://www.dnssec-validator.cz).



