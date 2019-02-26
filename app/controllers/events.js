import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';

export default Controller.extend({
  eventSortCriteria: ['eventDate:desc'],
  sortedEvents: sort('model', 'eventSortCriteria'),

});