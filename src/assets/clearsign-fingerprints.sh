#!/bin/sh

# determine the base directory of this script
basedir="$(dirname $0)"

# update date in fingerprints.txt to today
sed -i -e "s/^\(Date of last update: \)[0-9-]\+$/\1$(date +%F)/" $basedir/fingerprints.txt

# remove old fingerprints
rm $basedir/fingerprint.txt.asc

# gpg-sign finterprints.txt
gpg -u admin@systemli.org --clearsign $basedir/fingerprints.txt
