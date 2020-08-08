#!/bin/bash
local_asset_dir='src/SVGs/'
remote_asset_dir='/var/www/b7s9.com/html/coloring-book/test/'

if [ -z "$1" ]
then
	# run script for all assets 
    # echo "No argument supplied"
else
	# run script for specific asset
	# echo $1
fi

# zipping assets
# zip "${local_asset_dir}svg.zip" "${local_asset_dir}2.svg" "${local_asset_dir}3.svg"

# scp to remote
echo 'Deploying assets to remote'
scp -r $local_asset_dir schenerfriend@b7s9.com:$remote_asset_dir
