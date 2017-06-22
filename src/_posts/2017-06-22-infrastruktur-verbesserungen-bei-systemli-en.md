---
layout: post
lang: en
title:  "Welcome to the future: systemli.org improves its infrastructure"
date:   2017-06-22 20:00:00
translation_id: ede1b180a1b3ee2847b83f469ea4ee12
---

Over the last months, we at systemli.org improved some of our technical infrastructure. We don´t want to keep these improvements from you.

**tl;dr:**

  * Your mailbox is better protected from spam
  * If possible, we enforce encrypted connection when sending out your mails
  * From now on, we are available by IPv6
  * Our DNS zones are secured by DNSSEC
  * We offer DANE records to prevent forged SSL certificates being contributed in our name

## Automated spam filter 

By using [SpamAssassin](https://en.wikipedia.org/wiki/SpamAssassin) we started to automatically filter your spam to keep it away from your mailbox.
Emails, which are detected as spam are moved to the "Junk" file. Emails will be automatically deleted from the "Junk" file after 30 days. 
If an email is moved to the "Junk" folder wrongly, please inform us immediately. 

If you are a system administrator and you want to know how our spamassassin is configurated, you can follow our configuration by looking at our [SpamAssassin Ansible role](https://github.com/systemli/ansible-role-spamassassin) 

## Mandatory TLS: Enforced transport encryption for outogoing mail

We developed a small tool named [mail-tls-helper](https://github.com/systemli/mail-tls-helper) which has been running on our mail server for a couple of months now. The tool is screening the outgoing connections to other mail servers and checking if these are encrypted using TLS. If this is the case, the domain of the receiving address will be added to a list of domains, for which our mail server allows only TLS encryption being used.

Therefore, we enforce TLS encryption everywhere where it has been working before. The idea behind it is to prevent so-called [downgrade attacks](https://en.wikipedia.org/wiki/Downgrade_attack)

Additionally, once a month the tool sends an info mail to the postmaster of all domains whose server do not offer TLS encryption, requesting to change that.

Currently the tool only supports Postfix as mail server. If you are running a mail server using Postfix, we would be happy if you´d like to use this tool, too. We are also happy to hear your feedback, ideas and patches.

## IPv6: Computer addresses of the next generation

All our services are now available using [IPv6](https://en.wikipedia.org/wiki/IPv6).

About the background: In networks as the Internet every system has an IP address (e.g. `198.167.223.214`) under which it is reached by other computers. When the IP protocoll 1981 in its version (IPv4) has been seen off, it was not predictable that at some point so many different system (laptops, server, smartphones, drones, TVs, light bulbs, surveillance cameras, fridges etc.) would emerge, which all need their own unique address.

By now, the number of IPv4 addresses is running short. Since 1998 therefore its successor IPv6 has been installed, which offers so many addresses that in theory every atom on the earth surface could have its own address. This should be sufficient for now. The IPv6 addresses belong to the hexadecimal system and look slightly different, e.g. `2001:67c:1350:e000::3`.

Important to note is the availablity over IPv6 especailly in regions of the world in which the allocation of IPv4 addesses is already highly regulated, for example in the asian-pacific region.

Only recently we have been reaching the future: All our services are now available by IPv6.


## DNSSEC: Cryptographic security for domain names

As of late, our DNS zones are signed by [DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) keys and we published for all our services [DANE Records](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities) 

The [Domain Name System](https://de.wikipedia.org/wiki/Domain_Name_System) (DNS) is a another protocoll of the Stone age of the internet. Purpose of DNS is to translate IP addresses (see above) into word-based domain names. For example, `mail.systemli.org` is changed into the IPv4 address `198.167.223.214` and the IPv6 address `2001:67c:1350:e000::3`. 

Unfortunatly, DNS is not highly secured. So-called [DNS Spoofing](https://en.wikipedia.org/wiki/DNS_spoofing) attacks enable easy, forged answers to DNS requests. Therefore, people are offered forged addresses and might connect unintentionally with a wrong (malicious) server.

DNSSEC offers protection from these attacks. The zones (e.g. the '.org'-zone und die 'systemli.org'-zone) use a cryptographic signatue that cannot be forged. If your operating system uses DNSSEC, it knows the keys for the so-called root zone. In the root zone, the key for the 'org' zone is looked up and in this the key for 'systemli.org'-zone. In the last one, the signature fpr the entry 'mail.systemli.org' is found. Only if the whole chain of keys is correct, the request is accepted as valid.

The problem with DNSSEC is that it is only supported by a couple of operating system. Therefore we advise you to install a [DNSSEC-Plugin](https://www.dnssec-validator.cz/pages/download.html) in your web browser. By doing so, you at least have DNSSEC security for websites.


## DANE: TLS certificates in DNS

Another benefit of DNSSEC is that you can use the cryptographic validated DNS now as a confidental place to provide information. [DANE](https://de.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities)-Protokoll defines a standard to file details about encryption certificates in DNS using so-called TLSA records.

For good reasons (https://www.eff.org/deeplinks/2010/03/researchers-reveal-likelihood-governments-fake-ssl) (https://www.wired.com/2010/03/packet-forensics/), you should not trust (https://blog.chaosradio.ccc.de/index.php/2011/09/29/cr-172-ssl-oder-einmal-aufmachen-bitte/, german only) CAs, which are authorized to issue officiall TLS/ SSL certifactes

By using DANE, we as a service provider can file information about our [TLS certificates](https://en.wikipedia.org/wiki/Transport_Layer_Security) in our DNS zones and you can check if the server offered certificate is really accorded with the information from our DNS entries.

We filed for all services with transport encryption TLSA record in DNS. This TLSA records show that fopur our services only certificates by [Let's Encrypt](https://letsencrypt.org/) or [Gandi](https://www.gandi.net/) are valid.

For the verifiction of websites, you can use [DNSSEC-Plugin](https://www.dnssec-validator.cz/pages/download.html) as mentioned above. For our mail server you can check the DANE recods for example at [dane.sys4.de](https://dane.sys4.de/smtp/systemli.org).
