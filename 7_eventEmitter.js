var events = require('events')

var myEmitter = new events.EventEmitter();

myEmitter.on("eventName", function(){
    console.log('I am working ...')
})

let i=0;
const myInterval = setInterval(function(){
    i++;

    if(i%3 === 0)
        myEmitter.emit('eventName');
    else
        console.log('still waiting to emit event ...')
    
    if(i===12) clearInterval(myInterval)
}, 2000)

//event emitter with parameter

myEmitter.on('donow', function(val){ // <= parameter
    console.log('I am doing now .. ' + val)
})

myEmitter.emit('donow', 'Okay!') // <= argument