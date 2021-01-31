class TitleScreen extends Phaser.Scene
{
    constructor()
    {
        super("TitleScreen")
        this.leftButton = null;
        this.recA = null;
    }

    preload()
    {
        
    }

    create()
    {
        console.log("Title Screen")
        this.recA = this.add.rectangle(50,50,100,100,0xffffff)

        this.leftButton = this.input.keyboard.addKey("A");
        this.rightButton = this.input.keyboard.addKey("D");
        this.upButton = this.input.keyboard.addKey("W");
        this.downButton = this.input.keyboard.addKey("S");
    }

    update()
    {
        if(this.leftButton.isDown)
        {
            this.recA.x -= 10;
        }

        if(this.rightButton.isDown)
        {
            this.recA.x += 10;
        }

        if(this.downButton.isDown)
        {
            this.recA.y += 10;
        }

        if(this.upButton.isDown)
        {
            this.recA.y -= 10;
        }
    }

    rect(x, y, width, height, color)
    {
        var r = this.add.rectangle(x, y, width, height, color);
        return r;
    }

    move()
    {

    }

}