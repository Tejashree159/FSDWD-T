function sum(x,y){
    return x+y;
}

function getResults(x,y,operation){
    return operation(x,y);
}

console.log(getResults(3,4,sum));