#!/usr/bin/env sh

cd themes/systemli && yarn
cd ../../
npm install -g postcss-cli
hugo --minify
