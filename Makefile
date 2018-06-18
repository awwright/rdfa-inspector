# You can watch for changes and run this Makefile with `nodemon -x make` or `watch make`


BROWSERIFY=./node_modules/.bin/browserify

PRODUCTS = $(CHROMIUM_PRODUCTS)

CHROMIUM_PRODUCTS = \
	chromium/contentScript.build.js \
	chromium/panel.build.js \
	chromium/background.build.js \


all: chromium

chromium: $(CHROMIUM_PRODUCTS)

chromium/contentScript.build.js: chromium/contentScript.init.js
	$(BROWSERIFY) -e $< > $@

chromium/panel.build.js: chromium/panel.init.js
	$(BROWSERIFY) -e $< > $@

chromium/background.build.js: chromium/background.init.js
	$(BROWSERIFY) -e $< > $@

clean:
	rm -f $(PRODUCTS)

.PHONY: chromium test clean
.DELETE_ON_ERROR:
