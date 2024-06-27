// Function to convert Celsius to Kelvin
function convertCToK(inputTemperature) {
    const kelvin = (inputTemperature + 273.15).toFixed(2);
    return kelvin+" K";
}

// Function to convert Kelvin to Celsius
function convertKToC(inputTemperature) {
    const celsius = (inputTemperature - 273.15).toFixed(2);
    return celsius+" °C";
}

// Function to convert Fahrenheit to Celsius
function convertFToC(inputTemperature) {
    const celsius = ((inputTemperature - 32) * (5/9)).toFixed(2);
    return celsius +" °C";
}

// Function to convert Celsius to Fahrenheit
function convertCToF(inputTemperature) {
    const fahrenheit = (inputTemperature * (9/5) + 32).toFixed(2);
    return fahrenheit + " °F";
}

// Function to convert Kelvin to Fahrenheit
function convertKToF(inputTemperature) {
    const fahrenheit = ((inputTemperature - 273.15) * (9/5) + 32).toFixed(2);
    return fahrenheit+" °F";
}

// Function to convert Fahrenheit to Kelvin
function convertFToK(inputTemperature) {
    const kelvin = ((inputTemperature - 32) * (5/9) + 273.15).toFixed(2);
    return kelvin + " K";
}



function tempConverter(){
    const typeOfTemperature = document.getElementById('type-of-temp').value
    const inputTemperature = Number(document.getElementById('value-of-temp').value)

    if (typeOfTemperature === 'kelvin') {
        const v1 = convertKToC(inputTemperature);
        const v2 = convertKToF(inputTemperature);
        const el = document.getElementById('result');
        el.innerHTML = "";

        const p1 = document.createElement('p');
        p1.textContent = "The temperature in Celsius is "+ v1;

        const p2 = document.createElement('p'); 
        p2.textContent = "The temperature in Fahrenheit is "+ v2;

        el.appendChild(p1);
        el.appendChild(p2);
    }

    else if (typeOfTemperature === 'celsius'){
        const v1 = convertCToK(inputTemperature);
        const v2 = convertCToF(inputTemperature);
        const el = document.getElementById('result');
        el.innerHTML = "";

        const p1 = document.createElement('p');
        p1.textContent = "The temperature in Kelvin is "+ v1;

        const p2 = document.createElement('p'); 
        p2.textContent = "The temperature in Fahrenheit is "+ v2;

        el.appendChild(p1);
        el.appendChild(p2);
    }

    else if (typeOfTemperature === 'fahrenheit'){
        const v1 = convertFToC(inputTemperature);
        const v2 = convertFToK(inputTemperature);
        const el = document.getElementById('result');
        el.innerHTML = "";

        const p1 = document.createElement('p');
        p1.textContent = "The temperature in Celsius is "+ v1;

        const p2 = document.createElement('p'); 
        p2.textContent = "The temperature in Kelvin is "+ v2;

        el.appendChild(p1);
        el.appendChild(p2);
    }
    else{
        const el = document.getElementById('result');
        el.innerHTML = "";

        const p1 = document.createElement('p');
        p1.textContent = "Please choose the type of temperature";

        el.appendChild(p1);
    }

    
}