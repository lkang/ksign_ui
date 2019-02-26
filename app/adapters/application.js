import $ from 'jquery';
import config from 'ksign-ui/config/environment';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import ENV from 'ksign-ui/config/environment';

export default JSONAPIAdapter.extend({
  namespace: ENV.APP.API_NAMESPACE,

  handleResponse(status, headers, payload, requestData) {
    const csrfToken = headers['x-csrf-token'] || headers['X-Csrf-Token'];
    if (csrfToken) {
      $.ajaxSetup({
        headers: {
          'x-csrf-token': csrfToken,
        },
      });
    } else if (config.environment !== 'development' && config.environment !== 'test') {
      // TODO: consider using location.reload() to force user to re-authenticate
      throw new Error('Could not set CSRF auth token header.');
    }

    return this._super(status, headers, payload, requestData);
  },
});
