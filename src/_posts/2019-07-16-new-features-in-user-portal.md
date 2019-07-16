---
layout: post
lang: en
title: New features in user portal
date: 2019-07-16 18:00:00
translation_id: d0006a92f5acab6b182ad706dfe77dc2
---
![haveibeenpwned](/assets/img/haveibeenpwned.png)
We have increased the password security in the most recent version of our [user portals](https://users.systemli.org).
If you set a new password, it is automatically tested against the [password database of "Have I been pwned"](https://haveibeenpwned.com/Passwords).
In this process, only a part of your password hash is sent to the service.
"Have I been pwned" replies with a list of possible matches from databases that are used by password crackers.
Lastly, our user portal checks if there is an actual match and shows you a warning if necessary.
<!--more-->
[Other software](https://haveibeenpwned.com/API/Consumers) also offers this functionality.
The integration with a password manager like [KeePass](https://github.com/andrew-schofield/keepass2-haveibeenpwned) or [Pass](https://gitlab.com/darnir/pass-audit) is especially useful.

![language_switcher](/assets/img/language_switcher.png)
Our [user portal](https://users.systemli.org) now supports the languages English, German, Spanish, Portuguese and Bokmål.
You should be automatically redirected to the applicable language or you can choose it in the upper right.
Please help us to improve these translations or add new ones at [Weblate](https://hosted.weblate.org/engage/userli/)!
