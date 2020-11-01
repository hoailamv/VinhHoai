import { Config } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Selling_Website',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44387',
    redirectUri: baseUrl,
    clientId: 'Selling_Website_App',
    responseType: 'code',
    scope: 'offline_access Selling_Website',
  },
  apis: {
    default: {
      url: 'https://localhost:44387',
      rootNamespace: 'Selling_Website',
    },
  },
} as Config.Environment;
