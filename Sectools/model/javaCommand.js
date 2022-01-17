$(document).ready(function() {
    $('input[type=radio][name=inlineRadioOptions]').change(function() {
		var taInput = document.querySelector('textarea#command');
        if (this.value == 'Bash') {
			taInput.placeholder = '输入Bash命令..'	
        }
		if (this.value == 'Python') {
		   taInput.placeholder = '输入Python命令..'
		}
		if (this.value == 'PowerShell') {
			taInput.placeholder = '输入PowerShell命令..'
		}
        else if (this.value == 'Perl') {
            taInput.placeholder = '输入Perl命令..'
        }
    });
});
var taInput = document.querySelector('textarea#command');
  var taOutput = document.querySelector('textarea#showcode');
  function processInput() {
    var option = document.querySelector('input#input_radio:checked').value;
    switch (option) {
      case 'Bash':
        taOutput.value = 'bash -c {echo,' + btoa(taInput.value) + '}|{base64,-d}|{bash,-i}';
        break;
      case 'PowerShell':
        poshInput = ''
        for (var i = 0; i < taInput.value.length; i++) { poshInput += taInput.value[i] + decodeURI("%00"); }
        taOutput.value = 'powershell.exe -NonI -W Hidden -NoP -Exec Bypass -Enc ' + btoa(poshInput);
        break;
      case 'Python':
        taOutput.value = "python -c exec('" + btoa(taInput.value) + "'.decode('base64'))";
        break;
      case 'Perl':
        taOutput.value = "perl -MMIME::Base64 -e eval(decode_base64('" + btoa(taInput.value) + "'))";
        break;
      default:
        taOutput.value = ''
    }

    if (!taInput.value) taOutput.value = '';
  }

  taInput.addEventListener('input', processInput, false);

