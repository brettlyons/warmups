rm -rf example1

git init example1
cd example1
echo a > a.txt
git add a.txt
git commit -m "A"
echo b > b.txt
git add b.txt
git commit -m "B"

git checkout -b other
echo c > c.txt
git add c.txt
git commit -m "C"
echo d > d.txt
git add d.txt
git commit -m "D"

git checkout master
echo e > e.txt
git add e.txt
git commit -m "E"
