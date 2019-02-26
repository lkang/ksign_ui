import Component from '@ember/component';

var { get } = Ember;

export default Component.extend({
  classNames        : [ 'draggableItem' ],
  attributeBindings : [ 'draggable' ],
  draggable         : 'true',
  
  dragStart(event) {
    return event.dataTransfer.setData('text/data', get(this, 'content'));
  }
});