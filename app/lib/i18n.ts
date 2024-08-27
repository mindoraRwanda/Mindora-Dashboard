import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common_en from '/locale/en/common.json';
import common_kin from '/locale/kin/common.json'; 

i18n.use(initReactI18next).init({
  fallbackLng: 'en', 
//   lng: 'en', 
  resources: {
    en: {
      common: common_en,
    },
    kin: {
      common: common_kin, 
    },
  },
  ns: ['common'], 
  defaultNS: 'common',
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
