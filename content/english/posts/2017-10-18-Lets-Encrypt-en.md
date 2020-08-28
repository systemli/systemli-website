---
layout: post
title:  "Long goodbye to SSL fingerprints"
aliases:
    - /en/2017/10/18/Lets-Encrypt-en.html
date: 2017-10-18 10:00:00
translation_key: eaeafa80a1b4ee2847b83f469ea4ee18
---

For years we´ve been urging you to check the fingerprints of our SSL certificates - this is (almost) over.

![Let's Encrypt Logo](/assets/img/letsencrypt-logo-horizontal.svg)
Up to now, we had to use you donations to buy expensive SSL certificates from certificate authorities. We did that so your browser doesn't complain about the connection to systemli.org being insecure. For a while now, the initiative [Let's Encrypt](https://letsencrypt.org/), brought forward by [EFF](https://www.eff.org/) und [Mozilla](https://www.mozilla.org/), offers SSL certificates for free.
So far we used certificates, which have been valid for up to two years. The connected fingerprints of these certificates have been in our main page. With these fingerprints, every user was able to retrace, if their SSL certificate was valid or if they were victims of a Machine-In-The-Middle-Attack.
The validity of the free certificates from Let's Encrypt is merely three months. We had to maintain and check these new fingerprints constantly on our web site. This is not as viable. Therefore, we will not publish the fingerprints for Let´s Encrypt certificates anymore.

Now some information for these of you, who did really check the fingerprints before ;)

[We implemented new techniques]({% post_url 2017-06-22-infrastruktur-verbesserungen-bei-systemli-en %}) so the verifiable authenticity of your communication with us would not be decreased. Therefore, our domains are secured with [DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) so that the source of the DNS information can be verified. Furthermore, we deposited [CAA records](https://en.wikipedia.org/wiki/DNS_Certification_Authority_Authorization) in our DNS system to determine which certificate authorities can issue certificates for us. These are Let's Encrypt and Gandi.net. The hashes of the certificates of these are deposited as [TLSA records](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities) in our DNS. To compare the hashes automatically, you can use e.g. the browser plug-in [DNSSEC/TLSA-Validator](https://www.dnssec-validator.cz).
