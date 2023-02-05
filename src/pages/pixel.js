import { Component } from "react";

export class Pixel extends Component{
    constructor(x, y, val) {
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.val = val;

       
    }

   

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        );
        ctx.fill();
    }
}
