// ==UserScript==
// @name         Delta Key Bypasser
// @namespace    http://tampermonkey.net/
// @version      2
// @description  SimpleBypasser
// @author       arc (updated by cloud)
// @match        *://linkvertise.com/*
// @match        https://auth.platorelay.com/a/8?id=*

// @grant        none
// @downloadURL https://raw.githubusercontent.com/AlwanPandora/DeltaBypasser/refs/heads/main/Delta%20bypass-4.0%20copy.js
// @updateURL https://raw.githubusercontent.com/AlwanPandora/DeltaBypasser/refs/heads/main/Delta%20bypass-4.0%20copy.js
// ==/UserScript==

(function() {
    'use strict';

    const urlnow = window.location.href;
    function isBase64(str) {
        try {
            if (typeof str !== 'string' || str.length === 0) return false;
            const base64Pattern = /^[A-Za-z0-9+/=]+$/;
            if (!base64Pattern.test(str)) return false;
            const decodedStr = atob(str);
            return btoa(decodedStr) === str;
        } catch (e) {
            return false;
        }
    }

    function getParameterByName(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    const lutink = false;
    const base64String = getParameterByName('r');
    if (base64String && isBase64(base64String)) {
        try {
            const decodedUrl = atob(base64String);
            window.location.href = decodedUrl;
            
        } catch (error) {
            console.error('Error\n', error)
        }
    }
})();
