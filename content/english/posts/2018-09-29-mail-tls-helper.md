---
layout: post
title:  "Mail-TLS-Helper"
aliases:
    - /en/2018/09/29/mail-tls-helper-en.html
date:   2018-09-29 17:00:00
translationKey: 83bc7f5aa350919ab04e440fc26305f5
---
Already in 2017, we had announced to work onto enabling mandatory 
[transport encryption of e-mails]({{< ref "2017-06-22-systemli-improves-its-infrastructure" >}}). People have been 
saying for a long time this is impossible, because e-mail infrastructure is too old and badly maintained. Our tests in 
the last 1,5 years showed us a different picture.

We started with 2-3% of e-mails without transport encryption. Since then we have been able to bush this below 1% with 
[mail-tls-helper](https://github.com/systemli/mail-tls-helper).

This very small number of e-mail operators which do not enable TLS jeopardizes the security of all users. Although we 
informed these operators regularly about the bad state of their systems, only few showed will to improve. Therefore, we 
stopped the dispatch of our 
[e-mail reminder](https://github.com/systemli/mail-tls-helper/blob/master/mail-tls-helper.py#L120). Additionally, we 
have recognized that many operators do not receive `postmaster@<domain>`, despite being an 
[internet standard](https://en.wikipedia.org/wiki/Postmaster_%28computing%29).

Then again, some people found [mail-tls-helper](https://github.com/systemli/mail-tls-helper/) pretty useful and 
enhanced it into a [monitoring plugin](https://github.com/systemli/mail-tls-helper/pull/23#issuecomment-398909504).
