---
layout: post
title: "Neue Sicherheitsmaßnahme gegen MITM-Angriffe eingeführt"
date:  2024-01-10 14:00:00
translationKey: z6CGOlziqdS9RV4i3bTSiN7fxH6tzYY5FTnz6IkO
---

Im November 2023 wurde [publik](https://notes.valdikss.org.ru/jabber.ru-mitm/), dass der größte russische Jabber-Server (jabber.ru) das Ziel eines [Man-in-the-Middle-Angriffs](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) (MITM) war. Hierbei wurde der Datenverkehr von den Servern umgeleitet, was den Angreifenden ermöglichte, gültige TLS-Zertifikate auszustellen und dadurch die Inhalte des Jabber-Servers zu erfassen. Besonders heikel ist die Tatsache, dass die Server in Deutschland gehostet werden. Dies gab uns den Anstoß, eine neue Sicherheitsmaßnahme einzuführen, die solche Angriffe auf Dienste und Websites von systemli.org erheblich erschwert.<!--more-->

Um den Angriff, wie von jabber.ru dargestellt, auszuführen, muss der Angreifende in der Lage sein, den Netzwerkverkehr seines Ziels (z.B. jabber.ru) so zu manipulieren, dass die Daten über einen Server umgeleitet werden, der unter seiner Kontrolle steht. Es ist äußerst unwahrscheinlich, dass dies ohne Kenntnis der Rechenzentrumsbetreiber:innen geschieht. Daher kann man davon ausgehen, dass entweder staatliche Behörden diese Maßnahme veranlasst haben, oder unbefugter Zugang zum Rechenzentrum erlangt wurde. Es handelt sich daher nicht um einen Angriff, der einfach von außen durchgeführt werden kann. Aufgrund der Angriffsart konnten sie selbst gültige TLS-Zertifikate ausstellen, da jabber.ru Let's Encrypt verwendet und Zertifikate über die [HTTP-Challenge](https://letsencrypt.org/docs/challenge-types/#http-01-challenge) bezieht. Dies machte es für Nutzer:innen unmöglich zu erkennen, dass ihre Verbindung nicht direkt zu jabber.ru hergestellt wurde.

## Gegenmaßnahmen

Seit geraumer Zeit besteht die Option, die Zertifikatsausstellenden für eine Domain (z.B. systemli.org) über [CAA Records im DNS](https://en.wikipedia.org/wiki/DNS_Certification_Authority_Authorization) festzulegen. Bislang hatten wir die CAA Records auf den Zertifikataussteller Let's Encrypt begrenzt. Das hätte jedoch einen MITM-Angriff, wie er bei jabber.ru passiert ist, nicht verhindert. Es gibt zusätzlich die Möglichkeit, bei Let's Encrypt einen Account zu hinterlegen, der berechtigt ist, Zertifikate zu beziehen. Dies bot uns den willkommenen Anlass, alle unsere Dienste, die TLS-Zertifikate beziehen, auf unseren Account zu beschränken und diesen im DNS zu verankern. Das erhöht die Sicherheit und erschwert die Durchführung eines MITM-Angriffs gegen unsere Dienste deutlich.

Abfragen der CAA Records können mit dem Tool `dig` durchgeführt werden:

```bash
dig systemli.org CAA +short
```

Der CAA Record für systemli.org sieht nun wie folgt aus:

```text
0 issue "letsencrypt.org;accounturi=https://acme-v02.api.letsencrypt.org/acme/acct/114959303"
0 iodef "mailto:abuse@systemli.org"
```

## Weitere Maßnahmen

Eine zusätzliche Methode, um solche Angriffe und deren Versuche zu identifizieren, besteht darin, das [Certificate Transparency](https://certificate.transparency.dev/) Log zu überwachen. Dieses Protokoll beinhaltet sämtliche Zertifikate, die von großen Zertifizierungsstellen ausgegeben wurden. Dadurch lässt sich feststellen, ob ein Zertifikat für eine Domain ausgestellt wurde, die nicht von der eigenen Zertifizierungsstelle stammt.
