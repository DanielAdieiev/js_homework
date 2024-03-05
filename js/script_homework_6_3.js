function pow(x, y) {
    let exp = 1;
    for (let i = 0; i < y; i++) {
        exp *= x;
    }
    return exp;
}
let exp = pow(2, 3);
console.log(exp); 
