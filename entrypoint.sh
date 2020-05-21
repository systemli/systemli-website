#!/usr/bin/env sh

npm install -g postcss-cli
cd themes/systemli && npm i
cd ../../
hugo --minify
