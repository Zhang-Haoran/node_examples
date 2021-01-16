let rect = require('./rectangle');

function solveRect(l,b){
    console.log(l,b);
    if(l <=0 || b <=0){
        console.log("should be greater than zero")
    }else {
        console.log("area:" + rect.area(l,b));
        console.log("perimeter:" + rect.perimeter(l,b))
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);