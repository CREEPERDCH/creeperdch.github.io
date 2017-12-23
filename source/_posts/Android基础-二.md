---
title: Android基础(二)
date: 2017-09-19 17:42:10
tags:
categories: android
---

### **1.静态内部类,内部类,匿名内部类分别是什么?为什么内部类会持有外部类的引用?持有的引用是this还是其他?**

​	**静态内部类：**使用static修饰的内部类

​	**内部类：**就是在某个类的内部又定义了一个类，内部类所嵌入的类称为外部类

​	**匿名内部类：**使用new生成的内部类

 	内部类的产生依赖于外部类，持有的引用是类名.this

### **2.Java中try catch finally的执行顺序?**

​	先执行try中代码，如果发生异常执行catch中代码，最后一定会执行finally中代码

### **3.equals与==的区别?**

​	==是判断两个变量或实例是不是指向同一个内存空间 equals是判断两个变量或实例所指向的内存空间的值是		 不是相等

### **4.Java的四种引用的区别**

​	**强引用：**如果一个对象具有强引用，它就不会被垃圾回收器(GC)回收。即使当前内存空间不足，JVM 也不会回收它，而是抛出 OutOfMemoryError 错误，使程序异常终止。如果想中断强引用和某个对象之间的关联，可以显式地将引用赋值为null，这样一来的话，JVM在合适的时间就会回收该对象

​	**软引用：**在使用软引用时，如果内存的空间足够，软引用就能继续被使用，而不会被垃圾回收器回收，只有在内存不足时，软引用才会被垃圾回收器回收

​	**弱引用：**具有弱引用的对象拥有的生命周期更短暂。因为当 JVM 进行垃圾回收，一旦发现弱引用对象，无论当前内存空间是否充足，都会将弱引用回收。不过由于垃圾回收器是一个优先级较低的线程，所以并不一定能迅速发现弱引用对象

​	**虚引用：**顾名思义，就是形同虚设，如果一个对象仅持有虚引用，那么它相当于没有引用，在任何时候都可能被垃圾回收器回收



# **Thread/AsyncTask相关面试题:**

### **1.wait()和sleep()的区别**

​	sleep()来自Thread类,wait()来自Object类

​	调用sleep()方法的过程中,线程不会释放对象锁;而调用wait()方法,线程会释放对象锁

​	sleep睡眠后不出让系统资源,wait让出系统资源,其他线程可以占用CPU

​	sleep(milliseconds)需要传入一个睡眠时间的参数，时间一到会自动唤醒

### **2.介绍下 AsyncTask的内部实现以及适用的场景**

​	AsyncTask 内部也是 Handler 机制来完成的，只不过 Android 提供了执行框架来提供线程池来执行相应地任务，因为线程池的大小问题，所以 AsyncTask 只应该用来执行耗时时间较短的任务，比如 HTTP 请求，大规模的下载和数据库的更改不适用于 AsyncTask，因为会导致线程池堵塞，没有线程来执行其他的任务，导致的情形是会发生 AsyncTask 根本执行不了的问题。





# **网络相关面试题:**

### **1.为什么说TCP是可靠的而UDP是不可靠的?为什么UDP比TCP快?**

​	TCP/IP协议高，因为其拥有三次握手双向机制，这一机制保证校验了数据，保证了他的可靠性。

​	UDP就没有了，UDP信息发出后,不验证是否到达对方,所以不可靠。

​	但是就速度来说，还是UDP协议更高，毕竟其无需重复返回验证，只是一次性的

### **2.简述对Http与Https协议的了解**

​	Http(超文本传输协议)是一个基于请求与响应模式的、无状态的、应用层的协议,Http请求由三部分组成，分别是：请求行、消息报头、请求正文,其中消息报头包括普通报头、请求报头、响应报头、实体报头

​	HTTPS(全称：Hyper Text Transfer Protocol over Secure Socket Layer)，是以安全为目标的HTTP通道，简单讲是HTTP的安全版。即HTTP下加入SSL层，HTTPS的安全基础是SSL，因此加密的详细内容就需要SSL

