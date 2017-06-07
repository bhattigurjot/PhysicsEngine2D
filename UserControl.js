/**
 * Created by scott on 6/7/2017.
 */

"use strict;"

function userControl(event) {
    let keycode;
    let width = gEngine.Core.mWidth;
    let height = gEngine.Core.mHeight;
    let context = gEngine.Core.mContext;

    if(window.event) { // IE
        keycode = event.keyCode;
    } else if (event.which) { // Netscape/Firefox/Opera
        keycode = event.which;
    }

    if (keycode === 70) { // press f
        console.log('f');
        context.strokeRect(
            Math.random()* width * 0.8,    // x position
            Math.random() * height * 0.8,  // y position
            Math.random() * 30 + 10,       // width
            Math.random() * 30 + 10        // height
        );
    }

    if (keycode === 71) { // press g
        console.log('f');
        context.beginPath();
        context.arc(
            Math.random()* width * 0.8,    // x position
            Math.random() * height * 0.8,  // y position
            Math.random() * 30 + 10,       // radius
            0,                             // start angle
            Math.PI * 2,                   // end angle
            true                           // anticlockwise?
        );
        context.closePath();
        context.stroke();
    }

}