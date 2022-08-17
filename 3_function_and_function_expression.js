// function
function func1 (val){
    console.log('1. I am a Function!');
    val();
}

// function expression
var func2 = function(){
    console.log('2. I am a Function Expression!')
}

func1(func2);