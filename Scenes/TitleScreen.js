class TitleScreen extends Phaser.Scene
{
    constructor()
    {
        super("TitleScreen")

        this.recA = null;
    }
    preload()
    {

    }

    create()
    {
        console.log("Title Screen")
        this.recA = this.add.rectangle(800,450,50,50,0xffffff)
        this.recA.setInteractive()
        this.recA.on("pointerdown",this.onClick,this)

    }

    update()
    {

    }

    // alias to create rectangle
    rect(x, y, width, height, color)
    {
        var r = this.add.rectangle(x, y, width, height, color);
        return r;
    }

    onClick()
    {
        this.scene.start("Scene1")
    }

}