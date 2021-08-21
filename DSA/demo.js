class race_car {
    constructor(a,b){
        this.driver=a
        this.car=b
    }
    race(){
        console.log("Yes, I can race")
    }
    speed(){
        console.log("Around 400kmph")
    }

}
class SUV{
    constructor(a,b){
        this.driver=a
        this.car=b
    }
    race(){
        console.log("No, I can't race but I can go Offroading")
    }
    speed(){
        console.log("Around 100kmph")
    }
}
let redbull = new race_car("Schumacher","Mercedes")
let land_rover = new SUV("Mangesh","Porsche")
// redbull.race()
// land_rover.race()
redbull.speed()
land_rover.speed()