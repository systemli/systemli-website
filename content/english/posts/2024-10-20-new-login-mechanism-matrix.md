---
layout: post
title: "New Login Mechanism for Matrix"
date: 2024-10-20 20:00:00
translationKey: f9a9fdc8bb5344f212b9a6b0289e925cde2ae08a
---

Since last week, we have changed the login mechanism for [Matrix]({{<ref "matrix">}}).
[As we did a few months ago with the Cloud]({{< ref "2024-06-15-login-service.md" >}}), we have also integrated Matrix with the unified login (Single Sign-on).

This means that you no longer log in to the Matrix clients with email and password. Instead, a "Continue with Systemli" button now appears.
When you click on it, you will be redirected to our central login service `id.systemli.org`.
There, you can log in with your Systemli account.

The transition is already complete, and you will only notice it the next time you log in to a Matrix client.

{{< figure
  src="/assets/img/matrix-element-sso.png"
  alt="New login screen for Element"
  caption="New login screen for Element"
>}}

## Bots and Webhooks

Since the transition, bots and webhooks no longer work with email and password.
If you use bots or webhooks, you need to update them to keep them functioning.
You can create an access token for the bot or webhook and use it.
You can read how to do this in the [Matrix-Dokumentation](https://spec.matrix.org/unstable/client-server-api/#client-authentication).
To create an access token, you must first log in with a client (e.g., the Element Desktop App) using the new login flow and then copy the access token under "Settings -> Help & About -> Advanced".
