import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return $.get(`https://api.github.com/orgs/${params.id}?access_token=49471cbcce934b6a0a94fa2738fcce41d6716b1a`).then(rawOrg => {
      rawOrg.oldId = rawOrg.id;
      rawOrg.id = rawOrg.name;
      return rawOrg;
    });
  }
});
