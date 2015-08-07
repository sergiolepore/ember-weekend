import Ember from 'ember';

export default Ember.Component.extend({
  player: Ember.inject.service('player'),
  actions: {
    play() {
      this.get('player').play();
    },
    pause() {
      this.get('player').pause();
    },
    changeVolume(value) {
      this.get('player').changeVolume(value);
    },
    mute() {
      let playerVolume = this.get('player.volume');
      playerVolume = (playerVolume > 0)? playerVolume : 0.5;

      this.set('previousVolume', playerVolume);
      this.send('changeVolume', 0);
    },
    unmute() {
      this.send('changeVolume', this.get('previousVolume'));
    }
  },
  progressStyle: Ember.computed('player.progress', function() {
    return `width: ${this.get('player.progress')}%`;
  }),
  bufferStyle: Ember.computed('player.buffer', function() {
    return `width: ${this.get('player.buffer')}%`;
  }),
  volumeButtonClass: Ember.computed('player.volume', function() {
    const volume = this.get('player.volume');
    const faPrefix = 'fa';
    let volumeClass;

    if (volume >= 0.5) {
      volumeClass = `${faPrefix}-volume-up`;
    } else if (volume > 0 && volume < 0.5 ) {
      volumeClass = `${faPrefix}-volume-down`;
    } else {
      volumeClass = `${faPrefix}-volume-off`;
    }

    return `fa ${volumeClass}`;
  })
});
