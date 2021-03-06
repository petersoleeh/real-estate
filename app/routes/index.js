import Ember from 'ember';
var estates = [{
  id: 1,
  type: "Apartment",
  area: "Lavington",
  bedroom: 2,
  image: "/assets/images/Apartment.jpeg"
}, {
  id: 2,
  type: "Town House",
  area: "Thika",
  bedroom: 3,
  image: "/assets/images/town.jpg"
}, {
  id: 3,
  type: "Maisonette",
  area: "Donholm",
  bedroom: 4,
  image: "/assets/images/maisonette.jpg"
}, {
  id: 4,
  type: "Luxury Villa",
  area: "Runda",
  bedroom: 10,
  image: "/assets/images/Luxury-Villa.jpg"
}];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('estate')

  },
  actions: {
    saveEstate3(params) {
      var newEstate = this.store.createRecord('estate', params);
      newEstate.save();
      this.transitionTo('index');
    },

    destroyEstate(estate) {
      estate.destroyRecord();
      this.transitionTo('index');
    }
  }
});
