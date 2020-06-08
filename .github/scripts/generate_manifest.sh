#!/bin/sh
set -euxo pipefail

sed -e "s;%VERSION_NUMBER%;$1;g" dist/manifest_template.json > dist/manifest.json
