#!/bin/bash
local_asset_dir='src/SVGs/'

# zipping assets
if [ ! -d "temp/" ]; then
	mkdir temp
fi
zip -r svg.zip $local_asset_dir
mv svg.zip temp/svg.zip
