import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { alias, filter } from '@ember/object/computed';

export default Controller.extend({
  event: alias('model.event'),
  songs: alias('model.songs'),

  unchosenSongs: computed('model', 'model.event', 'model.songs.[]', 'model.event.songs', 'model.event.songs.[]', function() {
    return this.songs.filter(function(song) {
      return !this.get('model.event.songs').includes(song);
    }, this);
  }),

  actions: {
    addSong(songId) {
      let event = this.get('model.event');
      let song = this.get('store').peekRecord('song', parseInt(songId));
      song.events.pushObject(event);
      song.save();
    },

    removeSong(songId) {
      let event = this.get('model.event');
      let song = this.get('store').peekRecord('song', parseInt(songId));
      song.events.removeObject(event);
      song.save();
    },
  }

});