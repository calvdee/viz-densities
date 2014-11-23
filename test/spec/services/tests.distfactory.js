'use strict';

describe('Service: PdfFactory', function () {

  // load the service's module
  beforeEach(module('densitiesApp'));

  // http://nathanleclaire.com/blog/2013/12/13/how-to-unit-test-controllers-in-angularjs-without-setting-your-hair-on-fire/
  var PdfFactory
      ,_;

  
  beforeEach(inject(function (_PdfFactory_, ___) {
    PdfFactory = _PdfFactory_;
    _ = ___;
  }));

  it('should have a list of pdfs', function () {
    expect(PdfFactory.pdfs).not.toBeUndefined();
    expect(PdfFactory.pdfs.length).toBeGreaterThan(0);
    // var xs = []
    //   , ps = []
    //   , a = 1
    //   , b = 2;

    // var dGammas = DistFactory.dgamma(xs, a, b);

    // expect(dGammas[0]).toEqual(ps[0]);
    // expect(dGammas[1]).toEqual(ps[1]);
    // expect(dGammas[2]).toEqual(ps[2]);
  });

  // it('should have gamma distribution with alpha and beta', function () {
  //   var xs = []
  //     , ps = []
  //     , a = 1
  //     , b = 2;

  //   var dGammas = DistFactory.dgamma(xs, a, b);

  //   expect(dGammas[0]).toEqual(ps[0]);
  //   expect(dGammas[1]).toEqual(ps[1]);
  //   expect(dGammas[2]).toEqual(ps[2]);
  // });

});
