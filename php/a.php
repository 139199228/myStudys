 <?PHP
// $servername='localhost';
// $username='root';
// $password='';
// $dbname='myusername';
// $conn=new mysqli($servername,$username,$password,$dbname);
// if($conn->connect_error){
// 	die('连接失败'.$conn->connect_error);
// }
// $getuser=$_REQUEST['username'];
// $getpass=$_REQUEST['password'];
// $getdate=$_REQUEST['date'];
// $sql = "INSERT INTO username(username,password,date)
// 	VALUES($getuser,$getpass,$getdate)";
// if($conn->query($sql) === TRUE){
// 	echo '1';
// }else{
// 	echo '失败'.$sql.'<br/>'.$conn->connect_error;
// }
class mySQL{
	var $servername;
	var $username;
	var $password;
	var $dbname;
	var $sql;
	var  $conn;
	function __construct($servername,$username,$password,$dbname){
		$this->servername=$servername;
		$this->username=$username;
		$this->password=$password;
		$this->dbname=$dbname;
		$this->conn = new mysqli($servername,$username,$password,$dbname);
		if($this->conn->connect_error){
			die('连接失败'.$this->conn->connect_error);
		}
	}
	public function Insert($sql){
		if(isset($sql)){
			$this->sql=$sql;
			if($this->conn->query($this->sql)===TRUE){
				$arr=[
					"errcode"=>"1",
					"success"=>"1"
				];
				echo json_encode($arr);
				mysqli_close($this->conn);
			}else{
				echo "失败".$this->	sql."<br>".$this->conn->connect_error;
			}
		}else{
			return;
		}
	}
	public function Select($sql){
		if(isset($sql)){
			$this->sql=$sql;
			$res = mysqli_query($this->conn,$sql);
			$arr=array();
			while($row= mysqli_fetch_array($res)){
				$data=[
					"id"=>$row["id"],
					"username"=>$row["username"],
					"password"=>$row["password"],
					"date"=>$row["date"],
				];
				array_push($arr, $data);
			}
			rsort($arr);
			echo json_encode($arr);
			mysqli_close($this->conn);
		}
	}
	public function Delete($sql){
		if(isset($sql)){
			$this->sql=$sql;
			if(mysqli_query($this->conn,$sql)){
				mysqli_query($this->conn,$sql);
			}else{
				echo "删除失败";
			}
			
			mysqli_close($this->conn);
		}else{
			echo "请输入正确命令";
		}
	}
	public function Update($sql){
		if(isset($sql)){
			$this->sql=$sql;
			if(mysqli_query($this->conn,$this->sql)){
				$arr=[
					"errcode"=>"1",
					"success"=>"1"
				];
				echo json_encode($arr);
			}else{
				echo "修改出错";
			}
			mysqli_close($this->conn);
		}
	}
}
$newsql=new mySQL("localhost","root","","myusername");

// if($_SERVER["REQUEST_METHOD"]){
	$type=$_REQUEST['type'];
	switch ($type) {
		case '1':
			$getuser=$_REQUEST['username'];
			$getpass=$_REQUEST['password'];
			$getdate=$_REQUEST['date'];
			if(strlen($getuser)<2||strlen($getpass)<2){
				$arr=[
					"errcode"=>"0",
					"success"=>"0"
				];
				echo json_encode($arr);
			}else{
				$sql = "INSERT INTO username(username,password,date)
				VALUES('".$getuser."','".$getpass."',$getdate)";
				$newsql->Insert($sql);
			}
			break;
		case "0":
			$sql = "SELECT * FROM `username`";
			$newsql->Select($sql);
			break;
		case "3":
			if(!empty($_REQUEST["id"])){
				$myid=$_REQUEST["id"];
			}
			$sql =  "DELETE  FROM `username` WHERE id='".$myid."'";
			$newsql->Delete($sql);
			break;
		case "2":
			
			if(!empty($_REQUEST["id"])){
				$myid=$_REQUEST["id"];
				$user=$_REQUEST["username"];
				$pass=$_REQUEST["password"];
				$date=$_REQUEST["date"];
				$sql = "UPDATE username SET username='".$user."',password='".$pass."',date='".$date."' WHERE id=$myid";
				$newsql->Update($sql);
			}else{
				$arr=[
					"errcode"=>"数据出错",
					"success"=>"0"
				];
				echo json_encode($arr);
			}

			
			break;
		default:
			echo '失败:type返回值:'.$type;
			break;
	}
	
// }

?>