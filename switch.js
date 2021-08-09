let arg = prompt("Enter a value",0);
switch (arg){
    case '0':
    case '1':
        alert('One or Zero');
        break;
    case '2':
        alert('Two');
        break;
    case 3://мёртвый код - отсутствуют скобки вокруг 3 и не выполняется сравнение строки
        alert('Will never come true');
        break;
    default:
        alert('Unknown value');
        
}