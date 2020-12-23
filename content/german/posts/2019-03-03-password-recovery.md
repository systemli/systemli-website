---
layout: post
title:  "Neue Funktion: Wiederherstellung von E-Mail-Passwörtern"
aliases:
    - /de/2019/03/03/password-recovery.html
date:   2019-03-03 20:00:00
translationKey: 21a8635a0fdc2a7c8b75c2dfee3bcd12
---
In den letzten Monaten haben wir viel Arbeit in unser 
[Einladungs- und Verwaltungsportal für E-Mails](https://users.systemli.org) gesteckt. Im Jahr  2014 hatten wir dieses 
Portal ursprünglich entwickelt, um den Zugang zu unserem E-Mail Dienst zu vereinfachen. In der Zwischenzeit haben wir 
zu einem E-Mail-Account auch einen 
[Cloud-Speicher mit einigen Features (Kalender, Kontakte, uvm.) hinzugefügt]({{< ref "2016-03-26-owncloud" >}}). Mit 
diesen beiden Funktionen konnten wir unseren Nutzer:innen einen konkreten Mehrwert bieten. Wir freuen uns sehr, ab 
sofort eine weitere wichtige Funktion anbieten zu können: **Die Wiederherstellung von E-Mail-Account-Passwörtern**.

Wiederherstellen bedeutet, dass ihr ein neues Passwort setzen könnt, wenn ihr euer bestehendes Passwort für euren 
E-Mail-Account vergessen habt. Diese Funktion stellte uns vor ein schwieriges Problem. Wir wollen so wenige persönliche 
Informationen über unsere Nutzer:innen speichern, wie möglich. Deswegen war es keine Option, eine zweite 
E-Mail-Adresse, die Telefonnummer oder andere Daten zu speichern, die eine Nutzer:in identifizieren könnten. Außerdem 
war uns wichtig, den Wiederherstellungsprozess so zu gestalten, dass er möglichst nicht zur feindlichen Übernahme eines 
Accounts missbraucht werden kann. Mit diesem Wissen haben wir einen möglichst sicheren Wiederherstellungsprozess 
entwickelt, bei dem ihr die notwendige Information selbstständig aufbewahrt.

Beim Erstellen eines E-Mail-Accounts wird ab sofort ein so genannter **Wiederherstellungscode** generiert und euch 
**einmalig** angezeigt. Dieser muss von euch **sicher abgelegt** werden. Für bestehende E-Mail-Accounts könnt ihr euch 
im [Userportal](https://users.systemli.org) einen Wiederherstellungscodes erzeugen. Mit diesem Code könnt ihr später 
den Passwortwiederherstellungsprozess ("[Passwort vergessen](https://users.systemli.org/recovery)") starten.

Wird der Wiederherstellungsprozess gestartet, müsst ihr zwei Tage warten, bis ihr euch ein neues Passwort setzen könnt. 
Zu Beginn des Prozesses senden wir eine E-Mail an euch. Sollte der Prozess zu unrecht gestartet worden sein, kann er in 
diesem Zeitraum abgebrochen werden. Beide Maßnahmen sollen einen unbefugten Zugriff verhindern, falls euer 
Wiederherstellungscode in die falschen Hände gerät. Wir hoffen, mit diesem Prozess eine bisher fehlende Funktion 
anzubieten. Hierüber könnt ihr  Zugang zu eurem Account wiedererlangen falls ihr euer Passwort vergessen habt - ganz 
ohne die Hilfe der Admins und ohne Preisgabe persönlicher Daten.

Offen bleibt die Frage, wie ihr den Wiederherstellungscode aufbewahrt. Wir raten euch dringend davon ab, ihn einfach 
ausgedruckt zuhause abzulegen. Möglich wäre etwa, den Wiederherstellungscode in einem Passwort-Manager zu speichern. 
Ihr könnt den Code aber auch in mehrere Teile zerschneiden und an eure engsten Freund:innen verteilen. Dann könnten nur 
alle gemeinsam euer Passwort zurücksetzen. Und keine Sorge: So lange ihr euer Passwort noch wisst, könnt ihr jederzeit 
einen neuen Wiederherstellungscode erzeugen. Damit wird der alte ungültig.

Wenn ihr Feedback, Anmerkungen oder Kritik zu unserem großen Update im Einladungs- und Verwaltungsportal habt, dann 
[schreibt uns bitte]({{< ref "kontakt" >}}). Wir sind immer auf Feedback angewiesen, um unsere Services zu verbessern. 
Bitte nehmt diese Aufforderung also ernst und schreibt uns. Das ist keine Standardfloskel, wie sie immer unter 
Ankündigungen stehen.
