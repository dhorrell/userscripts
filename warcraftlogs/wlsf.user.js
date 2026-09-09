// ==UserScript==
// @name         Warcraftlogs - Hide bottom sticky footer
// @version      2.3
// @author       danh
// @description  Remove the bottom banner on Warcraftlogs for a better user experience
// @match        https://www.warcraftlogs.com/*
// @grant        none
// @icon		 https://assets.rpglogs.com/img/warcraft/favicon.png
// @run-at       document-end
// ==/UserScript==
(function() {
    'use strict';
    var footer = document.getElementById("content-and-footer").children[4];
	if (footer != null) {
		footer.style = "display: none;";
	}
	var profileAdd = document.getElementById("gear-box-ad");
	if (profileAdd != null) {
		profileAdd.style = "display: none;";
	}
	var sideAdd = document.getElementById("tile-content");
	if (sideAdd != null) {
		var si = sideAdd.parentElement.children[1].children[0];
		if (si != null) {
			si.style = "display: none;";
		}
	}
	var side = document.getElementById("right-vertical-banner");
	if (side != null) {
		side.style = "display: none;"
	}
	var rvb = document.getElementById("content");
	if (rvb) {
		if (rvb.children.length == 10) {
			rvb.children[8].style = "display: none;"
		}
	}
	var repFooter = document.getElementById("content-and-footer").children[1];
	if (repFooter) {
		repFooter.style = "display: none;";
	}
	var rightAddBox = document.getElementById("right-ad-box");
	if (rightAddBox) {
		rightAddBox.style = "display: none;";
	}
})();