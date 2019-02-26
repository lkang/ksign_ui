import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model(params) {
    console.dir(params);

    return hash({
      event: this.store.findRecord('event', params.event_id, { include: 'songs' }),
      songs: this.store.findAll('song')
    });
  },

  actions: {
  }
});