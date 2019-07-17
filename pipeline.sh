#!/bin/sh -e
npm install
npx prettier --check './{,!(dist|node_modules)/**}/*.js'
npx eslint './{,!(dist|node_modules)/**}/*.js'
npx mocha --require esm './{,!(dist|node_modules)/**}/test.js'
npx rollup --file dist/bundle.js --format esm index.js