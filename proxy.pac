//一个很简单的调试app pac文件
function FindProxyForURL(url, host) {
               //这里填写你们公司的host
    if (dnsDomainIs(host, '192.168.50.161')
            ||dnsDomainIs(host, '192.168.50.218')
            ||dnsDomainIs(host, 'beta.this.shop')
            ||dnsDomainIs(host, 'thisshop.com')) {
               //这里填你自己的局域网ip，端口号是你在Charles里设置的 默认8888
        return "PROXY 192.168.51.39:8899; DIRECT;";
    } else {
        return "DIRECT";
    }
}