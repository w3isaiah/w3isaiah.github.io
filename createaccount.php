<?php
			$username = $_GET['username'];
			$password = $_GET[password];
			$filename = 'accounts.txt';
			$fp = fopen($filename, 'a+');
			fwrite ($fp, $username . ":" . $password . "\n");
			$fclose ($fp);
			echo ("account created");
			header("location: 'Login.html'");
			die();
?>