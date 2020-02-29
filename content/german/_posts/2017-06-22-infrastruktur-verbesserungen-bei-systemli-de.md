---
layout: post
lang: de
title:  "Welcome to the future: Infrastruktur-Verbesserungen bei systemli.org"
date:   2017-06-22 20:00:00
translationKey: ede1b180a1b3ee2847b83f469ea4ee12
---

Die letzten Monate haben wir bei systemli.org einiges an der technischen Infrastruktur verbessert. Ein paar dieser Änderungen wollen wir euch nicht vorenthalten.

**tl;dr:**

  * Eure Email Postfächer sind besser vor Spam geschützt
  * Sofern möglich, erzwingen wir beim Versand eurer Mails verschlüsselte Verbindungen
  * Wir sind ab sofort per IPv6 erreichbar
  * Unsere DNS-Zonen werden per DNSSEC abgesichert
  * Wir bieten DANE Records am, um zu verhindern, dass gefälschte SSL Zertifikate in unserem Namen verbreitet werden

<!--more-->

## Automatisierte Spamfilterung

MIt Hilfe von [SpamAssassin](https://de.wikipedia.org/wiki/SpamAssassin) haben wir anfangen, automatisiert Spam zu filtern und von eurem Posteingang fernzuhalten.

Emails, die als Spam erkannt werden, wandern ab sofort in den "Junk"-Ordner. Emails die länger als 30 Tage im "Junk"-Ordner liegen, werden automatisch gelöscht. 

Falls eine Email zu Unrecht im "Junk" Ordner gelandet ist, informiert uns bitte umgehend.

Solltet ihr Systemadministrator\*innen sein und wissen wollen, wie wir unseren Spamassassin konfiguriert haben, könnt ihr unsere Konfiguration anhand unserer [SpamAssassin Ansible-Rolle](https://github.com/systemli/ansible-role-spamassassin) nachvollziehen.

## Mandatory TLS: erzwungene Transportverschlüsselung beim Mail-Versand

Wir haben ein kleines Tool namens [mail-tls-helper](https://github.com/systemli/mail-tls-helper) entwickelt, das seit ein paar Monaten auf unserem Mailserver läuft. Das Tool schaut sich die ausgehenden Verbindungen zu anderen Mailservern an und überprüft, ob diese TLS-verschlüsselt waren. Wenn das der Fall war, wird die Domain der Empfänger-Adresse in eine Liste von Domains aufgenommen, für die unser Mailserver in Zukunft nur noch TLS-verschlüsselte Verbindungen zulässt.

Damit erzwingen wir TLS-Verschlüsselung überall dort, wo sie schon mal funktioniert hat. Die Idee dahinter ist, so genannte [Downgrade Attacken](https://en.wikipedia.org/wiki/Downgrade_attack) zu verhindern.

Nebenbei sendet das Tool einmal im Monat eine Info-Mail an die Postmaster aller Domains, deren Mailserver keine TLS-Verschlüsselung anbieten mit der Aufforderung, das doch bitte zu ändern.

Aktuell unterstützt das Tool nur Postfix als Mailserver. Wenn ihr selbst einen Mailserver mit Postfix betreibt, würden wir uns freuen, wenn ihr das Tool auch einsetzt. Natürlich freuen wir uns auch über Kritik, Anregungen, Patches.

## IPv6: Computer-Adressen der nächsten Generation

Unsere Services sind jetzt alle per [IPv6](https://de.wikipedia.org/wiki/IPv6) erreichbar.

Kurz zum Hintergrund: In Netzwerken - so auch im Internet - hat jedes System eine IP-Adresse (zum Beispiel: `198.167.223.214`), unter der es für andere Computer erreichbar ist. Als das IP-Protokoll 1981 in seiner Version 4 (IPv4) verabschiedet wurde, war nicht absehbar, dass es irgendwann mal so viele Systeme (Laptops, Server, Smartphones, Dronen, Fernseher, Glühbirnen, Überwachungskameras, Kühlschränke, etc.) geben würde, die alle eine eindeutige Adresse haben sollen.

Mittlerweile sind die IPv4-Adressen sehr knapp geworden. Deshalb gibt es seit 1998 den Nachfolger IPv6, der so viele Adressen zur Verfügung stellt, dass theoretisch jedem Atom auf der Oberfläche der Erde eigene Adresse zugewiesen werden könnte. Das sollte also erst mal reichen. Die IPv6-Adressen gehören zum Hexadezimalsystem und sehen etwas anders aus, zum Beispiel: `2001:67c:1350:e000::3`.

Wichtig ist die Erreichbarkeit über IPv6 vor allem in Regionen der Welt, in denen die Vergabe von IPv4-Adressen schon stark reglementiert ist, zum Beispiel im asiatisch-pazifischen Raum.

Seit ein paar Tagen sind nun auch wir in der Zukunft angekommen: alle unsere Services sind per IPv6 erreichbar.

## DNSSEC: Kryptografischer Schutz für Domain-Namen

Unsere DNS Zonen sind seit kurzem mit [DNSSEC](https://de.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) Schlüsseln signiert und wir haben für sämtliche Services [DANE Records](https://de.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities) veröffentlicht.

Das [Domain Name System](https://de.wikipedia.org/wiki/Domain_Name_System) (DNS) ist noch so ein Protokoll aus der Internet-Steinzeit. Zweck des DNS ist, sprechende Domainnamen in eine IP-Adresse aufzulösen (siehe oben). So zum Beispiel `mail.systemli.org` in die IPv4-Adresse `198.167.223.214` und die IPv6-Adresse `2001:67c:1350:e000::3`.

Leider ist DNS nicht besonder sicher. So genannte [DNS Spoofing](https://de.wikipedia.org/wiki/Cache_Poisoning) Attacken ermöglichen recht einfach, gefälschte Antworten auf DNS-Anfragen zu versenden. Im Ergebnis bekommt mensch falsche Adressen untergejubelt und verbindet sich unter Umständen mit einem falschen (bösen) Server.

DNSSEC bietet Schutz vor diesen Attacken. Die Zonen (z. B. die '.org'-Zone und die 'systemli.org'-Zone) sind mit kryptografischen Schlüsseln signiert, die nicht gefälscht werden können. Wenn dein Betriebssystem DNSSEC beherrscht, kennt es die Schlüssel für die so genannte Root-Zone. In der wird dann der Schlüssel für die 'org'-Zone nachgeschlagen und in dieser wiederum der Schlüssel für die 'systemli.org'-Zone. In letzterer findet sich schließlich die Signatur für den Eintrag 'mail.systemli.org'. Nur wenn die komplette Kette an Schlüsseln übereinstimmt, wird die Anfrage als valide akzeptiert.

Das Problem an DNSSEC ist, dass es von wenigen Betriebssystemen bisher unterstützt wird. Deshalb empfehlen wir euch, in eurem Webbrowser ein [DNSSEC-Plugin](https://www.dnssec-validator.cz/pages/download.html) zu installieren. Dann habt ihr wenigstens für Webseiten DNSSEC-Schutz.

## DANE: TLS-Zertifikate im DNS

Ein weiterer Vorteil an DNSSEC ist, dass man das nun kryptografisch validierbare DNS jetzt als vertrauenswürdigen Ort zum Bereitstellen von Informationen verwenden kann. Das [DANE](https://de.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities)-Protokoll
definiert hierzu einen Standard um in so genannten TLSA-Records Details über Verschlüsselungs-Zertifikate im DNS abzulegen.

Den Zertifizierungsstellen (CAs), die zum Ausstellen von offiziellen TLS-/SSL-Zertifikaten berechtigt sind, sollte man [aus](https://www.eff.org/deeplinks/2010/03/researchers-reveal-likelihood-governments-fake-ssl) [guten](https://www.wired.com/2010/03/packet-forensics/) [Gründen](https://blog.chaosradio.ccc.de/index.php/2011/09/29/cr-172-ssl-oder-einmal-aufmachen-bitte/) nicht vertrauen.

Dank DANE können wir als Anbieter unserer Services jetzt selbst im DNS Informationen über unsere [TLS-Zertifikate](https://de.wikipedia.org/wiki/Transport_Layer_Security) unserer Services hinterlegen und ihr könnt überprüfen, ob das euch vom Server angebotene Zertifikat auch wirklich mit den Informationen aus unseren DNS-Einträgen übereinstimmt.

Wir haben für alle Services mit Transport-Verschlüsselung TLSA-Records im DNS hinterlegt. Diese TLSA-Records sagen aus, dass für unsere Services nur Zertifikate von [Let's Encrypt](https://letsencrypt.org/) oder von [Gandi](https://www.gandi.net/) gültig sind.

Für Webseiten könnt ihr zum Überprüfen das schon oben erwähnte [DNSSEC-Plugin](https://www.dnssec-validator.cz/pages/download.html) verwenden. Für unseren Mailserver könnt ihr die DANE-Records beispielsweise bei [dane.sys4.de](https://dane.sys4.de/smtp/systemli.org) überprüfen.


