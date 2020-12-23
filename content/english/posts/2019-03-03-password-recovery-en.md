---
layout: post
title:  "New Feature: e-mail password recovery"
aliases:
    - /en/2019/03/03/password-recovery-en.html
date:   2019-03-03 20:00:00
translationKey: 21a8635a0fdc2a7c8b75c2dfee3bcd12
---

During the last months, we have put a lot of work in our [invitation and administration portal](https://users.systemli.org). Originally, we developed this tool in 2014 to simplify the access to our e-mail service. Later, we added  a [cloud storage with several features (calendar, contacts, etc.)]({{< ref "2016-03-26-owncloud-en" >}}) to systemli.org mail accounts. Both are valuable features for our users, we hope. Today, we are very happy to present a new important feature: **e-mail password recovery**.

<!--more-->


Recovery means that you can set a new password for your e-mail account if you lost your previous one. This function presented us with a difficult problem.  Generally, we want to store as few personal information about our users as possible. That's why it was not an option to save a second e-mail address or a phone number, that could easily be used to identify our users. Besides, it was important for us to build a recovery process that doesn't put your account at risk. For those reasons, we developed a password recovery process that is as secure as possible and where your store your identifier yourself.

As of now, during the creation of a new e-mail account we generate a **recovery code** and display it one-time. You have to store this code in a **safe place**. If you already have an e-mail account, you have to login into our [invitation and administration portal](https://users.systemli.org) and generate your **recovery code**. With that code you can start the recovery process ("[Password forgotten?](https://users.systemli.org/recovery)").

In case the recovery process is started, you have to wait  48 hours before you can reset your password. Automatically, an e-mail will be sent to your account. If the process was started incorrectly, it can be terminated during this period. Both measures are there to ensure that an unauthorized party can't take over your account. We hope to provide a useful function with which you can regain access to your account without the help of an admin or handing out personal data.

So far, the question how to store your recovery code remains unanswered. We strongly advise you not to store a printed version at home. You could save the recovery code in a password manager. Or you can cut it into pieces and hand it to your best friends. By doing so,  you can only restore your password all together. As long as you know your password, you can always create a new recovery code. The previous code will be invalid afterwards. 

If you have any feedback, remarks or critique, please [tell us](/en/kontakt.html).Please take this invitation seriously and get in touch with us. This is not a boilerplate.  We rely on your feedback to improve our services.
