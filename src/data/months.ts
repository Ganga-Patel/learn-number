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
  { id: 'gu-1', order: 1, english: 'Kartik', native: 'કારતક', transliteration: 'Kaartak', gregorian: 'Oct - Nov', season: 'Sharad (Autumn)', festival: 'Diwali & Gujarati New Year', phonetics: ['kartik', 'kaartak', 'kartak', 'કારતક', '1'] },
  { id: 'gu-2', order: 2, english: 'Magshar', native: 'માગશર', transliteration: 'Maagshar', gregorian: 'Nov - Dec', season: 'Hemant (Pre-winter)', festival: 'Gita Jayanti', phonetics: ['magshar', 'maagshar', 'magashar', 'માગશર', '2'] },
  { id: 'gu-3', order: 3, english: 'Posh', native: 'પોષ', transliteration: 'Posh', gregorian: 'Dec - Jan', season: 'Shishir (Winter)', festival: 'Makar Sankranti (Uttarayan)', phonetics: ['posh', 'paush', 'પોષ', '3'] },
  { id: 'gu-4', order: 4, english: 'Maha', native: 'મહા', transliteration: 'Maha', gregorian: 'Jan - Feb', season: 'Shishir (Winter)', festival: 'Maha Shivratri, Vasant Panchami', phonetics: ['maha', 'magh', 'મહા', '4'] },
  { id: 'gu-5', order: 5, english: 'Fagan', native: 'ફાગણ', transliteration: 'Faagan', gregorian: 'Feb - Mar', season: 'Vasant (Spring)', festival: 'Holi & Dhuleti', phonetics: ['fagan', 'faagan', 'phagan', 'ફાગણ', '5'] },
  { id: 'gu-6', order: 6, english: 'Chaitra', native: 'ચૈત્ર', transliteration: 'Chaitra', gregorian: 'Mar - Apr', season: 'Vasant (Spring)', festival: 'Ram Navami, Chaitra Navratri', phonetics: ['chaitra', 'chetra', 'chaitar', 'ચૈત્ર', '6'] },
  { id: 'gu-7', order: 7, english: 'Vaishakh', native: 'વૈશાખ', transliteration: 'Vaishaakh', gregorian: 'Apr - May', season: 'Grishma (Summer)', festival: 'Akshaya Tritiya, Buddha Purnima', phonetics: ['vaishakh', 'vaishaakh', 'vaisakh', 'વૈશાખ', '7'] },
  { id: 'gu-8', order: 8, english: 'Jeth', native: 'જેઠ', transliteration: 'Jeth', gregorian: 'May - Jun', season: 'Grishma (Summer)', festival: 'Vat Savitri, Ganga Dussehra', phonetics: ['jeth', 'jyeshth', 'જેઠ', '8'] },
  { id: 'gu-9', order: 9, english: 'Ashadh', native: 'અષાઢ', transliteration: 'Ashaadh', gregorian: 'Jun - Jul', season: 'Varsha (Monsoon)', festival: 'Rath Yatra, Guru Purnima', phonetics: ['ashadh', 'ashaadh', 'asad', 'અષાઢ', '9'] },
  { id: 'gu-10', order: 10, english: 'Shravan', native: 'શ્રાવણ', transliteration: 'Shraavan', gregorian: 'Jul - Aug', season: 'Varsha (Monsoon)', festival: 'Raksha Bandhan, Janmashtami', phonetics: ['shravan', 'shraavan', 'sarvan', 'શ્રાવણ', '10'] },
  { id: 'gu-11', order: 11, english: 'Bhadarvo', native: 'ભાદરવો', transliteration: 'Bhaadarvo', gregorian: 'Aug - Sep', season: 'Sharad (Early Autumn)', festival: 'Ganesh Chaturthi, Samvatsari', phonetics: ['bhadarvo', 'bhaadarvo', 'bhadarva', 'ભાદરવો', '11'] },
  { id: 'gu-12', order: 12, english: 'Aaso', native: 'આસો', transliteration: 'Aaso', gregorian: 'Sep - Oct', season: 'Sharad (Autumn)', festival: 'Navratri, Dussehra, Sharad Purnima', phonetics: ['aaso', 'aso', 'ashwin', 'આસો', '12'] }
];

