import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseService from '../base.service';
import { SignupReq } from './request/signup.req';
import { SignupRes } from './response/signup.res';

class AuthService extends BaseService {
  constructor() {
    super();
  }

  async signup(data: SignupReq) {
    const response = await this.client.post<SignupRes>(
      '/api/v1/auth/signup',
      data
    );

    const { access_token, refresh_token, signup } = response.data;

    await AsyncStorage.setItem('ACCESS_TOKEN', access_token);
    await AsyncStorage.setItem('REFRESH_TOKEN', refresh_token);

    return { signup };
  }
}

export default new AuthService();
