#! /bin/bash
# Update remote develop branch, merge it into master branch, and update remote
# master branch, thus updating the live webpage with the lastest changes from the develop branch.

git push origin develop
git checkout master
git merge --no-ff develop
git push origin master