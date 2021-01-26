  
'use strict';


const year = 2023;

const moduleYear = year % 4;

if(moduleYear === 0){
    console.log(`${year} es un año bisiesto`);
}
else if(moduleYear === 1){
    let nextYear = year +3
    console.log(`${year} no es bisiesto y el prox sera ${nextYear}`);
}
else if(moduleYear === 2){
    let nextYear = year +2
    console.log(`${year} no es bisiesto y el prox sera ${nextYear}`);
}
else{
    let nextYear = year +1
    console.log(`${year} no es bisiesto y el prox sera ${nextYear}`);
}