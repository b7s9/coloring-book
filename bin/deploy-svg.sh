#!/bin/bash
local_asset_dir='src/SVGs/'
remote_asset_dir='/var/www/b7s9.com/html/coloring-book/src/SVGs/'

echo ''
echo 'This script relies on Bens private key to the remote server.'
echo ''

# if [ -z "$1" ]
# then
# 	# run script for all assets 
#     # echo "No argument supplied"
# else
# 	# run script for specific asset
# 	# echo $1
# fi

# zipping assets
if [ ! -d "temp/" ]; then
	mkdir temp
fi
zip -r svg.zip $local_asset_dir
mv svg.zip temp/svg.zip

# scp to remote
echo 'Deploying assets to remote'
scp -r $local_asset_dir schenerfriend@b7s9.com:$remote_asset_dir

# clean up
rm -r temp
