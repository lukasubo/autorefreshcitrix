// ==UserScript==
// @name         Citrix Refresh
// @include      https://bolconnect.husky.ca/Citrix/StoreWeb/
// @include      https://luxconnect.husky.ca/Citrix/StoreWeb/
// @version      1.1
// @description  Refreshes every 15 minutes.
// @author       lukasubo
// ==/UserScript==

setTimeout(function(){ location.reload(); }, 15*60*1000);
