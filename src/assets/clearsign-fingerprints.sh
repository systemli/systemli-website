#!/bin/sh

# update date in fingerprints.txt to today
sed -i -e "s/^\(Date of last update: \)[0-9-]\+$/\1$(date +%F)/" fingerprints.txt

# gpg-sign finterprints.txt
gpg -u admin@systemli.org --clearsign fingerprints.txt
