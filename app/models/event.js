import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  eventDate: attr('date'),
  location: attr('string'),

  songs: hasMany('songs'),
  eventsSongs: hasMany('events-songs'),
  performances: hasMany('performances')
});