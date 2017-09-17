
<?php
	//必须能够通过URL区分出用户想访问那个页面

	//声明默认目录名称
	$dir = 'main';
	//声明默认文件名
	$filename = 'index';

	if (array_key_exists('PATH_INFO', $_SERVER)) {
		//PATH_INFO 属性存在，就获取
		$path = $_SERVER['PATH_INFO'];  //得到的结果/main/index形式
		//去掉第一个斜杠  跟string.substring() 很像
		$str = substr($path,1);
		// 字符串分割,和js中split方法很像
		$ret = explode('/',$str);
		// var_dump($ret) ;
		if (count($ret) == 2) {
			//路由有两层
			$dir = $ret[0];         //覆盖目录
			$filename = $ret[1];     //覆盖文件目录
		}else{
			//其他情况全部跳转到登录页面
			$filename = 'login';
		}



	}
	
	//嵌入子页面
	include('./views/'.$dir.'/'.$filename.'.html');
?> 

