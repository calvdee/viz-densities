'use strict';

describe('Service: DistFactory', function () {

  // load the service's module
  beforeEach(module('densitiesApp'));

  // instantiate service and deps
  var DistFactory
    , _;

  beforeEach(inject(function (_DistFactory_, ___) {
    DistFactory = _DistFactory_;
    _ = ___;
  }));

  it('should generate values for the gamma distribution', function () {
    var xs = []
      , ps = []
      , a = 1
      , b = 2;

    var dGammas = DistFactory.dgamma(xs, a, b);

    expect(dGammas[0]).toEqual(ps[0]);
    expect(dGammas[1]).toEqual(ps[1]);
    expect(dGammas[2]).toEqual(ps[2]);
  });

});
