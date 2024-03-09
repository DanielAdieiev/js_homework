function checkProbabilityTheory(count){
let qOdd = 0;
let qEven = 0;
for ( let i = 0; i < count; i++ ) {
    let rnd = Math.round(Math.random() * 900 + 100);
    let rest = rnd % 2;
    if (rest === 0){
            qEven++;
        } else {
            qOdd++;
            }
        }
let evenPerc = qEven/count*100;
let oddPerc = qOdd/count*100;
console.log('Quantity of generated numbers = ' + count);
console.log('Quantity of even numbers = ' + qEven);
console.log('Quantity of odd numbers = ' + qOdd);
console.log('Ratio Even to Odd = ' + Math.round(evenPerc) + '/' + Math.round(oddPerc));
    }
checkProbabilityTheory(78);
