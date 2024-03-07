function PadEndOrPadStart (inputString, symbol, quantityOfSymbols, ToTheStart) {
    let symbolsToAdd = quantityOfSymbols - inputString.length;
    if (symbolsToAdd < inputString.length){
        console.log(inputString);
    }
    else if (ToTheStart == true){
    console.log(symbol.repeat(quantityOfSymbols - inputString.length) + inputString);
    } 
    else if (ToTheStart == false){
    console.log(inputString + symbol.repeat(quantityOfSymbols - inputString.length));
    }
}
PadEndOrPadStart ('something', '*', 22, 0)
    