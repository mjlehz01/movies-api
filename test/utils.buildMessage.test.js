const asset = require('assert');
const builMessage = require('../utils/builMessage');
const buildMessage = require('../utils/builMessage');

describe('utils - buildMessage', function () {
  describe('when receives na entity and an action', function () {
    it('should return the respective message', function () {
      const result = buildMessage('movie', 'create');
      const expect = 'movie created';
      asset.strictEqual(result, expect);
    });
  });
  describe('when receives an entity and action and is a list', function () {
    it('should return the respective message with the entity in plural', function () {
      const result = builMessage('movie', 'list');
      const expected = 'movies listed';
      asset.strictEqual(result, expected);
    });
  });
});
