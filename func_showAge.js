function checkAge(age) {
    return (age >= 18) ? true : confirm('Родители разрешили?');
  }
  
  let age = prompt('Сколько вам лет?', 18);
  if (checkAge(age)){
      alert('Доступ открыт');
  }
 
  