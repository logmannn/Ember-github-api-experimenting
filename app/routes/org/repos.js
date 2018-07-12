import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model() {
    let orgId = get(this.modelFor('org'), 'login');
      return $.get(`https://api.github.com/orgs/${orgId}/repos?access_token=49471cbcce934b6a0a94fa2738fcce41d6716b1a`)
    .then(rawRepos => {
      return rawRepos.map(rawRepo => {
        rawRepo.oldId = rawRepo.id;
        rawRepo.id = rawRepo.name;
        return rawRepo;
      })
    });
  }
});
