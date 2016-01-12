function copyToClipboard(txt){	
        var element = $('<textarea id="' + txt + '">');
	$('body').append(element);
	element.val(txt).select();
	document.execCommand('copy');
	element.remove();   
}

