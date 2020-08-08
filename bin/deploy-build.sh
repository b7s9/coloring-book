#!/bin/bash
local_dir='src/'
remote_dir='/var/www/b7s9.com/html/coloring-book/'

echo '\r\n'
echo 'This script relies on Bens private key to the remote server.'
echo '\r\n'

# this uses a private key file so only Ben can run it
echo 'Deploying assets to remote'
scp -r -C $local_dir schenerfriend@b7s9.com:$remote_dir
