---
title: 利用Github与hexo搭建个人博客的简单步骤
date: 2017-09-21 13:14:25
tags: hexo
categories: hexo
---

## 	导语

> ​	尽管个人博客的时代已经过去了,但是我想,能够拥有一个完全属于自己的blog,应该还算是一部分人想要做的事情.我会将我搭建这个博客的过程中踩过的坑都贴在下边,为他人提供借鉴.
>
> ​	这里我使用了NexT的主题,简单明了,推荐给大家.一些针对此主题的配置我也会一一列举出来的.

## 安装环境

### 配置Github

​	[Github官网](https://github.com/)

![](https://github.com/CREEPERDCH/MarkdownPic/blob/master/%E5%88%A9%E7%94%A8Github%E4%B8%8Ehexo%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E7%9A%84%E7%AE%80%E5%8D%95%E6%AD%A5%E9%AA%A4/github_sign.png?raw=true)

​	注册账号就不详细说了,然后是创建一个仓库

![](https://github.com/CREEPERDCH/MarkdownPic/blob/master/%E5%88%A9%E7%94%A8Github%E4%B8%8Ehexo%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E7%9A%84%E7%AE%80%E5%8D%95%E6%AD%A5%E9%AA%A4/create_repo.png?raw=true)

​	然后新建仓库名字格式为"yourname.github.io", 注意将 yourname 换成你自己的名字

![](https://github.com/CREEPERDCH/MarkdownPic/blob/master/%E5%88%A9%E7%94%A8Github%E4%B8%8Ehexo%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E7%9A%84%E7%AE%80%E5%8D%95%E6%AD%A5%E9%AA%A4/create_io.png?raw=true)

​	然后应该是配置SSH,这样以后你每次推送博客去网站的时候都需要输入Github账号密码,不过这一步可有可无,如果你感兴趣,可以Google一下具体操作,并不复杂,这里就再赘述了.

​	如果是前些年,配置好仓库之后还应该去settings里开启一下Github Pages,不过现在倒不必麻烦,GitHub一旦检测到你的仓库符合github.io的命名规范,会自动托管为HTML网站的.

### 安装Git

​	[Git官网](https://git-scm.com/)

![](https://github.com/CREEPERDCH/MarkdownPic/blob/master/%E5%88%A9%E7%94%A8Github%E4%B8%8Ehexo%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E7%9A%84%E7%AE%80%E5%8D%95%E6%AD%A5%E9%AA%A4/git_install.png?raw=true)

​	安装过程并不复杂,按照提示下一步就好了.

### 安装Node.js

​	[Node.js官网](https://nodejs.org/en/)

![](https://github.com/CREEPERDCH/MarkdownPic/blob/master/%E5%88%A9%E7%94%A8Github%E4%B8%8Ehexo%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E7%9A%84%E7%AE%80%E5%8D%95%E6%AD%A5%E9%AA%A4/node.png?raw=true)

​	安装好Node.js之后就可以使用npm命令了,首先我们可以验证一下上述环境是否准备完毕

​	按下"win+X"组合键,选择"命令提示符(管理员)",分别输入以下两条命令

```cmd
git --version
```

```cmd
node -v
```

![](https://github.com/CREEPERDCH/MarkdownPic/blob/master/%E5%88%A9%E7%94%A8Github%E4%B8%8Ehexo%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E7%9A%84%E7%AE%80%E5%8D%95%E6%AD%A5%E9%AA%A4/cmd.png?raw=true)

​	如果出现上述结果,则表面环境已经正确搭建.



## 安装和配置hexo

​	以下命令都是在终端里直接运行的:

​	使用npm安装hexo

```cmd
npm install -g hexo-cli
```

​	然后在你本地创建一个文件夹,起名为Hexo

​	然后cd到Hexo文件夹里,输入以下命令:

```cmd
hexo init
hexo generate
```

​	这边用了一位[博主](http://www.jianshu.com/p/863f3f2d1733)的截图

![](https://raw.githubusercontent.com/CoderTian/CoderTian.github.io/master/2015/11/26/github-hexo-blog/firstcommond.png)

​	完成后Hexo文件夹内部的结构应该是这样的:

![](https://github.com/CREEPERDCH/MarkdownPic/blob/master/%E5%88%A9%E7%94%A8Github%E4%B8%8Ehexo%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E7%9A%84%E7%AE%80%E5%8D%95%E6%AD%A5%E9%AA%A4/hexo.png?raw=true)

​	到这一步你已经可以在本地预览你的网站了,输入下面的命令开启本地服务:

```cmd
hexo server
```

### 常见的hexo配置错误及解决办法:

```cmd
ERROR Plugin load failed: hexo-server
原因： Besides, utilities are separated into a standalone module. hexo.util is not reachable anymore.
解决方法，执行命令: npm install hexo-server
```

```cmd
执行命令hexo server，提示：Usage: hexo<Command> ....
原因：我认为是没有生成本地服务
解决方法，执行命令：$ npm install hexo-server --save
提示：hexo-server@0.1.2 node_modules/hexo-server
.... 
```

## 启用主题NexT

​	这里附上[NexT主题的使用说明文档](http://theme-next.iissnan.com/getting-started.html)

## 将博客部署到你的GitHub pages 上

​	首先我们需要进到Hexo文件夹根目录下的配置文件 **_config.yml** 文件里:

![](https://github.com/CREEPERDCH/MarkdownPic/blob/master/%E5%88%A9%E7%94%A8Github%E4%B8%8Ehexo%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E7%9A%84%E7%AE%80%E5%8D%95%E6%AD%A5%E9%AA%A4/dp.png?raw=true)

​	打开文件后翻到最下边:

![](https://github.com/CREEPERDCH/MarkdownPic/blob/master/%E5%88%A9%E7%94%A8Github%E4%B8%8Ehexo%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E7%9A%84%E7%AE%80%E5%8D%95%E6%AD%A5%E9%AA%A4/deploy.png?raw=true)

​	注意冒号后边需要加一个空格.

​	然后在根目录下执行如下命令(这里可以使用git bash):

```git
$ npm install hexo-deployer-git --save
```

​	等结束以后执行以下命令,部署你的博客:

```git
$ hexo deploy
```

​	注意,若你配置了SSH的话,这一步会弹出窗口要求你输入ssh密钥

​	如果一切顺利,此时你访问 **yourname.github.io** 就可以看到你的博客了.

## 常用命令:

​	每次部署的步骤，可按以下三步来进行

```git
$ hexo clean
$ hexo generate
$ hexo deploy
```

​	一些常用命令:

```git
$ hexo new "postName" #新建文章
$ hexo new page "pageName" #新建页面
$ hexo generate #生成静态页面至public目录
$ hexo server #开启预览访问端口（默认端口4000，'ctrl + c'关闭server）
$ hexo deploy #将.deploy目录部署到GitHub
$ hexo help  #查看帮助
$ hexo version  #查看Hexo的版本
```

### 	友情链接:

- [潘柏信的博客](http://leopardpan.github.io)

  ​


