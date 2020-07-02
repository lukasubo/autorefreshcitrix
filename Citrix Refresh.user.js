// ==UserScript==
// @name         Citrix Refresh
// @include      https://bolconnect.husky.ca/Citrix/StoreWeb/
// @include      https://luxconnect.husky.ca/Citrix/StoreWeb/
// @version      1.2
// @description  Refreshes every 15 minutes.
// @author       lukasubo
// @updateURL    https://github.com/lukasubo/autorefreshcitrix/raw/master/Citrix%20Refresh.user.js
// ==/UserScript==

setTimeout(function(){ location.reload(); }, 15*60*1000);
