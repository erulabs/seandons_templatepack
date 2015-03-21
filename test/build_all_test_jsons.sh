#!/bin/bash

rm -rfv tmp/*

for i in test/test_sets/*.json
do
  echo "Building ${i}"
  fastfood --template-pack=`pwd` --cookbooks tmp/ build ${i}
done
