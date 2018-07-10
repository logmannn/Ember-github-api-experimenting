import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({

  items: computed(function(num) {
      return [
         {'id': num}
      ]
  }),
});