export const hindiMonths: MonthItem[] = [
  { id: 'hi-1', order: 1, english: 'Chaitra', native: 'चैत्र', transliteration: 'Chaitra', gregorian: 'Mar - Apr', season: 'Vasant (Spring)', festival: 'Hindu Nav Varsh, Ram Navami', phonetics: ['chaitra', 'chetra', 'chait', 'चैत्र', '1'] },
  { id: 'hi-2', order: 2, english: 'Vaishakha', native: 'वैशाख', transliteration: 'Vaishaakh', gregorian: 'Apr - May', season: 'Grishma (Summer)', festival: 'Akshaya Tritiya, Parashurama Jayanti', phonetics: ['vaishakha', 'vaishakh', 'vaisakh', 'वैशाख', '2'] },
  { id: 'hi-3', order: 3, english: 'Jyeshtha', native: 'ज्येष्ठ', transliteration: 'Jyeshtha', gregorian: 'May - Jun', season: 'Grishma (Summer)', festival: 'Vat Savitri, Ganga Dussehra', phonetics: ['jyeshtha', 'jyeshth', 'jeth', 'ज्येष्ठ', '3'] },
  { id: 'hi-4', order: 4, english: 'Ashadha', native: 'आषाढ़', transliteration: 'Ashaadh', gregorian: 'Jun - Jul', season: 'Varsha (Monsoon)', festival: 'Jagannath Rath Yatra, Guru Purnima', phonetics: ['ashadha', 'ashadh', 'ashaadh', 'आषाढ़', '4'] },
  { id: 'hi-5', order: 5, english: 'Shravana', native: 'श्रावण', transliteration: 'Shraavan', gregorian: 'Jul - Aug', season: 'Varsha (Monsoon)', festival: 'Nag Panchami, Raksha Bandhan, Janmashtami', phonetics: ['shravana', 'shravan', 'shraavan', 'सावन', 'श्रावण', '5'] },
  { id: 'hi-6', order: 6, english: 'Bhadrapada', native: 'भाद्रपद', transliteration: 'Bhaadrapada', gregorian: 'Aug - Sep', season: 'Sharad (Early Autumn)', festival: 'Ganesh Utsav, Anant Chaturdashi', phonetics: ['bhadrapada', 'bhadrapad', 'bhadon', 'भाद्रपद', '6'] },
  { id: 'hi-7', order: 7, english: 'Ashvina', native: 'आश्विन', transliteration: 'Aashvin', gregorian: 'Sep - Oct', season: 'Sharad (Autumn)', festival: 'Shardiya Navratri, Vijayadashami (Dussehra)', phonetics: ['ashvina', 'ashvin', 'aashvin', 'aaso', 'आश्विन', '7'] },
  { id: 'hi-8', order: 8, english: 'Kartika', native: 'कार्तिक', transliteration: 'Kaartik', gregorian: 'Oct - Nov', season: 'Hemant (Pre-winter)', festival: 'Karwa Chauth, Dhanteras, Diwali', phonetics: ['kartika', 'kartik', 'kaartik', 'कार्तिक', '8'] },
  { id: 'hi-9', order: 9, english: 'Margashirsha', native: 'मार्गशीर्ष', transliteration: 'Maargashirsh', gregorian: 'Nov - Dec', season: 'Hemant (Pre-winter)', festival: 'Mokshada Ekadashi, Gita Jayanti', phonetics: ['margashirsha', 'margashirsh', 'aghan', 'मार्गशीर्ष', '9'] },
  { id: 'hi-10', order: 10, english: 'Pausha', native: 'पौष', transliteration: 'Paush', gregorian: 'Dec - Jan', season: 'Shishir (Winter)', festival: 'Makar Sankranti, Lohri, Pongal', phonetics: ['pausha', 'paush', 'posh', 'पौष', '10'] },
  { id: 'hi-11', order: 11, english: 'Magha', native: 'माघ', transliteration: 'Maagh', gregorian: 'Jan - Feb', season: 'Shishir (Winter)', festival: 'Vasant Panchami, Maha Shivratri', phonetics: ['magha', 'magh', 'maagh', 'माघ', '11'] },
  { id: 'hi-12', order: 12, english: 'Phalguna', native: 'फाल्गुन', transliteration: 'Phaalgun', gregorian: 'Feb - Mar', season: 'Vasant (Spring)', festival: 'Maha Shivratri, Holika Dahan, Holi', phonetics: ['phalguna', 'phalgun', 'fagun', 'फाल्गुन', '12'] }
];

