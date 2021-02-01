class Scene1 extends Phaser.Scene
{
    constructor()
    {
        //Name Of Scene
        super("Scene1")

        //Variables
        this.recA = null;
    }

    preload()
    {
        
    }

    create()
    {
        // logs for scene 1
        console.log("Scene1")

        // Creates a rectangle on scene 1
        this.recA = this.add.rectangle(50,50,100,100,0xffffff)

        // creates a listener for an A key
        this.leftButton = this.input.keyboard.addKey("A");
        // creates a listener for an D key
        this.rightButton = this.input.keyboard.addKey("D");
        // creates a listener for an W key
        this.upButton = this.input.keyboard.addKey("W");
        // creates a listener for an S key
        this.downButton = this.input.keyboard.addKey("S");
    }

    update()
    {
        // move left
        if(this.leftButton.isDown)
        {
            this.recA.x -= 10;
        }

        // move right 
        if(this.rightButton.isDown)
        {
            this.recA.x += 10;
        }

        // move down
        if(this.downButton.isDown)
        {
            this.recA.y += 10;
        }

        // move up
        if(this.upButton.isDown)
        {
            this.recA.y -= 10;
        }
    }

    // alias to create rectangle
    rect(x, y, width, height, color)
    {
        var r = this.add.rectangle(x, y, width, height, color);
        return r;
    }

}