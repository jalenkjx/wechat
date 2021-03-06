var obj = {
    title: '分享标题',
    desc: '分享内容',
    //分享链接
    link: "http://wx.kjxjl.top/",
    //分享的图片
    imgUrl: "http://www.jscss.cc/static/images/jscss.cc.ico",
    success: function() {
    	//分享成功的回调函数
   	}
};
$(function(){
	
	$.post("/wechat/jssdk",{
		//需要签名的 url 地址
		url : window.location.href.replace(/#.*/g,""),
		apilist : [
			'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onGetNetworkType',
            'onMenuShareWeibo',
            'chooseImage',
            'scanQRCode'
		].join(",")
	},function(resp){
		wx.config({
            debug: true,
            appId: resp.appId,
            timestamp: resp.timestamp,
            nonceStr: resp.nonceStr,
            signature: resp.signature,
            jsApiList: resp.jsApiList
        });

        wx.ready(function() {
            // alert("wx ready");
            // 在这里调用 API
                // 2. 分享接口
                // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
                wx.onMenuShareAppMessage(obj);
                // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
                wx.onMenuShareTimeline(obj);
        });
	},"json");
    $("#getNetworkType").on("click",function(){
        wx.getNetworkType({
            success: function (res) {
                // 返回网络类型2g，3g，4g，wifi
                var networkType = res.networkType;
                alert(networkType);
            }
        });
    });

    $('#img').on('click',function(){
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                alert('res');
                var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                $('#imgbox').children('img').attr('src',localIds);
            }
        });
    });
    //分享接口
    $('#share').on('click',function(){
        wx.onMenuShareTimeline({
            title: 'zhenzhenhaitao', // 分享标题
            link: 'wx.kjxjl.top', // 分享链接
            imgUrl: 'http://www.jscss.cc/static/images/jscss.cc.ico', // 分享图标
            success: function () { 
                // 用户确认分享后执行的回调函数
                alert('111');
            },
            cancel: function () { 
                // 用户取消分享后执行的回调函数
                alert(222);
            }
        });
    });
    //二维码接口
    $('#scanqr').on('click',function(){
        wx.scanQRCode({
            needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
            success: function (res) {
            var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        }
        });
    });

})
