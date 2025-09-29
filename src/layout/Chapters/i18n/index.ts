import i18n from '@/shared/i18n/config';
import en from './en.json';
import pt from './pt.json';

const NS = 'chapters';

// Register only once
if (!i18n.hasResourceBundle('en', NS)) {
  i18n.addResourceBundle('en', NS, en, true, true);
}
if (!i18n.hasResourceBundle('pt', NS)) {
  i18n.addResourceBundle('pt', NS, pt, true, true);
}

export const chaptersNs: 'chapters' = NS;
