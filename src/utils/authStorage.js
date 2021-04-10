import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAcessToken() {
    const token = await AsyncStorage.getItem(`${this.namespace}-token`);
    return token;
  }

  async setAcessToken(token) {
    await AsyncStorage.setItem(`${this.namespace}-token`, token);
  }

  async removeAcessToken() {
    await AsyncStorage.removeItem(`${this.namespace}-token`);
  }
}

export default AuthStorage;