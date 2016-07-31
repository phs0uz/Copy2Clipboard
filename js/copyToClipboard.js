function copyToClipboard(node, txt, textCopied) {
    var element = document.createElement("TEXTAREA");
    var span = document.createElement("SPAN");

    var text = document.createTextNode(txt);
    var copied = document.createTextNode(textCopied);

    var id = 'COPYTOCLIPBOARD_SPAN';

    element.appendChild(text);
    span.appendChild(copied);

    span.id = id;

    document.body.appendChild(element);

    if (!document.getElementById(id)){
        document.body.appendChild(span);
    }

    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
    span.style.position = 'absolute';
    span.style.top = node.offsetTop - 30 + 'px';
    span.style.left = node.offsetLeft + 'px';
    span.style.opacity = 0;
    span.style.transition = 'opacity 0.5s linear';

    setTimeout(function () {
        try {
            document.body.removeChild(span);
        }catch(err) {
            console.log("More than one span permited");
        }
    }, 1000);
}

