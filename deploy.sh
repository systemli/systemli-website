#!/bin/bash

REMOTE_USER="systemli"
REMOTE_HOST="www-vmserv.systemli.org"
REMOTE_HOST2="www-xeon.systemli.org"
REMOTE_PATH="/var/www/www.systemli.org/www"
REMOTE_PORT="22"
REMOTE_PORT2="2222"

# update site
jekyll build

# Sync updated site to webservers
rsync -vrltgoDz --delete -e "ssh -p$REMOTE_PORT" ./_site/ $REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH
rsync -vrltgoDz --delete -e "ssh -p$REMOTE_PORT2" ./_site/ $REMOTE_USER@$REMOTE_HOST2:$REMOTE_PATH
