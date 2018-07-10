import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  favorites: service(),

  setupController(controller) {
    this._super(...arguments);
    controller.set('records', this.get('favorites.items'));
  },

  actions: {
      favorite (num) {
        this.get('favorites.items').addObject({id: num});
      }
  },

  model() {

    return [
      {id: 'emberjs'},
      {id: 'ember-cli'},
      {id: 'microsoft'},
      {id: 'yahoo'},
      {id: 'netflix'},
      {id: 'facebook'},
    ];
  }
});
