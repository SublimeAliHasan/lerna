#!/bin/bash
mkdir package
cp -R lib index.js package.json package
version=`node -p "require('./package.json').version"`
fileName="$1@$version.tgz"
fileName= echo $fileName
tar -cvzf "$fileName" package
if [ ! -d ../../libs/$1/ ];
then
    mkdir ../../libs/$1
fi
mv "$fileName" ../../libs/$1/
rm -R package
