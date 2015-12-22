/*
Apple: 20, Banana: 30, Citrus: 50, Durian: 100
 */

describe('checkoutService', function () {

  beforeEach(function () {

    module('fruitShop');

    inject(function (checkoutService) {
      service = checkoutService;
    });

  });

  describe('Buy nothing', function() {

    it('should return 0', function () {
      expect(service.checkout('')).toBe(0);
    });

  });
});
