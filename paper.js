class Paper {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2

        }

        this.image = loadImage("dustbingreen.png");

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius*2;

        World.add(world, this.body);

        
    }

    display() {
        //fill("yellow");
        //circle(this.body.position.x, this.body.position.y, this.radius);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);

    }
}