Bundle parser.js with:
```
browserify parser.js -o bundle.js --node --im -s parser.js
```

Paste bundle.js directly without modification into Workato

(Optionally) Minify:
```
minify bundle.js > mini_bundle.js
```
