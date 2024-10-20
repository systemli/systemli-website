---
layout: post
title: "Neuer Login-Mechanismus für Matrix"
date: 2024-10-20 20:00:00
translationKey: f9a9fdc8bb5344f212b9a6b0289e925cde2ae08a
---

Seit vergangener Woche haben wir den Login-Mechanismus für [Matrix]({{<ref "matrix">}}) umgestellt.
[Wie schon vor wenigen Monaten mit der Cloud]({{< ref "2024-06-15-login-service.md" >}}), haben wir auch Matrix mit dem einheitlichen Login (Single Sign-on) verbunden.

Das bedeutet, dass ihr euch nicht mehr in den Matrix Clients mit E-Mail und Passwort anmeldet. Dort erscheint jetzt ein Button "Weiter mit Systemli".
Wenn ihr darauf klickt, werdet ihr auf unseren zentralen Login-Dienst `id.systemli.org` weitergeleitet.
Dort könnt ihr euch mit eurem Systemli-Account anmelden.

Die Umstellung ist bereits abgeschlossen und ihr werdet es erst merken, wenn ihr euch das nächste Mal in einem Matrix-Client anmeldet.

<img src="/assets/img/matrix-element-sso.png" class="border">

## Bots und Webhooks

Seit der Umstellung funktionieren auch Bots und Webhooks nicht mehr mit E-Mail und Passwort.
Wenn ihr Bots oder Webhooks verwendet, müsst ihr diese umstellen, damit sie weiterhin funktionieren.
Dazu könnt ihr einen Access-Token für den Bot oder Webhook erstellen und diesen verwenden.
Wie das geht, könnt ihr in der [Matrix-Dokumentation](https://spec.matrix.org/unstable/client-server-api/#client-authentication) nachlesen.
Um einen Access-Token zu erstellen, muss man sich zunächst mit einem Client (z.B. der Element Desktop App) mit dem neuen Login-Flow einloggen und unter "Einstellungen -> Hilfe und Info -> Erweitert" den Access Token kopieren.
