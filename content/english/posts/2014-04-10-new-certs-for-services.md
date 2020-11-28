---
layout: post
title:  "New certificates for our services"
aliases:
    - /en/update/2014/04/10/new-certs-for-services.html
date:   2014-04-10 10:00:00
excerpt: Because of the recent events regarding the security gap in OpenSSL we have decided to generate new keys and certificates for our services. As always, you can find the new fingerprints on our website. 
translationKey: a0d46248bd4a5b95e8dae8b6e79b4129
---

**Background**

In the night of the 7/8 April a fault in the OpenSSL library (used for encrypted internet connections) that already existed for two years has been made public. The fault known as “Heartbleed Bug” allows extracting data from the memory in an encrypted internet connection.  Because of this, it was possible to steal access or session data of encrypted connection users. But it is not known if active attacks through this fault really happened.
The ciphers that are predominantly used for SSL-connections with our servers use features of Perfect Forward Secrecy since quite a while. This means, even if it would have been possible to read our old key, the SSL connection up to this point was still protected by an additional encryption. We are using Perfect Forward Secrecy since about a year on a regular basis.

**Consequences**

As already mentioned, the security gab has existed for more than two years and the possibility cannot be excluded that someone already discovered the problem before its recent actual publication. Furthermore it cannot be ruled out that someone used the short time frame between the publication of the fault and its elimination to read encrypted data.
This could have severe consequences: If one of our users was active on our system in the time frame between discovering and eliminating the fault (ca. 4 hours), an assailant would have had the possibility to steal data from this person. These may have been passwords or the content of e-mails. Furthermore it is possible that the private key for decrypting a secure connection could have been read out.

**Because of this major security gap we have changed the keys and certificates of our services.**

We don’t want to create unnecessary panic. If the vulnerability really has been actively used cannot be said for sure and may never be known. Therefore we recommend that you change all your passwords that you use on our services.

