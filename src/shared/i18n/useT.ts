import { useTranslation, UseTranslationOptions } from 'react-i18next';

export function useT(ns?: string, options?: UseTranslationOptions<string>) {
  const { t } = useTranslation(ns, options);
  return t;
}
