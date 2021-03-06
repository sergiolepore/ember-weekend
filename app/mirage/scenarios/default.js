import Ember from 'ember';
import episodes from 'ember-weekend/utils/prod-fixtures/episodes';
import showNotes from 'ember-weekend/utils/prod-fixtures/show-notes';

export default function(server) {
  episodes.forEach((e) => {
    server.create('episode', Ember.merge({ id: e.number }, e));
  });

  showNotes.forEach((sn, index) => {
    server.create('show-note', Ember.merge({ id: index }, sn));
  });

  server.createList('post', 10);
}
