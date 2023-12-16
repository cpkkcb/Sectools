function ebase(){
	var initialData = '';
	var initialData = $('#T1').val();
	var resultData  = btoa(initialData);
	$('#T2').val(resultData);	
}

function dbase(){
	var initialData = '';
	var initialData = $('#T1').val();
	var resultData  = atob(initialData);
	$('#T2').val(resultData);
}

function eurl(){
	var initialData = '';
	var initialData = $('#T1').val();
	var resultData  = encodeURIComponent(initialData);
	$('#T2').val(resultData);
}

function durl(){
	var initialData = '';
	var initialData = $('#T1').val();
	var resultData  = decodeURIComponent(initialData);
	$('#T2').val(resultData);
}

function asc(){
	var initialData = $('#T1').val(); 
	var arr = initialData.split(/[,，\s\n]/).filter(_ => _);
	var result_arr=[];
	var res = ""
	for(var i=0;i<arr.length;i++) {
	　　var items=arr[i];
		items = String.fromCharCode(items)
		res+=items;
	　　}
		$('#T2').val(res);
	        
}

function num(){
	var initialData = $('#T1').val();
	var arr = initialData.split(/[,，\s\n]/).filter(_ => _);
	var result_arr=[];
	var res = ""
	for(var i=0;i<arr.length;i++) {
	　　var items=arr[i];
		console.log(items);
		items = items.charCodeAt(0);
		res+=items+' ';
	　　}
		$('#T2').val(res);
	console.log(1);
}