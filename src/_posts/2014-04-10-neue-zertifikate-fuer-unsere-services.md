---
layout: post
title:  "Neue Zertifikate für unsere Dienste"
date:   2014-04-10 10:00:00
categories: update
---
Aufgrund der aktuellen [Ereignisse](https://www.systemli.org/update/2014/04/08/schliessung-einer-sicherheitsluecke-benoetigt-neustart-der-dienste.html)  rund um die Sicherheitslücke in OpenSSL haben wir uns dazu entschlossen, sowohl neue Schlüssel, als auch Zertifikate für unsere Services zu erstellen. Die neuen Fingerprints findet ihr wie gewohnt auf unserer [Webseite](https://www.systemli.org/assets/fingerprints.txt.asc).

**Hintergrund**

In der Nacht vom 7. auf den 8. April wurde ein seit über zwei Jahren bestehender Fehler in der OpenSSL Bibliothek – die für verschlüsselte Verbindungen verwendet wird – bekannt. Der als ["Heartbleed Bug"](http://heartbleed.com/) bekannt gewordene Fehler ermöglichte es aus einer verschlüsselten Verbindung [Informationen aus dem Speicher zu extrahieren](http://www.golem.de/news/openssl-wichtige-fragen-und-antworten-zu-heartbleed-1404-105740.html). Daher war es u.a. möglich Zugangs- oder Session-Daten von NutzerInnen verschlüsselter Verbindungen zu stehlen. Ob es in der Vergangenheit aktive Angriffe über diese Lücke gab ist bisher nicht bekannt.

Die Ciphers, die bevorzugt für SSL Verbindungen mit unseren Servern verwendet werden, nutzen seit längerem die Eigenschaft von [Perfect Forward Secrecy](https://de.wikipedia.org/wiki/Perfect_Forward_Secrecy). Dies bedeutet, dass selbst wenn unser alter Schlüssel hätte ausgelesen werden können, die bis dahin aufgebauten SSL Verbindungen dennoch von einer nachträglichen Entschlüsselung geschützt sind. Wir haben Perfect Forward Secrecy seit ungefähr einem Jahr standardmäßig aktiviert.

**Folgen**

Wie bereits beschrieben, ist die Sicherheitslücke seit über zwei Jahren vorhanden und es ist nicht auszuschliessen, dass jemand das Problem schon vor der aktuellen Veröffentlichung entdeckt hat. Weiterhin kann nicht ausgeschlossen werden, dass jemand die kurze Zeit zwischen dem Bekanntwerden und der Behebung des Problems ausgenutzt hat, um verschlüsselte Daten auszulesen. 

Dies  könnte folgenschwere Konsequenzen haben: Wäre in der Zeit zwischen allgemeinem Bekanntwerden und dem Schließen der Lücke (zirka 4 Stunden),  als unsere  Systeme angreifbar waren, ein_e Nutzer_in auf unseren Systemen aktiv gewesen, so hätte ein_e Angreifer_in Daten von dieser Personabgreifen können. Unter diesen Daten kann man sich zum  Beispiel Passwörter oder auch den Inhalt von E-Mails vorstellen. Weiterhin ist durchaus denkbar, dass der private Schlüssel, der zu Entschlüsselung einer gesichtern Verbindung genutzt wird, hätte ausgelesen werden können.
   
**Aufgrund dieser schwerwiegenden Lücke haben wir die Schlüssel und Zertifikate für unsere Dienste getauscht.** 

Wir möchten keine unnötige Angst verbreiten. Ob die Sicherheitslücke aktiv ausgenutzt wurde, kann nicht abschliessend festgestellt werden und kann deshalb unter Umständen unentdeckt bleiben. Daher raten wir alle Passwörter bei uns zu ändern.