export const marathiMonths: MonthItem[] = [
  { id: 'mr-1', order: 1, english: 'Chaitra', native: 'चैत्र', transliteration: 'Chaitra', gregorian: 'Mar - Apr', season: 'Vasant', festival: 'Gudi Padwa, Ram Navami', phonetics: ['chaitra', 'चैत्र', '1'] },
  { id: 'mr-2', order: 2, english: 'Vaishakh', native: 'वैशाख', transliteration: 'Vaishaakh', gregorian: 'Apr - May', season: 'Grishma', festival: 'Akshaya Tritiya', phonetics: ['vaishakh', 'वैशाख', '2'] },
  { id: 'mr-3', order: 3, english: 'Jyeshtha', native: 'ज्येष्ठ', transliteration: 'Jyeshtha', gregorian: 'May - Jun', season: 'Grishma', festival: 'Vat Purnima', phonetics: ['jyeshtha', 'ज्येष्ठ', '3'] },
  { id: 'mr-4', order: 4, english: 'Ashadh', native: 'आषाढ', transliteration: 'Aashaadh', gregorian: 'Jun - Jul', season: 'Varsha', festival: 'Ashadhi Ekadashi (Pandharpur)', phonetics: ['ashadh', 'आषाढ', '4'] },
  { id: 'mr-5', order: 5, english: 'Shravan', native: 'श्रावण', transliteration: 'Shraavan', gregorian: 'Jul - Aug', season: 'Varsha', festival: 'Nag Panchami, Narali Purnima', phonetics: ['shravan', 'श्रावण', '5'] },
  { id: 'mr-6', order: 6, english: 'Bhadrapad', native: 'भाद्रपद', transliteration: 'Bhaadrapad', gregorian: 'Aug - Sep', season: 'Sharad', festival: 'Ganeshotsav, Gauri Pujan', phonetics: ['bhadrapad', 'भाद्रपद', '6'] },
  { id: 'mr-7', order: 7, english: 'Ashwin', native: 'अश्विन', transliteration: 'Ashwin', gregorian: 'Sep - Oct', season: 'Sharad', festival: 'Navratri, Dasara, Kojagiri Purnima', phonetics: ['ashwin', 'अश्विन', '7'] },
  { id: 'mr-8', order: 8, english: 'Kartik', native: 'कार्तिक', transliteration: 'Kaartik', gregorian: 'Oct - Nov', season: 'Hemant', festival: 'Diwali, Tulsi Vivah, Kartiki Ekadashi', phonetics: ['kartik', 'कार्तिक', '8'] },
  { id: 'mr-9', order: 9, english: 'Margashirsha', native: 'मार्गशीर्ष', transliteration: 'Maargashirsh', gregorian: 'Nov - Dec', season: 'Hemant', festival: 'Datta Jayanti, Khandoba Utsav', phonetics: ['margashirsha', 'मार्गशीर्ष', '9'] },
  { id: 'mr-10', order: 10, english: 'Paush', native: 'पौष', transliteration: 'Paush', gregorian: 'Dec - Jan', season: 'Shishir', festival: 'Makar Sankranti', phonetics: ['paush', 'पौष', '10'] },
  { id: 'mr-11', order: 11, english: 'Magh', native: 'माघ', transliteration: 'Maagh', gregorian: 'Jan - Feb', season: 'Shishir', festival: 'Maha Shivratri, Til Kund Chaturthi', phonetics: ['magh', 'माघ', '11'] },
  { id: 'mr-12', order: 12, english: 'Phalgun', native: 'फाल्गुन', transliteration: 'Phaalgun', gregorian: 'Feb - Mar', season: 'Vasant', festival: 'Holi, Dhulivandan', phonetics: ['phalgun', 'फाल्गुन', '12'] }
];

