/* eslint-env mocha, chai */
/* global zipListTheHardWay, zipListTheEasyWay, chai */


describe('ziplist', function () {
  const alphaList = ['a', 'b'];
  const numList = [1, 2];

  describe('zipListTheHardWay', function () {
    it('should return [ \'a\', 1, \'b\', 2 ] for testZip', function () {
      chai.expect(zipListTheHardWay(alphaList, numList)).to.have.ordered.members([ 'a', 1, 'b', 2 ]);
    });
  });

  describe('zipListTheHardWay', function () {
    it('should return [ \'a\', 1 ] for testZip', function () {
      chai.expect(zipListTheHardWay(alphaList, numList)).to.have.ordered.members([ 1, 'a', 'b', 2 ]);
    });
  });


  describe('zipListTheEasyWay', function () {
    it('should return [ \'a\', 1, \'b\', 2 ] for testZip', function () {
      chai.expect(zipListTheEasyWay(alphaList, numList)).to.have.ordered.members([ 'a', 1, 'b', 2 ]);
    });
  });


  describe('zipListTheEasyWay', function () {
    it('should return [ \'a\', 1, \'b\', 2 ] for testZip', function () {
      chai.expect(zipListTheEasyWay(alphaList, numList)).to.have.ordered.members([ 1, 'a', 'b', 2 ]);
    });
  });

});


