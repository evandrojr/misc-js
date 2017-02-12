
var Engine = {
    engines: 1,
    ignition: function() {
        console.log( "Turning on my engine." );
    },
};



var SteeringWheel = {
    wheels: 1,

    drive: function() {
        this.ignition();
        console.log( "Steering and moving forward!" );
    }
};

var Car = mn.mixin(Engine, {});
var Car = mn.mixin(SteeringWheel, Car);



var Car = mn.mixin( Car, {
    wheels: 4,

    drive: function() {
        SteeringWheel.drive.call( this );
        console.log( "Rolling on all " + this.wheels + " wheels!" );
    }
} );


c = Car;
console.log(c.wheels)
c.drive()
