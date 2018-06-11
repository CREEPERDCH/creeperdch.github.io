---
title: 通过修改番羽墙软件代理设置来登录Android Studio
date: 2018-03-03 11:31:21
tags: android
categories: android
---

## 原因分析：

![](https://github.com/CREEPERDCH/MarkdownPic/blob/master/通过修改番羽墙软件代理设置来登录Android%20Studio/Android%20studio%20login.png?raw=true)

​	就是右上角那个登录按钮了，正常情况下即使你跳出了墙，也是登录不了的，多数情况下是因为Android studio登录出发的线程和Google网页返回的不是同一条线程。所以我们可以通过修改Android studio的网络代理设置来登录Google账号。

### 解决办法：

**查看你所使用的梯子的Http监听的地址**。

​	我这里以Mac上的ShadowsockX-NG软件为例来说明。

![](https://github.com/CREEPERDCH/MarkdownPic/blob/master/通过修改番羽墙软件代理设置来登录Android%20Studio/ssr.png?raw=true)

​	在这里你可以查看到你的Http 监听地址以及监听端口。

**在Android studio中设置网络代理**。

​	路径为：**Appearance & Behavior** => **System Settings** => **HTTP Proxy**

​	![](https://github.com/CREEPERDCH/MarkdownPic/blob/master/通过修改番羽墙软件代理设置来登录Android%20Studio/as_prefs.jpg?raw=true)

​	按照你之前获得的网络监听地址和端口，对应填写到上图中的地方，一般没有填写错误的话，点击 Check connection 会得到Connection Successfully的提示。

**点击Log in 调起Google Account的网页，去关联你的Google账号吧**。

![](https://github.com/CREEPERDCH/MarkdownPic/blob/master/通过修改番羽墙软件代理设置来登录Android%20Studio/as_google.jpg?raw=true)

*这样就OK了～*

