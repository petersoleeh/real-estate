import Ember from 'ember';

export default Ember.Component.extend({
  addNewEstate: false,
  actions: {
    estateFormShow() {
      this.set('addNewEstate', true);
    },
    saveEstate1() {
      var params = {
        id: this.get('id') || "",
        type: this.get('type') || "",
        area: this.get('area') || "",
        bedroom: this.get('bedroom') || "",
        image: this.get('image') || ""
      };
      this.set('addNewEstate', false);
      this.sendAction('saveEstate2', params);
    }
  }
});
