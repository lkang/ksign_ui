import Component from '@ember/component';
var { set } = Ember;

export default Component.extend({
  classNames: ['draggable-dropzone testdraggable'],
  classNameBindings : [ 'dragClass' ],
  dragClass         : 'deactivated',

  dragLeave(event) {
    event.preventDefault();
    set(this, 'dragClass', 'deactivated');
  },

  dragOver(event) {
    event.preventDefault();
    set(this, 'dragClass', 'activated');
  },

  drop(event) {    
    var data = event.dataTransfer.getData('text/data');
    this.sendAction('dropped', data);
    
    set(this, 'dragClass', 'deactivated');    
  }
});