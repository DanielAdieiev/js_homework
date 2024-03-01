var measure = prompt ('Please input measure','kg, km, h, USD');
var quantity = prompt ('Please input value');
    switch (measure){
        case 'km':
            console.log (quantity + ' km це ' + quantity * 1000 + ' m')
            break;
        case 'kg':
            console.log (quantity + ' kg це ' + quantity * 1000 + ' g')
            break;
        case 'h':
            console.log (quantity + ' h це ' + quantity * 60 + ' min')
            break;
        case 'USD':
            console.log (quantity + ' USD це ' + quantity * 0.9069 + ' EUR')
            break;
        default:
            console.log ('The measure type is unknown. Please, try again.');
    } 
