---
layout: page
title: Metadata cleaner
aliases:
    - /en/service/metadata.html
menu_group: service
translation_key: 000a6d7ddead6291f30892e804886274
icon: metadata.svg
description: Clean all kinds of files from revealing metadata
beta: true
links:
    web:
        url: https://metadata.systemli.org
        text: Web Interface
---
At [metadata.systemli.org](https://metadata.systemli.org) you can upload files and let them be cleaned of metadata. That's particularly useful to obfuscate autors and editors of the files. To remove metadata, the program [mat2](https://0xacab.org/jvoisin/mat2) is used.

**Important:** It's much better and more secure to install and run [mat2](https://0xacab.org/jvoisin/mat2) on your own computer. When using this webservice, you have to trust us. That's not necessary when running the program on your own computer.

We configured the service as secure as possible:

* The service is accessible via transport encryption only
* Uploaded files will be stored in an encrypted container. The encryption key is randomly generated and we don't know it
* Uploaded files will be deleted automatically when they're downloaded
* Files older than five minutes will be deleted immediately

The maximum allowed size of uploaded files is 128MB.

### Onion Service Address

```
liqr2cbsjzxmpw6savgh274tuzl34x6cd56h7m7ceatnrokveffm66ad.onion
```
