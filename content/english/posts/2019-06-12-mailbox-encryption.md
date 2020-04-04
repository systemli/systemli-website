---
layout: post
title: "New feature: mailbox encryption"
date: 2019-06-12 00:00:00
---

* systemli.org uses mailbox encryption
* You should [generate a recovery token]({% post_url 2019-03-03-password-recovery-en %}) in order to activate it
* Nevertheless, you should encrypt your mail using GnuPG

We're proud to announce an important new feature: encryption of your mails on our servers, also known as mailbox encryption. Thanks to this technology, your mails will be encrypted using your password on our servers. One has to know your personal password (or recovery token) for decrypting and reading your mail. In other words, even malicious attackers with access to our servers would not be able to read your mail.

<!--more-->

### Background information about and limitations of mailbox encryption

Unfortunately, end-to-end encryption for mail (e.g. with GnuPG) is still rather uncommon. By default, most mails are sent unencrypted and thus are readable for admins and malicious third parties that have access to the server systems. Therefore we consider encryption technologies that further protect mail from unwarranted accesses to be critical and actively push them.

But those technologies have limitations. Any server-side encryption can also be defeated on the server. This also holds true for mailbox encryption: you still have to trust us, the admins. Theoretically we - and anybody with access to the server - could log your password when you log in and use it to read your encrypted mails. Of course we won't do this. But we think it's important to point out the possibility. The only way to protect your mails from these attacks is to use end-to-end encryption. Therefore - once again - our plea: use GnuPG and persuade your friends to do the same.

Nevertheless you should use our mailbox encryption as it helps protecting your metadata (who, when, subject) better than GnuPG does.

Moreover you absolutely should generate a recovery token for your account at [users.systemli.org](https://users.systemli.org/) so that you're able to recover your account in case of password loss. Details about that can be found [in an earlier article]({% post_url 2019-03-03-password-recovery-en %}).