export const tamilMonths: MonthItem[] = [
  { id: 'ta-1', order: 1, english: 'Chithirai', native: 'சித்திரை', transliteration: 'Chithirai', gregorian: 'Apr - May', season: 'Ilavenil (Spring)', festival: 'Tamil New Year (Puthandu), Chithirai Thiruvizha', phonetics: ['chithirai', 'சித்திரை', '1'] },
  { id: 'ta-2', order: 2, english: 'Vaikasi', native: 'வைகாசி', transliteration: 'Vaikasi', gregorian: 'May - Jun', season: 'Mudhvenil (Summer)', festival: 'Vaikasi Visakam (Murugan Jayanti)', phonetics: ['vaikasi', 'வைகாசி', '2'] },
  { id: 'ta-3', order: 3, english: 'Aani', native: 'ஆனி', transliteration: 'Aani', gregorian: 'Jun - Jul', season: 'Mudhvenil (Summer)', festival: 'Aani Uthiram (Nataraja Abhishekam)', phonetics: ['aani', 'ஆனி', '3'] },
  { id: 'ta-4', order: 4, english: 'Aadi', native: 'ஆடி', transliteration: 'Aadi', gregorian: 'Jul - Aug', season: 'Kaar (Monsoon)', festival: 'Aadi Perukku, Varalakshmi Vratam', phonetics: ['aadi', 'ஆடி', '4'] },
  { id: 'ta-5', order: 5, english: 'Aavani', native: 'ஆவணி', transliteration: 'Aavani', gregorian: 'Aug - Sep', season: 'Kaar (Monsoon)', festival: 'Krishna Jayanti, Avani Avittam, Vinayagar Chaturthi', phonetics: ['aavani', 'ஆவணி', '5'] },
  { id: 'ta-6', order: 6, english: 'Purattasi', native: 'புரட்டாசி', transliteration: 'Purattasi', gregorian: 'Sep - Oct', season: 'Koothir (Autumn)', festival: 'Navaratri, Tirupati Venkateswara Brahmotsavam', phonetics: ['purattasi', 'புரட்டாசி', '6'] },
  { id: 'ta-7', order: 7, english: 'Aippasi', native: 'ஐப்பசி', transliteration: 'Aippasi', gregorian: 'Oct - Nov', season: 'Koothir (Autumn)', festival: 'Deepavali, Skanda Sashti', phonetics: ['aippasi', 'ஐப்பசி', '7'] },
  { id: 'ta-8', order: 8, english: 'Karthigai', native: 'கார்த்திகை', transliteration: 'Karthigai', gregorian: 'Nov - Dec', season: 'Munpani (Winter)', festival: 'Karthigai Deepam (Thiruvannamalai)', phonetics: ['karthigai', 'கார்த்திகை', '8'] },
  { id: 'ta-9', order: 9, english: 'Margazhi', native: 'மார்கழி', transliteration: 'Margazhi', gregorian: 'Dec - Jan', season: 'Munpani (Winter)', festival: 'Vaikunta Ekadasi, Arudra Darisanam', phonetics: ['margazhi', 'மார்கழி', '9'] },
  { id: 'ta-10', order: 10, english: 'Thai', native: 'தை', transliteration: 'Thai', gregorian: 'Jan - Feb', season: 'Pinpani (Late Winter)', festival: 'Thai Pongal, Thaipusam', phonetics: ['thai', 'தை', '10'] },
  { id: 'ta-11', order: 11, english: 'Maasi', native: 'மாசி', transliteration: 'Maasi', gregorian: 'Feb - Mar', season: 'Pinpani (Late Winter)', festival: 'Maha Shivaratri, Masi Magam', phonetics: ['maasi', 'மாசி', '11'] },
  { id: 'ta-12', order: 12, english: 'Panguni', native: 'பங்குனி', transliteration: 'Panguni', gregorian: 'Mar - Apr', season: 'Ilavenil (Spring)', festival: 'Panguni Uthiram (Divine Weddings)', phonetics: ['panguni', 'பங்குனி', '12'] }
];

