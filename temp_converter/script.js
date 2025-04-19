document.getElementById('convertBtn').addEventListener('click', function() {
    // Get the input temperature and unit selection
    let temperature = document.getElementById('temperature').value;
    let unit = document.getElementById('unit').value;
  
    // Validate the input
    if (isNaN(temperature) || temperature === '') {
      alert('Please enter a valid number for temperature');
      return;
    }
  
    temperature = parseFloat(temperature);
    let convertedTemp;
    let resultUnit;
  
    // Perform the conversion based on the selected unit
    if (unit === 'Celsius') {
      convertedTemp = (temperature * 9/5) + 32; // Celsius to Fahrenheit
      resultUnit = 'Fahrenheit';
    } else if (unit === 'Fahrenheit') {
      convertedTemp = (temperature - 32) * 5/9; // Fahrenheit to Celsius
      resultUnit = 'Celsius';
    } else if (unit === 'Kelvin') {
      if (temperature < 0) {
        alert('Temperature in Kelvin cannot be below 0K');
        return;
      }
      convertedTemp = temperature - 273.15; // Kelvin to Celsius
      resultUnit = 'Celsius';
    }
  
    // Display the result
    document.getElementById('result').textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} °${resultUnit}`;
  });

  