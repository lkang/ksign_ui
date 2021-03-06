import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  title: attr('string'),
  artist: attr('string'),
  tabUrl: attr('string'),
  audioUrl: attr('string'),
  videoUrl: attr('string'),

  events: hasMany('events'),
  eventsSongs: hasMany('eventsSong'),
});