export const bengaliMonths: MonthItem[] = [
  { id: 'bn-1', order: 1, english: 'Boishakh', native: 'বৈশাখ', transliteration: 'Boishaakh', gregorian: 'Apr - May', season: 'Grishma (Summer)', festival: 'Pohela Boishakh (Bangla Naboborsho)', phonetics: ['boishakh', 'বৈশাখ', '1'] },
  { id: 'bn-2', order: 2, english: 'Joishtho', native: 'জ্যৈষ্ঠ', transliteration: 'Joistho', gregorian: 'May - Jun', season: 'Grishma (Summer)', festival: 'Jamai Shoshti', phonetics: ['joishtho', 'জ্যৈষ্ঠ', '2'] },
  { id: 'bn-3', order: 3, english: 'Asharh', native: 'আষাঢ়', transliteration: 'Aashaarh', gregorian: 'Jun - Jul', season: 'Borsha (Monsoon)', festival: 'Rath Yatra', phonetics: ['asharh', 'আষাঢ়', '3'] },
  { id: 'bn-4', order: 4, english: 'Srabon', native: 'শ্রাবণ', transliteration: 'Shraabon', gregorian: 'Jul - Aug', season: 'Borsha (Monsoon)', festival: 'Jhulan Yatra, Rakhi Bandhan', phonetics: ['srabon', 'শ্রাবণ', '4'] },
  { id: 'bn-5', order: 5, english: 'Bhadro', native: 'ভাদ্র', transliteration: 'Bhaadro', gregorian: 'Aug - Sep', season: 'Sarat (Autumn)', festival: 'Janmashtami, Biswakarma Puja', phonetics: ['bhadro', 'ভাদ্র', '5'] },
  { id: 'bn-6', order: 6, english: 'Ashwin', native: 'আশ্বিন', transliteration: 'Aashwin', gregorian: 'Sep - Oct', season: 'Sarat (Autumn)', festival: 'Durga Puja, Mahalaya', phonetics: ['ashwin', 'আশ্বিন', '6'] },
  { id: 'bn-7', order: 7, english: 'Kartik', native: 'কার্তিক', transliteration: 'Kaartik', gregorian: 'Oct - Nov', season: 'Hemanto (Late Autumn)', festival: 'Kali Puja, Diwali, Bhai Phota', phonetics: ['kartik', 'কার্তিক', '7'] },
  { id: 'bn-8', order: 8, english: 'Ogrohayon', native: 'অগ্রহায়ণ', transliteration: 'Ogrohaayon', gregorian: 'Nov - Dec', season: 'Hemanto (Late Autumn)', festival: 'Nabanna Utsab (Harvest)', phonetics: ['ogrohayon', 'অগ্রহায়ণ', '8'] },
  { id: 'bn-9', order: 9, english: 'Poush', native: 'পৌষ', transliteration: 'Poush', gregorian: 'Dec - Jan', season: 'Sheet (Winter)', festival: 'Poush Sankranti, Pitha Utsab', phonetics: ['poush', 'পৌষ', '9'] },
  { id: 'bn-10', order: 10, english: 'Magh', native: 'মাঘ', transliteration: 'Maagh', gregorian: 'Jan - Feb', season: 'Sheet (Winter)', festival: 'Saraswati Puja, Vasant Panchami', phonetics: ['magh', 'মাঘ', '10'] },
  { id: 'bn-11', order: 11, english: 'Falgun', native: 'ফাল্গুন', transliteration: 'Phaalgun', gregorian: 'Feb - Mar', season: 'Bosonto (Spring)', festival: 'Dol Yatra, Holi', phonetics: ['falgun', 'ফাল্গুন', '11'] },
  { id: 'bn-12', order: 12, english: 'Choitro', native: 'চৈত্র', transliteration: 'Choitro', gregorian: 'Mar - Apr', season: 'Bosonto (Spring)', festival: 'Charak Puja, Chaitra Sankranti', phonetics: ['choitro', 'চৈত্র', '12'] }
];

