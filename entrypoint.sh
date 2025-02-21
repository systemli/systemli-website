#!/usr/bin/env sh

cd themes/systemli && npm ci
cd ../../
hugo --minify
