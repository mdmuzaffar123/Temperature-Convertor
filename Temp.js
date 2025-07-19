function convertTemp() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    if (isNaN(inputTemp)) {
        document.getElementById('result').textContent = 'Please enter a valid number';
        return;
    }

    let celsius;

    // Convert input to Celsius
    switch (fromUnit) {
        case 'celsius':
            celsius = inputTemp;
            break;
        case 'fahrenheit':
            celsius = (inputTemp - 32) * 5 / 9;
            break;
        case 'kelvin':
            celsius = inputTemp - 273.15;
            break;
    }

    // Convert from Celsius to target unit
    let result;
    switch (toUnit) {
        case 'celsius':
            result = celsius;
            break;
        case 'fahrenheit':
            result = (celsius * 9 / 5) + 32;
            break;
        case 'kelvin':
            result = celsius + 273.15;
            break;
    }

    // Capitalize full unit names
    const capitalize = (unit) => unit.charAt(0).toUpperCase() + unit.slice(1);

    // Display result
    document.getElementById('result').textContent =
        `${inputTemp}° ${capitalize(fromUnit)} = ${result.toFixed(2)}° ${capitalize(toUnit)}`;
}
