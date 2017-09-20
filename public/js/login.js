define(['jquery','cookie'],function($){
	// 登录功能
        $('#loginBtn').click(function() {
            $.ajax({
                type: 'post',
                url: '/api/login',
                data: $('#loginForm').serialize(),
                dataType: 'json',
                success : function(data){
                    if (data.code == 200) {
                        // 把用户的登录信息存储到cookie，方便跨页面共享数据
                        // JSON.stringify(data.result) 将对象data.result转为字符串data.result
                        $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                       //登录成功跳转到主页面
                       location.href = '/main/index' ;
                    }
                }
            });
            
            return false;      //阻止按钮的默认跳转行为
        });

})