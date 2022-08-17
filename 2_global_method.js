
// global methods have 2 parameters => callback function and mili second


setTimeout(function (){
    // console.log('I have already waited for 3seconds!')
 }, 3000 ); // <= milisec (3sec)
 
 
 setInterval(function () {
    // console.log('I will work every 3seconds!')
 }, 3000);
 
 let count = 0;
 var myInterval = setInterval(function (){
     count++;
 
     if(count == 5){
         clearInterval(myInterval);
         console.log('Stop progress at count = ' + count)
     }
     else
         console.log(`I will increase count every 1 second ${count}`);
 }, 1000)