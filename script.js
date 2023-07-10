let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function celToFar(){
    let output = ( parseFloat(celsius.value) * 9/5 ) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function farToCel(){
    let output = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat( output.toFixed(2));
    console.log(output);
}


let celsius2 = document.getElementById("celsius2");
let fahrenheit2 = document.getElementById("fahrenheit2");

function CelToFar(){
    let output2 = ( parseFloat(celsius2.value) * 9/5 ) + 32;
    fahrenheit2.value = parseFloat(output2.toFixed(2));
}

function FarToCel(){
    let output2 = ( parseFloat(fahrenheit2.value) - 32) * 5/9;
    celsius2.value = parseFloat( output2.toFixed(2));
    console.log(output2);
}