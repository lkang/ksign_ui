import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { computed } from '@ember/object';
import { belongsTo } from 'ember-data/relationships';
import moment from 'moment';

export default Model.extend({
  order: attr('number'),
  singer: attr('string'),
  status: attr('number'),

  eventsSong: belongsTo('events-song'),

  startTime: computed('number', function() {
    let format = 'hh:mm a'
    return moment(new Date).format(format);
  }),

  statusMessage: computed('status', function() {
    return ['Pending', 'Complete', 'Cancelled', 'Delayed'][this.get('status')];
  }),
});