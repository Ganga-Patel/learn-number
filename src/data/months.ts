export interface MonthItem {
  id: string;
  order: number;
  english: string;
  native: string;
  transliteration: string;
  gregorian: string;
  season: string;
  festival: string;
  phonetics: string[];
}

export const gujaratiMonths: MonthItem[] = [
  {
    id: 'gu-1',
    order: 1,
    english: 'Kartik',
    native: 'કારતક',
    transliteration: 'Kaartak',
    gregorian: 'Oct - Nov',
    season: 'Sharad (Autumn)',
    festival: 'Diwali & Gujarati New Year',
    phonetics: ['kartik', 'kaartak', 'kartak', 'કારતક', '1']
  },
  {
    id: 'gu-2',
    order: 2,
    english: 'Magshar',
    native: 'માગશર',
    transliteration: 'Maagshar',
    gregorian: 'Nov - Dec',
    season: 'Hemant (Pre-winter)',
    festival: 'Gita Jayanti',
    phonetics: ['magshar', 'maagshar', 'magashar', 'માગશર', '2']
  },
  {
    id: 'gu-3',
    order: 3,
    english: 'Posh',
    native: 'પોષ',
    transliteration: 'Posh',
    gregorian: 'Dec - Jan',
    season: 'Shishir (Winter)',
    festival: 'Makar Sankranti (Uttarayan)',
    phonetics: ['posh', 'paush', 'પોષ', '3']
  },
  {
    id: 'gu-4',
    order: 4,
    english: 'Maha',
    native: 'મહા',
    transliteration: 'Maha',
    gregorian: 'Jan - Feb',
    season: 'Shishir (Winter)',
    festival: 'Maha Shivratri, Vasant Panchami',
    phonetics: ['maha', 'magh', 'મહા', '4']
  },
  {
    id: 'gu-5',
    order: 5,
    english: 'Fagan',
    native: 'ફાગણ',
    transliteration: 'Faagan',
    gregorian: 'Feb - Mar',
    season: 'Vasant (Spring)',
    festival: 'Holi & Dhuleti',
    phonetics: ['fagan', 'faagan', 'phagan', 'ફાગણ', '5']
  },
  {
    id: 'gu-6',
    order: 6,
    english: 'Chaitra',
    native: 'ચૈત્ર',
    transliteration: 'Chaitra',
    gregorian: 'Mar - Apr',
    season: 'Vasant (Spring)',
    festival: 'Ram Navami, Chaitra Navratri',
    phonetics: ['chaitra', 'chetra', 'chaitar', 'ચૈત્ર', '6']
  },
  {
    id: 'gu-7',
    order: 7,
    english: 'Vaishakh',
    native: 'વૈશાખ',
    transliteration: 'Vaishaakh',
    gregorian: 'Apr - May',
    season: 'Grishma (Summer)',
    festival: 'Akshaya Tritiya, Buddha Purnima',
    phonetics: ['vaishakh', 'vaishaakh', 'vaisakh', 'વૈશાખ', '7']
  },
  {
    id: 'gu-8',
    order: 8,
    english: 'Jeth',
    native: 'જેઠ',
    transliteration: 'Jeth',
    gregorian: 'May - Jun',
    season: 'Grishma (Summer)',
    festival: 'Vat Savitri, Ganga Dussehra',
    phonetics: ['jeth', 'jyeshth', 'જેઠ', '8']
  },
  {
    id: 'gu-9',
    order: 9,
    english: 'Ashadh',
    native: 'અષાઢ',
    transliteration: 'Ashaadh',
    gregorian: 'Jun - Jul',
    season: 'Varsha (Monsoon)',
    festival: 'Rath Yatra, Guru Purnima',
    phonetics: ['ashadh', 'ashaadh', 'asad', 'અષાઢ', '9']
  },
  {
    id: 'gu-10',
    order: 10,
    english: 'Shravan',
    native: 'શ્રાવણ',
    transliteration: 'Shraavan',
    gregorian: 'Jul - Aug',
    season: 'Varsha (Monsoon)',
    festival: 'Raksha Bandhan, Janmashtami',
    phonetics: ['shravan', 'shraavan', 'sarvan', 'શ્રાવણ', '10']
  },
  {
    id: 'gu-11',
    order: 11,
    english: 'Bhadarvo',
    native: 'ભાદરવો',
    transliteration: 'Bhaadarvo',
    gregorian: 'Aug - Sep',
    season: 'Sharad (Early Autumn)',
    festival: 'Ganesh Chaturthi, Samvatsari',
    phonetics: ['bhadarvo', 'bhaadarvo', 'bhadarva', 'ભાદરવો', '11']
  },
  {
    id: 'gu-12',
    order: 12,
    english: 'Aaso',
    native: 'આસો',
    transliteration: 'Aaso',
    gregorian: 'Sep - Oct',
    season: 'Sharad (Autumn)',
    festival: 'Navratri, Dussehra, Sharad Purnima',
    phonetics: ['aaso', 'aso', 'ashwin', 'આસો', '12']
  }
];

