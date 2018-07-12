import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  actions: {
    error(jqxhr) {
      if (jqxhr.status === 404) {
        this.intermediateTransitionTo('org.notfound');
      } else {
        return true; // bubble up
      }
    }
  },

  model(params) {
    return $.get(`https://api.github.com/orgs/${params.id}?access_token=49471cbcce934b6a0a94fa2738fcce41d6716b1a`).then(rawOrg => {
      rawOrg.oldId = rawOrg.id;
      rawOrg.id = rawOrg.name;
      return new RSVP.Promise((resolve, reject) => {
        resolve(rawOrg), reject;
      });
    });
  }
});
