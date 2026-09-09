// ==UserScript==
// @name         YouTube - Accept Content Warning
// @version      1.3
// @author       danh
// @description  Automatically skip over the dumb content warning where you have to click the button to proceed to watch the video
// @match        https://consent.youtube.com/*
// @match        https://www.youtube.com/*
// @grant        none
// @icon		 https://www.youtube.com/favicon.ico
// @run-at       document-end
// ==/UserScript==
(function() {
    'use strict';
    setInterval(function() {
        const consentBtn = document.getElementsByClassName("interstitialViewModelButtonContainer")[0].children[0].children[0];
        if(consentBtn == null) return;
        consentBtn.click();
        consentBtn.remove();
    }, 10)();
})();
