---
layout: post
title: "New features in user portal"
aliases:
    - /en/2019/07/19/new-features-in-user-portal.html
date: 2019-07-19 12:00:00
translationKey: d0006a92f5acab6b182ad706dfe77dc2
postImage: /assets/img/haveibeenpwned.png
---
We have increased the password security in the most recent version of our [user portals](https://users.systemli.org).
If you set a new password, it is automatically tested against the [password database of "Have I been pwned"](https://haveibeenpwned.com/Passwords).
First, your password "test" is transformed with SHA-1 hash function to `a94a8fe5ccb19ba61c4c0873d391e987982fbbd3`.

Then, the first five characters `a94a8` of this hash are sent to "Have I been pwned".
This service replies with a list of possible matches from databases that are used by password crackers.
Lastly, our user portal checks if there is an actual match and shows you a warning if necessary.
"Have I been pwned" never sees your actual password, parts of it or your IP address.
[Other software](https://haveibeenpwned.com/API/Consumers) also offers this functionality.
The integration with a password manager like [KeePass](https://github.com/andrew-schofield/keepass2-haveibeenpwned) or
[Pass](https://gitlab.com/darnir/pass-audit) is especially useful.

{{< figure
    src="/assets/img/language_switcher.png"
    alt="Language Switcher"
    caption="Language switcher in user portal"
    class="block md:float-right md:justify-end md:my-4 md:ml-4"
>}}

Our [user portal](https://users.systemli.org) now supports the languages English, German, Spanish, Portuguese and
Bokmål.
You should be automatically redirected to the applicable language or you can choose it in the upper right.
Please help us to improve these translations or add new ones at [Weblate](https://hosted.weblate.org/engage/userli/)!
