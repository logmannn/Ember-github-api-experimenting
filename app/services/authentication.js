import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  records: computed(function() {
      return [
         {'id': 'one'}
      ]
  })
});
