#!/bin/bash
mkdir package
cp -R lib index.js package.json package
version=`npm view ./ version`
echo $1
fileName="$1@$version.tgz"
fileName= echo $fileName
tar -cvzf "$fileName" package
mv "$fileName" ../../libs/
rm -R package
