     document.addEventListener('DOMContentLoaded', function() {
        const submitButton = document.querySelector('#googlehacking button');
        const inputField = document.getElementById('website');

        // 处理按钮点击事件
        submitButton.addEventListener('click', function(event) {
            event.preventDefault();
            const website = inputField.value;
            const generatedSyntax = generateGoogleSyntax(website);
            document.getElementById('results').innerHTML = generatedSyntax;
        });

        // 处理输入框回车事件
        inputField.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                const website = inputField.value;
                const generatedSyntax = generateGoogleSyntax(website);
                document.getElementById('results').innerHTML = generatedSyntax;
            }
        });
    });

    function generateGoogleSyntax(website) {
        const target = website || 'target.com'; // 可替换为用户输入的网址

        // 生成的搜索语法
        return `
            <h3>生成的搜索语法：</h3>
            <p>管理后台地址: <br>
            <a href="https://www.google.com/search?q=site:${encodeURIComponent(target)}+intext:%E7%AE%A1%E7%90%86+|+%E5%90%8E%E5%8F%B0+|+%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86+|+%E7%99%BB%E9%99%86+|+%E7%99%BB%E5%BD%95+|+%E7%94%A8%E6%88%B7%E5%90%8D+|+%E5%AF%86%E7%A0%81+|+%E7%B3%BB%E7%BB%9F+|+%E8%B4%A6%E5%8F%B7+|+login+|+system" target="_blank">site:${target} intext:管理 | 后台 | 后台管理 | 登陆 | 登录 | 用户名 | 密码 | 系统 | 账号 | login | system</a><br>
            <a href="https://www.google.com/search?q=site:${encodeURIComponent(target)}+inurl:login+|+inurl:admin+|+inurl:manage+|+inurl:manager+|+inurl:admin_login+|+inurl:system+|+inurl:backend" target="_blank">site:${target} inurl:login | inurl:admin | inurl:manage | inurl:manager | inurl:admin_login | inurl:system | inurl:backend</a><br>
            <a href="https://www.google.com/search?q=site:${encodeURIComponent(target)}+intitle:%E7%AE%A1%E7%90%86+|+%E5%90%8E%E5%8F%B0+|+%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86+|+%E7%99%BB%E9%99%86+|+%E7%99%BB%E5%BD%95" target="_blank">site:${target} intitle:管理 | 后台 | 后台管理 | 登陆 | 登录</a></p>
        <p>上传类漏洞地址: <br>
            <a href="https://www.google.com/search?q=site:${encodeURIComponent(target)}+inurl:file+|+inurl:upload" target="_blank">site:${target} inurl:file | inurl:upload</a></p>
        <p>注入页面: <br>
            <a href="https://www.google.com/search?q=site:${encodeURIComponent(target)}+inurl:?id=+|+inurl:php?id=+|+inurl:jsp?id=+|+inurl:aspx?id=+|+inurl:asp?id=" target="_blank">site:${target} inurl:?id= | inurl:php?id= | inurl:jsp?id= | inurl:aspx?id= | inurl:asp?id=</a></p>
        <p>编辑器页面: <br>
            <a href="https://www.google.com/search?q=site:${encodeURIComponent(target)}+inurl:ewebeditor" target="_blank">site:${target} inurl:ewebeditor</a></p>
        <p>目录遍历漏洞: <br>
            <a href="https://www.google.com/search?q=site:${encodeURIComponent(target)}+intitle:%22index+of%22" target="_blank">site:${target} intitle: "index of"</a></p>
        <p>URL 跳转: <br>
            <a href="https://www.google.com/search?q=site:${encodeURIComponent(target)}+inurl:url=+|+inurl:return=+|+inurl:next=+|+inurl:redir=+inurl:http" target="_blank">site:${target} inurl:url= | inurl:return= | inurl:next= | inurl:redir= inurl:http</a></p>
        <p>SQL错误: <br>
            <a href="https://www.google.com/search?q=site:${encodeURIComponent(target)}+intext:%22sql+syntax+near%22+|+intext:%22syntax+error+has+occurred%22+|+intext:%22incorrect+syntax+near%22+|+intext:%22unexpected+end+of+SQL+command%22+|+intext:%22Warning:+mysql_connect()%22+|+intext:%E2%80%9DWarning:+mysql_query()%22+|+intext:%22Warning:+pg_connect()%22" target="_blank">site:${target} intext:"sql syntax near" | intext:"syntax error has occurred" | intext:"incorrect syntax near" | intext:"unexpected end of SQL command" | intext:"Warning: mysql_connect()" | intext:”Warning: mysql_query()" | intext:"Warning: pg_connect()"</a></p>
        <p>phpinfo: <br>
            <a href="https://www.google.com/search?q=site:${encodeURIComponent(target)}+ext:php+intitle:phpinfo+%22published+by+the+PHP+Group%22" target="_blank">site:${target} ext:php intitle:phpinfo "published by the PHP Group"</a></p>
        <p>配置文件泄露: <br>
            <a href="https://www.google.com/search?q=site:${encodeURIComponent(target)}+ext:.xml+|+.conf+|+.cnf+|+.reg+|+.inf+|+.rdp+|+.cfg+|+.txt+|+.ora+|+.ini" target="_blank">site:${target} ext:.xml | .conf | .cnf | .reg | .inf | .rdp | .cfg | .txt | .ora | .ini</a></p>
        <p>数据库文件泄露: <br>
            <a href="https://www.google.com/search?q=site:${encodeURIComponent(target)}+ext:.sql+|+.dbf+|+.mdb+|+.db" target="_blank">site:${target} ext:.sql | .dbf | .mdb | .db</a></p>
        <p>日志文件泄露: <br>
            <a href="https://www.google.com/search?q=site:${encodeURIComponent(target)}+ext:.log" target="_blank">site:${target} ext:.log</a></p>
        <p>备份和历史文件泄露: <br>
            <a href="https://www.google.com/search?q=site:${encodeURIComponent(target)}+ext:.bkf+|+.bkp+|+.old+|+.backup+|+.bak+|+.swp+|+.rar+|+.txt+|+.zip+|+.7z+|+.sql+|+.tar.gz+|+.tgz+|+.tar" target="_blank">site:${target} ext:.bkf | .bkp | .old | .backup | .bak | .swp | .rar | .txt | .zip | .7z | .sql | .tar.gz | .tgz | .tar</a></p>
        <p>公开文件泄露: <br>
            <a href="https://www.google.com/search?q=site:${encodeURIComponent(target)}+filetype:.doc+|+.docx+|+.xls+|+.xlsx+|+.ppt+|+.pptx+|+.odt+|+.pdf+|+.rtf+|+.sxw+|+.psw+|+.csv" target="_blank">site:${target} filetype:.doc | .docx | .xls | .xlsx | .ppt | .pptx | .odt | .pdf | .rtf | .sxw | .psw | .csv</a></p>
        <p>邮箱信息: <br>
            <a href="https://www.google.com/search?q=site:${encodeURIComponent(target)}+intext:@${target}" target="_blank">site:${target} intext:@${target}</a><br>
            <a href="https://www.google.com/search?q=site:${encodeURIComponent(target)}+%E9%82%AE%E4%BB%B6" target="_blank">site:${target} 邮件</a><br>
            <a href="https://www.google.com/search?q=site:${encodeURIComponent(target)}+email" target="_blank">site:${target} email</a></p>
            <p>社工信息: <br> 
            <a href="https://www.google.com/search?q=site:${encodeURIComponent(target)}+intitle:%E8%B4%A6%E5%8F%B7+|+%E5%AF%86%E7%A0%81+|+%E5%B7%A5%E5%8F%B7+|+%E5%AD%A6%E5%8F%B7+|+%E8%BA%AB%E4%BB%BD%E8%AF%81" target="_blank">site:${target} intitle:账号 | 密码 | 工号 | 学号 | 身份证</a></p>
        `;
    }

