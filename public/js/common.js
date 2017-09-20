define(['jquery','cookie'],function($){
	// NProgress.start();

	// NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	// 实现退出功能
	$('#logoutBtn').click(function(){
		// alert(1);  验证是否有反应
		// 调用接口 实现退出
		$.ajax({
			type : 'post',
			url: '/api/logout',
			dataType: 'json',
			success:function(data){ 
				// console.log(data)   验证是否退出成功
				if (data.code == 200) {
					// 重新跳转登录页
					location.href = '/main/login';
				}
			}
		})
	});

	// 检测用户是否登录
	var flag = $.cookie('PHPSESSID');
	// console.log(flag);
	// 判断
	if (!flag && location.pathname!=='/main/login') {
		// 跳转登录页
		location.href = '/main/login';        // 完整的地址是http://mybxg.com/main/login   以'/main/login'这样写也可以即把域名省略掉了，/代表根路径
	}

	// 设置用户头像信息
	var loginInfo = $.cookie('loginInfo');
	// console.log($.cookie('loginInfo'));

	loginInfo = loginInfo && JSON.parse(loginInfo);
	//设置用户的头像信息
	if(flag){
		$('.aside .profile img').attr('src',loginInfo.tc_avatar);
		$('.aside .profile h4').html(loginInfo.tc_name);
	}
	

});
	