export const teluguMonths: MonthItem[] = [
  { id: 'te-1', order: 1, english: 'Chaitramu', native: 'చైత్రము', transliteration: 'Chaitramu', gregorian: 'Mar - Apr', season: 'Vasantha Ruthuvu', festival: 'Ugadi (Telugu New Year), Sri Rama Navami', phonetics: ['chaitramu', 'చైత్రము', '1'] },
  { id: 'te-2', order: 2, english: 'Vaishakhamu', native: 'వైశాఖము', transliteration: 'Vaishaakhamu', gregorian: 'Apr - May', season: 'Greeshma Ruthuvu', festival: 'Narasimha Jayanti, Akshaya Tritiya', phonetics: ['vaishakhamu', 'వైశాఖము', '2'] },
  { id: 'te-3', order: 3, english: 'Jyeshthamu', native: 'జ్యేష్ఠము', transliteration: 'Jyeshthamu', gregorian: 'May - Jun', season: 'Greeshma Ruthuvu', festival: 'Eruvaka Punnami', phonetics: ['jyeshthamu', 'జ్యేష్ఠము', '3'] },
  { id: 'te-4', order: 4, english: 'Aashadhamu', native: 'ఆషాఢము', transliteration: 'Aashaadhamu', gregorian: 'Jun - Jul', season: 'Varsha Ruthuvu', festival: 'Bonalu, Guru Purnima', phonetics: ['aashadhamu', 'ఆషాఢము', '4'] },
  { id: 'te-5', order: 5, english: 'Shravanamu', native: 'శ్రావణము', transliteration: 'Shraavanamu', gregorian: 'Jul - Aug', season: 'Varsha Ruthuvu', festival: 'Varalakshmi Vratam, Raksha Bandhan', phonetics: ['shravanamu', 'శ్రావణము', '5'] },
  { id: 'te-6', order: 6, english: 'Bhadrapadamu', native: 'భాద్రపదము', transliteration: 'Bhaadrapadamu', gregorian: 'Aug - Sep', season: 'Sharad Ruthuvu', festival: 'Vinayaka Chavithi', phonetics: ['bhadrapadamu', 'భాద్రపదము', '6'] },
  { id: 'te-7', order: 7, english: 'Ashvayujamu', native: 'ఆశ్వయుజము', transliteration: 'Aashvayujamu', gregorian: 'Sep - Oct', season: 'Sharad Ruthuvu', festival: 'Bathukamma, Dasara', phonetics: ['ashvayujamu', 'ఆశ్వయుజము', '7'] },
  { id: 'te-8', order: 8, english: 'Karthikamu', native: 'కార్తీకము', transliteration: 'Kaarthikamu', gregorian: 'Oct - Nov', season: 'Hemantha Ruthuvu', festival: 'Deepavali, Karthika Deepotsavam', phonetics: ['karthikamu', 'కార్తీకము', '8'] },
  { id: 'te-9', order: 9, english: 'Margashiramu', native: 'మార్గశిరము', transliteration: 'Maargashiramu', gregorian: 'Nov - Dec', season: 'Hemantha Ruthuvu', festival: 'Gita Jayanti, Subrahmanya Sashti', phonetics: ['margashiramu', 'మార్గశిరము', '9'] },
  { id: 'te-10', order: 10, english: 'Pushyamu', native: 'పుష్యము', transliteration: 'Pushyamu', gregorian: 'Dec - Jan', season: 'Shishira Ruthuvu', festival: 'Makara Sankranthi, Bhogi, Kanuma', phonetics: ['pushyamu', 'పుష్యము', '10'] },
  { id: 'te-11', order: 11, english: 'Maghamu', native: 'మాఘము', transliteration: 'Maaghamu', gregorian: 'Jan - Feb', season: 'Shishira Ruthuvu', festival: 'Ratha Saptami, Maha Shivaratri', phonetics: ['maghamu', 'మాఘము', '11'] },
  { id: 'te-12', order: 12, english: 'Phalgunamu', native: 'ఫాల్గుణము', transliteration: 'Phaalgunamu', gregorian: 'Feb - Mar', season: 'Vasantha Ruthuvu', festival: 'Kamadahanam, Holi', phonetics: ['phalgunamu', 'ఫాల్గుణము', '12'] }
];

