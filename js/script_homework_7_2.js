function PadEndOrPadStart (inputString, symbol, quantityOfSymbols, ToTheStart) {
    let symbolsToAdd = quantityOfSymbols - inputString.length;
    if (symbolsToAdd < 0){
        console.log(inputString);
    }
    else if (ToTheStart == true){
    console.log(symbol.repeat(symbolsToAdd) + inputString);
    } 
    else if (ToTheStart == false){
    console.log(inputString + symbol.repeat(symbolsToAdd));
    }
}
PadEndOrPadStart ('something', '*', 22, 0)
    
