#!/bin/bash

# all files
a_flag=''

# fonts 
f_flag=''

# html
h_flag=''

# images 
i_flag=''

# js 
j_flag=''

# svgs
s_flag=''

# thumbnails
t_flag=''

# files 
files=''

# verbose 
verbose='false'

print_usage() {
  printf "Usage: ..."
}

# this sets the values if the flags are passed in 
while getopts 'afhijstg:v' flag; do
  case "${flag}" in
    a) a_flag='true' ;;
    f) f_flag='true' ;;
    h) h_flag='true' ;;
    i) i_flag='true' ;;
    j) j_flag='true' ;;
    s) s_flag='true' ;;
    t) t_flag='true' ;;
    g) files="${OPTARG}" ;;
    v) verbose='true' ;;
    *) print_usage
       exit 1 ;;
  esac
done

if [ ! -d dist/ ]; then
  mkdir dist/
fi

if [ $f_flag ] || [ $a_flag ]
then
echo "copying fonts"
if [ -d dist/fonts ]; then
	rm -R dist/fonts
fi
cp -R src/fonts/ dist/fonts/
fi

if [ $h_flag ] || [ $a_flag ]
then
echo "copying html"
rm dist/*.html
find src/ -name \*.html -exec cp {} dist \;
fi

if [ $j_flag ] || [ $a_flag ]
then
echo "copying js"
if [ -d dist/js ]; then
	rm -R dist/js
fi
cp -R src/js/ dist/js/
fi

if [ $i_flag ] || [ $a_flag ]
then
echo "copying images"
if [ -d dist/images ]; then
	rm -R dist/images
fi
cp -R src/images/ dist/images/
fi

if [ $s_flag ] || [ $a_flag ]
then
echo "copying svgs"
if [ -d dist/SVGs ]; then
	rm -R dist/SVGs
fi
cp -R src/SVGs/ dist/SVGs/
fi

if [ $t_flag ] || [ $a_flag ]
then
echo "copying thumbnails"
if [ -d dist/thumbnails ]; then
	rm -R dist/thumbnails
fi
cp -R src/thumbnails/ dist/thumbnails/
fi

