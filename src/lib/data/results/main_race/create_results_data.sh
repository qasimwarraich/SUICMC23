#!/bin/bash

mlr --icsv --ojson sort -nr points -n time  suicmc23results.csv > results.json

echo "export const data = \`" > results.ts
cat results.json >> results.ts
echo "\`;" >> results.ts
