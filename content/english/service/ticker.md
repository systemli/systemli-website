---
layout: page
title: Ticker
aliases:
    - /en/service/ticker.html
icon: ticker.svg
service_bar_title: ticker
translationKey: 3e91fcf85e9d4891cd5c76c77e178251
description: Central communication tool with social media connection
links:
    ticker:
        url: https://ticker.systemli.org
        text: Ticker Login
---
The ticker is a central communication tool with social media connections for publishing news and images.
The content can be published on your own website or on a specially created domain.

{{< figure
  src="/assets/img/ticker-admin-overview.png"
  alt="Ticker Admin Overview"
  link="/assets/img/ticker-admin-overview.png"
  caption="Overview of the Ticker Admin Interface"
>}}

If you are interested in your own ticker, just send us an email [support@systemli.org]({{< relref "/contact" >}}) (preferably encrypted) with a short description of what you would like to use the ticker for.

## Use cases

### 1. Systemli Updates ([updates.systemli.org](https://updates.systemli.org))

We use the ticker to publish updates and announcements.
This allows us to quickly and easily provide information about maintenance work, disruptions or new features.
The ticker automatically sends the messages to our [Mastodon account](https://systemli.social/@systemli) and [Bluesky account](https://bsky.app/profile/systemli.bsky.social).
We have also integrated a widget on our website that displays the latest news.

{{< figure
  src="/assets/img/ticker-widget-systemli.png"
  alt="Ticker Widget on systemli.org"
  link="/assets/img/ticker-widget-systemli.png"
  caption="Ticker Widget on systemli.org (highlighted)"
>}}

### 2. The classic demo ticker

The ticker is often used at demonstrations and protests to inform participants and interested parties about current events.
The news can also be forwarded via social media channels.
We offer special domains for this area of application:

- `(<name>.)aktionsticker.org`
- `(<name>.)demoticker.org`
- `(<name>.)prozessticker.org`
- `(<name>.)infoticker.org`

{{< figure
  src="/assets/img/ticker-frontend-aktionsticker.png"
  alt="Ticker Frontend"
  link="/assets/img/ticker-frontend-aktionsticker.png"
  caption="Example for Ticker Frontend aktionsticker.org"
>}}

You can also use your own domains.

### 3. Internal communication

With the option to add a signal group to the ticker, it can also be used for internal communication.
People can be added via an invitation link who will then receive the messages in the group.

## Integrations

The ticker can be connected to various services to publish the news automatically.
The following integrations are currently possible:

- Websites
- Mastodon
- Bluesky
- Telegram
- Signal

{{< figure
  src="/assets/img/ticker-admin-integrations.png"
  alt="Ticker Integrations"
  link="/assets/img/ticker-admin-integrations.png"
  caption="Overview of the Ticker Integrations"
>}}

## Technical details

The ticker software is open source and divided into several projects.
The source code is available on GitHub:

- [Ticker](https://github.com/systemli/ticker) ([Documentation](https://systemli.github.io/ticker/))
- [Ticker Admin](https://github.com/systemli/ticker-admin)
- [Ticker Frontend](https://github.com/systemli/ticker-frontend)
- [Ticker Widget](https://github.com/systemli/ticker-widget)
