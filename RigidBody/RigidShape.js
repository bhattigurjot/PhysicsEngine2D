/**
 * Created by scott on 6/7/2017.
 */

"use strict;"

function RigidShape(center) {
    this.mCenter = center;
    this.mAngle = 0;
    gEngine.Core.mAllObjects.push(this);
}