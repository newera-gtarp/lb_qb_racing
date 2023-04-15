import { useEffect, useState } from 'react';
import { LbPhoneSettings } from '../utils/misc';

const getSettings = async () => (window.GetSettings != null ? await window.GetSettings() : null);

export const useLbPhoneSettings = () => {
  const [settings, setSettings] = useState<LbPhoneSettings | null>(null);

  useEffect(() => {
    getSettings().then(setSettings);
  }, []);

  return settings;
};
