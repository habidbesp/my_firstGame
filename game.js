class Game {
    constructor(){
        this.color = ["#000000", "#16c910", "#3c67bd", "#8400FF", "#bd3c56", "#FFC300"]
        // black : "#000000", green:"#16c910", blue:"#2312de", lila:"#8400FF" yellow:"#FFF700" orange:"#FFC300"
        this.box = [];
        this.boxSize = 125
        this.score = 0
        this.gameStatus = "startPage"   
    }
    
        
    setup(){

        for (let x = 0; x < width; x += width / 4) {
            for (let y = 0; y < height; y += height / 4) {
                let color = this.getRandomColor();
                strokeWeight(1);
            
                   let newBox = new Box(x, y, color);
                   this.box.push(newBox);

                } 
            }
        }



    getRandomColor() {
        let randomIndex = Math.floor(Math.random() * this.color.length)
        return this.color[randomIndex]
    }



    drawGame(){
        if(this.gameStatus == "startPage") {
            textAlign(CENTER);
            fill(255,0,0)
            textSize(30)
            text("\"RED\"", width / 2, height / 2  -170)
            fill("Black")
            textSize(20)
            text("will increase your score.", width / 2, height / 2 - 130)
            text("Be careful when keeping your mouse", width / 2, height / 2 -100)
            text("pressed in the wrong color,", width / 2, height / 2 -75)
            text("it could considerably decrease your score.", width / 2, height / 2 -50)
            text("Test your reflexes and get 1500 points", width / 2, height / 2 )
            text("to master this challenge", width / 2, height / 2 +25)

            textSize(25)
            text("press space to start", width / 2, height / 2 + 125);
        } else if (this.gameStatus == "playing") {

                if(frameCount % 60 === 0) {
                this.box = [];
                for (let x = 0; x < width; x += width / 4) {
                    for (let y = 0; y < height; y += height / 4) {
                    let color = this.getRandomColor();
                    strokeWeight(1);
                
                       let newBox = new Box(x, y, color);
                        this.box.push(newBox);

                    } 
                }
                console.log(this.box.length)
            }   
            if(frameCount % 80 === 0) {
            this.box[Math.floor(Math.random() * 16)].color = "#fc0303" //red
            } 
            this.box.forEach(box => box.draw());

            push()
                fill("white")
                textSize(20);
                textAlign(CENTER)
                text(`score: ${this.score}`, 50, 50)
                text(`timer left: ${counter}`,60, 80)
            pop()


            if (counter <= 0) {
                this.gameStatus = "game over"
            }
        } else if (this.gameStatus == "game over") {
        clear()
        background(199, 188, 159)
        fill("Black")
        textSize(22);
        textAlign(CENTER)
        text("Time Over", width / 2 , height / 2 - 100)
        text(`Score: ${this.score}`, width /2, height / 2 - 50 )
        text("press space to restart the game", width / 2 , height / 2 + 100)
        
            if(this.score > 1500){
                text(`Awesome, you did it!`, width / 2, height / 2)
            }else{
                text(`Your Score is too low, try to get  1500 points`, width /2, height / 2)
            }
        } 
    }
    

    // method
    myScore(color){
        if(color === "#000000" || color === "#16c910" || color === "#3c67bd" || color === "#8400FF" || color === "#bd3c56" || color === "#FFC300") {
             this.score -= 15;
        }else {
             this.score += 10
        }
    } 
}


