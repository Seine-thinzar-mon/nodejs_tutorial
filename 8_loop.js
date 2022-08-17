var someArray = ["Mg Mg", "Aung Aung", "Su Su"];

for(let i of someArray){
    console.log(i) // will return each element
}
// Mg Mg    
// Aung Aung
// Su Su

for(let i in someArray){
    console.log(i) // will return each index
}
// 0
// 1
// 2

// in forEachLoop => callback function will be called when each element loops
someArray.forEach(function(data){
    console.log(data)
})
// Mg Mg    
// Aung Aung
// Su Su