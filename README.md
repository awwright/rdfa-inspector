# RDFa Inspector

## Building

```
npm install
make
```

## Index of Files

* Makefile - build commands, run `make`
* README.md - You're looking at it
* chromium/manifest.json - Manifest file for Chromium browser extension
* chromium/*.build.js - Browserify built files
* chromium/contentScript.init.js - entry point for the extension content script, injected into webpages
* chromium/devtools.html - loaded by devtools to begin inspector
* chromium/devtools.js - script that initializes the RDFa inspector panel
* chromium/panel.html - main content for RDFa inspector panel
* chromium/panel.init.js - entry point for inspector panel script
