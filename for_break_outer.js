outer:
for(let i=0;i<10;i++)
{
    for(let j=0;j<10;j++){    
        let input = prompt(`Значение на координатах(${i},${j})`,'');
        if (!input) break outer;
    }
}
alert ('Готово');
