class TitleScreen extends Phaser.Scene
{
    constructor()
    {
        super("TitleScreen")
    }

    preload()
    {

    }

    create()
    {
        console.log("Title Screen")
        this.add.rectangle(0,0,100,100,0xffffff)
    }

    update()
    {

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