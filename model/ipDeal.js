function regoutput(ipAddressLength) {
    var textArea1 = document.getElementById('TextArea1');
    var textArea2 = document.getElementById('TextArea2');
    var checkbox = document.getElementById('Checkbox3');
    var exceptIPInput = document.getElementById('exceptIP');

    var text = textArea1.value; // 获取TextArea1中的文本内容
    var exceptIPs = exceptIPInput.value.split(',').map(ip => ip.trim()); // 将exceptIP输入框的值分割成一个数组

    // 自定义正则表达式以匹配IP地址
    var regex = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g;

    var matches = text.match(regex); // 使用正则表达式匹配IP地址

    if (matches) {
        var filteredIPs;
        if (exceptIPs.length > 0 && exceptIPs[0] !== '') {
            filteredIPs = matches.filter(ip => !exceptIPs.some(except => ip.includes(except))); // 过滤掉在排除列表中的IP地址
        } else {
            filteredIPs = matches;
        }

        if (checkbox.checked) {
            // 如果勾选了去重复IP选项
            var uniqueIPs = Array.from(new Set(filteredIPs)); // 去除重复的IP地址
            textArea2.value = uniqueIPs.slice(0, ipAddressLength).join('\n');
        } else {
            // 如果未勾选去重复IP选项，直接展示所有匹配的IP地址
            textArea2.value = filteredIPs.slice(0, ipAddressLength).join('\n');
        }
    } else {
        textArea2.value = '未找到IP地址。';
    }
}