export const hindiMonths: MonthItem[] = [
  {
    id: 'hi-1',
    order: 1,
    english: 'Chaitra',
    native: 'चैत्र',
    transliteration: 'Chaitra',
    gregorian: 'Mar - Apr',
    season: 'Vasant (Spring)',
    festival: 'Hindu Nav Varsh, Ram Navami',
    phonetics: ['chaitra', 'chetra', 'chait', 'चैत्र', '1']
  },
  {
    id: 'hi-2',
    order: 2,
    english: 'Vaishakha',
    native: 'वैशाख',
    transliteration: 'Vaishaakh',
    gregorian: 'Apr - May',
    season: 'Grishma (Summer)',
    festival: 'Akshaya Tritiya, Parashurama Jayanti',
    phonetics: ['vaishakha', 'vaishakh', 'vaisakh', 'वैशाख', '2']
  },
  {
    id: 'hi-3',
    order: 3,
    english: 'Jyeshtha',
    native: 'ज्येष्ठ',
    transliteration: 'Jyeshtha',
    gregorian: 'May - Jun',
    season: 'Grishma (Summer)',
    festival: 'Vat Savitri, Ganga Dussehra',
    phonetics: ['jyeshtha', 'jyeshth', 'jeth', 'ज्येष्ठ', '3']
  },
  {
    id: 'hi-4',
    order: 4,
    english: 'Ashadha',
    native: 'आषाढ़',
    transliteration: 'Ashaadh',
    gregorian: 'Jun - Jul',
    season: 'Varsha (Monsoon)',
    festival: 'Jagannath Rath Yatra, Guru Purnima',
    phonetics: ['ashadha', 'ashadh', 'ashaadh', 'आषाढ़', '4']
  },
  {
    id: 'hi-5',
    order: 5,
    english: 'Shravana',
    native: 'श्रावण',
    transliteration: 'Shraavan',
    gregorian: 'Jul - Aug',
    season: 'Varsha (Monsoon)',
    festival: 'Nag Panchami, Raksha Bandhan, Janmashtami',
    phonetics: ['shravana', 'shravan', 'shraavan', 'सावन', 'श्रावण', '5']
  },
  {
    id: 'hi-6',
    order: 6,
    english: 'Bhadrapada',
    native: 'भाद्रपद',
    transliteration: 'Bhaadrapada',
    gregorian: 'Aug - Sep',
    season: 'Sharad (Early Autumn)',
    festival: 'Ganesh Utsav, Anant Chaturdashi',
    phonetics: ['bhadrapada', 'bhadrapad', 'bhadon', 'भाद्रपद', '6']
  },
  {
    id: 'hi-7',
    order: 7,
    english: 'Ashvina',
    native: 'आश्विन',
    transliteration: 'Aashvin',
    gregorian: 'Sep - Oct',
    season: 'Sharad (Autumn)',
    festival: 'Shardiya Navratri, Vijayadashami (Dussehra)',
    phonetics: ['ashvina', 'ashvin', 'aashvin', 'aaso', 'आश्विन', '7']
  },
  {
    id: 'hi-8',
    order: 8,
    english: 'Kartika',
    native: 'कार्तिक',
    transliteration: 'Kaartik',
    gregorian: 'Oct - Nov',
    season: 'Hemant (Pre-winter)',
    festival: 'Karwa Chauth, Dhanteras, Diwali',
    phonetics: ['kartika', 'kartik', 'kaartik', 'कार्तिक', '8']
  },
  {
    id: 'hi-9',
    order: 9,
    english: 'Margashirsha',
    native: 'मार्गशीर्ष',
    transliteration: 'Maargashirsh',
    gregorian: 'Nov - Dec',
    season: 'Hemant (Pre-winter)',
    festival: 'Mokshada Ekadashi, Gita Jayanti',
    phonetics: ['margashirsha', 'margashirsh', 'aghan', 'मार्गशीर्ष', '9']
  },
  {
    id: 'hi-10',
    order: 10,
    english: 'Pausha',
    native: 'पौष',
    transliteration: 'Paush',
    gregorian: 'Dec - Jan',
    season: 'Shishir (Winter)',
    festival: 'Makar Sankranti, Lohri, Pongal',
    phonetics: ['pausha', 'paush', 'posh', 'पौष', '10']
  },
  {
    id: 'hi-11',
    order: 11,
    english: 'Magha',
    native: 'माघ',
    transliteration: 'Maagh',
    gregorian: 'Jan - Feb',
    season: 'Shishir (Winter)',
    festival: 'Vasant Panchami, Maha Shivratri',
    phonetics: ['magha', 'magh', 'maagh', 'माघ', '11']
  },
  {
    id: 'hi-12',
    order: 12,
    english: 'Phalguna',
    native: 'फाल्गुन',
    transliteration: 'Phaalgun',
    gregorian: 'Feb - Mar',
    season: 'Vasant (Spring)',
    festival: 'Maha Shivratri, Holika Dahan, Holi',
    phonetics: ['phalguna', 'phalgun', 'fagun', 'फाल्गुन', '12']
  }
];