export const kannadaMonths: MonthItem[] = [
  { id: 'kn-1', order: 1, english: 'Chaitra', native: 'ಚೈತ್ರ', transliteration: 'Chaitra', gregorian: 'Mar - Apr', season: 'Vasantha', festival: 'Yugadi (Kannada New Year), Ramanavami', phonetics: ['chaitra', 'ಚೈತ್ರ', '1'] },
  { id: 'kn-2', order: 2, english: 'Vaishakha', native: 'ವೈಶಾಖ', transliteration: 'Vaishaakha', gregorian: 'Apr - May', season: 'Greeshma', festival: 'Akshaya Tadige, Basava Jayanti', phonetics: ['vaishakha', 'ವೈಶಾಖ', '2'] },
  { id: 'kn-3', order: 3, english: 'Jyeshtha', native: 'ಜ್ಯೇಷ್ಠ', transliteration: 'Jyeshtha', gregorian: 'May - Jun', season: 'Greeshma', festival: 'Vat Savitri', phonetics: ['jyeshtha', 'ಜ್ಯೇಷ್ಠ', '3'] },
  { id: 'kn-4', order: 4, english: 'Aashadha', native: 'ಆಷಾಢ', transliteration: 'Aashaadha', gregorian: 'Jun - Jul', season: 'Varsha', festival: 'Chamundeshwari Vardhanti', phonetics: ['aashadha', 'ಆಷಾಢ', '4'] },
  { id: 'kn-5', order: 5, english: 'Shravana', native: 'ಶ್ರಾವಣ', transliteration: 'Shraavana', gregorian: 'Jul - Aug', season: 'Varsha', festival: 'Nagara Panchami, Varamahalakshmi', phonetics: ['shravana', 'ಶ್ರಾವಣ', '5'] },
  { id: 'kn-6', order: 6, english: 'Bhadrapada', native: 'ಭಾದ್ರಪದ', transliteration: 'Bhaadrapada', gregorian: 'Aug - Sep', season: 'Sharad', festival: 'Gowri Habba, Ganesha Chaturthi', phonetics: ['bhadrapada', 'ಭಾದ್ರಪದ', '6'] },
  { id: 'kn-7', order: 7, english: 'Ashwayuja', native: 'ಆಶ್ವಯುಜ', transliteration: 'Aashwayuja', gregorian: 'Sep - Oct', season: 'Sharad', festival: 'Mysuru Dasara, Vijayadashami', phonetics: ['ashwayuja', 'ಆಶ್ವಯುಜ', '7'] },
  { id: 'kn-8', order: 8, english: 'Karthika', native: 'ಕಾರ್ತಿಕ', transliteration: 'Kaarthika', gregorian: 'Oct - Nov', season: 'Hemantha', festival: 'Deepavali, Balipadyami', phonetics: ['karthika', 'ಕಾರ್ತಿಕ', '8'] },
  { id: 'kn-9', order: 9, english: 'Margashira', native: 'ಮಾರ್ಗಶಿರ', transliteration: 'Maargashira', gregorian: 'Nov - Dec', season: 'Hemantha', festival: 'Dattatreya Jayanti', phonetics: ['margashira', 'ಮಾರ್ಗಶಿರ', '9'] },
  { id: 'kn-10', order: 10, english: 'Pushya', native: 'ಪುಷ್ಯ', transliteration: 'Pushya', gregorian: 'Dec - Jan', season: 'Shishira', festival: 'Makara Sankranti (Suggi)', phonetics: ['pushya', 'ಪುಷ್ಯ', '10'] },
  { id: 'kn-11', order: 11, english: 'Magha', native: 'ಮಾಘ', transliteration: 'Maagha', gregorian: 'Jan - Feb', season: 'Shishira', festival: 'Maha Shivaratri', phonetics: ['magha', 'ಮಾಘ', '11'] },
  { id: 'kn-12', order: 12, english: 'Phalguna', native: 'ಫಾಲ್ಗುಣ', transliteration: 'Phaalguna', gregorian: 'Feb - Mar', season: 'Vasantha', festival: 'Kamana Habba (Holi)', phonetics: ['phalguna', 'ಫಾಲ್ಗುಣ', '12'] }
];

