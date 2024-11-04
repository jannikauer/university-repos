const expect = require('chai').expect;

//Sample JUnit test
function sum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== 'number'){
			throw new Error('Only numbers can be added!');}
        res += arr[i];
    }
    return res;
}

describe('#sum()', function () {

    // if needed logic before each test run
    beforeEach(function () {
        // setup code if needed
    });

    // test a functionality
    it('should add numbers', function () {
        expect(sum([1, 2, 3, 4, 5])).to.equal(15);
    });

    // --------------my implementations -----------------------------------------
    it('should return a number', function(){
        expect(sum([1,2,3,4,5])).to.be.a('number');
    });

    it('should return 0 if input array is empty', function(){
        expect(sum([])).to.equal(0);
    });

    it('should handle non-numeric values with an error', function(){
        expect(() => sum([1,2,'a',3])).to.throw(Error, 'Only numbers can be added!');
    });

    it('should return the number if the array has only one element', function(){
        expect(sum([100])).to.equal(100);
    });
});
