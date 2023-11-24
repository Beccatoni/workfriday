function isItLeapYear(year){
    console.log(year);
    return (year%4===0 && year%100===0 && year%400===0)
    
}
// 1700, 1800, 1900, 2100, 2200, 2300, 2500, 2600
console.log(isItLeapYear(2016));