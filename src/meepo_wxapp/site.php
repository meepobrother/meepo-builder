<?php
/**
 * 小程序生成器模块微站定义
 *
 * @author imeepos
 * @url 
 */
defined('IN_IA') or exit('Access Denied');

class Meepo_wxappModuleSite extends WeModuleSite {

	public function __construct(){
		global $_W,$_GPC;
		$file = IA_ROOT."/addons/imeepos_runner/core/Router.php";
		if(file_exists($file)){
			include_once $file;
			$this->router = new Router();
		}
		if($_W['os'] == 'mobile') {
			if(!empty($_W['openid'])){
				// 更新会员信息
			}
		}
	}

	public function doWebDownload() {
		//这个操作被定义用来呈现 管理中心导航菜单
		global $_W,$_GPC;

		include $this->template('download');
	}
	public function doWebHelp() {
		//这个操作被定义用来呈现 管理中心导航菜单
		global $_W,$_GPC;

		include $this->template('help');
	}
	public function doWebVideo() {
		//这个操作被定义用来呈现 管理中心导航菜单
		global $_W,$_GPC;

		include $this->template('video');
	}

	public function doMobileOpen(){
		global $_W,$_GPC;
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Credentials: true"); 
        header('Access-Control-Allow-Headers: X-Requested-With');
        header('Access-Control-Allow-Headers: Content-Type');
        header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
        header('Access-Control-Max-Age: 86400'); 
        $__do = trim($_GPC['__do']);
        $input = isset($_GPC['__input']) ? $_GPC['__input'] : array();
        die($this->router->reset()->exec($__do,$input)->getJson());
	}

}