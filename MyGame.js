/**
 * Created by Gurjot Bhatti on 6/19/2017.
 */

function MyGame() {
    let width = gEngine.Core.mWidth;
    let height = gEngine.Core.mHeight;

    let up = new Rectangle(new Vec2(width/2, 0), width, 3);
    let down = new Rectangle(new Vec2(width/2, height), width, 3);
    let left = new Rectangle(new Vec2(0, height/2), 3, height);
    let right = new Rectangle(new Vec2(width, height/2), 3, height);
};