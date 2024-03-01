var number = prompt ('please enter any number','number');
if (number < 0){
    console.log('Age could not be negative. Please input the valid age')
}
    else if (number >= 11 && number <= 19 && number != String && number != ''){
    console.log( number +' років')}
        else if (number >= 0 && number <= 100  && number != String && number != ''){
        let n = (number % 10);
            if(n == 1){
            console.log (number +' рік')
}
            else if ( n >= 2 && n <= 4){
            console.log( number +' роки')
}
            else if ( n >= 5 && n <= 9){
            console.log( number +' років')
}
            else if (n == 0){
            console.log (number +' років')
}}
        else {
        console.log ('Please enter the valid number')}
