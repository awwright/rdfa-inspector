// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

"use strict";

console.log('devtools.js');

var page_getProperties = function(node) {
//  var copy = [
//	  {a:1}
//  ];
  return {
	  rdfa: node.rdfaContext,
	  node: node,
  };
}

chrome.devtools.panels.elements.createSidebarPane(
	"RDFa",
	function(sidebar) {
		function updateElementProperties() {
			sidebar.setExpression("(" + page_getProperties.toString() + ")($0)");
		}
		updateElementProperties();
		chrome.devtools.panels.elements.onSelectionChanged.addListener(updateElementProperties);
	}
);

chrome.devtools.panels.create(
	"RDFa",
	"FontPicker.png",
	"panel.html",
	function(panel) {
		var reactPanel = null;
//		chrome.tabs.executeScript(null, {file:'contentScript.build.js'});
//		console.log('injected contentScript.build.js');
		panel.onShown.addListener(function(window) {
			//window.document.body.style.backgroundColor = 'red';
			// Get RDFa data from executeScript and display it in window.document.body
		});
		panel.onHidden.addListener(function() {
		});
	}
);


