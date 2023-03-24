import type { AxiosInstance } from 'axios';
import axios from 'axios';

interface ApiConstructorParams {
  baseUrl: string;
}

export class API {
  public baseUrl: string;

  public request: AxiosInstance;

  constructor(options: ApiConstructorParams) {
    this.baseUrl = options.baseUrl;

    this.request = axios.create({
      baseURL: options.baseUrl,
      headers: {
        authorization:
          'bearer ec9391e754d1bac8e5a4637ee8ce8ee9384d56fc6f2d59e6b34ad8ea022fa81b82c4eea90b3816ac67ff06c529f3153973ce2aa69aba8a4aa97ee222723b27abe670407cfb6df06c037d99f1d078257eadd2498b24c89702d2684485bbb82f2ca6aa613b6f0aa969bd22c78d5288a7c8ee75a2a69e1afbb83024a997e5a0683b'
      }
    });
  }
}

export const strapiApi = new API({ baseUrl: 'http://127.0.0.1:1337/api' });
