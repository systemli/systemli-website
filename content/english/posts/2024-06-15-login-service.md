---
layout: post
title: "Systemli gets a unified login (single sign-on)"
date:  2024-06-15 14:00:00
translationKey: Goo3Daetootooceth1Thie0pixooPhaeToh5iuta
---

**TL;DR: On 27.06.2024, all clients will get logged out of the cloud and have to login again. Twofactor authentication needs to be setup again as well.**

With a systemli account you get access to different services: mail, cloud and matrix. The fact that you can login to all of them with the same username and password often causes confusion. And for us admins the current integrations imposed some technical problems as well.<!--more-->

Therefore we will gradually introduce a new login service (single sign-on). The key advantage is that in the future only one login will be required for all mentioned services. Besides, twofactor authentication needs to be configured only once and will protect all services that use the new systemli login service.

This gradual migration to the new login will only affect the aforementioned services. Our Mastodon instance, Schleuder and Mumble have separate account registration and login and are unrelated to the central systemli account. This will not change.

## Cloud to be migrated first

Our [cloud](https://cloud.systemli.org) is the first service to migrate to the new login service. There's a few things for you to consider:

1. When logging into the cloud, you'll get redirected to `id.systemli.org` in the future. This is the new login service.
2. All clients will get logged out of the cloud during the migration. All of them (desktop sync client, mobile client, notes, DAVx5, webbrowser) will have to login again afterwards.
3. All clients except web browsers need to use app passwords in future. The normal user + password combination will no longer work for them. App passwords can be managed in the cloud at settings -> security.
4. Those who have their [user management login](https://users.systemli.org) protected with twofactor authentication will get asked for it as well when logging into the cloud in the future.
5. Those who have twofactor authentication enabled in their cloud account and not yet in the user management, will have to enable it in our [user management](https://users.systemli.org), ideally before the migration.

The migration of our cloud to the new login service will hapen on 27.06.2024. We'll announce it shortly upfront on the usual channels ([systemli Updates Ticker](https://updates.systemli.org) and [Mastodon](https://systemli.social/@systemli)).

## Screenshot of the new login service

<img src="/assets/img/id.systemli.org_login_en.png" class="border">

## Amendment: configuring cloud clients

Since the migration to the new systemli login, client apps for the cloud need to use an app password for authentication. The normal user + password combination no longer works for them. Affected are e.g. calendar apps or those to synchronize contacts. Since you might run into some problems when migrating the apps, here's some notes:

- App passwords can be managed in the cloud under "settings" -> "security". When generating one, you have to enter a name. You can pick any name, it doesn't matter technically.
- The easiest is to temporarily remove the cloud account or the configured synchronization from the app and configure it anew.
- After the app tried to login with incorrect credentials (e.g. the old ones) several times it gets blocked temporarily. In this case it helps to stop the synchronization for at least one hour and configure it anew afterwards.
- Some apps support the Nextcloud login flow, which sets up an app password automatically in the background. These apps ask you during the setup to login to the cloud and confirm access for the app. For those apps you don't have to generate an app password manually. That applies e.g. to the official Nextcloud apps and DAVx5.
