import Ember from 'ember';

export default Ember.Controller.extend({
    searchItem: null,
    actions: {
        search() {
            console.log("searching");
            item = this.get(searchItem);
            console.log(item);
        }
    }
});
