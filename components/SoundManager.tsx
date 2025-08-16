import { Audio } from 'expo-av';

class SoundManager {
  private static sounds: { [key: string]: Audio.Sound } = {};
  private static initialized = false;
  private static globalVolume = 1.0; // Volume global multiplicador

  static async initialize() {
    if (this.initialized) return;

    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: false,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
      });

      // Load sounds from base64 strings with volume control
      const clickSound = await Audio.Sound.createAsync(
        {
          uri: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DorlwdAy+Px/LReC4EH2TA8OOYSQoQV6vn77BdGAM8ltLuqF4dEoClXCtjAAAAYbEBAHRdv2Qc',
        },
        { volume: 0.2 } // Volume muito baixo para cliques
      );

      const encouragementSound = await Audio.Sound.createAsync(
        {
          uri: 'data:audio/wav;base64,UklGRgwCAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YdgBAAC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4',
        },
        { volume: 0.3 } // Volume baixo para encorajamento
      );

      const revelationSound = await Audio.Sound.createAsync(
        {
          uri: 'data:audio/wav;base64,UklGRiQDAABXQVZFZm10IBAAAAABAAEAgD4AAIA+AAABAAgAZGF0YQADAAC9u7q6tbq6u7u6ur26urq7u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6vbu6ur26urq9u7q6',
        },
        { volume: 0.4 } // Volume moderado para revelação
      );

      this.sounds = {
        click: clickSound.sound,
        encouragement: encouragementSound.sound,
        revelation: revelationSound.sound,
      };

      this.initialized = true;
    } catch (error) {
      console.log('Error initializing sounds:', error);
    }
  }

  static async playSound(soundName: 'click' | 'encouragement' | 'revelation') {
    try {
      if (!this.initialized) {
        await this.initialize();
      }

      const sound = this.sounds[soundName];
      if (sound) {
        // Aplica o volume global antes de reproduzir
        await sound.setVolumeAsync(this.getVolumeForSound(soundName) * this.globalVolume);
        await sound.replayAsync();
      }
    } catch (error) {
      console.log('Error playing sound:', error);
    }
  }

  private static getVolumeForSound(soundName: string): number {
    const volumes = {
      click: 0.2,
      encouragement: 0.3,
      revelation: 0.4,
    };
    return volumes[soundName as keyof typeof volumes] || 0.3;
  }

  static setGlobalVolume(volume: number) {
    this.globalVolume = Math.max(0, Math.min(1, volume)); // Garante que está entre 0 e 1
  }

  static getGlobalVolume(): number {
    return this.globalVolume;
  }

  static async cleanup() {
    for (const sound of Object.values(this.sounds)) {
      try {
        await sound.unloadAsync();
      } catch (error) {
        console.log('Error unloading sound:', error);
      }
    }
    this.sounds = {};
    this.initialized = false;
  }
}

export default SoundManager;