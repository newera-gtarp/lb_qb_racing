export const isEnvBrowser = (): boolean =>
  process.env.NODE_ENV === 'development' && !(window as any).invokeNative;

declare global {
  interface Window {
    GetSettings?(): Promise<LbPhoneSettings>;
  }
}

export type LbPhoneSettings = {
  airplaneMode: boolean;
  display: { theme: 'dark' | 'light' };
  doNotDisturb: boolean;
  locale: string;
  name: string;
  sound: { silent: boolean; volume: number };
};
