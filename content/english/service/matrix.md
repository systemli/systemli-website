---
layout: page
title: Matrix
menu_group: service
service_bar_title: matrix
translationKey: 632316f5ecdb9bba3b7c55b570911aaf
icon: matrix.svg
beta: true
description: End-to-end encrypted messenger
links:
    element:
        url: https://element.systemli.org
        text: Webclient
    privacy:
        url: https://wiki.systemli.org/howto/matrix-privacy
        text: "Notes on secure use of Matrix (german)"
---
Matrix is a decentralized and end-to-end encrypted messenger service with good support for group chats. It is a free 
and open alternative to Signal and Slack.

## Features

- End-to-end encryption for individual and group chats
  - ⚠️ Clients exist that do not support end-to-end encryption
- Multi-Device-Support (Smartphone, Browser, Desktop)
- Networking with people and groups on [other Matrix servers](https://matrix.org/) (Federation)
- Bridges to other messaging services ([see the wiki article - german only](https://wiki.systemli.org/howto/matrix-bridges))
- Only for systemli:
  - Messages are automatically deleted on the server after 30 days
  - IP addresses are not stored

## Conditions

Our server requires an email account at systemli. As with email or Jabber, other Matrix accounts on other Matrix 
servers can be contacted.

## Connection

```
Homeserver: matrix.systemli.org
```

## Usage

To connect to Matrix, instead of [our web client](https://element.systemli.org), you can also install
[an app](https://element.io/get-started) can be installed. Please note that you have to change the home server to login
to `matrix.systemli.org` (by default it is set to matrix.org). A good documentation of the client
[provided by TU Dresden](https://doc.matrix.tu-dresden.de/en/).

ℹ️ Element uses end-to-end encryption by default.

ℹ️ Despite encryption, Matrix accumulates some metadata. See the [notes on secure use](https://wiki.systemli.org/howto/matrix-privacy (german)) in our wiki.

ℹ️ In addition to the client element we recommend, there are other clients for Matrix. Thereby it can happen that they do not have all features (including security relevant ones) built in. You should have a look at the
[Features carefully](https://matrix.org/clients-matrix/) and consider which client you use.
