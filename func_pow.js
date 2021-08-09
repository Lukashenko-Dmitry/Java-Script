function pow(x,n) {
    return x=x**n;
  }
  let x = prompt('Введите число', 0);
  let n = prompt('Введите степень', 0);
  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(x, n) );
  }
 
 
  