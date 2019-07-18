#!/bin/sh
npx nodemon \
  --ignore dist \
  --ignore node_modules \
  --exec './pipeline.sh && python -m SimpleHTTPServer'