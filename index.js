// Add your Circle class here

class Circle {
    //#radius

    constructor(inputRadius){
        this.radius = inputRadius
        this.pi = Math.PI

    }
    //getter methods
    get diameter(){
        return this.radius *2 
    }
    get circumference(){
        return this.diameter * this.pi
    }
    
    get area(){
        return ((this.radius*this.radius)*this.pi)
    }

    // setter methods
    set diameter(diameter){
        this.radius = diameter/2
    }
    set circumference(circumference){
        this.radius = (circumference/this.pi)/2
    }
    set area(area){
        this.radius = Math.sqrt(area/this.pi)
    }




}