---
title: ARouter带参跳转及取参使用
date: 2018-07-18 10:06:39
tags: Android
categories: Android
thumbnail: https://ws1.sinaimg.cn/large/006tNc79gy1ftdsi6iuqoj31kw16db29.jpg
---

<!-- more -->

# ARouter

> A framework for assisting in the renovation of Android app componentization.
> 

项目地址: [https://github.com/alibaba/ARouter](https://github.com/alibaba/ARouter)

### **带参跳转**

![](https://ws2.sinaimg.cn/large/006tNc79gy1ftdskvj9gaj311o100jte.jpg)

```java
		//头像（登录）--> 跳转我的资料
        findView<CircleImageView>(civ_login_headPic)!!.setOnClickListener {
            arouter.build(ARouterConfig.ACTIVITY_URL_SETTINGS)
                    .withString(CommonConfig.USERINFO_TAG, "userInfo")
                    .navigation()
        }
```



### **注解取参**

![](https://ws2.sinaimg.cn/large/006tNc79gy1ftdsnvdv9yj31740yeabp.jpg)

```java
    @JvmField
    @Autowired(name = CommonConfig.USERINFO_TAG)
    var userTag: String? = null

    override fun getContentViewResId(): Int {
        return R.layout.activity_settings
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        ARouter.getInstance().inject(this)
    }

    override fun initView() {
        changeStatusBarForBlack()
        when (userTag) {
            null -> initTitleBar(R.string.setting)//从设置进来
            else -> {
                //从头像进来,隐藏APP_INFO设置项
                initTitleBar(R.string.userinfo)
                include_app_info.visibility = View.GONE
            }
        }
        when (isLogin) {
            false -> {
                include_user_info.visibility = View.GONE
                tv_log_out.visibility = View.GONE
            }
            true -> {
                //头像的加载
                if (!TextUtils.isEmpty(headPortrait)) {
                    ImageUtil.loadCircleImageWithLoading(this,
                            ImageUtil.getPath(this, headPortrait),
                            civ_setting_head_portrait,
                            R.drawable.ic_no_person_image,
                            R.drawable.ic_no_person_image)
                } else {
                   civ_setting_head_portrait
                       .setImageResource(R.drawable.ic_no_person_image)
                }
                include_user_info.visibility = View.VISIBLE
                tv_log_out.visibility = View.VISIBLE
            }
        }
    }
```



**在Kotlin中使用ARouter路由,使用注解取参数时,要注意声明的字段不能使用 *Private* ,否则会导致GradlePlugin 的异常,因此这里需要加多一个 *@JvmField* 的注解.**

