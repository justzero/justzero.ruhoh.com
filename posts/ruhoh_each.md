---
title: ruhoh的小技巧
date: '2012-11-14'
description: ruhoh的小技巧
categories: 
    - ruhoh
    - 技术技巧
    - 学习
---
# 关于ruhoh的相关技巧(一)

> ### 文件结构

    |-- media //静态文件存放的地址（利用urls.media访问）
    |.. |-- script
    |.. |-- css
    |-- pages //nav栏的展示页面（通过config.yul配置）
    |-- posts //单位文章页
    |-- themes //主题选择（默认）

<div class="hr"></div>

> ### posts详细介绍
> 首先通过 <code>ruhoh post helloworld</code> 在<code>posts\\</code>目录下创建<code>helloworld.md</code>文件

> 得到的<code>helloworld.md</code>文件代码如下

    ---
    title:      // title名称
    date: '2012-11-14' // 创建日期（不用修改）
    description:    // 描述信息
    categories:     // 标签
    /* 下面为隐藏参数 */
    layout:     // 模版选择(默认选用相对应的模版)
                 -- index >> page.html
                 -- posts >> post.html
    js:     // 自定义的属性, 提供js加载
    ---
> 实例应用:

    ---
    title: ruhoh的小技巧
    date: '2012-11-14'
    description: ruhoh的小技巧
    categories: 
        - ruhoh
        - 技术技巧
        - 学习
    js: 
        - javascripts/app.js
        - javascripts/main.js
    layout: df-post
    ---
> ### 如何调用post文件的头部参数

> 利用<code>{{page.title}}, {{page.data}} ..</code>来访问头部设置的相关参数，但是对于<code>categories, js ..</code>等队列数据如何读取呢？(见如下代码)

    { {# page.js } }
    <script type="javascript" src="{ {urls.media} }/{ { . } }"></script>
    { {/ page.js } }

