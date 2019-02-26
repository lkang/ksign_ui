import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { filter, filterBy, alias } from '@ember/object/computed';

export default Controller.extend({
  classNames: ['performances'],

  performances: alias('model.performances'),

  nowPlaying: computed('pendingList', function() {
    return this.get('pendingList.firstObject')
  }),

  upNext: computed('pendingList', function() {
    return this.get('pendingList').objectAt(1);
  }),

  pendingList: filterBy('performances.@each.status', 'status', 0),
  completedList: filter('performances.@each.status', function(performance) {
    return performance.status != 0
  }),

  signupList: computed('model.performances.[]', function(){ 
    let takenSongs = this.model.performances.map(function(p) {
      return p.get('eventsSong.song');
    });
    console.dir(takenSongs);

    let firstSong = takenSongs.objectAt(0).get('title')

    console.dir(firstSong)

    return this.model.songs.filter(function(song) {

      let foundArray = takenSongs.filter(function(takenSong) {
        return takenSong.get('id') == song.get('id');
      });

      if (foundArray.get('length') != 0)
        return false
      else
        return true

    });
  }),

  actions: {
    submit(song) {
      console.log("Submitted to sing: ", song);
    },

    selectSong(song) {
      this.set('selected', song);
      console.log("Selected: ", song);
    },
  }
});