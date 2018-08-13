---
title: Android基础(一)
date: 2017-09-19 17:29:33
tags:
categories: android
thumbnail: https://ws2.sinaimg.cn/large/006tKfTcgy1ft8gbz0qfzj31hc0xc7aj.jpg
---

<!-- more -->

### Service的启动方式?如何保证Service不被杀死?

​	两种启动方式，分别是 startService 与 bindService

##### 启动时的生命周期:

​	启动时，startService -> onCreate() -> onStart() 
​	停止时，stopService -> onDestroy() 

​	在服务启动时，多次调用context.startService只会调用onStart()方法，并不会多次创建服务。

##### 绑定时的生命周期： 

​	绑定时,bindService -> onCreate() –> onBind() 
​	解绑定时, unbindService ->onUnbind() -> onDestory() 

##### 常见的保证Service不被杀死的方法有:

​	重写onStartCommond方法,返回值为true;

​	在onDestory中发送广播重启service;

​	提升service优先级(android:priority = "1000");

​	提升service进程优先级，使用startForeground 将service放到前台状态;

​	Application加上Persistent属性(android:persistent="true" );

​	将APK安装到/system/app，变身系统级应用;

​	双进程守护;

### 整个View的事件转发流程?

​	View.dispatchEvent->View.setOnTouchListener->View.onTouchEvent 

​	在dispatchTouchEvent中会进行OnTouchListener的判断，如果OnTouchListener不为null且	返回true，则表示事件被消费，onTouchEvent不会被执行；否则执行onTouchEvent;

### ViewGroup的事件分发?

##### 	大体的事件流程为： 

​		ViewGroup的dispatchTouchEvent

​		 	-> ViewGroup的onInterceptTouchEvent

​		 	-> 子View的dispatchTouchEvent

​		 	->子View的onTouchEvent 

### View是如何刷新的?

​	在主线程中调用invalidate(),在非主线程中调用postInvalidate();

### 子线程更新UI的方式有哪几种?

​	Handler 
​	在子线程中通过runOnUiThread()方法更新UI 
​	View.post(Runnable r) 
​	异步任务