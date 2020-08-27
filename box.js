class Box {
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;
        this.boxSize = 125;
        
    }

    draw() {
        
        fill (this.color);
        rect (this.x, this.y, this.boxSize, this.boxSize);
        if (mouseIsPressed && dist(mouseX, mouseY, this.x + this.boxSize / 2, this.y + this.boxSize/2) < this.boxSize / 2) {
            game.myScore(this.color)
        }
    }
}