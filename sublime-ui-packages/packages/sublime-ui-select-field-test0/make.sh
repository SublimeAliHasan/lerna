#!/bin/bash
mkdir package
cp -R lib index.js package.json package
tar -cvzf $1.tgz package
mv $1.tgz ../../libs/
rm -R package
