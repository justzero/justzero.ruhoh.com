---
title: 'AngularJS入门尝试'
date: '2012-11-07'
description: '介绍angularJS'
categories:
    - '学习'
js:
    - javascripts/angularjs/app.js
layout: 'df-post'
---

<div ng-controller="helloworld">
<a href="[[url.angularDownload]]" >
<img src="[[url.angularImg]]" alt="[[url.downInfo]]" title="[[url.downInfo]]" />
</a>
<br />
<span class="label label-info">使用超动感 HTML&JS 设计WEB应用！</span>
</div>

----
### 简单介绍AngularJS  -- a simple demo
----
Name:  <input name="name" type="text" ng-model="name" placeholder="Enter a name here!" />
----
#### OutPut: Hello [[name || 'World']]!
----
>由于angularjs的默认模版用的<code>\{\{ \}\}</code>格式作为变量对象，与ruhoh存在冲突<br/>
>因此需要将模版标签替换为<code><[ ]></code>

    (function ($) {
        'use strict';
        $.module('justzero', [], function ($interpolateProvider) {
            $interpolateProvider.startSymbol('<[');
            $interpolateProvider.endSymbol(']>');
        });
    }(angular));

