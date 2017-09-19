import DS from 'ember-data';

export default DS.Model.extend({

  type: DS.attr(),
  area: DS.attr(),
  bedroom: DS.attr(),
  image: DS.attr()
});
