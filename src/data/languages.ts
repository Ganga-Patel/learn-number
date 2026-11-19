export type LanguageCode =
  | 'hi'
  | 'gu'
  | 'mr'
  | 'bn'
  | 'ta'
  | 'te'
  | 'kn'
  | 'ml'
  | 'pa'
  | 'or'
  | 'sa'
  | 'ur';

export interface LanguageMeta {
  code: LanguageCode;
  name: string;
  nativeName: string;
  speechCode: string;
  family: 'Indo-Aryan' | 'Dravidian';
  greeting: string;
  icon: string;
  description: string;
}

export const supportedLanguages: LanguageMeta[] = [
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    speechCode: 'hi-IN',
    family: 'Indo-Aryan',
    greeting: 'नमस्ते',
    icon: '🇮🇳',
    description: 'Most widely spoken language in India, written in Devanagari script.',
  },
  {
    code: 'gu',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    speechCode: 'gu-IN',
    family: 'Indo-Aryan',
    greeting: 'નમસ્તે',
    icon: '🦁',
    description: 'Language of Gujarat, written in Gujarati script without a top line.',
  },
  {
    code: 'mr',
    name: 'Marathi',
    nativeName: 'मराठी',
    speechCode: 'mr-IN',
    family: 'Indo-Aryan',
    greeting: 'नमस्कार',
    icon: '🚩',
    description: 'Official language of Maharashtra with rich historical literature.',
  },
  {
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    speechCode: 'bn-IN',
    family: 'Indo-Aryan',
    greeting: 'নমস্কার',
    icon: '🐯',
    description: 'Second most spoken language in India, renowned for Nobel laureate literature.',
  },
  {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    speechCode: 'ta-IN',
    family: 'Dravidian',
    greeting: 'வணக்கம்',
    icon: '🛕',
    description: 'One of the longest-surviving classical languages in the world.',
  },
  {
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    speechCode: 'te-IN',
    family: 'Dravidian',
    greeting: 'నమస్కారం',
    icon: '🎻',
    description: 'Known as the "Italian of the East" due to all words ending in vowels.',
  },
  {
    code: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    speechCode: 'kn-IN',
    family: 'Dravidian',
    greeting: 'ನಮಸ್ಕಾರ',
    icon: '🐘',
    description: 'Classical language of Karnataka with distinct curved script.',
  },
  {
    code: 'ml',
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    speechCode: 'ml-IN',
    family: 'Dravidian',
    greeting: 'നമസ്കാരം',
    icon: '🌴',
    description: 'Principal language of Kerala, palindrome name with round script.',
  },
  {
    code: 'pa',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ',
    speechCode: 'pa-IN',
    family: 'Indo-Aryan',
    greeting: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ',
    icon: '🌾',
    description: 'Language of Punjab, written in the sacred Gurmukhi script.',
  },
  {
    code: 'or',
    name: 'Odia',
    nativeName: 'ଓଡ଼ିଆ',
    speechCode: 'or-IN',
    family: 'Indo-Aryan',
    greeting: 'ନମସ୍କାର',
    icon: '☀️',
    description: 'Classical language of Odisha with beautiful circular characters.',
  },
  {
    code: 'sa',
    name: 'Sanskrit',
    nativeName: 'संस्कृतम्',
    speechCode: 'hi-IN',
    family: 'Indo-Aryan',
    greeting: 'नमस्ते',
    icon: '🕉️',
    description: 'The ancient mother language of classical Indian literature and scriptures.',
  },
  {
    code: 'ur',
    name: 'Urdu',
    nativeName: 'اردو',
    speechCode: 'ur-IN',
    family: 'Indo-Aryan',
    greeting: 'آداب',
    icon: '🌙',
    description: 'Language known for poetry and ghazals, written right-to-left.',
  },
];

export const getLanguageMeta = (code: string): LanguageMeta => {
  return (
    supportedLanguages.find((l) => l.code === code) || supportedLanguages[0]
  );
};
