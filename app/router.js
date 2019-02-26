import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('songs');
  this.route('events', function() {
    this.route('show', { path: '/:event_id' });
  });
  this.route('events-songs');
  this.route('performances', { path: 'performances/:event_id' });
});

export default Router;
