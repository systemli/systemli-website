#!/usr/bin/env sh

cd themes/systemli && yarn
cd ../../
hugo version
hugo --minify
