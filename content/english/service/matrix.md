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
---
Matrix is a decentralized and end-to-end encrypted messenger service with good support for group chats. It is a free 
and open alternative to Signal and Slack.

## Features

- End-to-end encryption for individual and group chats
  - ⚠️ Clients exist that do not support end-to-end encryption
- Multi-Device-Support (Smartphone, Browser, Desktop)
- Networking with people and groups on [other Matrix servers](https://matrix.org/) (Federation)
- Only for systemli:
  - Messages are automatically deleted after 30 days
  - IP addresses are not stored

## Conditions

Our server requires an email account at systemli.org. As with email or Jabber, other Matrix accounts on other Matrix 
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

ℹ️ In addition to the client element we recommend, there are other clients for Matrix. Thereby it can happen that
that they do not have all features (including security relevant ones) built in. You should have a look at the
[Features carefully](https://matrix.org/clients-matrix/) and consider which client you use.
