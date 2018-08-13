---
title: 通过修改番羽墙软件代理设置来登录Android Studio
date: 2018-03-03 11:31:21
tags: android
categories: android
thumbnail: https://ws1.sinaimg.cn/large/006tKfTcgy1ft8g8wcetvj31hc0u0q3s.jpg
---

<!-- more -->

## 原因分析：

![](https://ws1.sinaimg.cn/large/006tNc79gy1ftbi4d7r10j31kw0zkn2t.jpg)

​	就是右上角那个登录按钮了，正常情况下即使你跳出了墙，也是登录不了的，多数情况下是因为Android studio登录出发的线程和Google网页返回的不是同一条线程。所以我们可以通过修改Android studio的网络代理设置来登录Google账号。

### 解决办法：

**查看你所使用的梯子的Http监听的地址**。

​	我这里以Mac上的ShadowsockX-NG软件为例来说明。

![](https://ws1.sinaimg.cn/large/006tNc79gy1ftbi417ubfj30fs0qg75a.jpg)

​	在这里你可以查看到你的Http 监听地址以及监听端口。

**在Android studio中设置网络代理**。

​	路径为：**Appearance & Behavior** => **System Settings** => **HTTP Proxy**

​	![](https://ws4.sinaimg.cn/large/006tNc79gy1ftbi3rrb38j31ks130q5r.jpg)

​	按照你之前获得的网络监听地址和端口，对应填写到上图中的地方，一般没有填写错误的话，点击 Check connection 会得到Connection Successfully的提示。

**点击Log in 调起Google Account的网页，去关联你的Google账号吧**。

![](https://ws3.sinaimg.cn/large/006tNc79gy1ftbi3knyz9j31kw0zkwhg.jpg)

*这样就OK了～*

