// @fileOverview: media/javascripts/angularjs/app.js @ Fri 09 Nov 2012 12:57:37 AM PST helloworld demo
// @author: gongbing

/*jshint browser: true, nomen: true, indent: 4, maxlen: 80, strict: true, curly: true */
/*global define: true, $: true, _: true */

// DEBUG MODE
/*jshint devel: true */

var helloworld = function ($scope) {
    'use strict';
    $scope.url = {
        angularDownload: 'http://code.angularjs.org/1.0.2/',
        angularImg: 'http://www.angularjs.cn/wp-content/themes/angularjs/' +
        'images/angularjs.png',
        downInfo: '点击下载angularJS'
    };
};
