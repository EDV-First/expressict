class people {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    say() {
        console.log('hi', this.name, this.age)
    }
}

class tigger extends people {
    
}

var viet = new people('viet', 21)
var quynh = new people('quynh', 21)
console.log(viet.say() === quynh.say())
