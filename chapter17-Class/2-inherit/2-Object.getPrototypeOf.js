class Point{

}

class ColorPoint extends Point{
    constructor(){
        super()
    }
}

let cp = new ColorPoint();

//【子类】的原型是【父类】
console.log(Object.getPrototypeOf(ColorPoint) === Point);//true


//【实例】的原形是【类】的【原形对象】
console.log(Object.getPrototypeOf(cp) === ColorPoint); //false
console.log(Object.getPrototypeOf(cp) === ColorPoint.prototype);//true