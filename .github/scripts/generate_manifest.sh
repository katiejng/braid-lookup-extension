#!/bin/sh
set -eux

sed -e "s;%VERSION_NUMBER%;$1;g" dist/manifest_template.json > dist/manifest.json
