describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should grab the fav foods of folks', function() {
    var fakedData = [{
      name: 'Sir Butte',
      favoriteFood: 'Sammiches'
    }, {
      name: 'Senor Eagle',
      favoriteFood: 'Ranch'
    }, {
      name: 'Inipi Tipi',
      favoriteFood: 'Chili'
    }];

    var result = $filter('favoriteFood')(fakedData, 'Sammiches');

    expect(result.length).toEqual(1);
    expect(result[0].name).toEqual('Sir Butte');
  });
});
