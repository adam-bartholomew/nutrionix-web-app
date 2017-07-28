import Ember from 'ember';

export default Ember.Controller.extend({
    //String item = this.get("searchItem");
    actions: {
        search() {
            console.log("searching");
        }
    }
});
