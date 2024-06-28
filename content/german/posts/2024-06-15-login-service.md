---
layout: post
title: "Systemli bekommt einen einheitlichen Login (Single Sign-on)"
date:  2024-06-15 14:00:00
translationKey: Goo3Daetootooceth1Thie0pixooPhaeToh5iuta
---

**TL;DR: Am 27.06.2024 werden alle Clients aus der Cloud ausgeloggt und müssen sich neu authentifizieren. Zwei-Faktor-Authentifizierung muss ebenfalls neu konfiguriert werden.**

Ein systemli Account bringt Zugang zu verschiedenen Diensten: Mail, Cloud und Matrix. Dass man sich dort überall mit demselben Usernamen und Passwort anmelden kann, führt aber häufig zu Verwirrungen. Und auch für uns als Admins bringt die bisherige Integration einige technische Probleme.<!--more-->

Wir werden deshalb Schritt für Schritt einen neuen Login-Dienst (Single Sign-on) einführen. Der entscheidende Vorteil dabei: Perspektivisch braucht es nur noch einen Login für alle oben genannten systemli Dienste. Auch Zwei-Faktor-Authentifizierung muss nur einmal konfiguriert werden und schützt direkt alle Dienste, die den neuen systemli Login nutzen.

Die schrittweise Umstellung auf den neuen Login wird nur die genannten Dienste betreffen. Bei unserer Mastodon Instanz, Schleuder und Mumble sind Account-Registrierung und Login unabhängig vom zentralen systemli Account, dies wird sich nicht ändern.

## Cloud wird als erstes umgestellt

Unsere [Cloud](https://cloud.systemli.org) ist der erste Dienst, der auf den neuen Login umgestellt wird. Für euch gibt es dabei ein paar Dinge zu beachten:

1. Beim Login in die Cloud werdet ihr in Zukunft auf `id.systemli.org`
weitergeleitet. Dies ist der neue Login-Dienst.
2. Alle Clients werden bei der Umstellung aus der Cloud ausgeloggt. Sämtliche Clients (Desktop Sync Client, Mobiler Client, Notes, DAVx5, Webbrowser) müssen sich im Anschluss einmal neu einloggen.
3. Für alle Clients außer dem Webbrowser muss in Zukunft ein App-Passwort verwendet werden. Die normale User + Passwort Kombination wird dort nicht mehr funktionieren. App-Passwörter können in der Cloud unter Einstellungen -> Sicherheit verwaltet werden.
4. Wer Zwei-Faktor-Authentifizierung in unser [Userverwaltung](https://users.systemli.org) konfiguriert hat, wird in Zukunft auch beim Cloud-Login danach gefragt.
5. Wer Zwei-Faktor-Authentifizierung in der Cloud, aber noch nicht in der Userverwaltung konfiguriert hat, muss sie (am besten vor der Umstellung) in der [Userverwaltung](https://users.systemli.org) konfigurieren.

Die Umstellung der Cloud auf den neuen Login wird am 27.06.2024 passieren. Wir kündigen sie vorher kurzfristig auf unseren üblichen Kanälen ([systemli Updates Ticker](https://updates.systemli.org) und [Mastodon](https://systemli.social/@systemli)) an.

## Screenshot des neuen Login Dienstes

<img src="/assets/img/id.systemli.org_login_de.png" class="border">
