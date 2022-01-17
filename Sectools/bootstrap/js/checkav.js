function av1() {
    var tasklist = document.getElementById('tasklist').value;
    var result = document.getElementById('result');
    if (tasklist != "" && tasklist) {
        var re = new RegExp("(.*?)\.exe", "g");
        var tasks = tasklist.match(re);
        if (tasks) {
            var htmlContent = "";
            for (i = 0; i < Object.keys(avList).length; i++) {
                var taskid = Object.keys(avList)[i];
                for (x = 0; x < tasks.length; x++) {
                    if (taskid.toLowerCase() == tasks[x].toLowerCase()) {
                        htmlContent += taskid + "：" + avList[taskid] + "\n";
                    }
                }
            }
            result.innerHTML = htmlContent;

        } else {
            result.innerHTML = '暂无匹配，欢迎补充！';
        }

    } else {
        result.innerHTML = '请输入！';
    }
}

function av2() {
    var tasklist = document.getElementById('tasklist').value;
    var result = document.getElementById('result');
    if (tasklist != "" && tasklist) {
        var re = new RegExp("(.*?)\.exe", "g");
        var tasks = tasklist.match(re);
        if (tasks) {
            var htmlContent = "";
            for (i = 0; i < Object.keys(avList1).length; i++) {
                var taskid = Object.keys(avList1)[i];
                for (x = 0; x < tasks.length; x++) {
                    if (taskid.toLowerCase() == tasks[x].toLowerCase()) {
                        htmlContent += taskid + "：" + avList1[taskid] + "\n";
                    }
                }
            }
            result.innerHTML = htmlContent;

        } else {
            result.innerHTML = '暂无匹配，欢迎补充！';
        }

    } else {
        result.innerHTML = '请输入！';
    }
}