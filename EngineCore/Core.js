/**
 * Created by scott on 6/7/2017.
 */

"use strict;"

let gEngine = {};
gEngine.Core = (function () {
    let mCanvas, mContext, mWidth = 800, mHeight = 450;
    let mAllObjects = [];

    mCanvas = document.getElementById('canvas');
    mContext = mCanvas.getContext('2d');
    mCanvas.height = mHeight;
    mCanvas.width = mWidth;

    let runGameLoop = function () {
        requestAnimationFrame(function () {
            runGameLoop();
        });
        updateUIEcho();
        draw();
    };

    let updateUIEcho = function () {
        document.getElementById("uiEchoString").innerHTML = '<p><b>Selected Object:</b></p>' +
            '<ul style="margin:-10px;">' +
            '<li>Id: ' + gObjectNum + '</li>' +
            '<li>Center: '+ mAllObjects[gObjectNum].mCenter.x.toPrecision(3) + ', ' +
            mAllObjects[gObjectNum].mCenter.y.toPrecision(3) +'</li>' +
            '</ul> <hr>' + '<p><b>Control:</b> of selected object</p>' +
            '<ul style="margin: -10px">' +
            '<li><b>Num</b> or <b>Up/Down Arrow:</b> Select Object</li>' +
            '</ul> <hr>' +
            '<b>F/G:</b> Spawn [Rectangle/Circle] at random location' + '<hr>';
    };

    let draw = function () {
        mContext.clearRect(0, 0, mWidth, mHeight);
        let i;
        for (i = 0; i < mAllObjects.length; i++) {
            mContext.strokeStyle = 'blue';
            if (i === gObjectNum) {
                mContext.strokeStyle = 'red';
            }
            mAllObjects[i].draw(mContext);
        }
    };

    let initializeEngineCore = function () {
        runGameLoop();
    };

    let mPublic = {
        initializeEngineCore: initializeEngineCore,
        mAllObjects: mAllObjects,
        mWidth: mWidth,
        mHeight: mHeight,
        mContext: mContext
    };

    return mPublic;
}());

