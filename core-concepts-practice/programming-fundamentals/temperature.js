function celsiusToFahrenheit(celsius) {
  if (!Number.isFinite(celsius)) {
    throw new TypeError('Temperature must be a number');
  }

  return (celsius * 9) / 5 + 32;
}

function describeTemperature(celsius) {
  if (celsius < 0) return 'freezing';
  if (celsius < 20) return 'cool';
  if (celsius < 30) return 'comfortable';
  return 'hot';
}

console.log(celsiusToFahrenheit(25));
console.log(describeTemperature(25));

module.exports = { celsiusToFahrenheit, describeTemperature };
