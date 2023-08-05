#! /usr/bin/bash
git checkout master
git pull

git checkout dev 
git pull
git merge master
git push

# Other branches depend on version e,g git checkout master && git checkout v2