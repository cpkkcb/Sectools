function startDeal() {
    var originTextArea = document.getElementById('originTextArea1');
    var resultTextArea = document.getElementById('resultTextArea2');
    var infoBox = document.getElementById('infoBox');

    // 获取原始文本内容，并按行分割成数组
    var lines = originTextArea.value.split('\n');

    // 使用Set数据结构去重
    var uniqueLines = [...new Set(lines)];

    // 显示输入行数的悬浮窗
    infoBox.textContent = '输入行数总计: ' + lines.length;
    infoBox.style.display = 'block';

    setTimeout(function () {
        // 将去重后的文本数组重新组合成文本
        var uniqueText = uniqueLines.join('\n');

        // 将去重后的文本设置到结果文本区域
        resultTextArea.value = uniqueText;

        // 显示去重后行数的悬浮窗
        infoBox.textContent = '去重后行数为: ' + uniqueLines.length;

        // 1秒后隐藏悬浮窗
        setTimeout(function () {
            infoBox.style.display = 'none';
        }, 2000);

    }, 1000); // 假设去重操作耗时1秒钟

}