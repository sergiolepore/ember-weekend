import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  headTags: [
    { type: 'meta',
      attrs: {
        property: 'og:title',
        content: 'Blog Posts'
      }
    }
  ]
});
