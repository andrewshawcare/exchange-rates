#!/bin/sh
npx nodemon \
  --ignore package-lock.json \
  --ignore dist \
  --ignore node_modules \
  --exec './pipeline.sh && python3 -m http.server'