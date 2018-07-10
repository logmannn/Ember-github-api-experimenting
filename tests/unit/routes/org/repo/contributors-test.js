import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | org/repo/contributors', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:org/repo/contributors');
    assert.ok(route);
  });
});
