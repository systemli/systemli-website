---
layout: page
title: Ticker
aliases:
    - /service/ticker.html
icon: ticker.svg
service_bar_title: ticker
translationKey: 3e91fcf85e9d4891cd5c76c77e178251
description: Zentrales Kommunikationswerkzeug mit Social-Media-Anbindung
links:
    ticker:
        url: https://ticker.systemli.org
        text: Ticker Login
---
Der Ticker ist ein Kommunikationswerkzeug mit Social-Media- und Messenger-Anbindung zur Veröffentlichung von Nachrichten und Bildern.
Die Inhalte können zusätzlich in eine bestehende Website oder auf einer eigens dafür eingerichteten Domain veröffentlicht werden.

{{< figure
  src="/assets/img/ticker-admin-overview.png"
  alt="Ticker Admin Übersicht"
  link="/assets/img/ticker-admin-overview.png"
  caption="Übersicht des Ticker Admin Interface"
>}}

Bei Interesse an einem eigenen Ticker, schreibt uns einfach eine E-Mail [support@systemli.org]({{< relref "/kontakt" >}}) (am besten verschlüsselt) mit einer kurzen Beschreibung, wofür ihr den Ticker verwenden möchtet.

## Anwendungsbeispiele

### 1. Systemli Updates ([updates.systemli.org](https://updates.systemli.org))

Wir nutzen den Ticker für die Veröffentlichung von Updates und Ankündigungen.
So können wir schnell und einfach Informationen zu Wartungsarbeiten, Störungen oder neuen Features bereitstellen.
Der Ticker sendet die Nachrichten automatisch an unseren [Mastodon Account](https://systemli.social/@systemli) und [Bluesky Account](https://bsky.app/profile/systemli.bsky.social).
Wir haben zusätzlich auf unserer Website ein Widget eingebunden, das die neuesten Nachrichten anzeigt.

{{< figure
  src="/assets/img/ticker-widget-systemli.png"
  alt="Ticker Widget auf systemli.org"
  link="/assets/img/ticker-widget-systemli.png"
  caption="Ticker Widget auf systemli.org (Hervorhebung)"
>}}

### 2. Der klassische Demoticker

Der Ticker wird oft bei Demonstrationen und Protesten eingesetzt, um die Teilnehmenden und Interessierten über verschiedene Kommunikationskanäle über aktuelle Geschehnisse zu informieren.
Wir bieten für diesen Einsatzbereich spezielle Domains an:

- `(<name>.)aktionsticker.org`
- `(<name>.)demoticker.org`
- `(<name>.)prozessticker.org`
- `(<name>.)infoticker.org`

{{< figure
  src="/assets/img/ticker-frontend-aktionsticker.png"
  alt="Ticker Frontend"
  link="/assets/img/ticker-frontend-aktionsticker.png"
  caption="Beispiel für ein Ticker-Frontend unter aktionsticker.org"
>}}

Es können aber auch eigene Domains genutzt werden.

### 3. Interne Kommunikation

Indem ausschließlich die Integration einer Signal-Gruppe aktiviert wird, kann der Ticker als interner Kommunikationskanal genutzt werden.
Über einen Einladungslink können Personen der Gruppe beitreten und die Nachrichten in der Gruppe empfangen.

## Integrationen

Der Ticker kann mit verschiedenen Diensten verbunden werden, um die Nachrichten automatisch zu veröffentlichen.
Zur Zeit sind folgende Integrationen möglich:

- Websites
- Mastodon
- Bluesky
- Telegram
- Signal

{{< figure
  src="/assets/img/ticker-admin-integrations.png"
  alt="Ticker Integrationen"
  link="/assets/img/ticker-admin-integrations.png"
  caption="Übersicht der Ticker Integrationen"
>}}

## Technische Details

Die Software des Tickers ist Open Source und in mehrere Projekte aufgeteilt.
Der Quelltext ist auf GitHub verfügar:

- [Ticker](https://github.com/systemli/ticker) ([Dokumentation](https://systemli.github.io/ticker/))
- [Ticker Admin](https://github.com/systemli/ticker-admin)
- [Ticker Frontend](https://github.com/systemli/ticker-frontend)
- [Ticker Widget](https://github.com/systemli/ticker-widget)
