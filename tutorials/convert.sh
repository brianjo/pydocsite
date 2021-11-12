#!/bin/bash
for filename in ./*.ipynb; do
jupyter nbconvert "$filename".ipynb --to markdown --execute --output "$filename".md
cp "$filename".md ../website/docs/
done


