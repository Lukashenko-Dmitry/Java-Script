const number = +prompt('Enter value from 0 to 3', 0);

switch (number){
    case 0:
        alert('You entered 0');
        break;
    case 1:
        alert('You entered 1');
        break;
    case 2:               
    case 3:
        alert('You entered 2 or 3');
        break;
    default:
        alert('Unknown value');
        
}