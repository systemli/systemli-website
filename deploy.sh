#!/bin/bash

REMOTE_USER="systemli"
REMOTE_HOST="www-xeon.systemli.org"
REMOTE_PATH="/var/www/www.systemli.org/www"
REMOTE_PORT="2222"

jekyll build
rsync -avz --delete -e "ssh -p$REMOTE_PORT" _site/ $REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH
