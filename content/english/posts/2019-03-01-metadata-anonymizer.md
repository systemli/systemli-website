---
layout: post
title:  "metadata.systemli.org: New tool to remove metadata"
aliases:
    - /en/2019/03/01/metadata-anonymizer-en.html
date:   2019-03-01 12:00:00
translationKey: 21a8635a0fdc2a7c8b75c2dfee3bcd56
---
Starting today, we have a new service: [metadata.systemli.org](https://metadata.systemli.org/), a metadata cleaner.

At [metadata.systemli.org](https://metadata.systemli.org/) you can upload files and let them be cleaned of metadata. 
That's particularly useful to obfuscate autors and editors of the files. To remove metadata, the program 
[mat2](https://0xacab.org/jvoisin/mat2) is used.

**Important:** It's much better and more secure to install and run [mat2](https://0xacab.org/jvoisin/mat2) on your own 
computer. When using this webservice, you have to trust us. That's not necessary when running the program on your own 
computer.

Since running mat2 locally is not an option for everybody (e.g. for people who run Windows), we decided to host the 
service despite the valid security concerns.

[Here you find the metadata cleaner service description]({{< ref "metadata" >}})

[Here you go directly to the metadata cleaner](https://metadata.systemli.org)
