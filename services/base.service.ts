import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { Axios } from 'axios';

class BaseService {
  client: Axios;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.EXPO_PUBLIC_API_URL,
    });

    this.client.interceptors.request.use(async (config) => {
      let accessToken;
      try {
        accessToken = await AsyncStorage.getItem('ACCESS_TOKEN');
      } catch (error) {}

      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }

      return config;
    });

    this.client.interceptors.response.use(
      (response) => {
        console.log('http response --- ', response.data)
        return response;
      },
      (error) => {
        console.log('http error --- ', error)
        throw error;
      }
    );
  }
}

export default BaseService;
