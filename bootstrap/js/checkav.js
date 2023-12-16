// 获取输入框和结果框的元素
var inputBox = document.getElementById('tasklist');
var resultBox = document.getElementById('result');

// 监听输入框的变化事件
inputBox.addEventListener('input', function() {
    // 清空结果框
    resultBox.value = '';

    // 获取输入框的内容，并按行分割
    var inputLines = inputBox.value.split('\n');

    // 遍历输入的每一行
    inputLines.forEach(function(line) {
        var words = line.trim().split(/\s+/); // 分割每行的单词
        var processName = '';
        var isWindowsProcess = false;

        // 确定是Windows还是Linux环境
        if (words[0].toLowerCase().endsWith('.exe')) {
            // Windows环境：进程名称是每行的第一个单词
            processName = words[0].toLowerCase();
            isWindowsProcess = true;
        } else {
            // Linux环境：进程名称是每行的最后一个单词
            processName = words[words.length - 1].toLowerCase();
        }

        // 如果是Windows进程，去除 .exe 后缀
        if (isWindowsProcess) {
            processName = processName.replace('.exe', '');
        }

        // 检查 avList 中是否有匹配项
        for (var process in avList) {
            if (process.toLowerCase() === processName) {
                // 根据原始输入决定输出格式
                var displayName = isWindowsProcess ? words[0] : processName;
                resultBox.value += displayName + ': ' + avList[process] + '\n';
                break; // 找到匹配项后不再继续检查其他进程
            }
        }
    });

    // 如果没有匹配结果，则给予对应的提示
    if (resultBox.value === '') {
        resultBox.value = '未找到匹配的杀毒软件名单';
    }
});
