#!/bin/sh

DATE=$(date +"%Y-%m-%d")
ID=$(pwgen -s 33 1)

gen_post() {
cat << EOF
---
layout: post
lang: $1
title: "$2"
date:  $DATE 12:00:00
translation_id: $ID
---
EOF
}

rewrite() {
echo $1 | tr '[:upper:]' '[:lower:]' | tr ' ' '-'
}

echo Please enter German name of new blogpost:
read GERMAN
echo Please enter English name of new blogpost:
read ENGLISH

# create german version
gen_post de "$GERMAN" > src/_posts/$DATE-$(rewrite "$GERMAN").md

# create english version
gen_post en "$ENGLISH" > src/_posts/$DATE-$(rewrite "$ENGLISH").md

echo Please add texts to src/_posts/$DATE-$(rewrite "$GERMAN").md and src/_posts/$DATE-$(rewrite "$ENGLISH").md and adjust front matter if you like.
