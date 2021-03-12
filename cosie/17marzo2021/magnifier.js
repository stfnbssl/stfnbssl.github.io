/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\cosie\.wizzi\src\17marzo2021\magnifier.js.ittf
*/
'use strict';
function magnify(divEl, imgEl, zoom) {
    var glass,
        w,
        h,
        bw;
    // set img = document.getElementById(imgID)
    // set img = imgID
    // create magnifier glass:
    // set glass = document.createElement("DIV")
    glass = divEl;
    // _ glass.setAttribute("class", "img-magnifier-glass")
    // insert magnifier glass:
    // _ img.parentElement.insertBefore(glass, img)
    // set background properties for the magnifier glass:
    // log 'imgEl.src', imgEl.src
    glass.style.backgroundImage = "url('" + imgEl.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (imgEl.width * zoom) + "px " + (imgEl.height * zoom) + "px";
    bw = -100;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
    // execute a function when someone moves the magnifier glass over the image:
    imgEl.addEventListener("mouseover", showMagnifier);
    imgEl.addEventListener("mouseout", hideMagnifier);
    glass.addEventListener("mousemove", moveMagnifier);
    imgEl.addEventListener("mousemove", moveMagnifier);
    // and also for touch screens:
    // _ glass.addEventListener("touchmove", moveMagnifier)
    // _ imgEl.addEventListener("touchmove", moveMagnifier)
    var moveActive = true;
    function showMagnifier() {
        console.log('showMagnifier', glass.id);
        glass.style.display = 'block';
        moveActive = true;
    }
    function hideMagnifier() {
        console.log('hideMagnifier', glass.id);
        // set glass.style.display = 'none'
        moveActive = false;
    }
    function moveMagnifier(e) {
        var pos,
            x,
            y;
        if (!moveActive) {
            return ;
        }
        // prevent any other actions that may occur when moving over the image
        e.preventDefault();
        // get the cursor's x and y positions:
        pos = getCursorPos(e);
        x = pos.x;
        y = pos.y;
        // prevent the magnifier glass from being positioned outside the image:
        if (x > imgEl.width - (w / zoom)) {
            x = imgEl.width - (w / zoom);
        }
        if (x < w / zoom) {
            x = w / zoom;
        }
        if (y > imgEl.height - (h / zoom)) {
            y = imgEl.height - (h / zoom);
        }
        if (y < h / zoom) {
            y = h / zoom;
        }
        // set the position of the magnifier glass:
        // set glass.style.left = 500 + (x - w) + "px"
        // set glass.style.top = (y - h) + "px"
        // display what the magnifier glass "sees":
        console.log('x', x);
        x = 45;
        glass.style.backgroundPosition = "-" + ((x * zoom) - w + (bw*1.3)) + "px -" + ((y * zoom) - h + bw) + "px";
    }
    function getCursorPos(e) {
        var a,
            x = 0,
            y = 0;
        e = e || window.event;
        //
        a = imgEl.getBoundingClientRect();
        //
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        //
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {
                x, 
                y
            };
    }
}
