#!/usr/bin/env sh

cd themes/systemli && yarn
cd ../../
hugo --minify
