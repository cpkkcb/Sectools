function generateStrongPassword(length) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?';

    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    return password;
    
}



function updatePassword() {
    const newPassword = generateStrongPassword(16); // 设置所需密码长度
    document.getElementById('ranoutput').textContent = newPassword;
}

function copyPassword() {
    // 获取生成的密码文本
    var password = document.getElementById("ranoutput").textContent;

    // 创建一个文本区域元素用于临时存储密码
    var tempInput = document.createElement("textarea");
    tempInput.value = password;
    document.body.appendChild(tempInput);

    // 选中文本并复制到剪贴板
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // 显示悬浮提示窗口
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "block";

    // 隐藏悬浮提示窗口
    setTimeout(function() {
      tooltip.style.display = "none";
    }, 1500);
  }
