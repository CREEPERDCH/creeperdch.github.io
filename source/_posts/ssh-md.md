---
title: macOS 使用source tree提交代码时的小问题
date: 2018-06-22 11:06:17
tags: ssh
Categories: ssh
thumbnail: https://ws2.sinaimg.cn/large/006tKfTcgy1ft8gd8ssvbj31kw0w0x6p.jpg
---

<!-- more -->

#### **问题描述**

在使用SourceTree做代码的提交remote时,有小概率会碰到这样一个Error:

> **Permission denied (PublicKey).**

出现这种情况,一般都会去检查一下Remote端的权限,九成九是没问题的,问题只可能出在本地的key身上.

#### **问题解决**

终端输入:

```bash
ssh-add ~/.ssh/id_rsa
```

*记录一下,免得下次出现忘记了还得查*