import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
      thingWasClicked (num) {
        alert('whatta click!' + num);
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
