import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model(params) {
    let orgId = get(this.modelFor('org'), 'login');
    let repoId = get(this.modelFor('org.repo'), 'name');
      return $.get(`https://api.github.com/repos/${orgId}/${repoId}/contributors?access_token=49471cbcce934b6a0a94fa2738fcce41d6716b1a`)
    .then(rawContributors => {
      return rawContributors.map(rawContributor => {
        rawContributor.oldId = rawContributor.id;
        rawContributor.id = rawContributor.name;
        return rawContributor;
      })
    });
  }
});
