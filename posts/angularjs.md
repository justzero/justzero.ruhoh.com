---
title: 'AngularJS入门尝试'
date: '2012-11-07'
description: '介绍angularJS'
categories:
    - '学习'
javascript:
    - 'dd/2.js'
layout: 'df-post'
---
<div ng-app="justzero">
<script type="text/javascript" src="{{urls.media}}/javascripts/angularjs/app.js"></script>
## 使用超动感 HTML&JS 设计WEB应用！
----
### 简单介绍AngularJS
<br />
<a ng-controller="helloworld" href="[[url.angularDownload]]" > angularjs下载地址 </a>
<br />

----
## helloWorld Demo
<br />
Name:  <input name="name" type="text" ng-model="name" placeholder="Enter a name here!" />
<br />
<h4>Hello [[name || 'World']]!</h4>

----
<br />
>由于angularjs的默认模版用的<code>\{\{ \}\}</code>格式作为变量对象，与ruhoh存在冲突<br/>
>因此需要将模版标签替换为<code><[ ]></code>

    (function ($) {
        'use strict';
        $.module('justzero', [], function ($interpolateProvider) {
            $interpolateProvider.startSymbol('<[');
            $interpolateProvider.endSymbol(']>');
        });
    }(angular));

</div>
