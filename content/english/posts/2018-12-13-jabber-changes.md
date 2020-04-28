---
layout: post
title:  "Jabber changes"
date:   2018-12-13 18:30:00
translation_key: 12220b50d7a232bab4c753c3dd2fcce2
---

Today, we switch the TLS certificate of our jabber server to [LetsEncrypt](https://letsencrypt.org/).
Thus, our last long-lasting fingerprint is gone. Read more about this in our [original announcement]({% post_url 2017-10-18-Lets-Encrypt-en %}).

Furthermore, we're now saving on week of multi user chat (MUC) history on disk.
Thus, we can restart the server without you loosing your chat history.
Of course, we don't look into your history and delete it automatically after one week.
But if you don't like it, you can disable this in MUC config or use an XMPP client that support OMEMO (e.g. [Conversations](https://conversations.im/)).
With OMEMO it should be possible to encrypt MUCs also.

Last, we also changed [https://jabber.systemli.org](https://jabber.systemli.org) to [Converse](https://conversejs.org/).
The old web jabber software was not maintained anymore.
Converse supports OMEMO, but by now only in 1-to-1 conversations.
If you can help us create a custom build of Conversations, [please contact us](/en/kontakt.html). 
