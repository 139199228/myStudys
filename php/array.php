<?php
// $arr=array(5,4,6,2,22,11);
// $arrlen=count($arr);
// for($i=$arrlen-1;$i>=0;$i--){
// 	for($j=0;$j<$i;$j++){
// 		if($arr[$j]>$arr[$j+1]){
// 			$aa=$arr[$j+1];
// 			$arr[$j+1]=$arr[$j];
// 			$arr[$j]=$aa;
// 		}
// 	}
// }
// print_r($arr);
class Par{
	var $url;
	var $title;
	function __construct( $par1, $par2 ) {
	    $this->url = $par1;
	    $this->title = $par2;
	  }
	public function getUrl(){
		echo$this->url. PHP_EOL;
	}
	function getTitle(){
		echo $this->title. PHP_EOL;
	}
	public function setUrl($url="/wwwC:/"){
		echo$this->url = $url. PHP_EOL;
	}
	function setTitle($title){
		echo $this->title = $title. PHP_EOL;
	}
}
$o = new Par("2","3");
$s = new Par("php","my");
echo $s->getUrl();
echo $s->getTitle();
$url = "c:/Section/".PHP_EOL;
echo $o->setUrl($url);
echo $o->setTitle("hello word!");



?>
