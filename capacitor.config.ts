import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tech.advo',
  appName: 'advo-app',
  webDir: 'build',
  server: {
    url: 'http://192.168.1.38:3000',
		cleartext: true
  }
};

export default config;
