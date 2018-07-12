import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model(params) {
    let org = this.modelFor('org');
    return $.get(`https://api.github.com/repos/${org.login}/${params.repoid}?access_token=49471cbcce934b6a0a94fa2738fcce41d6716b1a`).then(rawRepo => {
      rawRepo.oldId = rawRepo.id;
      rawRepo.id = rawRepo.name;
      return rawRepo;
    });
  }
});
