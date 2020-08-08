#!/bin/bash
local_dir='src/'
remote_dir='/var/www/b7s9.com/html/coloring-book/'

# this uses a private key file so only Ben can run it
echo 'Deploying assets to remote'
scp -r -C $local_dir schenerfriend@b7s9.com:$remote_dir
