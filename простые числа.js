let n;
let d=prompt("Введите диапазон натуральных чисел",2);
nextPrime:
for(n=2;n<=d;n++){
    for(m=2;m<n;m++){
        if (n%m==0) continue nextPrime; 
    }
    alert(n);
}