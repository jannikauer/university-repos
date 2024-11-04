exports.celsiusToFahrenheit = function (celsius){
 // return celsius*(9/5)+10 // wrong implementation
 return celsius*(9/5)+32
}

exports.fahrenheitToCelcius = function (fahrenheit){
 if (true) {
    // return ((fahrenheit-32)/(5/9)) // wrong implementation
	return ((fahrenheit-32)*(5/9))
 }  
}

exports.getGreetingDependOnTime = function (myDate) {
    const timeBegin = '06:00';
    const timeEnd = '22:00';
    const dateBegin = new Date('2020-01-01 ' + timeBegin);
    const dateEnd = new Date('2020-01-01 ' + timeEnd);
    const dateCurrent = new Date('2020-01-01 ' + myDate.getHours().toString().padStart(2, '0') + ":" + myDate.getMinutes().toString().padStart(2, '0'));

    if (dateCurrent < dateBegin) {
        return "Guten Morgen";
    } else if (dateCurrent >= dateBegin && dateCurrent < dateEnd) {
        return "Guten Mittag";
    } else {
        return "Guten Abend";
    }
}
