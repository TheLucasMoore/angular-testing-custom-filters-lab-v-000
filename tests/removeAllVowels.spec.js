describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
    $filter = $injector.get('$filter');
	}));

  it("removes the vowels of various words", function() {
    var result = $filter('removeAllVowels')('hello');
    expect(result).toEqual("hll");
  });

});
