// @fileOverview: /home/gongbing/workplace/git/justzero.ruhoh.com/themes/twitter/javascripts/fix.js @ Thu 08 Nov 2012 01:32:23 AM PST change {{ }} --> <[ ]>
// @author: gongbing

/*jshint browser: true, nomen: true, indent: 4, maxlen: 80, strict: true, curly: true */
/*global define: true, $: true, _: true */

// DEBUG MODE
/*jshint devel: true */

(function ($) {
    'use strict';
    $.module('justzero', [], function ($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    });
}(angular));
