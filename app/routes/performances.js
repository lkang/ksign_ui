import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('event', params.event_id, { include: 'performances,performances.events-song,performances.events-song.song,songs' });
  }
});