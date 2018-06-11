---
title: 关于vivo手机拍照上传的奇葩问题
date: 2018-05-07 12:02:00
tags: android
categories: android
---

做拍照上传图片到服务器的的操作

在做到vivo Y67这个机型时

遇到了一个特别奇葩的问题

在拍照点击确定，回调onActivityResult发起上传请求的时候

报了一个“expect 220 bytes but received 8192”的 exception

根据各种排除法，大致可以确定原因是

vivo手机的系统在拍完照，还没有对照片做完处理时

就发起了回调，导致请求里的数据与实际传输的数据长度不一致

目前只能暂时获取机型特殊处理，如图：

![](https://raw.githubusercontent.com/CREEPERDCH/MarkdownPic/master/特殊机型处理/screenshoot_0507.png)

大概的意思就是，检测到特殊型号就延迟十秒去做上传处理

至于为什么是十秒，是因为没办法把握到系统底层对照片处理的时长

在这里记录一下这个坑，留给以后解决吧