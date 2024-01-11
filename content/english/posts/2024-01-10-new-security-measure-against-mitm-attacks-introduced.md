---
layout: post
title: "New security measure against MITM attacks introduced"
date:  2024-01-11 09:00:00
translationKey: z6CGOlziqdS9RV4i3bTSiN7fxH6tzYY5FTnz6IkO
---

In November 2023, it became [public](https://notes.valdikss.org.ru/jabber.ru-mitm/) that the largest Russian Jabber server (jabber.ru) was the target of a [machine-in-the-middle attack](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) (MITM). This involved redirecting traffic from the servers, which allowed the attackers to issue valid TLS certificates and thereby capture the contents of the Jabber server. What is particularly sensitive is the fact that the servers are hosted in Germany. This gave us the impetus to introduce a new security measure that will make such attacks on systemli.org services and websites much more difficult.<!--more-->

To carry out the attack as presented by jabber.ru, the attacker must be able to manipulate the network traffic of their target (e.g. jabber.ru) in such a way that the data is redirected through a server under their control. It is extremely unlikely that this would happen without the knowledge of the data center operators. It can therefore be assumed that either state authorities initiated this measure or unauthorized access to the data center was gained. It is therefore not an attack that can easily be carried out from the outside. Due to the nature of the attack, they were able to issue valid TLS certificates themselves because jabber.ru uses Let's Encrypt and issues certificates via the [HTTP Challenge](https://letsencrypt.org/docs/challenge-types/#http-01-challenge). This made it impossible for users to recognize that their connection was not made directly to jabber.ru.

## Countermeasures

For some time now there has been the option of specifying the certificate issuers for a domain (e.g. systemli.org) via [CAA Records in DNS](https://en.wikipedia.org/wiki/DNS_Certification_Authority_Authorization). Previously we had limited the CAA records to the certificate issuer Let's Encrypt. However, this would not have prevented a MITM attack like the one that happened at jabber.ru. There is also the option of creating an account with Let's Encrypt that is authorized to obtain certificates. This gave us the welcome opportunity to restrict all of our services that receive TLS certificates to our account and anchor it in the DNS. This increases security and makes it much more difficult to carry out a MITM attack against our services.

Queries of the CAA records can be carried out using the `dig` tool:

```bash
dig systemli.org CAA +short
```

The CAA record for systemli.org now looks like this:

```text
0 issue "letsencrypt.org;accounturi=https://acme-v02.api.letsencrypt.org/acme/acct/114959303"
0 iodef "mailto:abuse@systemli.org"
```

## Further measures

An additional method to identify such attacks and their attempts is to monitor the [Certificate Transparency](https://certificate.transparency.dev/) log. This protocol contains all certificates issued by major certification authorities. This makes it possible to determine whether a certificate was issued for a domain that does not come from your own certification authority.