### **3.Http请求中GET和POST方法的区别**

​	**GET:**从指定的服务器中获取数据，明文发送内容

​	**POST :**提交数据给指定的服务器处理

​	**区别:**	POST请求不能被缓存下来

​			POST请求不会保存在浏览器浏览记录中

 			以POST请求的URL无法保存为浏览器书签

​			POST请求没有长度限制

# **Fragment相关面试题:**

### **1.Fragment 如何实现类似 Activity 栈的压栈和出栈效果的**

​	Fragment 的事物管理器内部维持了一个双向链表结构,该结构可以记录我们每次add的

Fragment 和 replace 的 Fragment，然后当我们点击 back 按钮的时候会自动帮我们实现退栈操作

### **2.Fragment 的好处**

​	Fragment 可以使你能够将 activity 分离成多个可重用的组件，每个都有它自己的生命周期和

UI

​	Fragment 可以轻松得创建动态灵活的 UI 设计，可以适应于不同的屏幕尺寸。从手机到平板电

脑

​	Fragment 是一个独立的模块,紧紧地与 activity 绑定在一起。可以运行中动态地移除、加入、

交换等

​	Fragment 提供一个新的方式让你在不同的安卓设备上统一你的 UI

​	Fragment 解决 Activity 间的切换不流畅，轻量切换

​	Fragment 替代 Tab Activity 做导航，性能更好(Tab Activity 已经过时了)

​	Fragment 在 4.2.版本中新增嵌套 fragment 使用方法，能够生成更好的界面效果

### **3.如何切换 Fragment,不重新实例化**

​	**正确的切换方式是:**

​	add()，

​	切换时 hide()，add()另一个 Fragment;

​	再次切换时，只需 hide()当前，show()另一个

# **View相关面试题:**

### **1.onInterceptTouchEvent()和onTouchEvent()的区别**

​	onInterceptTouchEvent() 用于拦截触摸事件

​	onTouchEvent()		     用于处理触摸事件

### **2.SurfaceView和View的区别**

​	SurfaceView中采用了双缓存技术，在单独的线程中更新界面

​	View在UI线程中更新界面

### **3.View的绘制过程**

​	一个View要显示在界面上，需要经历一个View树的遍历过程，这个过程又可以分为三个过程，也就是自定义View中的三要素：大小，位置，画什么，即onMesure()，onLayout(),onDraw()

​	onMesure()确定一个View的大小;

​	onLayout()确定View在父节点上的位置;

​	onDraw()绘制View 的内容;

# **性能优化相关面试题:**

### **1.ListView卡顿的原因与性能优化**

​	**重用convertView：**通过复用convertview来减少不必要的view的创建，另外Inflate操作会把xml文件实例化成相应的View实例，属于IO操作，是耗时操作

​	**减少findViewById()操作:**将xml文件中的元素封装成viewholder静态类，通过convertview的setTag和getTag方法将view与相应的holder对象绑定在一起，避免不必要的findviewbyid操作

​	**避免在 getView 方法中做耗时的操作**

​	**使用 RecycleView 代替listview**

​	**ListView 中元素避免半透明**

### **2.三级缓存的原理**

​	从缓存中加载。

​	从本地文件中加载(数据库，SDcard)

​	从网络加载

# **其他面试题:**

### **1.android中进程的优先级**

​	前台进程

​	可见进程

​	服务进程

​	后台进程

​	空进程

### **2.apk安装卸载的原理**

​	**安装过程：**复制apk安装包到data/app目录下，解压并扫描安装包，把dex文件(dalvik字节码)保存到dalvik-cache目录，并data/data目录下创建对应的应用数据目录

​	**卸载过程：**删除安装过程中在上述三个目录下创建的文件及目录

**3.Android 中如何捕获未捕获的异常**

​	自定义一个Application 实 现UncaughExceptionHandler,覆写 UncaughtExceptionHandler 的 onCreate 和 uncaughtException 方法

