#!/bin/bash

REMOTE_USER="systemli"
REMOTE_HOST="www-vmserv.systemli.org"
REMOTE_HOST2="www-xeon.systemli.org"
REMOTE_PATH="/var/www/www.systemli.org/www"
REMOTE_PORT="22"
REMOTE_PORT2="2222"

UPDATE_FPS="${UPDATE_FPS:-no}"

# optionally update date in assets/fingerprints.txt
[ "$UPDATE_FPS" = "yes" ] && \
        sed -i -e "s/^\(Date of last update: \)[0-9-]\+$/\1$(date +%F)/" ./src/assets/fingerprints.txt

# update site
jekyll build

# optionally update signed assets/fingerprints.txt
if [ "$UPDATE_FPS" = "yes" ]; then
    # gpg-sign assets/fingerprints.txt
    if gpg --yes -u admin@systemli.org --clearsign ./_site/assets/fingerprints.txt; then
        # copy updated signed assets/fingerprints.txt
        cp -a ./_site/assets/fingerprints.txt.asc ./src/assets/fingerprints.txt.asc
        # commit updated assets/fingerprints.txt.asc to git
        git commit -m "updated assets/fingerprints.txt{,.asc}" ./src/assets/fingerprints.txt{,.asc}
    fi
fi

# Sync updated site to webservers
rsync -vrltgoDz --delete -e "ssh -p$REMOTE_PORT" ./_site/ $REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH
rsync -vrltgoDz --delete -e "ssh -p$REMOTE_PORT2" ./_site/ $REMOTE_USER@$REMOTE_HOST2:$REMOTE_PATH
