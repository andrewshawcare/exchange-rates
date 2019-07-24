#!/bin/sh -e
npm install
npx prettier --check './{,!(dist|node_modules)/**}/*.js'
npx eslint './{,!(dist|node_modules)/**}/*.js'
npx jasmine --config=jasmine.json
npx rollup --config=rollup.config.js