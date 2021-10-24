#!/bin/sh

if [[ "$OSTYPE" == "darwin"* ]]; then
  echo "DARWIN OS-TYPE";
  grep -rl node_modules/@material/ -e '@import \@material' | xargs sed -i '' -e 's/@material/~@material/g'
else
  echo "LINUX OS-TYPE";
  grep -rl node_modules/@material/ -e '@import \@material' | xargs sed -i 's/@material/~@material/g'
fi