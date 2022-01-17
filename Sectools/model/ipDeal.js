function checktxt11() {
    if ($("#TextArea2").val() == "请粘贴要提取的文本" || $("#TextArea2").val() == "请输入要提取的网址，一行一条网址")
        $("#TextArea2").val("");
}
function checktxt21() {
    if ($("#TextArea2").val() == ""){
      if ($("#Select1").val() == 2)
        $("#TextArea2").val("请输入要提取的网址，一行一条网址");
    else
        $("#TextArea2").val("请粘贴要提取的文本");
	}
}
function regoutput(sec) {
    var RegStr;
    switch (sec) {
        case 6:
            RegStr = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/ig;
            break;
        default:
            RegStr = eval("/" + $("#txtReg").val() + "/ig");
            break;
    }
    $("#TextArea1").val("");
    var tx1 = $("#Text1").val().toLowerCase();
    var tx2 = $("#Text2").val().toLowerCase();
    var typ = $("#Select1").val();
    var keyword = $("#TextArea2").val();
    if (typ == "2") {
        var strval = keyword.split("\n");
        var cot = strval.length;
        var yc = 0;
        if (cot > 20) {
            alert("一次提取不能超过20条网址！");
        }
        else {
		$("#record").html("开始提取...");
            var i = 0;
            intervalId = window.setInterval(function () {
                $.get("/tools/ajax/getcont.ashx", { url: strval[i] },
  function (data) {
      yc = yc + 1;
      if (cot > yc)
          $("#record").html("共:" + cot + "已提取:" + yc);
      else
          $("#record").html("提取完成！");
      keyword = data;
      var arr;
      var str = "";
      var durl = "";
      while (arr = RegStr.exec(keyword)) {
          if (tx1 != "" && arr[0].toLowerCase().indexOf(tx1) < 0)
              continue;
          if (tx2 != "" && arr[0].toLowerCase().indexOf(tx2) >= 0)
              continue;
          if (sec == 7) {				  
          if ($("#Checkbox3").is(':checked') && (str.indexOf(arr[1]) >= 0 || $("#TextArea1").val().indexOf(arr[1]) >= 0))
              continue;
              if ($("#Checkbox1").is(':checked'))
                  str += arr[1];
              if ($("#Checkbox2").is(':checked')) {
                  if ($("#Checkbox1").is(':checked'))
                      str += " " + arr[2] + "\n";
                  else
                      str += arr[2] + "\n";
              }
              else
                  str += "\n";
          }		  
          else if(sec==1){
          if ($("#Checkbox3").is(':checked') && (str.indexOf(arr[0]) >= 0 || $("#TextArea1").val().indexOf(arr[0]) >= 0))
              continue;		  
              str += arr[0] + "\n";
		  }
          else{				  
          if ($("#Checkbox3").is(':checked') && (str.indexOf(arr[0]) >= 0 || $("#TextArea1").val().indexOf(arr[0]) >= 0))
              continue;
              str += arr[0] + "\n";
		  }
      }
      $("#TextArea1").val($("#TextArea1").val() + str);
  });
                i += 1;
                if (i >= cot) {
                    window.clearInterval(intervalId);
                }
            }, 800);
        }
    }
    else {
		if(sec==1)
			RegStr = /(1(39|38|37|36|35|34|47|50|51|52|57|58|59|78|82|83|84|87|88|98|30|31|32|55|56|66|85|86|45|76|33|53|77|73|80|81|89|99|70|71)[ ]?[-]?\d{8})/ig;
        var arr;
        var str = "";
        while (arr = RegStr.exec(keyword)) {
            if (tx1 != "" && arr[0].toLowerCase().indexOf(tx1) < 0)
                continue;
            if (tx2 != "" && arr[0].toLowerCase().indexOf(tx2) >= 0)
                continue;
            if (sec == 7) {				  
          if ($("#Checkbox3").is(':checked') && str.indexOf(arr[1]) >= 0)
              continue;
                if ($("#Checkbox1").is(':checked'))
                    str += arr[1];
                if ($("#Checkbox2").is(':checked')) {
                    if ($("#Checkbox1").is(':checked'))
                        str += " " + arr[2] + "\n";
                    else
                        str += arr[2] + "\n";
                }
                else
                    str += "\n";
            }
            else{			  
          if ($("#Checkbox3").is(':checked') && str.indexOf(arr[0]) >= 0)
              continue;
                str += arr[0] + "\n";
			}
        }
        if (str == "")
            alert("没有提取到任何信息！");
        $("#TextArea1").val(str);
    }
}


function dwchg() {
    if ($("#Select1").val() == 2){
        $("#gettxt").hide();		
        $("#getweb").show();
	}
    else{
        $("#gettxt").show();	
        $("#getweb").hide();
	}
    $("#TextArea1").val("");
}