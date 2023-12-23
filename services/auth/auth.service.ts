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

    const { accessToken, refreshToken, exist } = response.data;

    await AsyncStorage.setItem('ACCESS_TOKEN', accessToken);
    await AsyncStorage.setItem('REFRESH_TOKEN', refreshToken);

    return { exist };
  }

  async signinWithSupabase(supabaseToken: string) {
    const response = await this.client.post<SignupRes>(
      '/api/v1/auth/login-with-supabase-token',
      { accessToken: supabaseToken }
    );

    const { accessToken, refreshToken, exist } = response.data;

    await AsyncStorage.setItem('ACCESS_TOKEN', accessToken);
    await AsyncStorage.setItem('REFRESH_TOKEN', refreshToken);

    return { exist };
  }
}

export default new AuthService();
