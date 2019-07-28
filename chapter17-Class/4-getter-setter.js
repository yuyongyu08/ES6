
//TODO
class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    get x(){
        return `x getter`
    }

    // noinspection JSAnnotator
    set x(value){
        console.log('x setter');
    }

    toString(){
        return `(${this.x},${this.y})`
    }
}

let p = new Point(1, 2); //x setter

console.log(p.x); //x getter

p.x = 3; //x setter

//TODO 为什么给x和y设置get和set时，如果引用this，get和set会是递归调用？