export const malayalamMonths: MonthItem[] = [
  { id: 'ml-1', order: 1, english: 'Chingam', native: 'ചിങ്ങം', transliteration: 'Chingam', gregorian: 'Aug - Sep', season: 'Varsha/Sharad', festival: 'Onam (Thiruvonam), Malayalam New Year', phonetics: ['chingam', 'ചിങ്ങം', '1'] },
  { id: 'ml-2', order: 2, english: 'Kanni', native: 'കന്നി', transliteration: 'Kanni', gregorian: 'Sep - Oct', season: 'Sharad', festival: 'Navarathri, Ayudha Pooja', phonetics: ['kanni', 'കന്നി', '2'] },
  { id: 'ml-3', order: 3, english: 'Thulam', native: 'തുലാം', transliteration: 'Thulaam', gregorian: 'Oct - Nov', season: 'Sharad', festival: 'Deepavali, Thula Masam Pilgrimage', phonetics: ['thulam', 'തുലാം', '3'] },
  { id: 'ml-4', order: 4, english: 'Vrischikam', native: 'വൃശ്ചികം', transliteration: 'Vrischikam', gregorian: 'Nov - Dec', season: 'Hemanta', festival: 'Mandala Pooja begins (Sabarimala)', phonetics: ['vrischikam', 'വൃശ്ചികം', '4'] },
  { id: 'ml-5', order: 5, english: 'Dhanu', native: 'ധനു', transliteration: 'Dhanu', gregorian: 'Dec - Jan', season: 'Hemanta', festival: 'Thiruvathira', phonetics: ['dhanu', 'ധനു', '5'] },
  { id: 'ml-6', order: 6, english: 'Makaram', native: 'മകരം', transliteration: 'Makaram', gregorian: 'Jan - Feb', season: 'Shishira', festival: 'Makaravilakku (Sabarimala), Thaipooyam', phonetics: ['makaram', 'മകരം', '6'] },
  { id: 'ml-7', order: 7, english: 'Kumbham', native: 'കുംഭം', transliteration: 'Kumbham', gregorian: 'Feb - Mar', season: 'Shishira', festival: 'Maha Sivarathri, Attukal Pongala', phonetics: ['kumbham', 'കുംഭം', '7'] },
  { id: 'ml-8', order: 8, english: 'Meenam', native: 'മീനം', transliteration: 'Meenam', gregorian: 'Mar - Apr', season: 'Vasantha', festival: 'Meena Bharani', phonetics: ['meenam', 'മീനം', '8'] },
  { id: 'ml-9', order: 9, english: 'Medam', native: 'മേടം', transliteration: 'Medam', gregorian: 'Apr - May', season: 'Greeshma', festival: 'Vishu, Thrissur Pooram', phonetics: ['medam', 'മേടം', '9'] },
  { id: 'ml-10', order: 10, english: 'Edavam', native: 'ഇടവം', transliteration: 'Idavam', gregorian: 'May - Jun', season: 'Greeshma', festival: 'Prathishta Dinams', phonetics: ['edavam', 'ഇടവം', '10'] },
  { id: 'ml-11', order: 11, english: 'Mithunam', native: 'മിഥുനം', transliteration: 'Mithunam', gregorian: 'Jun - Jul', season: 'Varsha', festival: 'Ochira Kali', phonetics: ['mithunam', 'മിഥുനം', '11'] },
  { id: 'ml-12', order: 12, english: 'Karkidakam', native: 'കർക്കിടകം', transliteration: 'Karkidakam', gregorian: 'Jul - Aug', season: 'Varsha', festival: 'Ramayana Masam, Karkidaka Vavu Bali', phonetics: ['karkidakam', 'കർക്കിടകം', '12'] }
];

export const calendarTraditions = [
  { id: 'gu', name: 'Gujarati (Vikram Samvat)', months: gujaratiMonths },
  { id: 'hi', name: 'Hindi / National (Chaitradi)', months: hindiMonths },
  { id: 'mr', name: 'Marathi (Shalivahana Shaka)', months: marathiMonths },
  { id: 'bn', name: 'Bengali (Bangla Sal)', months: bengaliMonths },
  { id: 'ta', name: 'Tamil (Souramana Solar)', months: tamilMonths },
  { id: 'te', name: 'Telugu (Chandramana)', months: teluguMonths },
  { id: 'kn', name: 'Kannada (Chandramana)', months: kannadaMonths },
  { id: 'ml', name: 'Malayalam (Kollam Era)', months: malayalamMonths }
];

export const getMonthsForLanguage = (langCode: string): MonthItem[] => {
  const match = calendarTraditions.find((t) => t.id === langCode);
  if (match) return match.months;
  if (langCode === 'sa' || langCode === 'pa' || langCode === 'or' || langCode === 'ur') {
    return hindiMonths;
  }
  return hindiMonths;
};
