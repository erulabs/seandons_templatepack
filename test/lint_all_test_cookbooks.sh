#!/bin/bash

for i in tmp/*
do
  rubocop -c .rubocop.yml ${i}
  foodcritic --tags ~FC041 ${i}
done
