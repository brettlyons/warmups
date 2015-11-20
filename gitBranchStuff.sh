#!/bin/sh
rm -rf gitFoo

git init gitFoo
cd gitFoo
echo "May the foo be with you" > newFoo.txt
git add newFoo.txt
git commit -m "A Initial Commit, added newFoo.txt"
echo "the foo is strong with this one" >> strongFoo.txt
git add strongFoo.txt
git commit -m "B added strongFoo.txt content"

git checkout -b otherFooBranch
echo "The foo is everywhere, all around us" >> allFoo.txt
git add allFoo.txt
git commit -m "C added a line to allFoo.txt"
echo "Luminous beings are we, not this crude baz" >> luminousFoo.txt
git add luminousFoo.txt
git commit -m "D added another line to luminousFoo.txt"
echo "Luminous beings are we, not this crude matter" > luminousFoo.txt
git add luminousFoo.txt
git commit -m "Some other D added"

git checkout master
echo "There is no disturbance in the foo at this time" >> calmFoo.txt
git add calmFoo.txt
git commit -m "E Another line to calmFoo.txt"

