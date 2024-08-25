class Train {
    constructor (name, speed) {
        this.name = name;
        this.speed = speed;
    }
    upgradeSpeed(newSpeed) {
        this.speed = newSpeed;
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log('getPrototype:',proto);
    }
    getSelf() {
        console.log('getSelf:',this);
    }
}

var train = new Train('fury','120km/h');
console.log(train); // Train { name: 'fury', speed: '120km/h' }
train.upgradeSpeed('140km/h');
console.log(train); // Train { name: 'fury', speed: '140km/h' }

train.getPrototype();
train.getSelf(); // Train { name: 'fury', speed: '140km/h' }

console.log('-------')

var protoTrain = Object.create(train);
protoTrain.name = "Marcelo";
protoTrain.upgradeSpeed('230km/h');
protoTrain.getSelf();
protoTrain.getPrototype();

class HighSpeedTrain extends Train {
    constructor (name, speed, color, lightsOn) {
        super(name, speed); // by using super you inherit automatically all the methods and variables from base/super-class Train
        this.color = color;
        this.lightsOn = lightsOn;
    }
    upgradeSpeed() {
        this.speed = '450km/h';
        console.log('highspeed status now:',this.speed);
    }
}

console.log('---HIGHSPEED TRAIN----')

var highSpeedTrain = new HighSpeedTrain('Ruby', '340km/h', 'soft-red', false);

highSpeedTrain.getSelf(); // getSelf: HighSpeedTrain { name: 'Ruby', speed: '340km/h', color: 'soft-red', lightsOn: false }
highSpeedTrain.upgradeSpeed();
highSpeedTrain.getSelf();

console.log('---TRAIN STATION----')

class TrainnStation {
    constructor(name, schedule, trainName, trainnSpeed) {
        this.name = name;
        this.schedule = schedule;
        this.train = new Train(trainName, trainnSpeed);
    }
    getSelf() {
        console.log('getself:', this);
    }
}

var trainStation = new TrainnStation('Hampshire Station', 'Mon-Fri 6AM-3AM+1', 'guria', '220km/h');
trainStation.getSelf(); // TrainnStation {name: 'Hampshire Station',schedule: 'Mon-Fri 6AM-3AM+1',train: Train { name: 'guria', speed: '220km/h' }}
