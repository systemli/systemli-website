#!/usr/bin/env sh

cd themes/systemli && npm i
cd ../../
hugo --minify
