import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | org/repos', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:org/repos');
    assert.ok(route);
  });
});
