---
title: 解决MacbookPro上adb出现command not found的问题
date: 2018-06-12 10:39:21
tags: android
categories: android
thumbnail: https://ws4.sinaimg.cn/large/006tKfTcgy1ft8fiy4j0hj31kw10kwh3.jpg
---

> 做Android离不开使用adb工具，在macOS上，配置adb的环境与Windows下还是有一些不同的。

<!-- more -->

**步骤：**

1. 打开MacBookPro的终端应用Terminals.app，cd到当前用户的home目录下。

	![](https://ws3.sinaimg.cn/large/006tNc79gy1ftbhy5k45sj31kw16a3zn.jpg)

2. 输入 vim ~/.bash_profile 若文件存在，将会打开 .bash_profile文件，没有即新建次文件。

	![](https://ws3.sinaimg.cn/large/006tNc79gy1ftbhxx4w3jj31kw16awfr.jpg)

	在vi界面下，按照图示输入以下内容：

	```shell
	export ANDROID_HOME=/Users/creeper/library/android/sdk
	export PATH=${PATH}:${ANDROID_HOME}/tools
	export PATH=${PATH}:${ANDROID_HOME}/platform-tools
	```

	**注意**，这里的ANDROID_HOME是你个人的Android_SDK的路径，你可以在Android Studio里找到具体的路径

3. 退出编辑模式并保存修改内容后，输入 source ~/.bash_profile 来使改动生效

4. 大功告成，你可以输入 adb devices 来查看当前在线的设备了