document.addEventListener('DOMContentLoaded', function() {
  new Vue({
    el: '#app3',
    data: {
      itemName: '',
      comments: []
    },
    methods: {
      addItem() {
        if (this.itemName.trim() !== '') {
          this.comments.push(this.itemName);
          this.itemName = '';
        }
      }
    }
  });
});