/**
 * Created by scott on 6/7/2017.
 */

"use strict;"

let Circle = function (center, radius) {
    RigidShape.call(this, center);
    this.mType = "Circle";
    this.mRadius = radius;
    // start point of line in circle
    this.mStartpoint = new Vec2(center.x, center.y - radius);
};

// Ensuring that Circle class inherits properly from RigidShape
let prototyp = Object.create(RigidShape.prototype);
prototyp.constructor = Circle;
Circle.prototype = prototyp;

// Draw Function 
Circle.prototype.draw = function (context) {
  context.beginPath();
  // draw circle
  context.arc(
      this.mCenter.x,
      this.mCenter.y,
      this.mRadius,
      0,
      Math.PI * 2,
      true
  );
  // draw line from this point to center
  context.moveTo(this.mStartpoint.x, this.mStartpoint.y);
  context.lineTo(this.mCenter.x, this.mCenter.y);
  context.closePath();
  context.stroke();
};