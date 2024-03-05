
// for
function drawTriangle(lines, symbol) {
    for (let i = 1; i <= lines; i++) {
        console.log(symbol.repeat(i));
    }
}
drawTriangle(10, '+');


// while
function drawTriangle(lines, sign) {
    let i = 1;
    while (i <= lines) {
        i++;
        console.log (sign.repeat(i-1));
    }
 }
 drawTriangle(5,'/');