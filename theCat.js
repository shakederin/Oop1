class Cat {
    constructor(_tiredness, _hunger, _lonliness, _happiness){
        this.tiredness = _tiredness,
        this.hunger = _hunger,
        this.lonliness = _lonliness,
        this.happiness =  _happiness
    }
    sleep(time){
        this.tiredness -= time;
        this.lonliness += time;
        this.hunger += time;
        return this;
    }

    feed(amount){
        this.hunger -= amount;
        this.happiness += amount;
        this.tiredness += amount;
        return this;
    }
    play(time){
        this.tiredness += time;
        this.lonliness -= time; 
        this.hunger += time;
        return this;
    }
    status(){
        console.log(`tiredness: ${this.tiredness}`);
        console.log(`hunger: ${this.hunger}`);
        console.log(`lonliness: ${this.lonliness}`);
        console.log(`happiness: ${this.happiness}`);
    }
}

const Lulu = new Cat(5,5,5,5);
Lulu.feed(2).status()
