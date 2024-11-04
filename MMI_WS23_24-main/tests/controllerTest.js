const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI')

//TODO Unit Tests to implement
describe('auxiliaryAPI', function() {
	describe('fahrenheitToCelcius', function() {
	  it('should convert 32°F to 0°C', function() {
		expect(apiTemperature.fahrenheitToCelcius(32)).to.equal(0);
	  });

	  it('should convert 212°F to 100°C', function() {
		expect(apiTemperature.fahrenheitToCelcius(212)).to.equal(100);
	  });

	  it('should convert -40°F to -40°C', function() {
		expect(apiTemperature.fahrenheitToCelcius(-40)).to.equal(-40);
	  });

	  it('should return a number', function() {
		expect(apiTemperature.fahrenheitToCelcius(100)).to.be.a('number');
	  });
	});


	describe('celsiusToFahrenheit', function() {
	  it('should convert 0°C to 32°F', function() {
		expect(apiTemperature.celsiusToFahrenheit(0)).to.equal(32);
	  });

	  it('should convert 100°C to 212°F', function() {
		expect(apiTemperature.celsiusToFahrenheit(100)).to.equal(212);
	  });

	  it('should convert -40°C to -40°F', function() {
		expect(apiTemperature.celsiusToFahrenheit(-40)).to.equal(-40);
	  });
	});


	describe('getGreetingDependOnTime', function() {
    it('should return "Guten Morgen" for any time before 06:00', function() {
        const date = new Date('2020-01-01 05:59');
        expect(apiTemperature.getGreetingDependOnTime(date)).to.equal('Guten Morgen');
    });

    it('should return "Guten Mittag" for any time between 06:00 and 22:00', function() {
        const date = new Date('2020-01-01 12:00');
        expect(apiTemperature.getGreetingDependOnTime(date)).to.equal('Guten Mittag');
    });

    it('should return "Guten Abend" for any time after 22:00', function() {
        const date = new Date('2020-01-01 22:01');
        expect(apiTemperature.getGreetingDependOnTime(date)).to.equal('Guten Abend');
    });
});
});

