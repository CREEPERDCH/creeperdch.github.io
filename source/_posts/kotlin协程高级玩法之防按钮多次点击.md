---
title: Kotlin协程高级玩法之防按钮多次点击
date: 2018-07-18 17:44:14
tags: Kotlin
categories: Android
thumbnail: https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-670785.jpg
---

<!-- more -->

## 原文

[Kotlin协程高级玩法之防按钮多次点击](http://www.jcodecraeer.com/a/anzhuokaifa/2017/0830/8449.html)

## 作者

[zzyandroid](http://www.jcodecraeer.com/member/index.php?uid=zzyandroid)

## 引言

	在android开发过程中，经常遇到按钮多次点击后，会多次触发业务流程，导致不必要的浪费，一般在处理过程中会添加一个boolean状态来控制，实现起来过于繁琐，而在kotlin的世界里，这就简单了。

## 实现

> 给View扩展一个函数叫onClickStart，意思是只处理第一次开始事件 
>
> 细节: 初始化一个协程实例actor，它来负责处理事件action，并在用户点击的时候将action处理后的结果传递给offer函数。

**函数**

![](https://ws1.sinaimg.cn/large/006tNc79gy1fte5rlxaudj30om07rmxg.jpg)

## 使用

	在onClickStart函数中使用delay 3秒钟，就可以完美实现三秒内不能被重复处理。

**代码**
	
![](https://ws2.sinaimg.cn/large/006tNc79gy1fte5t0p9qaj30kz087t95.jpg)

## 总结

	优雅的方式实现了一个常用的功能，这是协程的功劳。加油 kotlin！