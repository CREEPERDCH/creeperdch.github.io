---
title: Markdown基础语法
date: 2015-04-19 15:07:47
tags: markdown
categories: markdown
thumbnail: https://ws1.sinaimg.cn/large/006tKfTcgy1ft8gcd3cacj31hc0u0n3h.jpg
---

>Markdown is a lightweight markup language with plain text formatting syntax. It is designed so that it can be converted to HTML and many other formats using a tool by the same name.[8] Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor. As the initial description of Markdown contained ambiguities and unanswered questions, many implementations and extensions of Markdown appeared over the years to answer these issues.
>
>​																-------------Wikipedia

<!-- more -->

### 标题

如果一段文字被定义为标题,只需要在这段文字前加 '#' 号.

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
...
```



以此类推,一共六级标题,建议在 '#' 后加一个空格,这是markdown的**标准写法**.

---

### 列表

在markdown里,列表的显示只需要在文字前加上 '-' 或 '*' 即可变为无序列表.

有序列表则直接在文字前加上 '1.'  '2.'  '3.' 注意空格

- markdown
- markdown

1. markdown
2. markdown

---

### 引用

如果你需要引用一小段别处的句子,那么需要以下的格式.

> 例如这样
>
> ​		------creeperdch

只需在文本前加上 '>' 即可.

---

### 图片与链接

图片为:![](https://ws2.sinaimg.cn/large/006tNc79gy1ftbi7ppz2wj30k00ciq2z.jpg)

链接为: '[]()'

例如:[实例](http://ww2.sinaimg.cn/large/6aee7dbbgw1efffa67voyj20ix0ctq3n.jpg)

---

### 粗体与斜体

**这是粗体**: '**text**'		*这是斜体*: '*text*'		这是~~删掉~~

---

### 表格

```markdown
|one|two|three|
|:--:|:--:|:--:|
|	|	|	|
```

| one  | two  | three |
| :--: | :--: | :---: |
|  1   |  2   |   3   |

---



