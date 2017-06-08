/**
 * Created by scott on 6/7/2017.
 */

"use strict;"

let gObjectNum = 0;

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
        let r1 = new Rectangle(
            new Vec2(
                Math.random() * width * 0.8,
                Math.random() * height * 0.8
            ),
            Math.random() * 30 + 10,
            Math.random() * 30 + 10);
    }

    if (keycode === 71) { // press g
        let r1 = new Circle(
            new Vec2(
                Math.random() * width * 0.8,
                Math.random() * height * 0.8
            ),
            Math.random() * 10 + 20);
    }

    if (keycode >= 48 && keycode <= 57) { // number
        if (keycode - 48 < gEngine.Core.mAllObjects.length) {
            gObjectNum = keycode - 48;
        }
    }
    if (keycode === 38) { // up arrow
        if (gObjectNum > 0) {
            gObjectNum--;
        }
    }
    if (keycode === 40) { // down arrow
        if (gObjectNum < gEngine.Core.mAllObjects.length - 1) {
            gObjectNum++;
        }
    }

}