/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
!function(t,n){var u,e=t.jQuery||t.Cowboy||(t.Cowboy={});e.throttle=u=function(t,u,o,i){function r(){function e(){c=+new Date,o.apply(f,g)}function r(){a=n}var f=this,d=+new Date-c,g=arguments;i&&!a&&e(),a&&clearTimeout(a),i===n&&d>t?e():u!==!0&&(a=setTimeout(i?r:e,i===n?t-d:t))}var a,c=0;return"boolean"!=typeof u&&(i=o,o=u,u=n),e.guid&&(r.guid=o.guid=o.guid||e.guid++),r},e.debounce=function(t,e,o){return o===n?u(t,e,!1):u(t,o,e!==!1)}}(this);
;