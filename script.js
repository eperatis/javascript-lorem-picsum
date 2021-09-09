window.onload = () => {
    changeBackground();
};

getResolution = () => {
    var win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0],
        x = win.innerWidth,
        y = win.innerHeight;
    alert(x + ' × ' + y);
}

changeBackground =() => {
    document.getElementsByTagName("body")[0].style.backgroundImage =
        "url(https://picsum.photos/" + window.innerWidth + "/" + window.innerHeight + "/?random&rnd" + new Date().getTime() + ")"
}
