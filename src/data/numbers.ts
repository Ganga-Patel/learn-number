import type { LanguageCode } from './languages';

export interface LangNumberItem {
  digit: string;
  name: string;
  translit: string;
  phonetics: string[];
}

export interface NumberItem {
  english: number;
  languages: Record<LanguageCode, LangNumberItem>;
  // Backward compatibility fields:
  gujarati: string;
  gujaratiName: string;
  gujaratiTranslit: string;
  hindi: string;
  hindiName: string;
  hindiTranslit: string;
  phonetics: {
    gu: string[];
    hi: string[];
    [key: string]: string[];
  };
}

export const numbersData: NumberItem[] = [
  {
    english: 1,
    gujarati: '૧',
    gujaratiName: 'એક',
    gujaratiTranslit: 'Ek',
    hindi: '१',
    hindiName: 'एक',
    hindiTranslit: 'Ek',
    languages: {
      hi: {
        digit: '१',
        name: 'एक',
        translit: 'Ek',
        phonetics: ["1","१","एक","ek"]
      },
      gu: {
        digit: '૧',
        name: 'એક',
        translit: 'Ek',
        phonetics: ["1","૧","એક","ek"]
      },
      mr: {
        digit: '१',
        name: 'एक',
        translit: 'Ek',
        phonetics: ["1","१","एक","ek"]
      },
      bn: {
        digit: '১',
        name: 'এক',
        translit: 'Ek',
        phonetics: ["1","১","এক","ek"]
      },
      ta: {
        digit: '௧',
        name: 'ஒன்று',
        translit: 'Ondru',
        phonetics: ["1","௧","ஒன்று","ondru"]
      },
      te: {
        digit: '౧',
        name: 'ఒకటి',
        translit: 'Okati',
        phonetics: ["1","౧","ఒకటి","okati"]
      },
      kn: {
        digit: '೧',
        name: 'ಒಂದು',
        translit: 'Ondu',
        phonetics: ["1","೧","ಒಂದು","ondu"]
      },
      ml: {
        digit: '൧',
        name: 'ഒന്ന്',
        translit: 'Onnu',
        phonetics: ["1","൧","ഒന്ന്","onnu"]
      },
      pa: {
        digit: '੧',
        name: 'ਇੱਕ',
        translit: 'Ikk',
        phonetics: ["1","੧","ਇੱਕ","ikk"]
      },
      or: {
        digit: '୧',
        name: 'ଏକ',
        translit: 'Eka',
        phonetics: ["1","୧","ଏକ","eka"]
      },
      sa: {
        digit: '१',
        name: 'एकम्',
        translit: 'Ekam',
        phonetics: ["1","१","एकम्","ekam"]
      },
      ur: {
        digit: '۱',
        name: 'ایک',
        translit: 'Ek',
        phonetics: ["1","۱","ایک","ek"]
      },
    },
    phonetics: {
      gu: ["1","૧","એક","ek"],
      hi: ["1","१","एक","ek"] 
    }
  },
  {
    english: 2,
    gujarati: '૨',
    gujaratiName: 'બે',
    gujaratiTranslit: 'Be',
    hindi: '२',
    hindiName: 'दो',
    hindiTranslit: 'Do',
    languages: {
      hi: {
        digit: '२',
        name: 'दो',
        translit: 'Do',
        phonetics: ["2","२","दो","do"]
      },
      gu: {
        digit: '૨',
        name: 'બે',
        translit: 'Be',
        phonetics: ["2","૨","બે","be"]
      },
      mr: {
        digit: '२',
        name: 'दोन',
        translit: 'Don',
        phonetics: ["2","२","दोन","don"]
      },
      bn: {
        digit: '২',
        name: 'দুই',
        translit: 'Dui',
        phonetics: ["2","২","দুই","dui"]
      },
      ta: {
        digit: '௨',
        name: 'இரண்டு',
        translit: 'Irandu',
        phonetics: ["2","௨","இரண்டு","irandu"]
      },
      te: {
        digit: '౨',
        name: 'రెండు',
        translit: 'Rendu',
        phonetics: ["2","౨","రెండు","rendu"]
      },
      kn: {
        digit: '೨',
        name: 'ಎರಡು',
        translit: 'Eradu',
        phonetics: ["2","೨","ಎರಡು","eradu"]
      },
      ml: {
        digit: '൨',
        name: 'രണ്ട്',
        translit: 'Randu',
        phonetics: ["2","൨","രണ്ട്","randu"]
      },
      pa: {
        digit: '੨',
        name: 'ਦੋ',
        translit: 'Do',
        phonetics: ["2","੨","ਦੋ","do"]
      },
      or: {
        digit: '୨',
        name: 'ଦୁଇ',
        translit: 'Dui',
        phonetics: ["2","୨","ଦୁଇ","dui"]
      },
      sa: {
        digit: '२',
        name: 'द्वे',
        translit: 'Dve',
        phonetics: ["2","२","द्वे","dve"]
      },
      ur: {
        digit: '۲',
        name: 'دو',
        translit: 'Do',
        phonetics: ["2","۲","دو","do"]
      },
    },
    phonetics: {
      gu: ["2","૨","બે","be"],
      hi: ["2","२","दो","do"] 
    }
  },
  {
    english: 3,
    gujarati: '૩',
    gujaratiName: 'ત્રણ',
    gujaratiTranslit: 'Tran',
    hindi: '३',
    hindiName: 'तीन',
    hindiTranslit: 'Teen',
    languages: {
      hi: {
        digit: '३',
        name: 'तीन',
        translit: 'Teen',
        phonetics: ["3","३","तीन","teen","tin"]
      },
      gu: {
        digit: '૩',
        name: 'ત્રણ',
        translit: 'Tran',
        phonetics: ["3","૩","ત્રણ","tran"]
      },
      mr: {
        digit: '३',
        name: 'तीन',
        translit: 'Teen',
        phonetics: ["3","३","तीन","teen","tin"]
      },
      bn: {
        digit: '৩',
        name: 'তিন',
        translit: 'Tin',
        phonetics: ["3","৩","তিন","tin"]
      },
      ta: {
        digit: '௩',
        name: 'மூன்று',
        translit: 'Moondru',
        phonetics: ["3","௩","மூன்று","moondru","mundru"]
      },
      te: {
        digit: '౩',
        name: 'మూడు',
        translit: 'Moodu',
        phonetics: ["3","౩","మూడు","moodu","mudu"]
      },
      kn: {
        digit: '೩',
        name: 'ಮೂರು',
        translit: 'Mooru',
        phonetics: ["3","೩","ಮೂರು","mooru","muru"]
      },
      ml: {
        digit: '൩',
        name: 'മൂന്ന്',
        translit: 'Moonnu',
        phonetics: ["3","൩","മൂന്ന്","moonnu","munnu"]
      },
      pa: {
        digit: '੩',
        name: 'ਤਿੰਨ',
        translit: 'Tinn',
        phonetics: ["3","੩","ਤਿੰਨ","tinn"]
      },
      or: {
        digit: '୩',
        name: 'ତିନି',
        translit: 'Tini',
        phonetics: ["3","୩","ତିନି","tini"]
      },
      sa: {
        digit: '३',
        name: 'त्रीणि',
        translit: 'Treeni',
        phonetics: ["3","३","त्रीणि","treeni","trini"]
      },
      ur: {
        digit: '۳',
        name: 'تین',
        translit: 'Teen',
        phonetics: ["3","۳","تین","teen","tin"]
      },
    },
    phonetics: {
      gu: ["3","૩","ત્રણ","tran"],
      hi: ["3","३","तीन","teen"] 
    }
  },
  {
    english: 4,
    gujarati: '૪',
    gujaratiName: 'ચાર',
    gujaratiTranslit: 'Chaar',
    hindi: '४',
    hindiName: 'चार',
    hindiTranslit: 'Chaar',
    languages: {
      hi: {
        digit: '४',
        name: 'चार',
        translit: 'Chaar',
        phonetics: ["4","४","चार","chaar","char"]
      },
      gu: {
        digit: '૪',
        name: 'ચાર',
        translit: 'Chaar',
        phonetics: ["4","૪","ચાર","chaar","char"]
      },
      mr: {
        digit: '४',
        name: 'चार',
        translit: 'Chaar',
        phonetics: ["4","४","चार","chaar","char"]
      },
      bn: {
        digit: '৪',
        name: 'চার',
        translit: 'Chaar',
        phonetics: ["4","৪","চার","chaar","char"]
      },
      ta: {
        digit: '௪',
        name: 'நான்கு',
        translit: 'Naangu',
        phonetics: ["4","௪","நான்கு","naangu","nangu"]
      },
      te: {
        digit: '౪',
        name: 'నాలుగు',
        translit: 'Naalugu',
        phonetics: ["4","౪","నాలుగు","naalugu","nalugu"]
      },
      kn: {
        digit: '೪',
        name: 'ನಾಲ್ಕು',
        translit: 'Naalku',
        phonetics: ["4","೪","ನಾಲ್ಕು","naalku","nalku"]
      },
      ml: {
        digit: '൪',
        name: 'നാല്',
        translit: 'Naalu',
        phonetics: ["4","൪","നാല്","naalu","nalu"]
      },
      pa: {
        digit: '੪',
        name: 'ਚਾਰ',
        translit: 'Chaar',
        phonetics: ["4","੪","ਚਾਰ","chaar","char"]
      },
      or: {
        digit: '୪',
        name: 'ଚାରି',
        translit: 'Chari',
        phonetics: ["4","୪","ଚାରି","chari"]
      },
      sa: {
        digit: '४',
        name: 'चत्वारि',
        translit: 'Chatvaari',
        phonetics: ["4","४","चत्वारि","chatvaari","chatvari"]
      },
      ur: {
        digit: '۴',
        name: 'چار',
        translit: 'Chaar',
        phonetics: ["4","۴","چار","chaar","char"]
      },
    },
    phonetics: {
      gu: ["4","૪","ચાર","chaar"],
      hi: ["4","४","चार","chaar"] 
    }
  },
  {
    english: 5,
    gujarati: '૫',
    gujaratiName: 'પાંચ',
    gujaratiTranslit: 'Paanch',
    hindi: '५',
    hindiName: 'पाँच',
    hindiTranslit: 'Paanch',
    languages: {
      hi: {
        digit: '५',
        name: 'पाँच',
        translit: 'Paanch',
        phonetics: ["5","५","पाँच","paanch","panch"]
      },
      gu: {
        digit: '૫',
        name: 'પાંચ',
        translit: 'Paanch',
        phonetics: ["5","૫","પાંચ","paanch","panch"]
      },
      mr: {
        digit: '५',
        name: 'पाच',
        translit: 'Paach',
        phonetics: ["5","५","पाच","paach","pach"]
      },
      bn: {
        digit: '৫',
        name: 'পাঁচ',
        translit: 'Pãch',
        phonetics: ["5","৫","পাঁচ","pãch"]
      },
      ta: {
        digit: '௫',
        name: 'ஐந்து',
        translit: 'Ainthu',
        phonetics: ["5","௫","ஐந்து","ainthu"]
      },
      te: {
        digit: '౫',
        name: 'ఐదు',
        translit: 'Aidu',
        phonetics: ["5","౫","ఐదు","aidu"]
      },
      kn: {
        digit: '೫',
        name: 'ಐದು',
        translit: 'Aidu',
        phonetics: ["5","೫","ಐದು","aidu"]
      },
      ml: {
        digit: '൫',
        name: 'അഞ്ച്',
        translit: 'Anchu',
        phonetics: ["5","൫","അഞ്ച്","anchu"]
      },
      pa: {
        digit: '੫',
        name: 'ਪੰਜ',
        translit: 'Panj',
        phonetics: ["5","੫","ਪੰਜ","panj"]
      },
      or: {
        digit: '୫',
        name: 'ପାଞ୍ଚ',
        translit: 'Pancha',
        phonetics: ["5","୫","ପାଞ୍ଚ","pancha"]
      },
      sa: {
        digit: '५',
        name: 'पञ्च',
        translit: 'Pancha',
        phonetics: ["5","५","पञ्च","pancha"]
      },
      ur: {
        digit: '۵',
        name: 'پانچ',
        translit: 'Paanch',
        phonetics: ["5","۵","پانچ","paanch","panch"]
      },
    },
    phonetics: {
      gu: ["5","૫","પાંચ","paanch"],
      hi: ["5","५","पाँच","paanch"] 
    }
  },
  {
    english: 6,
    gujarati: '૬',
    gujaratiName: 'છ',
    gujaratiTranslit: 'Chha',
    hindi: '६',
    hindiName: 'छह',
    hindiTranslit: 'Chhah',
    languages: {
      hi: {
        digit: '६',
        name: 'छह',
        translit: 'Chhah',
        phonetics: ["6","६","छह","chhah"]
      },
      gu: {
        digit: '૬',
        name: 'છ',
        translit: 'Chha',
        phonetics: ["6","૬","છ","chha"]
      },
      mr: {
        digit: '६',
        name: 'सहा',
        translit: 'Saha',
        phonetics: ["6","६","सहा","saha"]
      },
      bn: {
        digit: '৬',
        name: 'ছয়',
        translit: 'Chhoy',
        phonetics: ["6","৬","ছয়","chhoy"]
      },
      ta: {
        digit: '௬',
        name: 'ஆறு',
        translit: 'Aaru',
        phonetics: ["6","௬","ஆறு","aaru","aru"]
      },
      te: {
        digit: '౬',
        name: 'ఆరు',
        translit: 'Aaru',
        phonetics: ["6","౬","ఆరు","aaru","aru"]
      },
      kn: {
        digit: '೬',
        name: 'ಆರು',
        translit: 'Aaru',
        phonetics: ["6","೬","ಆರು","aaru","aru"]
      },
      ml: {
        digit: '൬',
        name: 'ആറ്',
        translit: 'Aaru',
        phonetics: ["6","൬","ആറ്","aaru","aru"]
      },
      pa: {
        digit: '੬',
        name: 'ਛੇ',
        translit: 'Chhe',
        phonetics: ["6","੬","ਛੇ","chhe"]
      },
      or: {
        digit: '୬',
        name: 'ଛଅ',
        translit: 'Chhaa',
        phonetics: ["6","୬","ଛଅ","chhaa","chha"]
      },
      sa: {
        digit: '६',
        name: 'षट्',
        translit: 'Shat',
        phonetics: ["6","६","षट्","shat"]
      },
      ur: {
        digit: '۶',
        name: 'چھ',
        translit: 'Chhey',
        phonetics: ["6","۶","چھ","chhey"]
      },
    },
    phonetics: {
      gu: ["6","૬","છ","chha"],
      hi: ["6","६","छह","chhah"] 
    }
  },
  {
    english: 7,
    gujarati: '૭',
    gujaratiName: 'સાત',
    gujaratiTranslit: 'Saat',
    hindi: '७',
    hindiName: 'सात',
    hindiTranslit: 'Saat',
    languages: {
      hi: {
        digit: '७',
        name: 'सात',
        translit: 'Saat',
        phonetics: ["7","७","सात","saat","sat"]
      },
      gu: {
        digit: '૭',
        name: 'સાત',
        translit: 'Saat',
        phonetics: ["7","૭","સાત","saat","sat"]
      },
      mr: {
        digit: '७',
        name: 'सात',
        translit: 'Saat',
        phonetics: ["7","७","सात","saat","sat"]
      },
      bn: {
        digit: '৭',
        name: 'সাত',
        translit: 'Saat',
        phonetics: ["7","৭","সাত","saat","sat"]
      },
      ta: {
        digit: '௭',
        name: 'ஏழு',
        translit: 'Ezhu',
        phonetics: ["7","௭","ஏழு","ezhu"]
      },
      te: {
        digit: '౭',
        name: 'ఏడు',
        translit: 'Eedu',
        phonetics: ["7","౭","ఏడు","eedu","idu"]
      },
      kn: {
        digit: '೭',
        name: 'ಏಳು',
        translit: 'Eelu',
        phonetics: ["7","೭","ಏಳು","eelu","ilu"]
      },
      ml: {
        digit: '൭',
        name: 'ഏഴ്',
        translit: 'Ezhu',
        phonetics: ["7","൭","ഏഴ്","ezhu"]
      },
      pa: {
        digit: '੭',
        name: 'ਸੱਤ',
        translit: 'Satt',
        phonetics: ["7","੭","ਸੱਤ","satt"]
      },
      or: {
        digit: '୭',
        name: 'ସାତ',
        translit: 'Sata',
        phonetics: ["7","୭","ସାତ","sata"]
      },
      sa: {
        digit: '७',
        name: 'सप्त',
        translit: 'Sapta',
        phonetics: ["7","७","सप्त","sapta"]
      },
      ur: {
        digit: '۷',
        name: 'سات',
        translit: 'Saat',
        phonetics: ["7","۷","سات","saat","sat"]
      },
    },
    phonetics: {
      gu: ["7","૭","સાત","saat"],
      hi: ["7","७","सात","saat"] 
    }
  },
  {
    english: 8,
    gujarati: '૮',
    gujaratiName: 'આઠ',
    gujaratiTranslit: 'Aath',
    hindi: '८',
    hindiName: 'आठ',
    hindiTranslit: 'Aath',
    languages: {
      hi: {
        digit: '८',
        name: 'आठ',
        translit: 'Aath',
        phonetics: ["8","८","आठ","aath","ath"]
      },
      gu: {
        digit: '૮',
        name: 'આઠ',
        translit: 'Aath',
        phonetics: ["8","૮","આઠ","aath","ath"]
      },
      mr: {
        digit: '८',
        name: 'आठ',
        translit: 'Aath',
        phonetics: ["8","८","आठ","aath","ath"]
      },
      bn: {
        digit: '৮',
        name: 'আট',
        translit: 'Aat',
        phonetics: ["8","৮","আট","aat","at"]
      },
      ta: {
        digit: '௮',
        name: 'எட்டு',
        translit: 'Ettu',
        phonetics: ["8","௮","எட்டு","ettu"]
      },
      te: {
        digit: '౮',
        name: 'ఎనిమిది',
        translit: 'Enimidi',
        phonetics: ["8","౮","ఎనిమిది","enimidi"]
      },
      kn: {
        digit: '೮',
        name: 'ಎಂಟು',
        translit: 'Entu',
        phonetics: ["8","೮","ಎಂಟು","entu"]
      },
      ml: {
        digit: '൮',
        name: 'എട്ട്',
        translit: 'Ettu',
        phonetics: ["8","൮","എട്ട്","ettu"]
      },
      pa: {
        digit: '੮',
        name: 'ਅੱਠ',
        translit: 'Atth',
        phonetics: ["8","੮","ਅੱਠ","atth"]
      },
      or: {
        digit: '୮',
        name: 'ଆଠ',
        translit: 'Aatha',
        phonetics: ["8","୮","ଆଠ","aatha","atha"]
      },
      sa: {
        digit: '८',
        name: 'अष्ट',
        translit: 'Ashta',
        phonetics: ["8","८","अष्ट","ashta"]
      },
      ur: {
        digit: '۸',
        name: 'آٹھ',
        translit: 'Aath',
        phonetics: ["8","۸","آٹھ","aath","ath"]
      },
    },
    phonetics: {
      gu: ["8","૮","આઠ","aath"],
      hi: ["8","८","आठ","aath"] 
    }
  },
  {
    english: 9,
    gujarati: '૯',
    gujaratiName: 'નવ',
    gujaratiTranslit: 'Nav',
    hindi: '९',
    hindiName: 'नौ',
    hindiTranslit: 'Nau',
    languages: {
      hi: {
        digit: '९',
        name: 'नौ',
        translit: 'Nau',
        phonetics: ["9","९","नौ","nau"]
      },
      gu: {
        digit: '૯',
        name: 'નવ',
        translit: 'Nav',
        phonetics: ["9","૯","નવ","nav"]
      },
      mr: {
        digit: '९',
        name: 'नऊ',
        translit: 'Naoo',
        phonetics: ["9","९","नऊ","naoo","nau"]
      },
      bn: {
        digit: '৯',
        name: 'নয়',
        translit: 'Noy',
        phonetics: ["9","৯","নয়","noy"]
      },
      ta: {
        digit: '௯',
        name: 'ஒன்பது',
        translit: 'Onbathu',
        phonetics: ["9","௯","ஒன்பது","onbathu"]
      },
      te: {
        digit: '౯',
        name: 'తొమ్మిది',
        translit: 'Tommidi',
        phonetics: ["9","౯","తొమ్మిది","tommidi"]
      },
      kn: {
        digit: '೯',
        name: 'ಒಂಬತ್ತು',
        translit: 'Ombattu',
        phonetics: ["9","೯","ಒಂಬತ್ತು","ombattu"]
      },
      ml: {
        digit: '൯',
        name: 'ഒമ്പത്',
        translit: 'Ombathu',
        phonetics: ["9","൯","ഒമ്പത്","ombathu"]
      },
      pa: {
        digit: '੯',
        name: 'ਨੌਂ',
        translit: 'Nau',
        phonetics: ["9","੯","ਨੌਂ","nau"]
      },
      or: {
        digit: '୯',
        name: 'ନଅ',
        translit: 'Naa',
        phonetics: ["9","୯","ନଅ","naa","na"]
      },
      sa: {
        digit: '९',
        name: 'नव',
        translit: 'Nava',
        phonetics: ["9","९","नव","nava"]
      },
      ur: {
        digit: '۹',
        name: 'نو',
        translit: 'Nau',
        phonetics: ["9","۹","نو","nau"]
      },
    },
    phonetics: {
      gu: ["9","૯","નવ","nav"],
      hi: ["9","९","नौ","nau"] 
    }
  },
  {
    english: 10,
    gujarati: '૧૦',
    gujaratiName: 'દસ',
    gujaratiTranslit: 'Das',
    hindi: '१०',
    hindiName: 'दस',
    hindiTranslit: 'Das',
    languages: {
      hi: {
        digit: '१०',
        name: 'दस',
        translit: 'Das',
        phonetics: ["10","१०","दस","das"]
      },
      gu: {
        digit: '૧૦',
        name: 'દસ',
        translit: 'Das',
        phonetics: ["10","૧૦","દસ","das"]
      },
      mr: {
        digit: '१०',
        name: 'दहा',
        translit: 'Daha',
        phonetics: ["10","१०","दहा","daha"]
      },
      bn: {
        digit: '১০',
        name: 'দশ',
        translit: 'Dosh',
        phonetics: ["10","১০","দশ","dosh"]
      },
      ta: {
        digit: '௧௦',
        name: 'பத்து',
        translit: 'Pathu',
        phonetics: ["10","௧௦","பத்து","pathu"]
      },
      te: {
        digit: '౧౦',
        name: 'పది',
        translit: 'Padi',
        phonetics: ["10","౧౦","పది","padi"]
      },
      kn: {
        digit: '೧೦',
        name: 'ಹತ್ತು',
        translit: 'Hattu',
        phonetics: ["10","೧೦","ಹತ್ತು","hattu"]
      },
      ml: {
        digit: '൧൦',
        name: 'പത്ത്',
        translit: 'Pathu',
        phonetics: ["10","൧൦","പത്ത്","pathu"]
      },
      pa: {
        digit: '੧੦',
        name: 'ਦਸ',
        translit: 'Das',
        phonetics: ["10","੧੦","ਦਸ","das"]
      },
      or: {
        digit: '୧୦',
        name: 'ଦଶ',
        translit: 'Dasha',
        phonetics: ["10","୧୦","ଦଶ","dasha"]
      },
      sa: {
        digit: '१०',
        name: 'दश',
        translit: 'Dasha',
        phonetics: ["10","१०","दश","dasha"]
      },
      ur: {
        digit: '۱۰',
        name: 'دس',
        translit: 'Das',
        phonetics: ["10","۱۰","دس","das"]
      },
    },
    phonetics: {
      gu: ["10","૧૦","દસ","das"],
      hi: ["10","१०","दस","das"] 
    }
  },
  {
    english: 11,
    gujarati: '૧૧',
    gujaratiName: 'અગિયાર',
    gujaratiTranslit: 'Agyaar',
    hindi: '११',
    hindiName: 'ग्यारह',
    hindiTranslit: 'Gyaarah',
    languages: {
      hi: {
        digit: '११',
        name: 'ग्यारह',
        translit: 'Gyaarah',
        phonetics: ["11","११","ग्यारह","gyaarah","gyarah"]
      },
      gu: {
        digit: '૧૧',
        name: 'અગિયાર',
        translit: 'Agyaar',
        phonetics: ["11","૧૧","અગિયાર","agyaar","agyar"]
      },
      mr: {
        digit: '११',
        name: 'अकरा',
        translit: 'Akra',
        phonetics: ["11","११","अकरा","akra"]
      },
      bn: {
        digit: '১১',
        name: 'এগারো',
        translit: 'Egaro',
        phonetics: ["11","১১","এগারো","egaro"]
      },
      ta: {
        digit: '௧௧',
        name: 'பதினொன்று',
        translit: 'Pathinondru',
        phonetics: ["11","௧௧","பதினொன்று","pathinondru"]
      },
      te: {
        digit: '౧౧',
        name: 'పదకొండు',
        translit: 'Padakondu',
        phonetics: ["11","౧౧","పదకొండు","padakondu"]
      },
      kn: {
        digit: '೧೧',
        name: 'ಹನ್ನೊಂದು',
        translit: 'Hannondu',
        phonetics: ["11","೧೧","ಹನ್ನೊಂದು","hannondu"]
      },
      ml: {
        digit: '൧൧',
        name: 'പതിനൊന്ന്',
        translit: 'Pathinonnu',
        phonetics: ["11","൧൧","പതിനൊന്ന്","pathinonnu"]
      },
      pa: {
        digit: '੧੧',
        name: 'ਗਿਆਰਾਂ',
        translit: 'Giaaran',
        phonetics: ["11","੧੧","ਗਿਆਰਾਂ","giaaran","giaran"]
      },
      or: {
        digit: '୧୧',
        name: 'ଏଗାର',
        translit: 'Egara',
        phonetics: ["11","୧୧","ଏଗାର","egara"]
      },
      sa: {
        digit: '११',
        name: 'एकादश',
        translit: 'Ekaadasha',
        phonetics: ["11","११","एकादश","ekaadasha","ekadasha"]
      },
      ur: {
        digit: '۱۱',
        name: 'گیارہ',
        translit: 'Gyaarah',
        phonetics: ["11","۱۱","گیارہ","gyaarah","gyarah"]
      },
    },
    phonetics: {
      gu: ["11","૧૧","અગિયાર","agyaar"],
      hi: ["11","११","ग्यारह","gyaarah"] 
    }
  },
  {
    english: 12,
    gujarati: '૧૨',
    gujaratiName: 'બાર',
    gujaratiTranslit: 'Baar',
    hindi: '१२',
    hindiName: 'बारह',
    hindiTranslit: 'Baarah',
    languages: {
      hi: {
        digit: '१२',
        name: 'बारह',
        translit: 'Baarah',
        phonetics: ["12","१२","बारह","baarah","barah"]
      },
      gu: {
        digit: '૧૨',
        name: 'બાર',
        translit: 'Baar',
        phonetics: ["12","૧૨","બાર","baar","bar"]
      },
      mr: {
        digit: '१२',
        name: 'बारा',
        translit: 'Baara',
        phonetics: ["12","१२","बारा","baara","bara"]
      },
      bn: {
        digit: '১২',
        name: 'বারো',
        translit: 'Baaro',
        phonetics: ["12","১২","বারো","baaro","baro"]
      },
      ta: {
        digit: '௧௨',
        name: 'பன்னிரண்டு',
        translit: 'Pannirandu',
        phonetics: ["12","௧௨","பன்னிரண்டு","pannirandu"]
      },
      te: {
        digit: '౧౨',
        name: 'పన్నెండు',
        translit: 'Pannendu',
        phonetics: ["12","౧౨","పన్నెండు","pannendu"]
      },
      kn: {
        digit: '೧೨',
        name: 'ಹನ್ನೆರಡು',
        translit: 'Hanneradu',
        phonetics: ["12","೧೨","ಹನ್ನೆರಡು","hanneradu"]
      },
      ml: {
        digit: '൧൨',
        name: 'പന്ത്രണ്ട്',
        translit: 'Panthrandu',
        phonetics: ["12","൧൨","പന്ത്രണ്ട്","panthrandu"]
      },
      pa: {
        digit: '੧੨',
        name: 'ਬਾਰਾਂ',
        translit: 'Baaran',
        phonetics: ["12","੧੨","ਬਾਰਾਂ","baaran","baran"]
      },
      or: {
        digit: '୧୨',
        name: 'ବାର',
        translit: 'Bara',
        phonetics: ["12","୧୨","ବାର","bara"]
      },
      sa: {
        digit: '१२',
        name: 'द्वादश',
        translit: 'Dvaadasha',
        phonetics: ["12","१२","द्वादश","dvaadasha","dvadasha"]
      },
      ur: {
        digit: '۱۲',
        name: 'بارہ',
        translit: 'Baarah',
        phonetics: ["12","۱۲","بارہ","baarah","barah"]
      },
    },
    phonetics: {
      gu: ["12","૧૨","બાર","baar"],
      hi: ["12","१२","बारह","baarah"] 
    }
  },
  {
    english: 13,
    gujarati: '૧૩',
    gujaratiName: 'તેર',
    gujaratiTranslit: 'Ter',
    hindi: '१३',
    hindiName: 'तेरह',
    hindiTranslit: 'Terah',
    languages: {
      hi: {
        digit: '१३',
        name: 'तेरह',
        translit: 'Terah',
        phonetics: ["13","१३","तेरह","terah"]
      },
      gu: {
        digit: '૧૩',
        name: 'તેર',
        translit: 'Ter',
        phonetics: ["13","૧૩","તેર","ter"]
      },
      mr: {
        digit: '१३',
        name: 'तेरा',
        translit: 'Tera',
        phonetics: ["13","१३","तेरा","tera"]
      },
      bn: {
        digit: '১৩',
        name: 'তেরো',
        translit: 'Tero',
        phonetics: ["13","১৩","তেরো","tero"]
      },
      ta: {
        digit: '௧௩',
        name: 'பதின்மூன்று',
        translit: 'Pathinmoondru',
        phonetics: ["13","௧௩","பதின்மூன்று","pathinmoondru","pathinmundru"]
      },
      te: {
        digit: '౧౩',
        name: 'పదమూడు',
        translit: 'Padamoodu',
        phonetics: ["13","౧౩","పదమూడు","padamoodu","padamudu"]
      },
      kn: {
        digit: '೧೩',
        name: 'ಹದಿಮೂರು',
        translit: 'Hadimooru',
        phonetics: ["13","೧೩","ಹದಿಮೂರು","hadimooru","hadimuru"]
      },
      ml: {
        digit: '൧൩',
        name: 'പതിമൂന്ന്',
        translit: 'Pathimoonnu',
        phonetics: ["13","൧൩","പതിമൂന്ന്","pathimoonnu","pathimunnu"]
      },
      pa: {
        digit: '੧੩',
        name: 'ਤੇਰਾਂ',
        translit: 'Teran',
        phonetics: ["13","੧੩","ਤੇਰਾਂ","teran"]
      },
      or: {
        digit: '୧୩',
        name: 'ତେର',
        translit: 'Tera',
        phonetics: ["13","୧୩","ତେର","tera"]
      },
      sa: {
        digit: '१३',
        name: 'त्रयोदश',
        translit: 'Trayodasha',
        phonetics: ["13","१३","त्रयोदश","trayodasha"]
      },
      ur: {
        digit: '۱۳',
        name: 'تیرہ',
        translit: 'Terah',
        phonetics: ["13","۱۳","تیرہ","terah"]
      },
    },
    phonetics: {
      gu: ["13","૧૩","તેર","ter"],
      hi: ["13","१३","तेरह","terah"] 
    }
  },
  {
    english: 14,
    gujarati: '૧૪',
    gujaratiName: 'ચૌદ',
    gujaratiTranslit: 'Chaud',
    hindi: '१४',
    hindiName: 'चौदह',
    hindiTranslit: 'Chaudah',
    languages: {
      hi: {
        digit: '१४',
        name: 'चौदह',
        translit: 'Chaudah',
        phonetics: ["14","१४","चौदह","chaudah"]
      },
      gu: {
        digit: '૧૪',
        name: 'ચૌદ',
        translit: 'Chaud',
        phonetics: ["14","૧૪","ચૌદ","chaud"]
      },
      mr: {
        digit: '१४',
        name: 'चौदा',
        translit: 'Chauda',
        phonetics: ["14","१४","चौदा","chauda"]
      },
      bn: {
        digit: '১৪',
        name: 'চৌদ্দ',
        translit: 'Chouddo',
        phonetics: ["14","১৪","চৌদ্দ","chouddo"]
      },
      ta: {
        digit: '௧௪',
        name: 'பதினான்கு',
        translit: 'Pathinaangu',
        phonetics: ["14","௧௪","பதினான்கு","pathinaangu","pathinangu"]
      },
      te: {
        digit: '౧౪',
        name: 'పద్నాలుగు',
        translit: 'Padnaalugu',
        phonetics: ["14","౧౪","పద్నాలుగు","padnaalugu","padnalugu"]
      },
      kn: {
        digit: '೧೪',
        name: 'ಹದಿನಾಲ್ಕು',
        translit: 'Hadinaalku',
        phonetics: ["14","೧೪","ಹದಿನಾಲ್ಕು","hadinaalku","hadinalku"]
      },
      ml: {
        digit: '൧൪',
        name: 'പതിനാല്',
        translit: 'Pathinaalu',
        phonetics: ["14","൧൪","പതിനാല്","pathinaalu","pathinalu"]
      },
      pa: {
        digit: '੧੪',
        name: 'ਚੌਦਾਂ',
        translit: 'Chaudan',
        phonetics: ["14","੧੪","ਚੌਦਾਂ","chaudan"]
      },
      or: {
        digit: '୧୪',
        name: 'ଚଉଦ',
        translit: 'Chauda',
        phonetics: ["14","୧୪","ଚଉଦ","chauda"]
      },
      sa: {
        digit: '१४',
        name: 'चतुर्दश',
        translit: 'Chaturdasha',
        phonetics: ["14","१४","चतुर्दश","chaturdasha"]
      },
      ur: {
        digit: '۱۴',
        name: 'چودہ',
        translit: 'Chaudah',
        phonetics: ["14","۱۴","چودہ","chaudah"]
      },
    },
    phonetics: {
      gu: ["14","૧૪","ચૌદ","chaud"],
      hi: ["14","१४","चौदह","chaudah"] 
    }
  },
  {
    english: 15,
    gujarati: '૧૫',
    gujaratiName: 'પંદર',
    gujaratiTranslit: 'Pandar',
    hindi: '१५',
    hindiName: 'पंद्रह',
    hindiTranslit: 'Pandrah',
    languages: {
      hi: {
        digit: '१५',
        name: 'पंद्रह',
        translit: 'Pandrah',
        phonetics: ["15","१५","पंद्रह","pandrah"]
      },
      gu: {
        digit: '૧૫',
        name: 'પંદર',
        translit: 'Pandar',
        phonetics: ["15","૧૫","પંદર","pandar"]
      },
      mr: {
        digit: '१५',
        name: 'पंधरा',
        translit: 'Pandhra',
        phonetics: ["15","१५","पंधरा","pandhra"]
      },
      bn: {
        digit: '১৫',
        name: 'পনেরো',
        translit: 'Ponero',
        phonetics: ["15","১৫","পনেরো","ponero"]
      },
      ta: {
        digit: '௧௫',
        name: 'பதினைந்து',
        translit: 'Pathinainthu',
        phonetics: ["15","௧௫","பதினைந்து","pathinainthu"]
      },
      te: {
        digit: '౧౫',
        name: 'పదిహేను',
        translit: 'Padihenu',
        phonetics: ["15","౧౫","పదిహేను","padihenu"]
      },
      kn: {
        digit: '೧೫',
        name: 'ಹದಿನೈದು',
        translit: 'Hadinaidu',
        phonetics: ["15","೧೫","ಹದಿನೈದು","hadinaidu"]
      },
      ml: {
        digit: '൧൫',
        name: 'പതിനഞ്ച്',
        translit: 'Pathinanchu',
        phonetics: ["15","൧൫","പതിനഞ്ച്","pathinanchu"]
      },
      pa: {
        digit: '੧੫',
        name: 'ਪੰਦਰਾਂ',
        translit: 'Pandran',
        phonetics: ["15","੧੫","ਪੰਦਰਾਂ","pandran"]
      },
      or: {
        digit: '୧୫',
        name: 'ପନ୍ଦର',
        translit: 'Pandara',
        phonetics: ["15","୧୫","ପନ୍ଦର","pandara"]
      },
      sa: {
        digit: '१५',
        name: 'पञ्चदश',
        translit: 'Panchadasha',
        phonetics: ["15","१५","पञ्चदश","panchadasha"]
      },
      ur: {
        digit: '۱۵',
        name: 'پندرہ',
        translit: 'Pandrah',
        phonetics: ["15","۱۵","پندرہ","pandrah"]
      },
    },
    phonetics: {
      gu: ["15","૧૫","પંદર","pandar"],
      hi: ["15","१५","पंद्रह","pandrah"] 
    }
  },
  {
    english: 16,
    gujarati: '૧૬',
    gujaratiName: 'સોળ',
    gujaratiTranslit: 'Sol',
    hindi: '१६',
    hindiName: 'सोलह',
    hindiTranslit: 'Solah',
    languages: {
      hi: {
        digit: '१६',
        name: 'सोलह',
        translit: 'Solah',
        phonetics: ["16","१६","सोलह","solah"]
      },
      gu: {
        digit: '૧૬',
        name: 'સોળ',
        translit: 'Sol',
        phonetics: ["16","૧૬","સોળ","sol"]
      },
      mr: {
        digit: '१६',
        name: 'सोळा',
        translit: 'Sola',
        phonetics: ["16","१६","सोळा","sola"]
      },
      bn: {
        digit: '১৬',
        name: 'ষোলো',
        translit: 'Sholo',
        phonetics: ["16","১৬","ষোলো","sholo"]
      },
      ta: {
        digit: '௧௬',
        name: 'பதினாறு',
        translit: 'Pathinaaru',
        phonetics: ["16","௧௬","பதினாறு","pathinaaru","pathinaru"]
      },
      te: {
        digit: '౧౬',
        name: 'పదహారు',
        translit: 'Padahaaru',
        phonetics: ["16","౧౬","పదహారు","padahaaru","padaharu"]
      },
      kn: {
        digit: '೧೬',
        name: 'ಹದಿನಾರು',
        translit: 'Hadinaaru',
        phonetics: ["16","೧೬","ಹದಿನಾರು","hadinaaru","hadinaru"]
      },
      ml: {
        digit: '൧൬',
        name: 'പതിനാറ്',
        translit: 'Pathinaaru',
        phonetics: ["16","൧൬","പതിനാറ്","pathinaaru","pathinaru"]
      },
      pa: {
        digit: '੧੬',
        name: 'ਸੋਲਾਂ',
        translit: 'Solan',
        phonetics: ["16","੧੬","ਸੋਲਾਂ","solan"]
      },
      or: {
        digit: '୧୬',
        name: 'ଷୋହଳ',
        translit: 'Sohala',
        phonetics: ["16","୧୬","ଷୋହଳ","sohala"]
      },
      sa: {
        digit: '१६',
        name: 'षोडश',
        translit: 'Shodasha',
        phonetics: ["16","१६","षोडश","shodasha"]
      },
      ur: {
        digit: '۱۶',
        name: 'سولہ',
        translit: 'Solah',
        phonetics: ["16","۱۶","سولہ","solah"]
      },
    },
    phonetics: {
      gu: ["16","૧૬","સોળ","sol"],
      hi: ["16","१६","सोलह","solah"] 
    }
  },
  {
    english: 17,
    gujarati: '૧૭',
    gujaratiName: 'સત્તર',
    gujaratiTranslit: 'Sattar',
    hindi: '१७',
    hindiName: 'सत्रह',
    hindiTranslit: 'Satrah',
    languages: {
      hi: {
        digit: '१७',
        name: 'सत्रह',
        translit: 'Satrah',
        phonetics: ["17","१७","सत्रह","satrah"]
      },
      gu: {
        digit: '૧૭',
        name: 'સત્તર',
        translit: 'Sattar',
        phonetics: ["17","૧૭","સત્તર","sattar"]
      },
      mr: {
        digit: '१७',
        name: 'सतरा',
        translit: 'Satra',
        phonetics: ["17","१७","सतरा","satra"]
      },
      bn: {
        digit: '১৭',
        name: 'সতেরো',
        translit: 'Sotero',
        phonetics: ["17","১৭","সতেরো","sotero"]
      },
      ta: {
        digit: '௧௭',
        name: 'பதினேழு',
        translit: 'Pathinezhu',
        phonetics: ["17","௧௭","பதினேழு","pathinezhu"]
      },
      te: {
        digit: '౧౭',
        name: 'పదిహేడు',
        translit: 'Padiheedu',
        phonetics: ["17","౧౭","పదిహేడు","padiheedu","padihidu"]
      },
      kn: {
        digit: '೧೭',
        name: 'ಹದಿನೇಳು',
        translit: 'Hadineelu',
        phonetics: ["17","೧೭","ಹದಿನೇಳು","hadineelu","hadinilu"]
      },
      ml: {
        digit: '൧൭',
        name: 'പതിനേഴ്',
        translit: 'Pathinezhu',
        phonetics: ["17","൧൭","പതിനേഴ്","pathinezhu"]
      },
      pa: {
        digit: '੧੭',
        name: 'ਸਤਾਰਾਂ',
        translit: 'Sataaran',
        phonetics: ["17","੧੭","ਸਤਾਰਾਂ","sataaran","sataran"]
      },
      or: {
        digit: '୧୭',
        name: 'ସତର',
        translit: 'Satara',
        phonetics: ["17","୧୭","ସତର","satara"]
      },
      sa: {
        digit: '१७',
        name: 'सप्तदश',
        translit: 'Saptadasha',
        phonetics: ["17","१७","सप्तदश","saptadasha"]
      },
      ur: {
        digit: '۱۷',
        name: 'سترہ',
        translit: 'Satrah',
        phonetics: ["17","۱۷","سترہ","satrah"]
      },
    },
    phonetics: {
      gu: ["17","૧૭","સત્તર","sattar"],
      hi: ["17","१७","सत्रह","satrah"] 
    }
  },
  {
    english: 18,
    gujarati: '૧૮',
    gujaratiName: 'અઢાર',
    gujaratiTranslit: 'Adhaar',
    hindi: '१८',
    hindiName: 'अठारह',
    hindiTranslit: 'Athaarah',
    languages: {
      hi: {
        digit: '१८',
        name: 'अठारह',
        translit: 'Athaarah',
        phonetics: ["18","१८","अठारह","athaarah","atharah"]
      },
      gu: {
        digit: '૧૮',
        name: 'અઢાર',
        translit: 'Adhaar',
        phonetics: ["18","૧૮","અઢાર","adhaar","adhar"]
      },
      mr: {
        digit: '१८',
        name: 'अठरा',
        translit: 'Athra',
        phonetics: ["18","१८","अठरा","athra"]
      },
      bn: {
        digit: '১৮',
        name: 'আঠারো',
        translit: 'Aatharo',
        phonetics: ["18","১৮","আঠারো","aatharo","atharo"]
      },
      ta: {
        digit: '௧௮',
        name: 'பதினெட்டு',
        translit: 'Pathinettu',
        phonetics: ["18","௧௮","பதினெட்டு","pathinettu"]
      },
      te: {
        digit: '౧౮',
        name: 'పద్దెనిమిది',
        translit: 'Paddenimidi',
        phonetics: ["18","౧౮","పద్దెనిమిది","paddenimidi"]
      },
      kn: {
        digit: '೧೮',
        name: 'ಹದಿನೆಂಟು',
        translit: 'Hadinentalu',
        phonetics: ["18","೧೮","ಹದಿನೆಂಟು","hadinentalu"]
      },
      ml: {
        digit: '൧൮',
        name: 'പതിനെട്ട്',
        translit: 'Pathinettu',
        phonetics: ["18","൧൮","പതിനെട്ട്","pathinettu"]
      },
      pa: {
        digit: '੧੮',
        name: 'ਅਠਾਰਾਂ',
        translit: 'Athaaran',
        phonetics: ["18","੧੮","ਅਠਾਰਾਂ","athaaran","atharan"]
      },
      or: {
        digit: '୧୮',
        name: 'ଅଠର',
        translit: 'Athara',
        phonetics: ["18","୧୮","ଅଠର","athara"]
      },
      sa: {
        digit: '१८',
        name: 'अष्टादश',
        translit: 'Ashtaadasha',
        phonetics: ["18","१८","अष्टादश","ashtaadasha","ashtadasha"]
      },
      ur: {
        digit: '۱۸',
        name: 'اٹھارہ',
        translit: 'Athaarah',
        phonetics: ["18","۱۸","اٹھارہ","athaarah","atharah"]
      },
    },
    phonetics: {
      gu: ["18","૧૮","અઢાર","adhaar"],
      hi: ["18","१८","अठारह","athaarah"] 
    }
  },
  {
    english: 19,
    gujarati: '૧૯',
    gujaratiName: 'ઓગણીસ',
    gujaratiTranslit: 'Oganees',
    hindi: '१९',
    hindiName: 'उन्नीस',
    hindiTranslit: 'Unnees',
    languages: {
      hi: {
        digit: '१९',
        name: 'उन्नीस',
        translit: 'Unnees',
        phonetics: ["19","१९","उन्नीस","unnees","unnis"]
      },
      gu: {
        digit: '૧૯',
        name: 'ઓગણીસ',
        translit: 'Oganees',
        phonetics: ["19","૧૯","ઓગણીસ","oganees","oganis"]
      },
      mr: {
        digit: '१९',
        name: 'एकोणीस',
        translit: 'Ekonis',
        phonetics: ["19","१९","एकोणीस","ekonis"]
      },
      bn: {
        digit: '১৯',
        name: 'উনিশ',
        translit: 'Unish',
        phonetics: ["19","১৯","উনিশ","unish"]
      },
      ta: {
        digit: '௧௯',
        name: 'பத்தொன்பது',
        translit: 'Pathonbathu',
        phonetics: ["19","௧௯","பத்தொன்பது","pathonbathu"]
      },
      te: {
        digit: '౧౯',
        name: 'పందొమ్మిది',
        translit: 'Pandommidi',
        phonetics: ["19","౧౯","పందొమ్మిది","pandommidi"]
      },
      kn: {
        digit: '೧೯',
        name: 'ಹತ್ತೊಂಬತ್ತು',
        translit: 'Hattombattu',
        phonetics: ["19","೧೯","ಹತ್ತೊಂಬತ್ತು","hattombattu"]
      },
      ml: {
        digit: '൧൯',
        name: 'പത്തൊമ്പത്',
        translit: 'Pathombathu',
        phonetics: ["19","൧൯","പത്തൊമ്പത്","pathombathu"]
      },
      pa: {
        digit: '੧੯',
        name: 'ਉੱਨੀ',
        translit: 'Unni',
        phonetics: ["19","੧੯","ਉੱਨੀ","unni"]
      },
      or: {
        digit: '୧୯',
        name: 'ଉଣାଇଶ',
        translit: 'Unaisa',
        phonetics: ["19","୧୯","ଉଣାଇଶ","unaisa"]
      },
      sa: {
        digit: '१९',
        name: 'नवदश',
        translit: 'Navadasha',
        phonetics: ["19","१९","नवदश","navadasha"]
      },
      ur: {
        digit: '۱۹',
        name: 'انیس',
        translit: 'Unnees',
        phonetics: ["19","۱۹","انیس","unnees","unnis"]
      },
    },
    phonetics: {
      gu: ["19","૧૯","ઓગણીસ","oganees"],
      hi: ["19","१९","उन्नीस","unnees"] 
    }
  },
  {
    english: 20,
    gujarati: '૨૦',
    gujaratiName: 'વીસ',
    gujaratiTranslit: 'Vees',
    hindi: '२०',
    hindiName: 'बीस',
    hindiTranslit: 'Bees',
    languages: {
      hi: {
        digit: '२०',
        name: 'बीस',
        translit: 'Bees',
        phonetics: ["20","२०","बीस","bees","bis"]
      },
      gu: {
        digit: '૨૦',
        name: 'વીસ',
        translit: 'Vees',
        phonetics: ["20","૨૦","વીસ","vees","vis"]
      },
      mr: {
        digit: '२०',
        name: 'वीस',
        translit: 'Vees',
        phonetics: ["20","२०","वीस","vees","vis"]
      },
      bn: {
        digit: '২০',
        name: 'বিশ',
        translit: 'Bish',
        phonetics: ["20","২০","বিশ","bish"]
      },
      ta: {
        digit: '௨௦',
        name: 'இருபது',
        translit: 'Irubathu',
        phonetics: ["20","௨௦","இருபது","irubathu"]
      },
      te: {
        digit: '౨౦',
        name: 'ఇరవై',
        translit: 'Iravai',
        phonetics: ["20","౨౦","ఇరవై","iravai"]
      },
      kn: {
        digit: '೨೦',
        name: 'ಇಪ್ಪತ್ತು',
        translit: 'Ippattu',
        phonetics: ["20","೨೦","ಇಪ್ಪತ್ತು","ippattu"]
      },
      ml: {
        digit: '൨൦',
        name: 'ഇരുപത്',
        translit: 'Irupathu',
        phonetics: ["20","൨൦","ഇരുപത്","irupathu"]
      },
      pa: {
        digit: '੨੦',
        name: 'ਵੀਹ',
        translit: 'Veeh',
        phonetics: ["20","੨੦","ਵੀਹ","veeh","vih"]
      },
      or: {
        digit: '୨୦',
        name: 'କୋଡ଼ିଏ',
        translit: 'Kodie',
        phonetics: ["20","୨୦","କୋଡ଼ିଏ","kodie"]
      },
      sa: {
        digit: '२०',
        name: 'विंशतिः',
        translit: 'Vimshatih',
        phonetics: ["20","२०","विंशतिः","vimshatih"]
      },
      ur: {
        digit: '۲۰',
        name: 'بیس',
        translit: 'Bees',
        phonetics: ["20","۲۰","بیس","bees","bis"]
      },
    },
    phonetics: {
      gu: ["20","૨૦","વીસ","vees"],
      hi: ["20","२०","बीस","bees"] 
    }
  },
  {
    english: 21,
    gujarati: '૨૧',
    gujaratiName: 'એકવીસ',
    gujaratiTranslit: 'Ekvees',
    hindi: '२१',
    hindiName: 'इक्कीस',
    hindiTranslit: 'Ikkees',
    languages: {
      hi: {
        digit: '२१',
        name: 'इक्कीस',
        translit: 'Ikkees',
        phonetics: ["21","२१","इक्कीस","ikkees","ikkis"]
      },
      gu: {
        digit: '૨૧',
        name: 'એકવીસ',
        translit: 'Ekvees',
        phonetics: ["21","૨૧","એકવીસ","ekvees","ekvis"]
      },
      mr: {
        digit: '२१',
        name: 'एकवीस',
        translit: 'Ekvees',
        phonetics: ["21","२१","एकवीस","ekvees","ekvis"]
      },
      bn: {
        digit: '২১',
        name: 'একুশ',
        translit: 'Ekuish',
        phonetics: ["21","২১","একুশ","ekuish"]
      },
      ta: {
        digit: '௨௧',
        name: 'இருபத்தொன்று',
        translit: 'Irubathondru',
        phonetics: ["21","௨௧","இருபத்தொன்று","irubathondru"]
      },
      te: {
        digit: '౨౧',
        name: 'ఇరవై ఒకటి',
        translit: 'Iravai Okati',
        phonetics: ["21","౨౧","ఇరవై ఒకటి","iravai okati"]
      },
      kn: {
        digit: '೨೧',
        name: 'ಇಪ್ಪತ್ತೊಂದು',
        translit: 'Ippattondu',
        phonetics: ["21","೨೧","ಇಪ್ಪತ್ತೊಂದು","ippattondu"]
      },
      ml: {
        digit: '൨൧',
        name: 'ഇരുപത്തൊന്ന്',
        translit: 'Irupathonnu',
        phonetics: ["21","൨൧","ഇരുപത്തൊന്ന്","irupathonnu"]
      },
      pa: {
        digit: '੨੧',
        name: 'ਇੱਕੀ',
        translit: 'Ikki',
        phonetics: ["21","੨੧","ਇੱਕੀ","ikki"]
      },
      or: {
        digit: '୨୧',
        name: 'ଏକୋଇଶି',
        translit: 'Ekoisi',
        phonetics: ["21","୨୧","ଏକୋଇଶି","ekoisi"]
      },
      sa: {
        digit: '२१',
        name: 'एकविंशतिः',
        translit: 'Ekavimshatih',
        phonetics: ["21","२१","एकविंशतिः","ekavimshatih"]
      },
      ur: {
        digit: '۲۱',
        name: 'اکیس',
        translit: 'Ikkees',
        phonetics: ["21","۲۱","اکیس","ikkees","ikkis"]
      },
    },
    phonetics: {
      gu: ["21","૨૧","એકવીસ","ekvees"],
      hi: ["21","२१","इक्कीस","ikkees"] 
    }
  },
  {
    english: 22,
    gujarati: '૨૨',
    gujaratiName: 'બાવીસ',
    gujaratiTranslit: 'Baavees',
    hindi: '२२',
    hindiName: 'बाईस',
    hindiTranslit: 'Baees',
    languages: {
      hi: {
        digit: '२२',
        name: 'बाईस',
        translit: 'Baees',
        phonetics: ["22","२२","बाईस","baees","bais"]
      },
      gu: {
        digit: '૨૨',
        name: 'બાવીસ',
        translit: 'Baavees',
        phonetics: ["22","૨૨","બાવીસ","baavees","bavis"]
      },
      mr: {
        digit: '२२',
        name: 'बावीस',
        translit: 'Baavees',
        phonetics: ["22","२२","बावीस","baavees","bavis"]
      },
      bn: {
        digit: '২২',
        name: 'বাইশ',
        translit: 'Baish',
        phonetics: ["22","২২","বাইশ","baish"]
      },
      ta: {
        digit: '௨௨',
        name: 'இருபத்திரண்டு',
        translit: 'Irubathirandu',
        phonetics: ["22","௨௨","இருபத்திரண்டு","irubathirandu"]
      },
      te: {
        digit: '౨౨',
        name: 'ఇరవై రెండు',
        translit: 'Iravai Rendu',
        phonetics: ["22","౨౨","ఇరవై రెండు","iravai rendu"]
      },
      kn: {
        digit: '೨೨',
        name: 'ಇಪ್ಪತ್ತೆರಡು',
        translit: 'Ippatteradu',
        phonetics: ["22","೨೨","ಇಪ್ಪತ್ತೆರಡು","ippatteradu"]
      },
      ml: {
        digit: '൨൨',
        name: 'ഇരുപത്തിരണ്ട്',
        translit: 'Irupathirandu',
        phonetics: ["22","൨൨","ഇരുപത്തിരണ്ട്","irupathirandu"]
      },
      pa: {
        digit: '੨੨',
        name: 'ਬਾਈ',
        translit: 'Baai',
        phonetics: ["22","੨੨","ਬਾਈ","baai","bai"]
      },
      or: {
        digit: '୨୨',
        name: 'ବାଇଶି',
        translit: 'Baisi',
        phonetics: ["22","୨୨","ବାଇଶି","baisi"]
      },
      sa: {
        digit: '२२',
        name: 'द्वाविंशतिः',
        translit: 'Dvaavimshatih',
        phonetics: ["22","२२","द्वाविंशतिः","dvaavimshatih","dvavimshatih"]
      },
      ur: {
        digit: '۲۲',
        name: 'بائیس',
        translit: 'Baees',
        phonetics: ["22","۲۲","بائیس","baees","bais"]
      },
    },
    phonetics: {
      gu: ["22","૨૨","બાવીસ","baavees"],
      hi: ["22","२२","बाईस","baees"] 
    }
  },
  {
    english: 23,
    gujarati: '૨૩',
    gujaratiName: 'તેવીસ',
    gujaratiTranslit: 'Tevees',
    hindi: '२३',
    hindiName: 'तेईस',
    hindiTranslit: 'Te-ees',
    languages: {
      hi: {
        digit: '२३',
        name: 'तेईस',
        translit: 'Te-ees',
        phonetics: ["23","२३","तेईस","te-ees","teis"]
      },
      gu: {
        digit: '૨૩',
        name: 'તેવીસ',
        translit: 'Tevees',
        phonetics: ["23","૨૩","તેવીસ","tevees","tevis"]
      },
      mr: {
        digit: '२३',
        name: 'तेवीस',
        translit: 'Tevees',
        phonetics: ["23","२३","तेवीस","tevees","tevis"]
      },
      bn: {
        digit: '২৩',
        name: 'তেইশ',
        translit: 'Teish',
        phonetics: ["23","২৩","তেইশ","teish"]
      },
      ta: {
        digit: '௨௩',
        name: 'இருபத்துமூன்று',
        translit: 'Irubathumoondru',
        phonetics: ["23","௨௩","இருபத்துமூன்று","irubathumoondru","irubathumundru"]
      },
      te: {
        digit: '౨౩',
        name: 'ఇరవై మూడు',
        translit: 'Iravai Moodu',
        phonetics: ["23","౨౩","ఇరవై మూడు","iravai moodu","iravai mudu"]
      },
      kn: {
        digit: '೨೩',
        name: 'ಇಪ್ಪತ್ತಮೂರು',
        translit: 'Ippattmooru',
        phonetics: ["23","೨೩","ಇಪ್ಪತ್ತಮೂರು","ippattmooru","ippattmuru"]
      },
      ml: {
        digit: '൨൩',
        name: 'ഇരുപത്തിമൂന്ന്',
        translit: 'Irupathimoonnu',
        phonetics: ["23","൨൩","ഇരുപത്തിമൂന്ന്","irupathimoonnu","irupathimunnu"]
      },
      pa: {
        digit: '੨੩',
        name: 'ਤੇਈ',
        translit: 'Teei',
        phonetics: ["23","੨੩","ਤੇਈ","teei","tii"]
      },
      or: {
        digit: '୨୩',
        name: 'ତେଇଶି',
        translit: 'Teisi',
        phonetics: ["23","୨୩","ତେଇଶି","teisi"]
      },
      sa: {
        digit: '२३',
        name: 'त्रयोविंशतिः',
        translit: 'Trayovimshatih',
        phonetics: ["23","२३","त्रयोविंशतिः","trayovimshatih"]
      },
      ur: {
        digit: '۲۳',
        name: 'تیئیس',
        translit: 'Te-ees',
        phonetics: ["23","۲۳","تیئیس","te-ees","teis"]
      },
    },
    phonetics: {
      gu: ["23","૨૩","તેવીસ","tevees"],
      hi: ["23","२३","तेईस","te-ees"] 
    }
  },
  {
    english: 24,
    gujarati: '૨૪',
    gujaratiName: 'ચોવીસ',
    gujaratiTranslit: 'Chovees',
    hindi: '२४',
    hindiName: 'चौबीस',
    hindiTranslit: 'Chaubees',
    languages: {
      hi: {
        digit: '२४',
        name: 'चौबीस',
        translit: 'Chaubees',
        phonetics: ["24","२४","चौबीस","chaubees","chaubis"]
      },
      gu: {
        digit: '૨૪',
        name: 'ચોવીસ',
        translit: 'Chovees',
        phonetics: ["24","૨૪","ચોવીસ","chovees","chovis"]
      },
      mr: {
        digit: '२४',
        name: 'चोवीस',
        translit: 'Chovees',
        phonetics: ["24","२४","चोवीस","chovees","chovis"]
      },
      bn: {
        digit: '২৪',
        name: 'চব্বিশ',
        translit: 'Chobbish',
        phonetics: ["24","২৪","চব্বিশ","chobbish"]
      },
      ta: {
        digit: '௨௪',
        name: 'இருபத்துநான்கு',
        translit: 'Irubathunaangu',
        phonetics: ["24","௨௪","இருபத்துநான்கு","irubathunaangu","irubathunangu"]
      },
      te: {
        digit: '౨౪',
        name: 'ఇరవై నాలుగు',
        translit: 'Iravai Naalugu',
        phonetics: ["24","౨౪","ఇరవై నాలుగు","iravai naalugu","iravai nalugu"]
      },
      kn: {
        digit: '೨೪',
        name: 'ಇಪ್ಪತ್ತನಾಲ್ಕು',
        translit: 'Ippattnaalku',
        phonetics: ["24","೨೪","ಇಪ್ಪತ್ತನಾಲ್ಕು","ippattnaalku","ippattnalku"]
      },
      ml: {
        digit: '൨൪',
        name: 'ഇരുപത്തിനാല്',
        translit: 'Irupathinaalu',
        phonetics: ["24","൨൪","ഇരുപത്തിനാല്","irupathinaalu","irupathinalu"]
      },
      pa: {
        digit: '੨੪',
        name: 'ਚੌਵੀ',
        translit: 'Chauvi',
        phonetics: ["24","੨੪","ਚੌਵੀ","chauvi"]
      },
      or: {
        digit: '୨୪',
        name: 'ଚବିଶି',
        translit: 'Chabisi',
        phonetics: ["24","୨୪","ଚବିଶି","chabisi"]
      },
      sa: {
        digit: '२४',
        name: 'चतुर्विंशतिः',
        translit: 'Chaturvimshatih',
        phonetics: ["24","२४","चतुर्विंशतिः","chaturvimshatih"]
      },
      ur: {
        digit: '۲۴',
        name: 'چوبیس',
        translit: 'Chaubees',
        phonetics: ["24","۲۴","چوبیس","chaubees","chaubis"]
      },
    },
    phonetics: {
      gu: ["24","૨૪","ચોવીસ","chovees"],
      hi: ["24","२४","चौबीस","chaubees"] 
    }
  },
  {
    english: 25,
    gujarati: '૨૫',
    gujaratiName: 'પચીસ',
    gujaratiTranslit: 'Pachees',
    hindi: '२५',
    hindiName: 'पच्चीस',
    hindiTranslit: 'Pachchees',
    languages: {
      hi: {
        digit: '२५',
        name: 'पच्चीस',
        translit: 'Pachchees',
        phonetics: ["25","२५","पच्चीस","pachchees","pachchis"]
      },
      gu: {
        digit: '૨૫',
        name: 'પચીસ',
        translit: 'Pachees',
        phonetics: ["25","૨૫","પચીસ","pachees","pachis"]
      },
      mr: {
        digit: '२५',
        name: 'पंचवीस',
        translit: 'Panchvees',
        phonetics: ["25","२५","पंचवीस","panchvees","panchvis"]
      },
      bn: {
        digit: '২৫',
        name: 'পঁচিশ',
        translit: 'Põchish',
        phonetics: ["25","২৫","পঁচিশ","põchish"]
      },
      ta: {
        digit: '௨௫',
        name: 'இருபத்தைந்து',
        translit: 'Irubathainthu',
        phonetics: ["25","௨௫","இருபத்தைந்து","irubathainthu"]
      },
      te: {
        digit: '౨౫',
        name: 'ఇరవై ఐదు',
        translit: 'Iravai Aidu',
        phonetics: ["25","౨౫","ఇరవై ఐదు","iravai aidu"]
      },
      kn: {
        digit: '೨೫',
        name: 'ಇಪ್ಪತ್ತೈದು',
        translit: 'Ippattaidu',
        phonetics: ["25","೨೫","ಇಪ್ಪತ್ತೈದು","ippattaidu"]
      },
      ml: {
        digit: '൨൫',
        name: 'ഇരുപത്തഞ്ച്',
        translit: 'Irupathanchu',
        phonetics: ["25","൨൫","ഇരുപത്തഞ്ച്","irupathanchu"]
      },
      pa: {
        digit: '੨੫',
        name: 'ਪੱਚੀ',
        translit: 'Pachchi',
        phonetics: ["25","੨੫","ਪੱਚੀ","pachchi"]
      },
      or: {
        digit: '୨୫',
        name: 'ପଚିଶି',
        translit: 'Pachisi',
        phonetics: ["25","୨୫","ପଚିଶି","pachisi"]
      },
      sa: {
        digit: '२५',
        name: 'पञ्चविंशतिः',
        translit: 'Panchavimshatih',
        phonetics: ["25","२५","पञ्चविंशतिः","panchavimshatih"]
      },
      ur: {
        digit: '۲۵',
        name: 'پچیس',
        translit: 'Pachchees',
        phonetics: ["25","۲۵","پچیس","pachchees","pachchis"]
      },
    },
    phonetics: {
      gu: ["25","૨૫","પચીસ","pachees"],
      hi: ["25","२५","पच्चीस","pachchees"] 
    }
  },
  {
    english: 26,
    gujarati: '૨૬',
    gujaratiName: 'છવ્વીસ',
    gujaratiTranslit: 'Chhavvees',
    hindi: '२६',
    hindiName: 'छब्बीस',
    hindiTranslit: 'Chhabbees',
    languages: {
      hi: {
        digit: '२६',
        name: 'छब्बीस',
        translit: 'Chhabbees',
        phonetics: ["26","२६","छब्बीस","chhabbees","chhabbis"]
      },
      gu: {
        digit: '૨૬',
        name: 'છવ્વીસ',
        translit: 'Chhavvees',
        phonetics: ["26","૨૬","છવ્વીસ","chhavvees","chhavvis"]
      },
      mr: {
        digit: '२६',
        name: 'सव्वीस',
        translit: 'Savvees',
        phonetics: ["26","२६","सव्वीस","savvees","savvis"]
      },
      bn: {
        digit: '২৬',
        name: 'ছাব্বিশ',
        translit: 'Chhabbish',
        phonetics: ["26","২৬","ছাব্বিশ","chhabbish"]
      },
      ta: {
        digit: '௨௬',
        name: 'இருபத்தாறு',
        translit: 'Irubathaaru',
        phonetics: ["26","௨௬","இருபத்தாறு","irubathaaru","irubatharu"]
      },
      te: {
        digit: '౨౬',
        name: 'ఇరవై ఆరు',
        translit: 'Iravai Aaru',
        phonetics: ["26","౨౬","ఇరవై ఆరు","iravai aaru","iravai aru"]
      },
      kn: {
        digit: '೨೬',
        name: 'ಇಪ್ಪತ್ತಾರು',
        translit: 'Ippattaaru',
        phonetics: ["26","೨೬","ಇಪ್ಪತ್ತಾರು","ippattaaru","ippattaru"]
      },
      ml: {
        digit: '൨൬',
        name: 'ഇരുപത്താറ്',
        translit: 'Irupathaaru',
        phonetics: ["26","൨൬","ഇരുപത്താറ്","irupathaaru","irupatharu"]
      },
      pa: {
        digit: '੨੬',
        name: 'ਛੱਬੀ',
        translit: 'Chhabbi',
        phonetics: ["26","੨੬","ਛੱਬੀ","chhabbi"]
      },
      or: {
        digit: '୨୬',
        name: 'ଛବିଶି',
        translit: 'Chhabisi',
        phonetics: ["26","୨୬","ଛବିଶି","chhabisi"]
      },
      sa: {
        digit: '२६',
        name: 'षड्विंशतिः',
        translit: 'Shadvimshatih',
        phonetics: ["26","२६","षड्विंशतिः","shadvimshatih"]
      },
      ur: {
        digit: '۲۶',
        name: 'چھبیس',
        translit: 'Chhabbees',
        phonetics: ["26","۲۶","چھبیس","chhabbees","chhabbis"]
      },
    },
    phonetics: {
      gu: ["26","૨૬","છવ્વીસ","chhavvees"],
      hi: ["26","२६","छब्बीस","chhabbees"] 
    }
  },
  {
    english: 27,
    gujarati: '૨૭',
    gujaratiName: 'સત્તાવીસ',
    gujaratiTranslit: 'Sattaavees',
    hindi: '२७',
    hindiName: 'सत्ताईस',
    hindiTranslit: 'Sattaaees',
    languages: {
      hi: {
        digit: '२७',
        name: 'सत्ताईस',
        translit: 'Sattaaees',
        phonetics: ["27","२७","सत्ताईस","sattaaees","sattais"]
      },
      gu: {
        digit: '૨૭',
        name: 'સત્તાવીસ',
        translit: 'Sattaavees',
        phonetics: ["27","૨૭","સત્તાવીસ","sattaavees","sattavis"]
      },
      mr: {
        digit: '२७',
        name: 'सत्तावीस',
        translit: 'Sattavees',
        phonetics: ["27","२७","सत्तावीस","sattavees","sattavis"]
      },
      bn: {
        digit: '২৭',
        name: 'সাতাশ',
        translit: 'Sataash',
        phonetics: ["27","২৭","সাতাশ","sataash","satash"]
      },
      ta: {
        digit: '௨௭',
        name: 'இருபத்தேழு',
        translit: 'Irubathezhu',
        phonetics: ["27","௨௭","இருபத்தேழு","irubathezhu"]
      },
      te: {
        digit: '౨౭',
        name: 'ఇరవై ఏడు',
        translit: 'Iravai Eedu',
        phonetics: ["27","౨౭","ఇరవై ఏడు","iravai eedu","iravai idu"]
      },
      kn: {
        digit: '೨೭',
        name: 'ಇಪ್ಪತ್ತೇಳು',
        translit: 'Ippatteelu',
        phonetics: ["27","೨೭","ಇಪ್ಪತ್ತೇಳು","ippatteelu","ippattilu"]
      },
      ml: {
        digit: '൨൭',
        name: 'ഇരുപത്തേഴ്',
        translit: 'Irupathezhu',
        phonetics: ["27","൨൭","ഇരുപത്തേഴ്","irupathezhu"]
      },
      pa: {
        digit: '੨੭',
        name: 'ਸਤਾਈ',
        translit: 'Sataai',
        phonetics: ["27","੨੭","ਸਤਾਈ","sataai","satai"]
      },
      or: {
        digit: '୨୭',
        name: 'ସତାଇଶି',
        translit: 'Sataisi',
        phonetics: ["27","୨୭","ସତାଇଶି","sataisi"]
      },
      sa: {
        digit: '२७',
        name: 'सप्तविंशतिः',
        translit: 'Saptavimshatih',
        phonetics: ["27","२७","सप्तविंशतिः","saptavimshatih"]
      },
      ur: {
        digit: '۲۷',
        name: 'ستائیس',
        translit: 'Sattaaees',
        phonetics: ["27","۲۷","ستائیس","sattaaees","sattais"]
      },
    },
    phonetics: {
      gu: ["27","૨૭","સત્તાવીસ","sattaavees"],
      hi: ["27","२७","सत्ताईस","sattaaees"] 
    }
  },
  {
    english: 28,
    gujarati: '૨૮',
    gujaratiName: 'અઠ્ઠાવીસ',
    gujaratiTranslit: 'Atthaavees',
    hindi: '२८',
    hindiName: 'अट्ठाईस',
    hindiTranslit: 'Atthaaees',
    languages: {
      hi: {
        digit: '२८',
        name: 'अट्ठाईस',
        translit: 'Atthaaees',
        phonetics: ["28","२८","अट्ठाईस","atthaaees","atthais"]
      },
      gu: {
        digit: '૨૮',
        name: 'અઠ્ઠાવીસ',
        translit: 'Atthaavees',
        phonetics: ["28","૨૮","અઠ્ઠાવીસ","atthaavees","atthavis"]
      },
      mr: {
        digit: '२८',
        name: 'अठ्ठावीस',
        translit: 'Atthaavees',
        phonetics: ["28","२८","अठ्ठावीस","atthaavees","atthavis"]
      },
      bn: {
        digit: '২৮',
        name: 'আটাশ',
        translit: 'Ataash',
        phonetics: ["28","২৮","আটাশ","ataash","atash"]
      },
      ta: {
        digit: '௨௮',
        name: 'இருபத்தெட்டு',
        translit: 'Irubathettu',
        phonetics: ["28","௨௮","இருபத்தெட்டு","irubathettu"]
      },
      te: {
        digit: '౨౮',
        name: 'ఇరవై ఎనిమిది',
        translit: 'Iravai Enimidi',
        phonetics: ["28","౨౮","ఇరవై ఎనిమిది","iravai enimidi"]
      },
      kn: {
        digit: '೨೮',
        name: 'ಇಪ್ಪತ್ತೆಂಟು',
        translit: 'Ippattentu',
        phonetics: ["28","೨೮","ಇಪ್ಪತ್ತೆಂಟು","ippattentu"]
      },
      ml: {
        digit: '൨൮',
        name: 'ഇരുപത്തെട്ട്',
        translit: 'Irupathettu',
        phonetics: ["28","൨൮","ഇരുപത്തെട്ട്","irupathettu"]
      },
      pa: {
        digit: '੨੮',
        name: 'ਅਠਾਈ',
        translit: 'Athaai',
        phonetics: ["28","੨੮","ਅਠਾਈ","athaai","athai"]
      },
      or: {
        digit: '୨୮',
        name: 'ଅଠାଇଶି',
        translit: 'Athaisi',
        phonetics: ["28","୨୮","ଅଠାଇଶି","athaisi"]
      },
      sa: {
        digit: '२८',
        name: 'अष्टाविंशतिः',
        translit: 'Ashtaavimshatih',
        phonetics: ["28","२८","अष्टाविंशतिः","ashtaavimshatih","ashtavimshatih"]
      },
      ur: {
        digit: '۲۸',
        name: 'اٹھائیس',
        translit: 'Atthaaees',
        phonetics: ["28","۲۸","اٹھائیس","atthaaees","atthais"]
      },
    },
    phonetics: {
      gu: ["28","૨૮","અઠ્ઠાવીસ","atthaavees"],
      hi: ["28","२८","अट्ठाईस","atthaaees"] 
    }
  },
  {
    english: 29,
    gujarati: '૨૯',
    gujaratiName: 'ઓગણત્રીસ',
    gujaratiTranslit: 'Ogantrees',
    hindi: '२९',
    hindiName: 'उनतीस',
    hindiTranslit: 'Untees',
    languages: {
      hi: {
        digit: '२९',
        name: 'उनतीस',
        translit: 'Untees',
        phonetics: ["29","२९","उनतीस","untees","untis"]
      },
      gu: {
        digit: '૨૯',
        name: 'ઓગણત્રીસ',
        translit: 'Ogantrees',
        phonetics: ["29","૨૯","ઓગણત્રીસ","ogantrees","ogantris"]
      },
      mr: {
        digit: '२९',
        name: 'एकोणतीस',
        translit: 'Ekontis',
        phonetics: ["29","२९","एकोणतीस","ekontis"]
      },
      bn: {
        digit: '২৯',
        name: 'উনত্রিশ',
        translit: 'Unotrish',
        phonetics: ["29","২৯","উনত্রিশ","unotrish"]
      },
      ta: {
        digit: '௨௯',
        name: 'இருபத்தொன்பது',
        translit: 'Irubathonbathu',
        phonetics: ["29","௨௯","இருபத்தொன்பது","irubathonbathu"]
      },
      te: {
        digit: '౨౯',
        name: 'ఇరవై తొమ్మిది',
        translit: 'Iravai Tommidi',
        phonetics: ["29","౨౯","ఇరవై తొమ్మిది","iravai tommidi"]
      },
      kn: {
        digit: '೨೯',
        name: 'ಇಪ್ಪತ್ತೊಂಬತ್ತು',
        translit: 'Ippattombattu',
        phonetics: ["29","೨೯","ಇಪ್ಪತ್ತೊಂಬತ್ತು","ippattombattu"]
      },
      ml: {
        digit: '൨൯',
        name: 'ഇരുപത്തൊമ്പത്',
        translit: 'Irupathombathu',
        phonetics: ["29","൨൯","ഇരുപത്തൊമ്പത്","irupathombathu"]
      },
      pa: {
        digit: '੨੯',
        name: 'ਉਨੱਤੀ',
        translit: 'Unatti',
        phonetics: ["29","੨੯","ਉਨੱਤੀ","unatti"]
      },
      or: {
        digit: '୨୯',
        name: 'ଅଣତିରିଶି',
        translit: 'Anatirisi',
        phonetics: ["29","୨୯","ଅଣତିରିଶି","anatirisi"]
      },
      sa: {
        digit: '२९',
        name: 'एकोनत्रिंशत्',
        translit: 'Ekonatrimshat',
        phonetics: ["29","२९","एकोनत्रिंशत्","ekonatrimshat"]
      },
      ur: {
        digit: '۲۹',
        name: 'انتیس',
        translit: 'Untees',
        phonetics: ["29","۲۹","انتیس","untees","untis"]
      },
    },
    phonetics: {
      gu: ["29","૨૯","ઓગણત્રીસ","ogantrees"],
      hi: ["29","२९","उनतीस","untees"] 
    }
  },
  {
    english: 30,
    gujarati: '૩૦',
    gujaratiName: 'ત્રીસ',
    gujaratiTranslit: 'Trees',
    hindi: '३०',
    hindiName: 'तीस',
    hindiTranslit: 'Tees',
    languages: {
      hi: {
        digit: '३०',
        name: 'तीस',
        translit: 'Tees',
        phonetics: ["30","३०","तीस","tees","tis"]
      },
      gu: {
        digit: '૩૦',
        name: 'ત્રીસ',
        translit: 'Trees',
        phonetics: ["30","૩૦","ત્રીસ","trees","tris"]
      },
      mr: {
        digit: '३०',
        name: 'तीस',
        translit: 'Tees',
        phonetics: ["30","३०","तीस","tees","tis"]
      },
      bn: {
        digit: '৩০',
        name: 'ত্রিশ',
        translit: 'Trish',
        phonetics: ["30","৩০","ত্রিশ","trish"]
      },
      ta: {
        digit: '௩௦',
        name: 'முப்பது',
        translit: 'Muppathu',
        phonetics: ["30","௩௦","முப்பது","muppathu"]
      },
      te: {
        digit: '౩౦',
        name: 'ముప్పై',
        translit: 'Muppai',
        phonetics: ["30","౩౦","ముప్పై","muppai"]
      },
      kn: {
        digit: '೩೦',
        name: 'ಮೂವತ್ತು',
        translit: 'Moovattu',
        phonetics: ["30","೩೦","ಮೂವತ್ತು","moovattu","muvattu"]
      },
      ml: {
        digit: '൩൦',
        name: 'മുപ്പത്',
        translit: 'Muppathu',
        phonetics: ["30","൩൦","മുപ്പത്","muppathu"]
      },
      pa: {
        digit: '੩੦',
        name: 'ਤੀਹ',
        translit: 'Teeh',
        phonetics: ["30","੩੦","ਤੀਹ","teeh","tih"]
      },
      or: {
        digit: '୩୦',
        name: 'ତିରିଶ',
        translit: 'Tirisha',
        phonetics: ["30","୩୦","ତିରିଶ","tirisha"]
      },
      sa: {
        digit: '३०',
        name: 'त्रिंशत्',
        translit: 'Trimshat',
        phonetics: ["30","३०","त्रिंशत्","trimshat"]
      },
      ur: {
        digit: '۳۰',
        name: 'تیس',
        translit: 'Tees',
        phonetics: ["30","۳۰","تیس","tees","tis"]
      },
    },
    phonetics: {
      gu: ["30","૩૦","ત્રીસ","trees"],
      hi: ["30","३०","तीस","tees"] 
    }
  },
  {
    english: 31,
    gujarati: '૩૧',
    gujaratiName: 'એકત્રીસ',
    gujaratiTranslit: 'Ekatrees',
    hindi: '३१',
    hindiName: 'इकतीस',
    hindiTranslit: 'Iktees',
    languages: {
      hi: {
        digit: '३१',
        name: 'इकतीस',
        translit: 'Iktees',
        phonetics: ["31","३१","इकतीस","iktees","iktis"]
      },
      gu: {
        digit: '૩૧',
        name: 'એકત્રીસ',
        translit: 'Ekatrees',
        phonetics: ["31","૩૧","એકત્રીસ","ekatrees","ekatris"]
      },
      mr: {
        digit: '३१',
        name: 'एकतीस',
        translit: 'Ektees',
        phonetics: ["31","३१","एकतीस","ektees","ektis"]
      },
      bn: {
        digit: '৩১',
        name: 'একত্রিশ',
        translit: 'Ekotrish',
        phonetics: ["31","৩১","একত্রিশ","ekotrish"]
      },
      ta: {
        digit: '௩௧',
        name: 'முப்பத்தொன்று',
        translit: 'Muppathondru',
        phonetics: ["31","௩௧","முப்பத்தொன்று","muppathondru"]
      },
      te: {
        digit: '౩౧',
        name: 'ముప్పై ఒకటి',
        translit: 'Muppai Okati',
        phonetics: ["31","౩౧","ముప్పై ఒకటి","muppai okati"]
      },
      kn: {
        digit: '೩೧',
        name: 'ಮೂವತ್ತೊಂದು',
        translit: 'Moovattondu',
        phonetics: ["31","೩೧","ಮೂವತ್ತೊಂದು","moovattondu","muvattondu"]
      },
      ml: {
        digit: '൩൧',
        name: 'മുപ്പത്തൊന്ന്',
        translit: 'Muppathonnu',
        phonetics: ["31","൩൧","മുപ്പത്തൊന്ന്","muppathonnu"]
      },
      pa: {
        digit: '੩੧',
        name: 'ਇਕੱਤੀ',
        translit: 'Ikatti',
        phonetics: ["31","੩੧","ਇਕੱਤੀ","ikatti"]
      },
      or: {
        digit: '୩୧',
        name: 'ଏକତିରିଶି',
        translit: 'Ekatirisi',
        phonetics: ["31","୩୧","ଏକତିରିଶି","ekatirisi"]
      },
      sa: {
        digit: '३१',
        name: 'एकत्रिंशत्',
        translit: 'Ekatrimshat',
        phonetics: ["31","३१","एकत्रिंशत्","ekatrimshat"]
      },
      ur: {
        digit: '۳۱',
        name: 'اکتیس',
        translit: 'Iktees',
        phonetics: ["31","۳۱","اکتیس","iktees","iktis"]
      },
    },
    phonetics: {
      gu: ["31","૩૧","એકત્રીસ","ekatrees"],
      hi: ["31","३१","इकतीस","iktees"] 
    }
  },
  {
    english: 32,
    gujarati: '૩૨',
    gujaratiName: 'બત્રીસ',
    gujaratiTranslit: 'Batrees',
    hindi: '३२',
    hindiName: 'बत्तीस',
    hindiTranslit: 'Battees',
    languages: {
      hi: {
        digit: '३२',
        name: 'बत्तीस',
        translit: 'Battees',
        phonetics: ["32","३२","बत्तीस","battees","battis"]
      },
      gu: {
        digit: '૩૨',
        name: 'બત્રીસ',
        translit: 'Batrees',
        phonetics: ["32","૩૨","બત્રીસ","batrees","batris"]
      },
      mr: {
        digit: '३२',
        name: 'बत्तीस',
        translit: 'Battees',
        phonetics: ["32","३२","बत्तीस","battees","battis"]
      },
      bn: {
        digit: '৩২',
        name: 'বত্রিশ',
        translit: 'Botrish',
        phonetics: ["32","৩২","বত্রিশ","botrish"]
      },
      ta: {
        digit: '௩௨',
        name: 'முப்பத்திரண்டு',
        translit: 'Muppathirandu',
        phonetics: ["32","௩௨","முப்பத்திரண்டு","muppathirandu"]
      },
      te: {
        digit: '౩౨',
        name: 'ముప్పై రెండు',
        translit: 'Muppai Rendu',
        phonetics: ["32","౩౨","ముప్పై రెండు","muppai rendu"]
      },
      kn: {
        digit: '೩೨',
        name: 'ಮೂವತ್ತೆರಡು',
        translit: 'Moovatteradu',
        phonetics: ["32","೩೨","ಮೂವತ್ತೆರಡು","moovatteradu","muvatteradu"]
      },
      ml: {
        digit: '൩൨',
        name: 'മുപ്പത്തിരണ്ട്',
        translit: 'Muppathirandu',
        phonetics: ["32","൩൨","മുപ്പത്തിരണ്ട്","muppathirandu"]
      },
      pa: {
        digit: '੩੨',
        name: 'ਬੱਤੀ',
        translit: 'Batti',
        phonetics: ["32","੩੨","ਬੱਤੀ","batti"]
      },
      or: {
        digit: '୩୨',
        name: 'ବତିଶି',
        translit: 'Batisi',
        phonetics: ["32","୩୨","ବତିଶି","batisi"]
      },
      sa: {
        digit: '३२',
        name: 'द्वात्रिंशत्',
        translit: 'Dvaatrimshat',
        phonetics: ["32","३२","द्वात्रिंशत्","dvaatrimshat","dvatrimshat"]
      },
      ur: {
        digit: '۳۲',
        name: 'بتیس',
        translit: 'Battees',
        phonetics: ["32","۳۲","بتیس","battees","battis"]
      },
    },
    phonetics: {
      gu: ["32","૩૨","બત્રીસ","batrees"],
      hi: ["32","३२","बत्तीस","battees"] 
    }
  },
  {
    english: 33,
    gujarati: '૩૩',
    gujaratiName: 'તેત્રીસ',
    gujaratiTranslit: 'Tetrees',
    hindi: '३३',
    hindiName: 'तैंतीस',
    hindiTranslit: 'Taintees',
    languages: {
      hi: {
        digit: '३३',
        name: 'तैंतीस',
        translit: 'Taintees',
        phonetics: ["33","३३","तैंतीस","taintees","taintis"]
      },
      gu: {
        digit: '૩૩',
        name: 'તેત્રીસ',
        translit: 'Tetrees',
        phonetics: ["33","૩૩","તેત્રીસ","tetrees","tetris"]
      },
      mr: {
        digit: '३३',
        name: 'तेहेतीस',
        translit: 'Teheteeso',
        phonetics: ["33","३३","तेहेतीस","teheteeso","tehetiso"]
      },
      bn: {
        digit: '৩৩',
        name: 'তেত্রিশ',
        translit: 'Tetrish',
        phonetics: ["33","৩৩","তেত্রিশ","tetrish"]
      },
      ta: {
        digit: '௩௩',
        name: 'முப்பத்துமூன்று',
        translit: 'Muppathumoondru',
        phonetics: ["33","௩௩","முப்பத்துமூன்று","muppathumoondru","muppathumundru"]
      },
      te: {
        digit: '౩౩',
        name: 'ముప్పై మూడు',
        translit: 'Muppai Moodu',
        phonetics: ["33","౩౩","ముప్పై మూడు","muppai moodu","muppai mudu"]
      },
      kn: {
        digit: '೩೩',
        name: 'ಮೂವತ್ತಮೂರು',
        translit: 'Moovattmooru',
        phonetics: ["33","೩೩","ಮೂವತ್ತಮೂರು","moovattmooru","muvattmuru"]
      },
      ml: {
        digit: '൩൩',
        name: 'മുപ്പത്തിമൂന്ന്',
        translit: 'Muppathimoonnu',
        phonetics: ["33","൩൩","മുപ്പത്തിമൂന്ന്","muppathimoonnu","muppathimunnu"]
      },
      pa: {
        digit: '੩੩',
        name: 'ਤੇਂਤੀ',
        translit: 'Teinti',
        phonetics: ["33","੩੩","ਤੇਂਤੀ","teinti"]
      },
      or: {
        digit: '୩୩',
        name: 'ତେତିରିଶି',
        translit: 'Tetirisi',
        phonetics: ["33","୩୩","ତେତିରିଶି","tetirisi"]
      },
      sa: {
        digit: '३३',
        name: 'त्रयस्त्रिंशत्',
        translit: 'Trayastrimshat',
        phonetics: ["33","३३","त्रयस्त्रिंशत्","trayastrimshat"]
      },
      ur: {
        digit: '۳۳',
        name: 'تینتیس',
        translit: 'Taintees',
        phonetics: ["33","۳۳","تینتیس","taintees","taintis"]
      },
    },
    phonetics: {
      gu: ["33","૩૩","તેત્રીસ","tetrees"],
      hi: ["33","३३","तैंतीस","taintees"] 
    }
  },
  {
    english: 34,
    gujarati: '૩૪',
    gujaratiName: 'ચોત્રીસ',
    gujaratiTranslit: 'Chotrees',
    hindi: '३४',
    hindiName: 'चौंतीस',
    hindiTranslit: 'Chauntees',
    languages: {
      hi: {
        digit: '३४',
        name: 'चौंतीस',
        translit: 'Chauntees',
        phonetics: ["34","३४","चौंतीस","chauntees","chauntis"]
      },
      gu: {
        digit: '૩૪',
        name: 'ચોત્રીસ',
        translit: 'Chotrees',
        phonetics: ["34","૩૪","ચોત્રીસ","chotrees","chotris"]
      },
      mr: {
        digit: '३४',
        name: 'चौतीस',
        translit: 'Chautees',
        phonetics: ["34","३४","चौतीस","chautees","chautis"]
      },
      bn: {
        digit: '৩৪',
        name: 'চৌত্রিশ',
        translit: 'Choutrish',
        phonetics: ["34","৩৪","চৌত্রিশ","choutrish"]
      },
      ta: {
        digit: '௩௪',
        name: 'முப்பத்துநான்கு',
        translit: 'Muppathunaangu',
        phonetics: ["34","௩௪","முப்பத்துநான்கு","muppathunaangu","muppathunangu"]
      },
      te: {
        digit: '౩౪',
        name: 'ముప్పై నాలుగు',
        translit: 'Muppai Naalugu',
        phonetics: ["34","౩౪","ముప్పై నాలుగు","muppai naalugu","muppai nalugu"]
      },
      kn: {
        digit: '೩೪',
        name: 'ಮೂವತ್ತನಾಲ್ಕು',
        translit: 'Moovattnaalku',
        phonetics: ["34","೩೪","ಮೂವತ್ತನಾಲ್ಕು","moovattnaalku","muvattnalku"]
      },
      ml: {
        digit: '൩൪',
        name: 'മുപ്പത്തിനാല്',
        translit: 'Muppathinaalu',
        phonetics: ["34","൩൪","മുപ്പത്തിനാല്","muppathinaalu","muppathinalu"]
      },
      pa: {
        digit: '੩੪',
        name: 'ਚੌਂਤੀ',
        translit: 'Chaunti',
        phonetics: ["34","੩੪","ਚੌਂਤੀ","chaunti"]
      },
      or: {
        digit: '୩୪',
        name: 'ଚଉତିରିଶି',
        translit: 'Chautirisi',
        phonetics: ["34","୩୪","ଚଉତିରିଶି","chautirisi"]
      },
      sa: {
        digit: '३४',
        name: 'चतुस्त्रिंशत्',
        translit: 'Chatustrimshat',
        phonetics: ["34","३४","चतुस्त्रिंशत्","chatustrimshat"]
      },
      ur: {
        digit: '۳۴',
        name: 'چونتیس',
        translit: 'Chauntees',
        phonetics: ["34","۳۴","چونتیس","chauntees","chauntis"]
      },
    },
    phonetics: {
      gu: ["34","૩૪","ચોત્રીસ","chotrees"],
      hi: ["34","३४","चौंतीस","chauntees"] 
    }
  },
  {
    english: 35,
    gujarati: '૩૫',
    gujaratiName: 'પાંત્રીસ',
    gujaratiTranslit: 'Paantrees',
    hindi: '३५',
    hindiName: 'पैंतीस',
    hindiTranslit: 'Paintees',
    languages: {
      hi: {
        digit: '३५',
        name: 'पैंतीस',
        translit: 'Paintees',
        phonetics: ["35","३५","पैंतीस","paintees","paintis"]
      },
      gu: {
        digit: '૩૫',
        name: 'પાંત્રીસ',
        translit: 'Paantrees',
        phonetics: ["35","૩૫","પાંત્રીસ","paantrees","pantris"]
      },
      mr: {
        digit: '३५',
        name: 'पस्तीस',
        translit: 'Pastees',
        phonetics: ["35","३५","पस्तीस","pastees","pastis"]
      },
      bn: {
        digit: '৩৫',
        name: 'পঁয়ত্রিশ',
        translit: 'Põyotrish',
        phonetics: ["35","৩৫","পঁয়ত্রিশ","põyotrish"]
      },
      ta: {
        digit: '௩௫',
        name: 'முப்பத்தைந்து',
        translit: 'Muppathainthu',
        phonetics: ["35","௩௫","முப்பத்தைந்து","muppathainthu"]
      },
      te: {
        digit: '౩౫',
        name: 'ముప్పై ఐదు',
        translit: 'Muppai Aidu',
        phonetics: ["35","౩౫","ముప్పై ఐదు","muppai aidu"]
      },
      kn: {
        digit: '೩೫',
        name: 'ಮೂವತ್ತೈದು',
        translit: 'Moovattaidu',
        phonetics: ["35","೩೫","ಮೂವತ್ತೈದು","moovattaidu","muvattaidu"]
      },
      ml: {
        digit: '൩൫',
        name: 'മുപ്പത്തഞ്ച്',
        translit: 'Muppathanchu',
        phonetics: ["35","൩൫","മുപ്പത്തഞ്ച്","muppathanchu"]
      },
      pa: {
        digit: '੩੫',
        name: 'ਪੈਂਤੀ',
        translit: 'Painti',
        phonetics: ["35","੩੫","ਪੈਂਤੀ","painti"]
      },
      or: {
        digit: '୩୫',
        name: 'ପଇଁତିରିଶି',
        translit: 'Pãitirisi',
        phonetics: ["35","୩୫","ପଇଁତିରିଶି","pãitirisi"]
      },
      sa: {
        digit: '३५',
        name: 'पञ्चत्रिंशत्',
        translit: 'Panchatrimshat',
        phonetics: ["35","३५","पञ्चत्रिंशत्","panchatrimshat"]
      },
      ur: {
        digit: '۳۵',
        name: 'پینتیس',
        translit: 'Paintees',
        phonetics: ["35","۳۵","پینتیس","paintees","paintis"]
      },
    },
    phonetics: {
      gu: ["35","૩૫","પાંત્રીસ","paantrees"],
      hi: ["35","३५","पैंतीस","paintees"] 
    }
  },
  {
    english: 36,
    gujarati: '૩૬',
    gujaratiName: 'છત્રીસ',
    gujaratiTranslit: 'Chhatrees',
    hindi: '३६',
    hindiName: 'छत्तीस',
    hindiTranslit: 'Chhattees',
    languages: {
      hi: {
        digit: '३६',
        name: 'छत्तीस',
        translit: 'Chhattees',
        phonetics: ["36","३६","छत्तीस","chhattees","chhattis"]
      },
      gu: {
        digit: '૩૬',
        name: 'છત્રીસ',
        translit: 'Chhatrees',
        phonetics: ["36","૩૬","છત્રીસ","chhatrees","chhatris"]
      },
      mr: {
        digit: '३६',
        name: 'छत्तीस',
        translit: 'Chhattees',
        phonetics: ["36","३६","छत्तीस","chhattees","chhattis"]
      },
      bn: {
        digit: '৩৬',
        name: 'ছত্রিশ',
        translit: 'Chhotrish',
        phonetics: ["36","৩৬","ছত্রিশ","chhotrish"]
      },
      ta: {
        digit: '௩௬',
        name: 'முப்பத்தாறு',
        translit: 'Muppathaaru',
        phonetics: ["36","௩௬","முப்பத்தாறு","muppathaaru","muppatharu"]
      },
      te: {
        digit: '౩౬',
        name: 'ముప్పై ఆరు',
        translit: 'Muppai Aaru',
        phonetics: ["36","౩౬","ముప్పై ఆరు","muppai aaru","muppai aru"]
      },
      kn: {
        digit: '೩೬',
        name: 'ಮೂವತ್ತಾರು',
        translit: 'Moovattaaru',
        phonetics: ["36","೩೬","ಮೂವತ್ತಾರು","moovattaaru","muvattaru"]
      },
      ml: {
        digit: '൩൬',
        name: 'മുപ്പത്താറ്',
        translit: 'Muppathaaru',
        phonetics: ["36","൩൬","മുപ്പത്താറ്","muppathaaru","muppatharu"]
      },
      pa: {
        digit: '੩੬',
        name: 'ਛੱਤੀ',
        translit: 'Chhatti',
        phonetics: ["36","੩੬","ਛੱਤੀ","chhatti"]
      },
      or: {
        digit: '୩୬',
        name: 'ଛତିଶି',
        translit: 'Chhatisi',
        phonetics: ["36","୩୬","ଛତିଶି","chhatisi"]
      },
      sa: {
        digit: '३६',
        name: 'षट्त्रिंशत्',
        translit: 'Shat-trimshat',
        phonetics: ["36","३६","षट्त्रिंशत्","shat-trimshat","shattrimshat"]
      },
      ur: {
        digit: '۳۶',
        name: 'چھتیس',
        translit: 'Chhattees',
        phonetics: ["36","۳۶","چھتیس","chhattees","chhattis"]
      },
    },
    phonetics: {
      gu: ["36","૩૬","છત્રીસ","chhatrees"],
      hi: ["36","३६","छत्तीस","chhattees"] 
    }
  },
  {
    english: 37,
    gujarati: '૩૭',
    gujaratiName: 'સાડત્રીસ',
    gujaratiTranslit: 'Saadtrees',
    hindi: '३७',
    hindiName: 'सैंतीस',
    hindiTranslit: 'Saintees',
    languages: {
      hi: {
        digit: '३७',
        name: 'सैंतीस',
        translit: 'Saintees',
        phonetics: ["37","३७","सैंतीस","saintees","saintis"]
      },
      gu: {
        digit: '૩૭',
        name: 'સાડત્રીસ',
        translit: 'Saadtrees',
        phonetics: ["37","૩૭","સાડત્રીસ","saadtrees","sadtris"]
      },
      mr: {
        digit: '३७',
        name: 'सदतीस',
        translit: 'Sadtees',
        phonetics: ["37","३७","सदतीस","sadtees","sadtis"]
      },
      bn: {
        digit: '৩৭',
        name: 'সাঁইত্রিশ',
        translit: 'Sãitrish',
        phonetics: ["37","৩৭","সাঁইত্রিশ","sãitrish"]
      },
      ta: {
        digit: '௩௭',
        name: 'முப்பத்தேழு',
        translit: 'Muppathezhu',
        phonetics: ["37","௩௭","முப்பத்தேழு","muppathezhu"]
      },
      te: {
        digit: '౩౭',
        name: 'ముప్పై ఏడు',
        translit: 'Muppai Eedu',
        phonetics: ["37","౩౭","ముప్పై ఏడు","muppai eedu","muppai idu"]
      },
      kn: {
        digit: '೩೭',
        name: 'ಮೂವತ್ತೇಳು',
        translit: 'Moovatteelu',
        phonetics: ["37","೩೭","ಮೂವತ್ತೇಳು","moovatteelu","muvattilu"]
      },
      ml: {
        digit: '൩൭',
        name: 'മുപ്പത്തേഴ്',
        translit: 'Muppathezhu',
        phonetics: ["37","൩൭","മുപ്പത്തേഴ്","muppathezhu"]
      },
      pa: {
        digit: '੩੭',
        name: 'ਸੈਂਤੀ',
        translit: 'Sainti',
        phonetics: ["37","੩੭","ਸੈਂਤੀ","sainti"]
      },
      or: {
        digit: '୩୭',
        name: 'ସଇଁତିରିଶି',
        translit: 'Sãitirisi',
        phonetics: ["37","୩୭","ସଇଁତିରିଶି","sãitirisi"]
      },
      sa: {
        digit: '३७',
        name: 'सप्तत्रिंशत्',
        translit: 'Saptatrimshat',
        phonetics: ["37","३७","सप्तत्रिंशत्","saptatrimshat"]
      },
      ur: {
        digit: '۳۷',
        name: 'سینتیس',
        translit: 'Saintees',
        phonetics: ["37","۳۷","سینتیس","saintees","saintis"]
      },
    },
    phonetics: {
      gu: ["37","૩૭","સાડત્રીસ","saadtrees"],
      hi: ["37","३७","सैंतीस","saintees"] 
    }
  },
  {
    english: 38,
    gujarati: '૩૮',
    gujaratiName: 'આડત્રીસ',
    gujaratiTranslit: 'Aadtrees',
    hindi: '३८',
    hindiName: 'अड़तीस',
    hindiTranslit: 'Adtees',
    languages: {
      hi: {
        digit: '३८',
        name: 'अड़तीस',
        translit: 'Adtees',
        phonetics: ["38","३८","अड़तीस","adtees","adtis"]
      },
      gu: {
        digit: '૩૮',
        name: 'આડત્રીસ',
        translit: 'Aadtrees',
        phonetics: ["38","૩૮","આડત્રીસ","aadtrees","adtris"]
      },
      mr: {
        digit: '३८',
        name: 'अडतीस',
        translit: 'Adtees',
        phonetics: ["38","३८","अडतीस","adtees","adtis"]
      },
      bn: {
        digit: '৩৮',
        name: 'আটত্রিশ',
        translit: 'Attrotish',
        phonetics: ["38","৩৮","আটত্রিশ","attrotish"]
      },
      ta: {
        digit: '௩௮',
        name: 'முப்பத்தெட்டு',
        translit: 'Muppathettu',
        phonetics: ["38","௩௮","முப்பத்தெட்டு","muppathettu"]
      },
      te: {
        digit: '౩౮',
        name: 'ముప్పై ఎనిమిది',
        translit: 'Muppai Enimidi',
        phonetics: ["38","౩౮","ముప్పై ఎనిమిది","muppai enimidi"]
      },
      kn: {
        digit: '೩೮',
        name: 'ಮೂವತ್ತೆಂಟು',
        translit: 'Moovattentu',
        phonetics: ["38","೩೮","ಮೂವತ್ತೆಂಟು","moovattentu","muvattentu"]
      },
      ml: {
        digit: '൩൮',
        name: 'മുപ്പത്തെട്ട്',
        translit: 'Muppathettu',
        phonetics: ["38","൩൮","മുപ്പത്തെട്ട്","muppathettu"]
      },
      pa: {
        digit: '੩੮',
        name: 'ਅਠੱਤੀ',
        translit: 'Athatti',
        phonetics: ["38","੩੮","ਅਠੱਤੀ","athatti"]
      },
      or: {
        digit: '୩୮',
        name: 'ଅଠତିରିଶି',
        translit: 'Athattirisi',
        phonetics: ["38","୩୮","ଅଠତିରିଶି","athattirisi"]
      },
      sa: {
        digit: '३८',
        name: 'अष्टात्रिंशत्',
        translit: 'Ashtaatrimshat',
        phonetics: ["38","३८","अष्टात्रिंशत्","ashtaatrimshat","ashtatrimshat"]
      },
      ur: {
        digit: '۳۸',
        name: 'اڑتیس',
        translit: 'Adtees',
        phonetics: ["38","۳۸","اڑتیس","adtees","adtis"]
      },
    },
    phonetics: {
      gu: ["38","૩૮","આડત્રીસ","aadtrees"],
      hi: ["38","३८","अड़तीस","adtees"] 
    }
  },
  {
    english: 39,
    gujarati: '૩૯',
    gujaratiName: 'ઓગણચાલીસ',
    gujaratiTranslit: 'Oganchaalees',
    hindi: '३९',
    hindiName: 'उनतालीस',
    hindiTranslit: 'Untaalees',
    languages: {
      hi: {
        digit: '३९',
        name: 'उनतालीस',
        translit: 'Untaalees',
        phonetics: ["39","३९","उनतालीस","untaalees","untalis"]
      },
      gu: {
        digit: '૩૯',
        name: 'ઓગણચાલીસ',
        translit: 'Oganchaalees',
        phonetics: ["39","૩૯","ઓગણચાલીસ","oganchaalees","oganchalis"]
      },
      mr: {
        digit: '३९',
        name: 'एकोणचाळीस',
        translit: 'Ekonchaalees',
        phonetics: ["39","३९","एकोणचाळीस","ekonchaalees","ekonchalis"]
      },
      bn: {
        digit: '৩৯',
        name: 'উনচল্লিশ',
        translit: 'Unochollish',
        phonetics: ["39","৩৯","উনচল্লিশ","unochollish"]
      },
      ta: {
        digit: '௩௯',
        name: 'முப்பத்தொன்பது',
        translit: 'Muppathonbathu',
        phonetics: ["39","௩௯","முப்பத்தொன்பது","muppathonbathu"]
      },
      te: {
        digit: '౩౯',
        name: 'ముప్పై తొమ్మిది',
        translit: 'Muppai Tommidi',
        phonetics: ["39","౩౯","ముప్పై తొమ్మిది","muppai tommidi"]
      },
      kn: {
        digit: '೩೯',
        name: 'ಮೂವತ್ತೊಂಬತ್ತು',
        translit: 'Moovattombattu',
        phonetics: ["39","೩೯","ಮೂವತ್ತೊಂಬತ್ತು","moovattombattu","muvattombattu"]
      },
      ml: {
        digit: '൩൯',
        name: 'മുപ്പത്തൊമ്പത്',
        translit: 'Muppathombathu',
        phonetics: ["39","൩൯","മുപ്പത്തൊമ്പത്","muppathombathu"]
      },
      pa: {
        digit: '੩੯',
        name: 'ਉਨਤਾਲੀ',
        translit: 'Untaali',
        phonetics: ["39","੩੯","ਉਨਤਾਲੀ","untaali","untali"]
      },
      or: {
        digit: '୩୯',
        name: 'ଅଣଚାଳିଶି',
        translit: 'Anachaalisi',
        phonetics: ["39","୩୯","ଅଣଚାଳିଶି","anachaalisi","anachalisi"]
      },
      sa: {
        digit: '३९',
        name: 'एकोनचत्वारिंशत्',
        translit: 'Ekonachatvaarimshat',
        phonetics: ["39","३९","एकोनचत्वारिंशत्","ekonachatvaarimshat","ekonachatvarimshat"]
      },
      ur: {
        digit: '۳۹',
        name: 'انتالیس',
        translit: 'Untaalees',
        phonetics: ["39","۳۹","انتالیس","untaalees","untalis"]
      },
    },
    phonetics: {
      gu: ["39","૩૯","ઓગણચાલીસ","oganchaalees"],
      hi: ["39","३९","उनतालीस","untaalees"] 
    }
  },
  {
    english: 40,
    gujarati: '૪૦',
    gujaratiName: 'ચાલીસ',
    gujaratiTranslit: 'Chaalees',
    hindi: '४०',
    hindiName: 'चालीस',
    hindiTranslit: 'Chaalees',
    languages: {
      hi: {
        digit: '४०',
        name: 'चालीस',
        translit: 'Chaalees',
        phonetics: ["40","४०","चालीस","chaalees","chalis"]
      },
      gu: {
        digit: '૪૦',
        name: 'ચાલીસ',
        translit: 'Chaalees',
        phonetics: ["40","૪૦","ચાલીસ","chaalees","chalis"]
      },
      mr: {
        digit: '४०',
        name: 'चाळीस',
        translit: 'Chaalees',
        phonetics: ["40","४०","चाळीस","chaalees","chalis"]
      },
      bn: {
        digit: '৪০',
        name: 'চল্লিশ',
        translit: 'Chollish',
        phonetics: ["40","৪০","চল্লিশ","chollish"]
      },
      ta: {
        digit: '௪௦',
        name: 'நாற்பது',
        translit: 'Naarpathu',
        phonetics: ["40","௪௦","நாற்பது","naarpathu","narpathu"]
      },
      te: {
        digit: '౪౦',
        name: 'నలభై',
        translit: 'Nalabhai',
        phonetics: ["40","౪౦","నలభై","nalabhai"]
      },
      kn: {
        digit: '೪೦',
        name: 'ನಲವತ್ತು',
        translit: 'Nalavattu',
        phonetics: ["40","೪೦","ನಲವತ್ತು","nalavattu"]
      },
      ml: {
        digit: '൪൦',
        name: 'നാൽപത്',
        translit: 'Naalpathu',
        phonetics: ["40","൪൦","നാൽപത്","naalpathu","nalpathu"]
      },
      pa: {
        digit: '੪੦',
        name: 'ਚਾਲੀ',
        translit: 'Chaali',
        phonetics: ["40","੪੦","ਚਾਲੀ","chaali","chali"]
      },
      or: {
        digit: '୪୦',
        name: 'ଚାଳିଶ',
        translit: 'Chaalisha',
        phonetics: ["40","୪୦","ଚାଳିଶ","chaalisha","chalisha"]
      },
      sa: {
        digit: '४०',
        name: 'चत्वारिंशत्',
        translit: 'Chatvaarimshat',
        phonetics: ["40","४०","चत्वारिंशत्","chatvaarimshat","chatvarimshat"]
      },
      ur: {
        digit: '۴۰',
        name: 'چالیس',
        translit: 'Chaalees',
        phonetics: ["40","۴۰","چالیس","chaalees","chalis"]
      },
    },
    phonetics: {
      gu: ["40","૪૦","ચાલીસ","chaalees"],
      hi: ["40","४०","चालीस","chaalees"] 
    }
  },
  {
    english: 41,
    gujarati: '૪૧',
    gujaratiName: 'એકતાલીસ',
    gujaratiTranslit: 'Ektaalees',
    hindi: '४१',
    hindiName: 'इकतालीस',
    hindiTranslit: 'Iktaalees',
    languages: {
      hi: {
        digit: '४१',
        name: 'इकतालीस',
        translit: 'Iktaalees',
        phonetics: ["41","४१","इकतालीस","iktaalees","iktalis"]
      },
      gu: {
        digit: '૪૧',
        name: 'એકતાલીસ',
        translit: 'Ektaalees',
        phonetics: ["41","૪૧","એકતાલીસ","ektaalees","ektalis"]
      },
      mr: {
        digit: '४१',
        name: 'एक्केचाळीस',
        translit: 'Ekkechaalees',
        phonetics: ["41","४१","एक्केचाळीस","ekkechaalees","ekkechalis"]
      },
      bn: {
        digit: '৪১',
        name: 'একচল্লিশ',
        translit: 'Ekchollish',
        phonetics: ["41","৪১","একচল্লিশ","ekchollish"]
      },
      ta: {
        digit: '௪௧',
        name: 'நாற்பத்தொன்று',
        translit: 'Naarpathondru',
        phonetics: ["41","௪௧","நாற்பத்தொன்று","naarpathondru","narpathondru"]
      },
      te: {
        digit: '౪౧',
        name: 'నలభై ఒకటి',
        translit: 'Nalabhai Okati',
        phonetics: ["41","౪౧","నలభై ఒకటి","nalabhai okati"]
      },
      kn: {
        digit: '೪೧',
        name: 'ನಲವತ್ತೊಂದು',
        translit: 'Nalavattondu',
        phonetics: ["41","೪೧","ನಲವತ್ತೊಂದು","nalavattondu"]
      },
      ml: {
        digit: '൪൧',
        name: 'നാൽപത്തൊന്ന്',
        translit: 'Naalpathonnu',
        phonetics: ["41","൪൧","നാൽപത്തൊന്ന്","naalpathonnu","nalpathonnu"]
      },
      pa: {
        digit: '੪੧',
        name: 'ਇਕਤਾਲੀ',
        translit: 'Iktaali',
        phonetics: ["41","੪੧","ਇਕਤਾਲੀ","iktaali","iktali"]
      },
      or: {
        digit: '୪୧',
        name: 'ଏକଚାଳିଶି',
        translit: 'Ekachaalisi',
        phonetics: ["41","୪୧","ଏକଚାଳିଶି","ekachaalisi","ekachalisi"]
      },
      sa: {
        digit: '४१',
        name: 'एकचत्वारिंशत्',
        translit: 'Ekachatvaarimshat',
        phonetics: ["41","४१","एकचत्वारिंशत्","ekachatvaarimshat","ekachatvarimshat"]
      },
      ur: {
        digit: '۴۱',
        name: 'اکتالیس',
        translit: 'Iktaalees',
        phonetics: ["41","۴۱","اکتالیس","iktaalees","iktalis"]
      },
    },
    phonetics: {
      gu: ["41","૪૧","એકતાલીસ","ektaalees"],
      hi: ["41","४१","इकतालीस","iktaalees"] 
    }
  },
  {
    english: 42,
    gujarati: '૪૨',
    gujaratiName: 'બેતાલીસ',
    gujaratiTranslit: 'Betaalees',
    hindi: '४२',
    hindiName: 'बयालीस',
    hindiTranslit: 'Bayaalees',
    languages: {
      hi: {
        digit: '४२',
        name: 'बयालीस',
        translit: 'Bayaalees',
        phonetics: ["42","४२","बयालीस","bayaalees","bayalis"]
      },
      gu: {
        digit: '૪૨',
        name: 'બેતાલીસ',
        translit: 'Betaalees',
        phonetics: ["42","૪૨","બેતાલીસ","betaalees","betalis"]
      },
      mr: {
        digit: '४२',
        name: 'बेचाळीस',
        translit: 'Bechaalees',
        phonetics: ["42","४२","बेचाळीस","bechaalees","bechalis"]
      },
      bn: {
        digit: '৪২',
        name: 'বিয়াল্লিশ',
        translit: 'Biyalish',
        phonetics: ["42","৪২","বিয়াল্লিশ","biyalish"]
      },
      ta: {
        digit: '௪௨',
        name: 'நாற்பத்திரண்டு',
        translit: 'Naarpathirandu',
        phonetics: ["42","௪௨","நாற்பத்திரண்டு","naarpathirandu","narpathirandu"]
      },
      te: {
        digit: '౪౨',
        name: 'నలభై రెండు',
        translit: 'Nalabhai Rendu',
        phonetics: ["42","౪౨","నలభై రెండు","nalabhai rendu"]
      },
      kn: {
        digit: '೪೨',
        name: 'ನಲವತ್ತೆರಡು',
        translit: 'Nalavatteradu',
        phonetics: ["42","೪೨","ನಲವತ್ತೆರಡು","nalavatteradu"]
      },
      ml: {
        digit: '൪൨',
        name: 'നാൽപത്തിരണ്ട്',
        translit: 'Naalpathirandu',
        phonetics: ["42","൪൨","നാൽപത്തിരണ്ട്","naalpathirandu","nalpathirandu"]
      },
      pa: {
        digit: '੪੨',
        name: 'ਬਤਾਲੀ',
        translit: 'Bataali',
        phonetics: ["42","੪੨","ਬਤਾਲੀ","bataali","batali"]
      },
      or: {
        digit: '୪୨',
        name: 'ବୟାଳିଶି',
        translit: 'Bayaalisi',
        phonetics: ["42","୪୨","ବୟାଳିଶି","bayaalisi","bayalisi"]
      },
      sa: {
        digit: '४२',
        name: 'द्विचत्वारिंशत्',
        translit: 'Dvichatvaarimshat',
        phonetics: ["42","४२","द्विचत्वारिंशत्","dvichatvaarimshat","dvichatvarimshat"]
      },
      ur: {
        digit: '۴۲',
        name: 'بیالیس',
        translit: 'Bayaalees',
        phonetics: ["42","۴۲","بیالیس","bayaalees","bayalis"]
      },
    },
    phonetics: {
      gu: ["42","૪૨","બેતાલીસ","betaalees"],
      hi: ["42","४२","बयालीस","bayaalees"] 
    }
  },
  {
    english: 43,
    gujarati: '૪૩',
    gujaratiName: 'તેંતાલીસ',
    gujaratiTranslit: 'Tentaalees',
    hindi: '४३',
    hindiName: 'तैंतालीस',
    hindiTranslit: 'Taintaalees',
    languages: {
      hi: {
        digit: '४३',
        name: 'तैंतालीस',
        translit: 'Taintaalees',
        phonetics: ["43","४३","तैंतालीस","taintaalees","taintalis"]
      },
      gu: {
        digit: '૪૩',
        name: 'તેંતાલીસ',
        translit: 'Tentaalees',
        phonetics: ["43","૪૩","તેંતાલીસ","tentaalees","tentalis"]
      },
      mr: {
        digit: '४३',
        name: 'त्रेचाळीस',
        translit: 'Trechaalees',
        phonetics: ["43","४३","त्रेचाळीस","trechaalees","trechalis"]
      },
      bn: {
        digit: '৪৩',
        name: 'তেতাল্লিশ',
        translit: 'Tetalish',
        phonetics: ["43","৪৩","তেতাল্লিশ","tetalish"]
      },
      ta: {
        digit: '௪௩',
        name: 'நாற்பத்துமூன்று',
        translit: 'Naarpathumoondru',
        phonetics: ["43","௪௩","நாற்பத்துமூன்று","naarpathumoondru","narpathumundru"]
      },
      te: {
        digit: '౪౩',
        name: 'నలభై మూడు',
        translit: 'Nalabhai Moodu',
        phonetics: ["43","౪౩","నలభై మూడు","nalabhai moodu","nalabhai mudu"]
      },
      kn: {
        digit: '೪೩',
        name: 'ನಲವತ್ತಮೂರು',
        translit: 'Nalavattmooru',
        phonetics: ["43","೪೩","ನಲವತ್ತಮೂರು","nalavattmooru","nalavattmuru"]
      },
      ml: {
        digit: '൪൩',
        name: 'നാൽപത്തിമൂന്ന്',
        translit: 'Naalpathimoonnu',
        phonetics: ["43","൪൩","നാൽപത്തിമൂന്ന്","naalpathimoonnu","nalpathimunnu"]
      },
      pa: {
        digit: '੪੩',
        name: 'ਤਰਤਾਲੀ',
        translit: 'Tartaali',
        phonetics: ["43","੪੩","ਤਰਤਾਲੀ","tartaali","tartali"]
      },
      or: {
        digit: '୪୩',
        name: 'ତେୟାଳିଶି',
        translit: 'Teyaalisi',
        phonetics: ["43","୪୩","ତେୟାଳିଶି","teyaalisi","teyalisi"]
      },
      sa: {
        digit: '४३',
        name: 'त्रिचत्वारिंशत्',
        translit: 'Trichatvaarimshat',
        phonetics: ["43","४३","त्रिचत्वारिंशत्","trichatvaarimshat","trichatvarimshat"]
      },
      ur: {
        digit: '۴۳',
        name: 'تینتالیس',
        translit: 'Taintaalees',
        phonetics: ["43","۴۳","تینتالیس","taintaalees","taintalis"]
      },
    },
    phonetics: {
      gu: ["43","૪૩","તેંતાલીસ","tentaalees"],
      hi: ["43","४३","तैंतालीस","taintaalees"] 
    }
  },
  {
    english: 44,
    gujarati: '૪૪',
    gujaratiName: 'ચુંમાલીસ',
    gujaratiTranslit: 'Chummaalees',
    hindi: '४४',
    hindiName: 'चवालीस',
    hindiTranslit: 'Chawaalees',
    languages: {
      hi: {
        digit: '४४',
        name: 'चवालीस',
        translit: 'Chawaalees',
        phonetics: ["44","४४","चवालीस","chawaalees","chawalis"]
      },
      gu: {
        digit: '૪૪',
        name: 'ચુંમાલીસ',
        translit: 'Chummaalees',
        phonetics: ["44","૪૪","ચુંમાલીસ","chummaalees","chummalis"]
      },
      mr: {
        digit: '४४',
        name: 'चव्वेचाळीस',
        translit: 'Chavvechaalees',
        phonetics: ["44","४४","चव्वेचाळीस","chavvechaalees","chavvechalis"]
      },
      bn: {
        digit: '৪৪',
        name: 'চুয়াল্লিশ',
        translit: 'Chuyalish',
        phonetics: ["44","৪৪","চুয়াল্লিশ","chuyalish"]
      },
      ta: {
        digit: '௪௪',
        name: 'நாற்பத்துநான்கு',
        translit: 'Naarpathunaangu',
        phonetics: ["44","௪௪","நாற்பத்துநான்கு","naarpathunaangu","narpathunangu"]
      },
      te: {
        digit: '౪౪',
        name: 'నలభై నాలుగు',
        translit: 'Nalabhai Naalugu',
        phonetics: ["44","౪౪","నలభై నాలుగు","nalabhai naalugu","nalabhai nalugu"]
      },
      kn: {
        digit: '೪೪',
        name: 'ನಲವತ್ತನಾಲ್ಕು',
        translit: 'Nalavattnaalku',
        phonetics: ["44","೪೪","ನಲವತ್ತನಾಲ್ಕು","nalavattnaalku","nalavattnalku"]
      },
      ml: {
        digit: '൪൪',
        name: 'നാൽപത്തിനാല്',
        translit: 'Naalpathinaalu',
        phonetics: ["44","൪൪","നാൽപത്തിനാല്","naalpathinaalu","nalpathinalu"]
      },
      pa: {
        digit: '੪੪',
        name: 'ਚਤਾਲੀ',
        translit: 'Chataali',
        phonetics: ["44","੪੪","ਚਤਾਲੀ","chataali","chatali"]
      },
      or: {
        digit: '୪୪',
        name: 'ଚଉରାଳିଶି',
        translit: 'Chauraalisi',
        phonetics: ["44","୪୪","ଚଉରାଳିଶି","chauraalisi","chauralisi"]
      },
      sa: {
        digit: '४४',
        name: 'चतुश्चत्वारिंशत्',
        translit: 'Chatushchatvaarimshat',
        phonetics: ["44","४४","चतुश्चत्वारिंशत्","chatushchatvaarimshat","chatushchatvarimshat"]
      },
      ur: {
        digit: '۴۴',
        name: 'چوالیس',
        translit: 'Chawaalees',
        phonetics: ["44","۴۴","چوالیس","chawaalees","chawalis"]
      },
    },
    phonetics: {
      gu: ["44","૪૪","ચુંમાલીસ","chummaalees"],
      hi: ["44","४४","चवालीस","chawaalees"] 
    }
  },
  {
    english: 45,
    gujarati: '૪૫',
    gujaratiName: 'પિસ્તાલીસ',
    gujaratiTranslit: 'Pistaalees',
    hindi: '४५',
    hindiName: 'पैंतालीस',
    hindiTranslit: 'Paintaalees',
    languages: {
      hi: {
        digit: '४५',
        name: 'पैंतालीस',
        translit: 'Paintaalees',
        phonetics: ["45","४५","पैंतालीस","paintaalees","paintalis"]
      },
      gu: {
        digit: '૪૫',
        name: 'પિસ્તાલીસ',
        translit: 'Pistaalees',
        phonetics: ["45","૪૫","પિસ્તાલીસ","pistaalees","pistalis"]
      },
      mr: {
        digit: '४५',
        name: 'पंचेचाळीस',
        translit: 'Panchechaalees',
        phonetics: ["45","४५","पंचेचाळीस","panchechaalees","panchechalis"]
      },
      bn: {
        digit: '৪৫',
        name: 'পঁয়তাল্লিশ',
        translit: 'Põytalish',
        phonetics: ["45","৪৫","পঁয়তাল্লিশ","põytalish"]
      },
      ta: {
        digit: '௪௫',
        name: 'நாற்பத்தைந்து',
        translit: 'Naarpathainthu',
        phonetics: ["45","௪௫","நாற்பத்தைந்து","naarpathainthu","narpathainthu"]
      },
      te: {
        digit: '౪౫',
        name: 'నలభై ఐదు',
        translit: 'Nalabhai Aidu',
        phonetics: ["45","౪౫","నలభై ఐదు","nalabhai aidu"]
      },
      kn: {
        digit: '೪೫',
        name: 'ನಲವತ್ತೈದು',
        translit: 'Nalavattaidu',
        phonetics: ["45","೪೫","ನಲವತ್ತೈದು","nalavattaidu"]
      },
      ml: {
        digit: '൪൫',
        name: 'നാൽപത്തഞ്ച്',
        translit: 'Naalpathanchu',
        phonetics: ["45","൪൫","നാൽപത്തഞ്ച്","naalpathanchu","nalpathanchu"]
      },
      pa: {
        digit: '੪੫',
        name: 'ਪੰਤਾਲੀ',
        translit: 'Pantaali',
        phonetics: ["45","੪੫","ਪੰਤਾਲੀ","pantaali","pantali"]
      },
      or: {
        digit: '୪୫',
        name: 'ପଇଁଚାଳିଶି',
        translit: 'Pãichaalisi',
        phonetics: ["45","୪୫","ପଇଁଚାଳିଶି","pãichaalisi","pãichalisi"]
      },
      sa: {
        digit: '४५',
        name: 'पञ्चचत्वारिंशत्',
        translit: 'Panchachatvaarimshat',
        phonetics: ["45","४५","पञ्चचत्वारिंशत्","panchachatvaarimshat","panchachatvarimshat"]
      },
      ur: {
        digit: '۴۵',
        name: 'پینتالیس',
        translit: 'Paintaalees',
        phonetics: ["45","۴۵","پینتالیس","paintaalees","paintalis"]
      },
    },
    phonetics: {
      gu: ["45","૪૫","પિસ્તાલીસ","pistaalees"],
      hi: ["45","४५","पैंतालीस","paintaalees"] 
    }
  },
  {
    english: 46,
    gujarati: '૪૬',
    gujaratiName: 'છેતાલીસ',
    gujaratiTranslit: 'Chhetaalees',
    hindi: '४६',
    hindiName: 'छियालीस',
    hindiTranslit: 'Chhiyaalees',
    languages: {
      hi: {
        digit: '४६',
        name: 'छियालीस',
        translit: 'Chhiyaalees',
        phonetics: ["46","४६","छियालीस","chhiyaalees","chhiyalis"]
      },
      gu: {
        digit: '૪૬',
        name: 'છેતાલીસ',
        translit: 'Chhetaalees',
        phonetics: ["46","૪૬","છેતાલીસ","chhetaalees","chhetalis"]
      },
      mr: {
        digit: '४६',
        name: 'शेचाळीस',
        translit: 'Shechaalees',
        phonetics: ["46","४६","शेचाळीस","shechaalees","shechalis"]
      },
      bn: {
        digit: '৪৬',
        name: 'ছেচল্লিশ',
        translit: 'Chhechollish',
        phonetics: ["46","৪৬","ছেচল্লিশ","chhechollish"]
      },
      ta: {
        digit: '௪௬',
        name: 'நாற்பத்தாறு',
        translit: 'Naarpathaaru',
        phonetics: ["46","௪௬","நாற்பத்தாறு","naarpathaaru","narpatharu"]
      },
      te: {
        digit: '౪౬',
        name: 'నలభై ఆరు',
        translit: 'Nalabhai Aaru',
        phonetics: ["46","౪౬","నలభై ఆరు","nalabhai aaru","nalabhai aru"]
      },
      kn: {
        digit: '೪೬',
        name: 'ನಲವತ್ತಾರು',
        translit: 'Nalavattaaru',
        phonetics: ["46","೪೬","ನಲವತ್ತಾರು","nalavattaaru","nalavattaru"]
      },
      ml: {
        digit: '൪൬',
        name: 'നാൽപത്താറ്',
        translit: 'Naalpathaaru',
        phonetics: ["46","൪൬","നാൽപത്താറ്","naalpathaaru","nalpatharu"]
      },
      pa: {
        digit: '੪੬',
        name: 'ਛਿਆਲੀ',
        translit: 'Chhiyaali',
        phonetics: ["46","੪੬","ਛਿਆਲੀ","chhiyaali","chhiyali"]
      },
      or: {
        digit: '୪୬',
        name: 'ଛୟାଳିଶି',
        translit: 'Chhayaalisi',
        phonetics: ["46","୪୬","ଛୟାଳିଶି","chhayaalisi","chhayalisi"]
      },
      sa: {
        digit: '४६',
        name: 'षट्चत्वारिंशत्',
        translit: 'Shatchatvaarimshat',
        phonetics: ["46","४६","षट्चत्वारिंशत्","shatchatvaarimshat","shatchatvarimshat"]
      },
      ur: {
        digit: '۴۶',
        name: 'چھیالیس',
        translit: 'Chhiyaalees',
        phonetics: ["46","۴۶","چھیالیس","chhiyaalees","chhiyalis"]
      },
    },
    phonetics: {
      gu: ["46","૪૬","છેતાલીસ","chhetaalees"],
      hi: ["46","४६","छियालीस","chhiyaalees"] 
    }
  },
  {
    english: 47,
    gujarati: '૪૭',
    gujaratiName: 'સુડતાલીસ',
    gujaratiTranslit: 'Sudtaalees',
    hindi: '४७',
    hindiName: 'सैंतालीस',
    hindiTranslit: 'Saintaalees',
    languages: {
      hi: {
        digit: '४७',
        name: 'सैंतालीस',
        translit: 'Saintaalees',
        phonetics: ["47","४७","सैंतालीस","saintaalees","saintalis"]
      },
      gu: {
        digit: '૪૭',
        name: 'સુડતાલીસ',
        translit: 'Sudtaalees',
        phonetics: ["47","૪૭","સુડતાલીસ","sudtaalees","sudtalis"]
      },
      mr: {
        digit: '४७',
        name: 'सत्तेचाळीस',
        translit: 'Sattechaalees',
        phonetics: ["47","४७","सत्तेचाळीस","sattechaalees","sattechalis"]
      },
      bn: {
        digit: '৪৭',
        name: 'সাতচল্লিশ',
        translit: 'Satchollish',
        phonetics: ["47","৪৭","সাতচল্লিশ","satchollish"]
      },
      ta: {
        digit: '௪௭',
        name: 'நாற்பத்தேழு',
        translit: 'Naarpathezhu',
        phonetics: ["47","௪௭","நாற்பத்தேழு","naarpathezhu","narpathezhu"]
      },
      te: {
        digit: '౪౭',
        name: 'నలభై ఏడు',
        translit: 'Nalabhai Eedu',
        phonetics: ["47","౪౭","నలభై ఏడు","nalabhai eedu","nalabhai idu"]
      },
      kn: {
        digit: '೪೭',
        name: 'ನಲವತ್ತೇಳು',
        translit: 'Nalavatteelu',
        phonetics: ["47","೪೭","ನಲವತ್ತೇಳು","nalavatteelu","nalavattilu"]
      },
      ml: {
        digit: '൪൭',
        name: 'നാൽപത്തേഴ്',
        translit: 'Naalpathezhu',
        phonetics: ["47","൪൭","നാൽപത്തേഴ്","naalpathezhu","nalpathezhu"]
      },
      pa: {
        digit: '੪੭',
        name: 'ਸੰਤਾਲੀ',
        translit: 'Santaali',
        phonetics: ["47","੪੭","ਸੰਤਾਲੀ","santaali","santali"]
      },
      or: {
        digit: '୪୭',
        name: 'ସତଚାଳିଶି',
        translit: 'Satachaalisi',
        phonetics: ["47","୪୭","ସତଚାଳିଶି","satachaalisi","satachalisi"]
      },
      sa: {
        digit: '४७',
        name: 'सप्तचत्वारिंशत्',
        translit: 'Saptachatvaarimshat',
        phonetics: ["47","४७","सप्तचत्वारिंशत्","saptachatvaarimshat","saptachatvarimshat"]
      },
      ur: {
        digit: '۴۷',
        name: 'سینتالیس',
        translit: 'Saintaalees',
        phonetics: ["47","۴۷","سینتالیس","saintaalees","saintalis"]
      },
    },
    phonetics: {
      gu: ["47","૪૭","સુડતાલીસ","sudtaalees"],
      hi: ["47","४७","सैंतालीस","saintaalees"] 
    }
  },
  {
    english: 48,
    gujarati: '૪૮',
    gujaratiName: 'અડતાલીસ',
    gujaratiTranslit: 'Adtaalees',
    hindi: '४८',
    hindiName: 'अड़तालीस',
    hindiTranslit: 'Adtaalees',
    languages: {
      hi: {
        digit: '४८',
        name: 'अड़तालीस',
        translit: 'Adtaalees',
        phonetics: ["48","४८","अड़तालीस","adtaalees","adtalis"]
      },
      gu: {
        digit: '૪૮',
        name: 'અડતાલીસ',
        translit: 'Adtaalees',
        phonetics: ["48","૪૮","અડતાલીસ","adtaalees","adtalis"]
      },
      mr: {
        digit: '४८',
        name: 'अठ्ठेचाळीस',
        translit: 'Atthechaalees',
        phonetics: ["48","४८","अठ्ठेचाळीस","atthechaalees","atthechalis"]
      },
      bn: {
        digit: '৪৮',
        name: 'আটচল্লিশ',
        translit: 'Aatchollish',
        phonetics: ["48","৪৮","আটচল্লিশ","aatchollish","atchollish"]
      },
      ta: {
        digit: '௪௮',
        name: 'நாற்பத்தெட்டு',
        translit: 'Naarpathettu',
        phonetics: ["48","௪௮","நாற்பத்தெட்டு","naarpathettu","narpathettu"]
      },
      te: {
        digit: '౪౮',
        name: 'నలభై ఎనిమిది',
        translit: 'Nalabhai Enimidi',
        phonetics: ["48","౪౮","నలభై ఎనిమిది","nalabhai enimidi"]
      },
      kn: {
        digit: '೪೮',
        name: 'ನಲವತ್ತೆಂಟು',
        translit: 'Nalavattentu',
        phonetics: ["48","೪೮","ನಲವತ್ತೆಂಟು","nalavattentu"]
      },
      ml: {
        digit: '൪൮',
        name: 'നാൽപത്തെട്ട്',
        translit: 'Naalpathettu',
        phonetics: ["48","൪൮","നാൽപത്തെട്ട്","naalpathettu","nalpathettu"]
      },
      pa: {
        digit: '੪੮',
        name: 'ਅਠਤਾਲੀ',
        translit: 'Athtaali',
        phonetics: ["48","੪੮","ਅਠਤਾਲੀ","athtaali","athtali"]
      },
      or: {
        digit: '୪୮',
        name: 'ଅଠଚାଳିଶି',
        translit: 'Athachaalisi',
        phonetics: ["48","୪୮","ଅଠଚାଳିଶି","athachaalisi","athachalisi"]
      },
      sa: {
        digit: '४८',
        name: 'अष्टचत्वारिंशत्',
        translit: 'Ashtachatvaarimshat',
        phonetics: ["48","४८","अष्टचत्वारिंशत्","ashtachatvaarimshat","ashtachatvarimshat"]
      },
      ur: {
        digit: '۴۸',
        name: 'اڑتالیس',
        translit: 'Adtaalees',
        phonetics: ["48","۴۸","اڑتالیس","adtaalees","adtalis"]
      },
    },
    phonetics: {
      gu: ["48","૪૮","અડતાલીસ","adtaalees"],
      hi: ["48","४८","अड़तालीस","adtaalees"] 
    }
  },
  {
    english: 49,
    gujarati: '૪૯',
    gujaratiName: 'ઓગણપચાસ',
    gujaratiTranslit: 'Oganpachaas',
    hindi: '४९',
    hindiName: 'उनचास',
    hindiTranslit: 'Unchaas',
    languages: {
      hi: {
        digit: '४९',
        name: 'उनचास',
        translit: 'Unchaas',
        phonetics: ["49","४९","उनचास","unchaas","unchas"]
      },
      gu: {
        digit: '૪૯',
        name: 'ઓગણપચાસ',
        translit: 'Oganpachaas',
        phonetics: ["49","૪૯","ઓગણપચાસ","oganpachaas","oganpachas"]
      },
      mr: {
        digit: '४९',
        name: 'एकोणपन्नास',
        translit: 'Ekonpannaas',
        phonetics: ["49","४९","एकोणपन्नास","ekonpannaas","ekonpannas"]
      },
      bn: {
        digit: '৪৯',
        name: 'উনপঞ্চাশ',
        translit: 'Unoponchaash',
        phonetics: ["49","৪৯","উনপঞ্চাশ","unoponchaash","unoponchash"]
      },
      ta: {
        digit: '௪௯',
        name: 'நாற்பத்தொன்பது',
        translit: 'Naarpathonbathu',
        phonetics: ["49","௪௯","நாற்பத்தொன்பது","naarpathonbathu","narpathonbathu"]
      },
      te: {
        digit: '౪౯',
        name: 'నలభై తొమ్మిది',
        translit: 'Nalabhai Tommidi',
        phonetics: ["49","౪౯","నలభై తొమ్మిది","nalabhai tommidi"]
      },
      kn: {
        digit: '೪೯',
        name: 'ನಲವತ್ತೊಂಬತ್ತು',
        translit: 'Nalavattombattu',
        phonetics: ["49","೪೯","ನಲವತ್ತೊಂಬತ್ತು","nalavattombattu"]
      },
      ml: {
        digit: '൪൯',
        name: 'നാൽപത്തൊമ്പത്',
        translit: 'Naalpathombathu',
        phonetics: ["49","൪൯","നാൽപത്തൊമ്പത്","naalpathombathu","nalpathombathu"]
      },
      pa: {
        digit: '੪੯',
        name: 'ਉਨੰਜਾ',
        translit: 'Unanja',
        phonetics: ["49","੪੯","ਉਨੰਜਾ","unanja"]
      },
      or: {
        digit: '୪୯',
        name: 'ଅଣଚାଶ',
        translit: 'Anachaasa',
        phonetics: ["49","୪୯","ଅଣଚାଶ","anachaasa","anachasa"]
      },
      sa: {
        digit: '४९',
        name: 'एकोनपञ्चाशत्',
        translit: 'Ekonapanchaashat',
        phonetics: ["49","४९","एकोनपञ्चाशत्","ekonapanchaashat","ekonapanchashat"]
      },
      ur: {
        digit: '۴۹',
        name: 'انچاس',
        translit: 'Unchaas',
        phonetics: ["49","۴۹","انچاس","unchaas","unchas"]
      },
    },
    phonetics: {
      gu: ["49","૪૯","ઓગણપચાસ","oganpachaas"],
      hi: ["49","४९","उनचास","unchaas"] 
    }
  },
  {
    english: 50,
    gujarati: '૫૦',
    gujaratiName: 'પચાસ',
    gujaratiTranslit: 'Pachaas',
    hindi: '५०',
    hindiName: 'पचास',
    hindiTranslit: 'Pachaas',
    languages: {
      hi: {
        digit: '५०',
        name: 'पचास',
        translit: 'Pachaas',
        phonetics: ["50","५०","पचास","pachaas","pachas"]
      },
      gu: {
        digit: '૫૦',
        name: 'પચાસ',
        translit: 'Pachaas',
        phonetics: ["50","૫૦","પચાસ","pachaas","pachas"]
      },
      mr: {
        digit: '५०',
        name: 'पन्नास',
        translit: 'Pannaas',
        phonetics: ["50","५०","पन्नास","pannaas","pannas"]
      },
      bn: {
        digit: '৫০',
        name: 'পঞ্চাশ',
        translit: 'Ponchaash',
        phonetics: ["50","৫০","পঞ্চাশ","ponchaash","ponchash"]
      },
      ta: {
        digit: '௫௦',
        name: 'ஐம்பது',
        translit: 'Aimpathu',
        phonetics: ["50","௫௦","ஐம்பது","aimpathu"]
      },
      te: {
        digit: '౫౦',
        name: 'యాభై',
        translit: 'Yaabhai',
        phonetics: ["50","౫౦","యాభై","yaabhai","yabhai"]
      },
      kn: {
        digit: '೫೦',
        name: 'ಐವತ್ತು',
        translit: 'Aivattu',
        phonetics: ["50","೫೦","ಐವತ್ತು","aivattu"]
      },
      ml: {
        digit: '൫൦',
        name: 'അമ്പത്',
        translit: 'Ampathu',
        phonetics: ["50","൫൦","അമ്പത്","ampathu"]
      },
      pa: {
        digit: '੫੦',
        name: 'ਪੰਜਾਹ',
        translit: 'Panjaah',
        phonetics: ["50","੫੦","ਪੰਜਾਹ","panjaah","panjah"]
      },
      or: {
        digit: '୫୦',
        name: 'ପଚାଶ',
        translit: 'Pachaasa',
        phonetics: ["50","୫୦","ପଚାଶ","pachaasa","pachasa"]
      },
      sa: {
        digit: '५०',
        name: 'पञ्चाशत्',
        translit: 'Panchaashat',
        phonetics: ["50","५०","पञ्चाशत्","panchaashat","panchashat"]
      },
      ur: {
        digit: '۵۰',
        name: 'پچاس',
        translit: 'Pachaas',
        phonetics: ["50","۵۰","پچاس","pachaas","pachas"]
      },
    },
    phonetics: {
      gu: ["50","૫૦","પચાસ","pachaas"],
      hi: ["50","५०","पचास","pachaas"] 
    }
  },
  {
    english: 51,
    gujarati: '૫૧',
    gujaratiName: 'એકાવન',
    gujaratiTranslit: 'Ekaavan',
    hindi: '५१',
    hindiName: 'इक्यावन',
    hindiTranslit: 'Ikyaawan',
    languages: {
      hi: {
        digit: '५१',
        name: 'इक्यावन',
        translit: 'Ikyaawan',
        phonetics: ["51","५१","इक्यावन","ikyaawan","ikyawan"]
      },
      gu: {
        digit: '૫૧',
        name: 'એકાવન',
        translit: 'Ekaavan',
        phonetics: ["51","૫૧","એકાવન","ekaavan","ekavan"]
      },
      mr: {
        digit: '५१',
        name: 'एकावन्न',
        translit: 'Ekaavanna',
        phonetics: ["51","५१","एकावन्न","ekaavanna","ekavanna"]
      },
      bn: {
        digit: '৫১',
        name: 'একান্ন',
        translit: 'Ekanno',
        phonetics: ["51","৫১","একান্ন","ekanno"]
      },
      ta: {
        digit: '௫௧',
        name: 'ஐம்பத்தொன்று',
        translit: 'Aimpathondru',
        phonetics: ["51","௫௧","ஐம்பத்தொன்று","aimpathondru"]
      },
      te: {
        digit: '౫౧',
        name: 'యాభై ఒకటి',
        translit: 'Yaabhai Okati',
        phonetics: ["51","౫౧","యాభై ఒకటి","yaabhai okati","yabhai okati"]
      },
      kn: {
        digit: '೫೧',
        name: 'ಐವತ್ತೊಂದು',
        translit: 'Aivattondu',
        phonetics: ["51","೫೧","ಐವತ್ತೊಂದು","aivattondu"]
      },
      ml: {
        digit: '൫൧',
        name: 'അമ്പത്തൊന്ന്',
        translit: 'Ampathonnu',
        phonetics: ["51","൫൧","അമ്പത്തൊന്ന്","ampathonnu"]
      },
      pa: {
        digit: '੫੧',
        name: 'ਇਕਵੰਜਾ',
        translit: 'Ikvanja',
        phonetics: ["51","੫੧","ਇਕਵੰਜਾ","ikvanja"]
      },
      or: {
        digit: '୫୧',
        name: 'ଏକାବନ',
        translit: 'Ekaabana',
        phonetics: ["51","୫୧","ଏକାବନ","ekaabana","ekabana"]
      },
      sa: {
        digit: '५१',
        name: 'एकपञ्चाशत्',
        translit: 'Ekapanchaashat',
        phonetics: ["51","५१","एकपञ्चाशत्","ekapanchaashat","ekapanchashat"]
      },
      ur: {
        digit: '۵۱',
        name: 'اکیاون',
        translit: 'Ikyaawan',
        phonetics: ["51","۵۱","اکیاون","ikyaawan","ikyawan"]
      },
    },
    phonetics: {
      gu: ["51","૫૧","એકાવન","ekaavan"],
      hi: ["51","५१","इक्यावन","ikyaawan"] 
    }
  },
  {
    english: 52,
    gujarati: '૫૨',
    gujaratiName: 'બાવન',
    gujaratiTranslit: 'Baavan',
    hindi: '५२',
    hindiName: 'बावन',
    hindiTranslit: 'Baawan',
    languages: {
      hi: {
        digit: '५२',
        name: 'बावन',
        translit: 'Baawan',
        phonetics: ["52","५२","बावन","baawan","bawan"]
      },
      gu: {
        digit: '૫૨',
        name: 'બાવન',
        translit: 'Baavan',
        phonetics: ["52","૫૨","બાવન","baavan","bavan"]
      },
      mr: {
        digit: '५२',
        name: 'बावन्न',
        translit: 'Baavanna',
        phonetics: ["52","५२","बावन्न","baavanna","bavanna"]
      },
      bn: {
        digit: '৫২',
        name: 'বায়ান্ন',
        translit: 'Bayanno',
        phonetics: ["52","৫২","বায়ান্ন","bayanno"]
      },
      ta: {
        digit: '௫௨',
        name: 'ஐம்பத்திரண்டு',
        translit: 'Aimpathirandu',
        phonetics: ["52","௫௨","ஐம்பத்திரண்டு","aimpathirandu"]
      },
      te: {
        digit: '౫౨',
        name: 'యాభై రెండు',
        translit: 'Yaabhai Rendu',
        phonetics: ["52","౫౨","యాభై రెండు","yaabhai rendu","yabhai rendu"]
      },
      kn: {
        digit: '೫೨',
        name: 'ಐವತ್ತೆರಡು',
        translit: 'Aivatteradu',
        phonetics: ["52","೫೨","ಐವತ್ತೆರಡು","aivatteradu"]
      },
      ml: {
        digit: '൫൨',
        name: 'അമ്പത്തിരണ്ട്',
        translit: 'Ampathirandu',
        phonetics: ["52","൫൨","അമ്പത്തിരണ്ട്","ampathirandu"]
      },
      pa: {
        digit: '੫੨',
        name: 'ਬਵੰਜਾ',
        translit: 'Bavanja',
        phonetics: ["52","੫੨","ਬਵੰਜਾ","bavanja"]
      },
      or: {
        digit: '୫୨',
        name: 'ବାଆନ',
        translit: 'Baaana',
        phonetics: ["52","୫୨","ବାଆନ","baaana","baana"]
      },
      sa: {
        digit: '५२',
        name: 'द्विपञ्चाशत्',
        translit: 'Dvipanchaashat',
        phonetics: ["52","५२","द्विपञ्चाशत्","dvipanchaashat","dvipanchashat"]
      },
      ur: {
        digit: '۵۲',
        name: 'باون',
        translit: 'Baawan',
        phonetics: ["52","۵۲","باون","baawan","bawan"]
      },
    },
    phonetics: {
      gu: ["52","૫૨","બાવન","baavan"],
      hi: ["52","५२","बावन","baawan"] 
    }
  },
  {
    english: 53,
    gujarati: '૫૩',
    gujaratiName: 'તેપન',
    gujaratiTranslit: 'Tepan',
    hindi: '५३',
    hindiName: 'तिरेपन',
    hindiTranslit: 'Tirepan',
    languages: {
      hi: {
        digit: '५३',
        name: 'तिरेपन',
        translit: 'Tirepan',
        phonetics: ["53","५३","तिरेपन","tirepan"]
      },
      gu: {
        digit: '૫૩',
        name: 'તેપન',
        translit: 'Tepan',
        phonetics: ["53","૫૩","તેપન","tepan"]
      },
      mr: {
        digit: '५३',
        name: 'त्रेपन्न',
        translit: 'Trepanna',
        phonetics: ["53","५३","त्रेपन्न","trepanna"]
      },
      bn: {
        digit: '৫৩',
        name: 'তিপ্পান্ন',
        translit: 'Tippanno',
        phonetics: ["53","৫৩","তিপ্পান্ন","tippanno"]
      },
      ta: {
        digit: '௫௩',
        name: 'ஐம்பத்துமூன்று',
        translit: 'Aimpathumoondru',
        phonetics: ["53","௫௩","ஐம்பத்துமூன்று","aimpathumoondru","aimpathumundru"]
      },
      te: {
        digit: '౫౩',
        name: 'యాభై మూడు',
        translit: 'Yaabhai Moodu',
        phonetics: ["53","౫౩","యాభై మూడు","yaabhai moodu","yabhai mudu"]
      },
      kn: {
        digit: '೫೩',
        name: 'ಐವತ್ತಮೂರು',
        translit: 'Aivattmooru',
        phonetics: ["53","೫೩","ಐವತ್ತಮೂರು","aivattmooru","aivattmuru"]
      },
      ml: {
        digit: '൫൩',
        name: 'അമ്പത്തിമൂന്ന്',
        translit: 'Ampathimoonnu',
        phonetics: ["53","൫൩","അമ്പത്തിമൂന്ന്","ampathimoonnu","ampathimunnu"]
      },
      pa: {
        digit: '੫੩',
        name: 'ਤਰਵੰਜਾ',
        translit: 'Tarvanja',
        phonetics: ["53","੫੩","ਤਰਵੰਜਾ","tarvanja"]
      },
      or: {
        digit: '୫୩',
        name: 'ତେପନ',
        translit: 'Tepana',
        phonetics: ["53","୫୩","ତେପନ","tepana"]
      },
      sa: {
        digit: '५३',
        name: 'त्रिपञ्चाशत्',
        translit: 'Tripanchaashat',
        phonetics: ["53","५३","त्रिपञ्चाशत्","tripanchaashat","tripanchashat"]
      },
      ur: {
        digit: '۵۳',
        name: 'ترپن',
        translit: 'Tirepan',
        phonetics: ["53","۵۳","ترپن","tirepan"]
      },
    },
    phonetics: {
      gu: ["53","૫૩","તેપન","tepan"],
      hi: ["53","५३","तिरेपन","tirepan"] 
    }
  },
  {
    english: 54,
    gujarati: '૫૪',
    gujaratiName: 'ચોપન',
    gujaratiTranslit: 'Chopan',
    hindi: '५४',
    hindiName: 'चौवन',
    hindiTranslit: 'Chauwan',
    languages: {
      hi: {
        digit: '५४',
        name: 'चौवन',
        translit: 'Chauwan',
        phonetics: ["54","५४","चौवन","chauwan"]
      },
      gu: {
        digit: '૫૪',
        name: 'ચોપન',
        translit: 'Chopan',
        phonetics: ["54","૫૪","ચોપન","chopan"]
      },
      mr: {
        digit: '५४',
        name: 'चोपन्न',
        translit: 'Chopanna',
        phonetics: ["54","५४","चोपन्न","chopanna"]
      },
      bn: {
        digit: '৫৪',
        name: 'চুয়ান্ন',
        translit: 'Chuyanno',
        phonetics: ["54","৫৪","চুয়ান্ন","chuyanno"]
      },
      ta: {
        digit: '௫௪',
        name: 'ஐம்பத்துநான்கு',
        translit: 'Aimpathunaangu',
        phonetics: ["54","௫௪","ஐம்பத்துநான்கு","aimpathunaangu","aimpathunangu"]
      },
      te: {
        digit: '౫౪',
        name: 'యాభై నాలుగు',
        translit: 'Yaabhai Naalugu',
        phonetics: ["54","౫౪","యాభై నాలుగు","yaabhai naalugu","yabhai nalugu"]
      },
      kn: {
        digit: '೫೪',
        name: 'ಐವತ್ತನಾಲ್ಕು',
        translit: 'Aivattnaalku',
        phonetics: ["54","೫೪","ಐವತ್ತನಾಲ್ಕು","aivattnaalku","aivattnalku"]
      },
      ml: {
        digit: '൫൪',
        name: 'അമ്പത്തിനാല്',
        translit: 'Ampathinaalu',
        phonetics: ["54","൫൪","അമ്പത്തിനാല്","ampathinaalu","ampathinalu"]
      },
      pa: {
        digit: '੫੪',
        name: 'ਚੁਰੰਜਾ',
        translit: 'Churanja',
        phonetics: ["54","੫੪","ਚੁਰੰਜਾ","churanja"]
      },
      or: {
        digit: '୫୪',
        name: 'ଚଉବନ',
        translit: 'Chaubana',
        phonetics: ["54","୫୪","ଚଉବନ","chaubana"]
      },
      sa: {
        digit: '५४',
        name: 'चतुःपञ्चाशत्',
        translit: 'Chatuhpanchaashat',
        phonetics: ["54","५४","चतुःपञ्चाशत्","chatuhpanchaashat","chatuhpanchashat"]
      },
      ur: {
        digit: '۵۴',
        name: 'چون',
        translit: 'Chauwan',
        phonetics: ["54","۵۴","چون","chauwan"]
      },
    },
    phonetics: {
      gu: ["54","૫૪","ચોપન","chopan"],
      hi: ["54","५४","चौवन","chauwan"] 
    }
  },
  {
    english: 55,
    gujarati: '૫૫',
    gujaratiName: 'પંચાવન',
    gujaratiTranslit: 'Panchaavan',
    hindi: '५५',
    hindiName: 'पचपन',
    hindiTranslit: 'Pachpan',
    languages: {
      hi: {
        digit: '५५',
        name: 'पचपन',
        translit: 'Pachpan',
        phonetics: ["55","५५","पचपन","pachpan"]
      },
      gu: {
        digit: '૫૫',
        name: 'પંચાવન',
        translit: 'Panchaavan',
        phonetics: ["55","૫૫","પંચાવન","panchaavan","panchavan"]
      },
      mr: {
        digit: '५५',
        name: 'पंचावन्न',
        translit: 'Panchaavanna',
        phonetics: ["55","५५","पंचावन्न","panchaavanna","panchavanna"]
      },
      bn: {
        digit: '৫৫',
        name: 'পঞ্চান্ন',
        translit: 'Ponchanno',
        phonetics: ["55","৫৫","পঞ্চান্ন","ponchanno"]
      },
      ta: {
        digit: '௫௫',
        name: 'ஐம்பத்தைந்து',
        translit: 'Aimpathainthu',
        phonetics: ["55","௫௫","ஐம்பத்தைந்து","aimpathainthu"]
      },
      te: {
        digit: '౫౫',
        name: 'యాభై ఐదు',
        translit: 'Yaabhai Aidu',
        phonetics: ["55","౫౫","యాభై ఐదు","yaabhai aidu","yabhai aidu"]
      },
      kn: {
        digit: '೫೫',
        name: 'ಐವತ್ತೈದು',
        translit: 'Aivattaidu',
        phonetics: ["55","೫೫","ಐವತ್ತೈದು","aivattaidu"]
      },
      ml: {
        digit: '൫൫',
        name: 'അമ്പത്തഞ്ച്',
        translit: 'Ampathanchu',
        phonetics: ["55","൫൫","അമ്പത്തഞ്ച്","ampathanchu"]
      },
      pa: {
        digit: '੫੫',
        name: 'ਪਚਵੰਜਾ',
        translit: 'Pachvanja',
        phonetics: ["55","੫੫","ਪਚਵੰਜਾ","pachvanja"]
      },
      or: {
        digit: '୫୫',
        name: 'ପଞ୍ଚାବନ',
        translit: 'Panchaabana',
        phonetics: ["55","୫୫","ପଞ୍ଚାବନ","panchaabana","panchabana"]
      },
      sa: {
        digit: '५५',
        name: 'पञ्चपञ्चाशत्',
        translit: 'Panchapanchaashat',
        phonetics: ["55","५५","पञ्चपञ्चाशत्","panchapanchaashat","panchapanchashat"]
      },
      ur: {
        digit: '۵۵',
        name: 'پچپن',
        translit: 'Pachpan',
        phonetics: ["55","۵۵","پچپن","pachpan"]
      },
    },
    phonetics: {
      gu: ["55","૫૫","પંચાવન","panchaavan"],
      hi: ["55","५५","पचपन","pachpan"] 
    }
  },
  {
    english: 56,
    gujarati: '૫૬',
    gujaratiName: 'છપ્પન',
    gujaratiTranslit: 'Chhappan',
    hindi: '५६',
    hindiName: 'छप्पन',
    hindiTranslit: 'Chhappan',
    languages: {
      hi: {
        digit: '५६',
        name: 'छप्पन',
        translit: 'Chhappan',
        phonetics: ["56","५६","छप्पन","chhappan"]
      },
      gu: {
        digit: '૫૬',
        name: 'છપ્પન',
        translit: 'Chhappan',
        phonetics: ["56","૫૬","છપ્પન","chhappan"]
      },
      mr: {
        digit: '५६',
        name: 'छप्पन्न',
        translit: 'Chhappanna',
        phonetics: ["56","५६","छप्पन्न","chhappanna"]
      },
      bn: {
        digit: '৫৬',
        name: 'ছাপ্পান্ন',
        translit: 'Chhappanno',
        phonetics: ["56","৫৬","ছাপ্পান্ন","chhappanno"]
      },
      ta: {
        digit: '௫௬',
        name: 'ஐம்பத்தாறு',
        translit: 'Aimpathaaru',
        phonetics: ["56","௫௬","ஐம்பத்தாறு","aimpathaaru","aimpatharu"]
      },
      te: {
        digit: '౫౬',
        name: 'యాభై ఆరు',
        translit: 'Yaabhai Aaru',
        phonetics: ["56","౫౬","యాభై ఆరు","yaabhai aaru","yabhai aru"]
      },
      kn: {
        digit: '೫೬',
        name: 'ಐವತ್ತಾರು',
        translit: 'Aivattaaru',
        phonetics: ["56","೫೬","ಐವತ್ತಾರು","aivattaaru","aivattaru"]
      },
      ml: {
        digit: '൫൬',
        name: 'അമ്പത്താറ്',
        translit: 'Ampathaaru',
        phonetics: ["56","൫൬","അമ്പത്താറ്","ampathaaru","ampatharu"]
      },
      pa: {
        digit: '੫੬',
        name: 'ਛਪੰਜਾ',
        translit: 'Chhapanja',
        phonetics: ["56","੫੬","ਛਪੰਜਾ","chhapanja"]
      },
      or: {
        digit: '୫୬',
        name: 'ଛପନ',
        translit: 'Chhapana',
        phonetics: ["56","୫୬","ଛପନ","chhapana"]
      },
      sa: {
        digit: '५६',
        name: 'षट्पञ्चाशत्',
        translit: 'Shatpanchaashat',
        phonetics: ["56","५६","षट्पञ्चाशत्","shatpanchaashat","shatpanchashat"]
      },
      ur: {
        digit: '۵۶',
        name: 'چھپن',
        translit: 'Chhappan',
        phonetics: ["56","۵۶","چھپن","chhappan"]
      },
    },
    phonetics: {
      gu: ["56","૫૬","છપ્પન","chhappan"],
      hi: ["56","५६","छप्पन","chhappan"] 
    }
  },
  {
    english: 57,
    gujarati: '૫૭',
    gujaratiName: 'સત્તાવન',
    gujaratiTranslit: 'Sattaavan',
    hindi: '५७',
    hindiName: 'सत्तावन',
    hindiTranslit: 'Sattaawan',
    languages: {
      hi: {
        digit: '५७',
        name: 'सत्तावन',
        translit: 'Sattaawan',
        phonetics: ["57","५७","सत्तावन","sattaawan","sattawan"]
      },
      gu: {
        digit: '૫૭',
        name: 'સત્તાવન',
        translit: 'Sattaavan',
        phonetics: ["57","૫૭","સત્તાવન","sattaavan","sattavan"]
      },
      mr: {
        digit: '५७',
        name: 'सत्तावन्न',
        translit: 'Sattaavanna',
        phonetics: ["57","५७","सत्तावन्न","sattaavanna","sattavanna"]
      },
      bn: {
        digit: '৫৭',
        name: 'সাতান্ন',
        translit: 'Satanno',
        phonetics: ["57","৫৭","সাতান্ন","satanno"]
      },
      ta: {
        digit: '௫௭',
        name: 'ஐம்பத்தேழு',
        translit: 'Aimpathezhu',
        phonetics: ["57","௫௭","ஐம்பத்தேழு","aimpathezhu"]
      },
      te: {
        digit: '౫౭',
        name: 'యాభై ఏడు',
        translit: 'Yaabhai Eedu',
        phonetics: ["57","౫౭","యాభై ఏడు","yaabhai eedu","yabhai idu"]
      },
      kn: {
        digit: '೫೭',
        name: 'ಐವತ್ತೇಳು',
        translit: 'Aivatteelu',
        phonetics: ["57","೫೭","ಐವತ್ತೇಳು","aivatteelu","aivattilu"]
      },
      ml: {
        digit: '൫൭',
        name: 'അമ്പത്തേഴ്',
        translit: 'Ampathezhu',
        phonetics: ["57","൫൭","അമ്പത്തേഴ്","ampathezhu"]
      },
      pa: {
        digit: '੫੭',
        name: 'ਸਤਵੰਜਾ',
        translit: 'Satvanja',
        phonetics: ["57","੫੭","ਸਤਵੰਜਾ","satvanja"]
      },
      or: {
        digit: '୫୭',
        name: 'ସତାବନ',
        translit: 'Sataabana',
        phonetics: ["57","୫୭","ସତାବନ","sataabana","satabana"]
      },
      sa: {
        digit: '५७',
        name: 'सप्तपञ्चाशत्',
        translit: 'Saptapanchaashat',
        phonetics: ["57","५७","सप्तपञ्चाशत्","saptapanchaashat","saptapanchashat"]
      },
      ur: {
        digit: '۵۷',
        name: 'ستاون',
        translit: 'Sattaawan',
        phonetics: ["57","۵۷","ستاون","sattaawan","sattawan"]
      },
    },
    phonetics: {
      gu: ["57","૫૭","સત્તાવન","sattaavan"],
      hi: ["57","५७","सत्तावन","sattaawan"] 
    }
  },
  {
    english: 58,
    gujarati: '૫૮',
    gujaratiName: 'અઠ્ઠાવન',
    gujaratiTranslit: 'Atthaavan',
    hindi: '५८',
    hindiName: 'अट्ठावन',
    hindiTranslit: 'Atthaawan',
    languages: {
      hi: {
        digit: '५८',
        name: 'अट्ठावन',
        translit: 'Atthaawan',
        phonetics: ["58","५८","अट्ठावन","atthaawan","atthawan"]
      },
      gu: {
        digit: '૫૮',
        name: 'અઠ્ઠાવન',
        translit: 'Atthaavan',
        phonetics: ["58","૫૮","અઠ્ઠાવન","atthaavan","atthavan"]
      },
      mr: {
        digit: '५८',
        name: 'अठ्ठावन्न',
        translit: 'Atthaavanna',
        phonetics: ["58","५८","अठ्ठावन्न","atthaavanna","atthavanna"]
      },
      bn: {
        digit: '৫৮',
        name: 'আটান্ন',
        translit: 'Aatanno',
        phonetics: ["58","৫৮","আটান্ন","aatanno","atanno"]
      },
      ta: {
        digit: '௫௮',
        name: 'ஐம்பத்தெட்டு',
        translit: 'Aimpathettu',
        phonetics: ["58","௫௮","ஐம்பத்தெட்டு","aimpathettu"]
      },
      te: {
        digit: '౫౮',
        name: 'యాభై ఎనిమిది',
        translit: 'Yaabhai Enimidi',
        phonetics: ["58","౫౮","యాభై ఎనిమిది","yaabhai enimidi","yabhai enimidi"]
      },
      kn: {
        digit: '೫೮',
        name: 'ಐವತ್ತೆಂಟು',
        translit: 'Aivattentu',
        phonetics: ["58","೫೮","ಐವತ್ತೆಂಟು","aivattentu"]
      },
      ml: {
        digit: '൫൮',
        name: 'അമ്പത്തെട്ട്',
        translit: 'Ampathettu',
        phonetics: ["58","൫൮","അമ്പത്തെട്ട്","ampathettu"]
      },
      pa: {
        digit: '੫੮',
        name: 'ਅਠਵੰਜਾ',
        translit: 'Athvanja',
        phonetics: ["58","੫੮","ਅਠਵੰਜਾ","athvanja"]
      },
      or: {
        digit: '୫୮',
        name: 'ଅଠାବନ',
        translit: 'Athaabana',
        phonetics: ["58","୫୮","ଅଠାବନ","athaabana","athabana"]
      },
      sa: {
        digit: '५८',
        name: 'अष्टपञ्चाशत्',
        translit: 'Ashtapanchaashat',
        phonetics: ["58","५८","अष्टपञ्चाशत्","ashtapanchaashat","ashtapanchashat"]
      },
      ur: {
        digit: '۵۸',
        name: 'اٹ्ठाون',
        translit: 'Atthaawan',
        phonetics: ["58","۵۸","اٹ्ठाون","atthaawan","atthawan"]
      },
    },
    phonetics: {
      gu: ["58","૫૮","અઠ્ઠાવન","atthaavan"],
      hi: ["58","५८","अट्ठावन","atthaawan"] 
    }
  },
  {
    english: 59,
    gujarati: '૫૯',
    gujaratiName: 'ઓગણસાઠ',
    gujaratiTranslit: 'Ogansaath',
    hindi: '५९',
    hindiName: 'उनसठ',
    hindiTranslit: 'Unsath',
    languages: {
      hi: {
        digit: '५९',
        name: 'उनसठ',
        translit: 'Unsath',
        phonetics: ["59","५९","उनसठ","unsath"]
      },
      gu: {
        digit: '૫૯',
        name: 'ઓગણસાઠ',
        translit: 'Ogansaath',
        phonetics: ["59","૫૯","ઓગણસાઠ","ogansaath","ogansath"]
      },
      mr: {
        digit: '५९',
        name: 'एकोणसाठ',
        translit: 'Ekonsaath',
        phonetics: ["59","५९","एकोणसाठ","ekonsaath","ekonsath"]
      },
      bn: {
        digit: '৫৯',
        name: 'উনষাট',
        translit: 'Unoshaat',
        phonetics: ["59","৫৯","উনষাট","unoshaat","unoshat"]
      },
      ta: {
        digit: '௫௯',
        name: 'ஐம்பத்தொன்பது',
        translit: 'Aimpathonbathu',
        phonetics: ["59","௫௯","ஐம்பத்தொன்பது","aimpathonbathu"]
      },
      te: {
        digit: '౫౯',
        name: 'యాభై తొమ్మిది',
        translit: 'Yaabhai Tommidi',
        phonetics: ["59","౫౯","యాభై తొమ్మిది","yaabhai tommidi","yabhai tommidi"]
      },
      kn: {
        digit: '೫೯',
        name: 'ಐವತ್ತೊಂಬತ್ತು',
        translit: 'Aivattombattu',
        phonetics: ["59","೫೯","ಐವತ್ತೊಂಬತ್ತು","aivattombattu"]
      },
      ml: {
        digit: '൫൯',
        name: 'അമ്പത്തൊമ്പത്',
        translit: 'Ampathombathu',
        phonetics: ["59","൫൯","അമ്പത്തൊമ്പത്","ampathombathu"]
      },
      pa: {
        digit: '੫੯',
        name: 'ਉਨਾਹਠ',
        translit: 'Unaahath',
        phonetics: ["59","੫੯","ਉਨਾਹਠ","unaahath","unahath"]
      },
      or: {
        digit: '୫୯',
        name: 'ଅଣଷଠି',
        translit: 'Anashathi',
        phonetics: ["59","୫୯","ଅଣଷଠି","anashathi"]
      },
      sa: {
        digit: '५९',
        name: 'एकोनषष्टिः',
        translit: 'Ekonashashtih',
        phonetics: ["59","५९","एकोनषष्टिः","ekonashashtih"]
      },
      ur: {
        digit: '۵۹',
        name: 'انسٹھ',
        translit: 'Unsath',
        phonetics: ["59","۵۹","انسٹھ","unsath"]
      },
    },
    phonetics: {
      gu: ["59","૫૯","ઓગણસાઠ","ogansaath"],
      hi: ["59","५९","उनसठ","unsath"] 
    }
  },
  {
    english: 60,
    gujarati: '૬૦',
    gujaratiName: 'સાઠ',
    gujaratiTranslit: 'Saath',
    hindi: '६०',
    hindiName: 'साठ',
    hindiTranslit: 'Saath',
    languages: {
      hi: {
        digit: '६०',
        name: 'साठ',
        translit: 'Saath',
        phonetics: ["60","६०","साठ","saath","sath"]
      },
      gu: {
        digit: '૬૦',
        name: 'સાઠ',
        translit: 'Saath',
        phonetics: ["60","૬૦","સાઠ","saath","sath"]
      },
      mr: {
        digit: '६०',
        name: 'साठ',
        translit: 'Saath',
        phonetics: ["60","६०","साठ","saath","sath"]
      },
      bn: {
        digit: '৬০',
        name: 'ষাট',
        translit: 'Shaat',
        phonetics: ["60","৬০","ষাট","shaat","shat"]
      },
      ta: {
        digit: '௬௦',
        name: 'அறுபது',
        translit: 'Arupathu',
        phonetics: ["60","௬௦","அறுபது","arupathu"]
      },
      te: {
        digit: '౬౦',
        name: 'అరవై',
        translit: 'Aravai',
        phonetics: ["60","౬౦","అరవై","aravai"]
      },
      kn: {
        digit: '೬೦',
        name: 'ಅರವತ್ತು',
        translit: 'Aravattu',
        phonetics: ["60","೬೦","ಅರವತ್ತು","aravattu"]
      },
      ml: {
        digit: '൬൦',
        name: 'അറുപത്',
        translit: 'Arupathu',
        phonetics: ["60","൬൦","അറുപത്","arupathu"]
      },
      pa: {
        digit: '੬੦',
        name: 'ਸੱਠ',
        translit: 'Satth',
        phonetics: ["60","੬੦","ਸੱਠ","satth"]
      },
      or: {
        digit: '୬୦',
        name: 'ଷାଠିଏ',
        translit: 'Shaathie',
        phonetics: ["60","୬୦","ଷାଠିଏ","shaathie","shathie"]
      },
      sa: {
        digit: '६०',
        name: 'षष्टिः',
        translit: 'Shashtih',
        phonetics: ["60","६०","षष्टिः","shashtih"]
      },
      ur: {
        digit: '۶۰',
        name: 'ساٹھ',
        translit: 'Saath',
        phonetics: ["60","۶۰","ساٹھ","saath","sath"]
      },
    },
    phonetics: {
      gu: ["60","૬૦","સાઠ","saath"],
      hi: ["60","६०","साठ","saath"] 
    }
  },
  {
    english: 61,
    gujarati: '૬૧',
    gujaratiName: 'એકસઠ',
    gujaratiTranslit: 'Eksath',
    hindi: '६१',
    hindiName: 'इकसठ',
    hindiTranslit: 'Iksath',
    languages: {
      hi: {
        digit: '६१',
        name: 'इकसठ',
        translit: 'Iksath',
        phonetics: ["61","६१","इकसठ","iksath"]
      },
      gu: {
        digit: '૬૧',
        name: 'એકસઠ',
        translit: 'Eksath',
        phonetics: ["61","૬૧","એકસઠ","eksath"]
      },
      mr: {
        digit: '६१',
        name: 'एकसष्ठ',
        translit: 'Eksashtha',
        phonetics: ["61","६१","एकसष्ठ","eksashtha"]
      },
      bn: {
        digit: '৬১',
        name: 'একষট্টি',
        translit: 'Ekshotti',
        phonetics: ["61","৬১","একষট্টি","ekshotti"]
      },
      ta: {
        digit: '௬௧',
        name: 'அறுபத்தொன்று',
        translit: 'Arupathondru',
        phonetics: ["61","௬௧","அறுபத்தொன்று","arupathondru"]
      },
      te: {
        digit: '౬౧',
        name: 'అరవై ఒకటి',
        translit: 'Aravai Okati',
        phonetics: ["61","౬౧","అరవై ఒకటి","aravai okati"]
      },
      kn: {
        digit: '೬೧',
        name: 'ಅರವತ್ತೊಂದು',
        translit: 'Aravattondu',
        phonetics: ["61","೬೧","ಅರವತ್ತೊಂದು","aravattondu"]
      },
      ml: {
        digit: '൬൧',
        name: 'അറുപത്തൊന്ന്',
        translit: 'Arupathonnu',
        phonetics: ["61","൬൧","അറുപത്തൊന്ന്","arupathonnu"]
      },
      pa: {
        digit: '੬੧',
        name: 'ਇਕਾਹਠ',
        translit: 'Ikaahath',
        phonetics: ["61","੬੧","ਇਕਾਹਠ","ikaahath","ikahath"]
      },
      or: {
        digit: '୬୧',
        name: 'ଏକଷଠି',
        translit: 'Ekashathi',
        phonetics: ["61","୬୧","ଏକଷଠି","ekashathi"]
      },
      sa: {
        digit: '६१',
        name: 'एकषष्टिः',
        translit: 'Ekashashtih',
        phonetics: ["61","६१","एकषष्टिः","ekashashtih"]
      },
      ur: {
        digit: '۶۱',
        name: 'اکسٹھ',
        translit: 'Iksath',
        phonetics: ["61","۶۱","اکسٹھ","iksath"]
      },
    },
    phonetics: {
      gu: ["61","૬૧","એકસઠ","eksath"],
      hi: ["61","६१","इकसठ","iksath"] 
    }
  },
  {
    english: 62,
    gujarati: '૬૨',
    gujaratiName: 'બાસઠ',
    gujaratiTranslit: 'Baasath',
    hindi: '६२',
    hindiName: 'बासठ',
    hindiTranslit: 'Baasath',
    languages: {
      hi: {
        digit: '६२',
        name: 'बासठ',
        translit: 'Baasath',
        phonetics: ["62","६२","बासठ","baasath","basath"]
      },
      gu: {
        digit: '૬૨',
        name: 'બાસઠ',
        translit: 'Baasath',
        phonetics: ["62","૬૨","બાસઠ","baasath","basath"]
      },
      mr: {
        digit: '६२',
        name: 'बासष्ठ',
        translit: 'Baasashtha',
        phonetics: ["62","६२","बासष्ठ","baasashtha","basashtha"]
      },
      bn: {
        digit: '৬২',
        name: 'বাষট্টি',
        translit: 'Bashotti',
        phonetics: ["62","৬২","বাষট্টি","bashotti"]
      },
      ta: {
        digit: '௬௨',
        name: 'அறுபத்திரண்டு',
        translit: 'Arupathirandu',
        phonetics: ["62","௬௨","அறுபத்திரண்டு","arupathirandu"]
      },
      te: {
        digit: '౬౨',
        name: 'అరవై రెండు',
        translit: 'Aravai Rendu',
        phonetics: ["62","౬౨","అరవై రెండు","aravai rendu"]
      },
      kn: {
        digit: '೬೨',
        name: 'ಅರವತ್ತೆರಡು',
        translit: 'Aravatteradu',
        phonetics: ["62","೬೨","ಅರವತ್ತೆರಡು","aravatteradu"]
      },
      ml: {
        digit: '൬൨',
        name: 'അറുപത്തിരണ്ട്',
        translit: 'Arupathirandu',
        phonetics: ["62","൬൨","അറുപത്തിരണ്ട്","arupathirandu"]
      },
      pa: {
        digit: '੬੨',
        name: 'ਬਾਹਠ',
        translit: 'Baahath',
        phonetics: ["62","੬੨","ਬਾਹਠ","baahath","bahath"]
      },
      or: {
        digit: '୬୨',
        name: 'ବାଷଠି',
        translit: 'Baashathi',
        phonetics: ["62","୬୨","ବାଷଠି","baashathi","bashathi"]
      },
      sa: {
        digit: '६२',
        name: 'द्विषष्टिः',
        translit: 'Dvishashtih',
        phonetics: ["62","६२","द्विषष्टिः","dvishashtih"]
      },
      ur: {
        digit: '۶۲',
        name: 'باسٹھ',
        translit: 'Baasath',
        phonetics: ["62","۶۲","باسٹھ","baasath","basath"]
      },
    },
    phonetics: {
      gu: ["62","૬૨","બાસઠ","baasath"],
      hi: ["62","६२","बासठ","baasath"] 
    }
  },
  {
    english: 63,
    gujarati: '૬૩',
    gujaratiName: 'તેસઠ',
    gujaratiTranslit: 'Tesath',
    hindi: '६३',
    hindiName: 'तिरसठ',
    hindiTranslit: 'Tirsath',
    languages: {
      hi: {
        digit: '६३',
        name: 'तिरसठ',
        translit: 'Tirsath',
        phonetics: ["63","६३","तिरसठ","tirsath"]
      },
      gu: {
        digit: '૬૩',
        name: 'તેસઠ',
        translit: 'Tesath',
        phonetics: ["63","૬૩","તેસઠ","tesath"]
      },
      mr: {
        digit: '६३',
        name: 'त्रेसष्ठ',
        translit: 'Tresashtha',
        phonetics: ["63","६३","त्रेसष्ठ","tresashtha"]
      },
      bn: {
        digit: '৬৩',
        name: 'তেষট্টি',
        translit: 'Teshotti',
        phonetics: ["63","৬৩","তেষট্টি","teshotti"]
      },
      ta: {
        digit: '௬௩',
        name: 'அறுபத்துமூன்று',
        translit: 'Arupathumoondru',
        phonetics: ["63","௬௩","அறுபத்துமூன்று","arupathumoondru","arupathumundru"]
      },
      te: {
        digit: '౬౩',
        name: 'అరవై మూడు',
        translit: 'Aravai Moodu',
        phonetics: ["63","౬౩","అరవై మూడు","aravai moodu","aravai mudu"]
      },
      kn: {
        digit: '೬೩',
        name: 'ಅರವತ್ತಮೂರು',
        translit: 'Aravattmooru',
        phonetics: ["63","೬೩","ಅರವತ್ತಮೂರು","aravattmooru","aravattmuru"]
      },
      ml: {
        digit: '൬൩',
        name: 'അറുപത്തിമൂന്ന്',
        translit: 'Arupathimoonnu',
        phonetics: ["63","൬൩","അറുപത്തിമൂന്ന്","arupathimoonnu","arupathimunnu"]
      },
      pa: {
        digit: '੬੩',
        name: 'ਤਰੇਹਠ',
        translit: 'Trehath',
        phonetics: ["63","੬੩","ਤਰੇਹਠ","trehath"]
      },
      or: {
        digit: '୬୩',
        name: 'ତେଷଠି',
        translit: 'Teshathi',
        phonetics: ["63","୬୩","ତେଷଠି","teshathi"]
      },
      sa: {
        digit: '६३',
        name: 'त्रिषष्टिः',
        translit: 'Trishashtih',
        phonetics: ["63","६३","त्रिषष्टिः","trishashtih"]
      },
      ur: {
        digit: '۶۳',
        name: 'تریسٹھ',
        translit: 'Tirsath',
        phonetics: ["63","۶۳","تریسٹھ","tirsath"]
      },
    },
    phonetics: {
      gu: ["63","૬૩","તેસઠ","tesath"],
      hi: ["63","६३","तिरसठ","tirsath"] 
    }
  },
  {
    english: 64,
    gujarati: '૬૪',
    gujaratiName: 'ચોસઠ',
    gujaratiTranslit: 'Chosath',
    hindi: '६४',
    hindiName: 'चौंसठ',
    hindiTranslit: 'Chaunsath',
    languages: {
      hi: {
        digit: '६४',
        name: 'चौंसठ',
        translit: 'Chaunsath',
        phonetics: ["64","६४","चौंसठ","chaunsath"]
      },
      gu: {
        digit: '૬૪',
        name: 'ચોસઠ',
        translit: 'Chosath',
        phonetics: ["64","૬૪","ચોસઠ","chosath"]
      },
      mr: {
        digit: '६४',
        name: 'चौसष्ठ',
        translit: 'Chausashtha',
        phonetics: ["64","६४","चौसष्ठ","chausashtha"]
      },
      bn: {
        digit: '৬৪',
        name: 'চৌষট্টি',
        translit: 'Choushotti',
        phonetics: ["64","৬৪","চৌষট্টি","choushotti"]
      },
      ta: {
        digit: '௬௪',
        name: 'அறுபத்துநான்கு',
        translit: 'Arupathunaangu',
        phonetics: ["64","௬௪","அறுபத்துநான்கு","arupathunaangu","arupathunangu"]
      },
      te: {
        digit: '౬౪',
        name: 'అరవై నాలుగు',
        translit: 'Aravai Naalugu',
        phonetics: ["64","౬౪","అరవై నాలుగు","aravai naalugu","aravai nalugu"]
      },
      kn: {
        digit: '೬೪',
        name: 'ಅರವತ್ತನಾಲ್ಕು',
        translit: 'Aravattnaalku',
        phonetics: ["64","೬೪","ಅರವತ್ತನಾಲ್ಕು","aravattnaalku","aravattnalku"]
      },
      ml: {
        digit: '൬൪',
        name: 'അറുപത്തിനാല്',
        translit: 'Arupathinaalu',
        phonetics: ["64","൬൪","അറുപത്തിനാല്","arupathinaalu","arupathinalu"]
      },
      pa: {
        digit: '੬੪',
        name: 'ਚੌਂਹਠ',
        translit: 'Chaunhath',
        phonetics: ["64","੬੪","ਚੌਂਹਠ","chaunhath"]
      },
      or: {
        digit: '୬୪',
        name: 'ଚଉଷଠି',
        translit: 'Chaushathi',
        phonetics: ["64","୬୪","ଚଉଷଠି","chaushathi"]
      },
      sa: {
        digit: '६४',
        name: 'चतुःषष्टिः',
        translit: 'Chatuhshashtih',
        phonetics: ["64","६४","चतुःषष्टिः","chatuhshashtih"]
      },
      ur: {
        digit: '۶۴',
        name: 'چونسٹھ',
        translit: 'Chaunsath',
        phonetics: ["64","۶۴","چونسٹھ","chaunsath"]
      },
    },
    phonetics: {
      gu: ["64","૬૪","ચોસઠ","chosath"],
      hi: ["64","६४","चौंसठ","chaunsath"] 
    }
  },
  {
    english: 65,
    gujarati: '૬૫',
    gujaratiName: 'પાંસઠ',
    gujaratiTranslit: 'Paansath',
    hindi: '६५',
    hindiName: 'पैंसठ',
    hindiTranslit: 'Painsath',
    languages: {
      hi: {
        digit: '६५',
        name: 'पैंसठ',
        translit: 'Painsath',
        phonetics: ["65","६५","पैंसठ","painsath"]
      },
      gu: {
        digit: '૬૫',
        name: 'પાંસઠ',
        translit: 'Paansath',
        phonetics: ["65","૬૫","પાંસઠ","paansath","pansath"]
      },
      mr: {
        digit: '६५',
        name: 'पासष्ठ',
        translit: 'Paasashtha',
        phonetics: ["65","६५","पासष्ठ","paasashtha","pasashtha"]
      },
      bn: {
        digit: '৬৫',
        name: 'পঁয়ষট্টি',
        translit: 'Põyshotti',
        phonetics: ["65","৬৫","পঁয়ষট্টি","põyshotti"]
      },
      ta: {
        digit: '௬௫',
        name: 'அறுபத்தைந்து',
        translit: 'Arupathainthu',
        phonetics: ["65","௬௫","அறுபத்தைந்து","arupathainthu"]
      },
      te: {
        digit: '౬౫',
        name: 'అరవై ఐదు',
        translit: 'Aravai Aidu',
        phonetics: ["65","౬౫","అరవై ఐదు","aravai aidu"]
      },
      kn: {
        digit: '೬೫',
        name: 'ಅರವತ್ತೈದು',
        translit: 'Aravattaidu',
        phonetics: ["65","೬೫","ಅರವತ್ತೈದು","aravattaidu"]
      },
      ml: {
        digit: '൬൫',
        name: 'അറുപത്തഞ്ച്',
        translit: 'Arupathanchu',
        phonetics: ["65","൬൫","അറുപത്തഞ്ച്","arupathanchu"]
      },
      pa: {
        digit: '੬੫',
        name: 'ਪੈਂਹਠ',
        translit: 'Painhath',
        phonetics: ["65","੬੫","ਪੈਂਹਠ","painhath"]
      },
      or: {
        digit: '୬୫',
        name: 'ପଞ୍ଚଷଠି',
        translit: 'Panchashathi',
        phonetics: ["65","୬୫","ପଞ୍ଚଷଠି","panchashathi"]
      },
      sa: {
        digit: '६५',
        name: 'पञ्चषष्टिः',
        translit: 'Panchashashtih',
        phonetics: ["65","६५","पञ्चषष्टिः","panchashashtih"]
      },
      ur: {
        digit: '۶۵',
        name: 'پینسٹھ',
        translit: 'Painsath',
        phonetics: ["65","۶۵","پینسٹھ","painsath"]
      },
    },
    phonetics: {
      gu: ["65","૬૫","પાંસઠ","paansath"],
      hi: ["65","६५","पैंसठ","painsath"] 
    }
  },
  {
    english: 66,
    gujarati: '૬૬',
    gujaratiName: 'છાસઠ',
    gujaratiTranslit: 'Chhaasath',
    hindi: '६६',
    hindiName: 'छियासठ',
    hindiTranslit: 'Chhiyaasath',
    languages: {
      hi: {
        digit: '६६',
        name: 'छियासठ',
        translit: 'Chhiyaasath',
        phonetics: ["66","६६","छियासठ","chhiyaasath","chhiyasath"]
      },
      gu: {
        digit: '૬૬',
        name: 'છાસઠ',
        translit: 'Chhaasath',
        phonetics: ["66","૬૬","છાસઠ","chhaasath","chhasath"]
      },
      mr: {
        digit: '६६',
        name: 'छासष्ठ',
        translit: 'Chhaasashtha',
        phonetics: ["66","६६","छासष्ठ","chhaasashtha","chhasashtha"]
      },
      bn: {
        digit: '৬৬',
        name: 'ছেষট্টি',
        translit: 'Chheshotti',
        phonetics: ["66","৬৬","ছেষট্টি","chheshotti"]
      },
      ta: {
        digit: '௬௬',
        name: 'அறுபத்தாறு',
        translit: 'Arupathaaru',
        phonetics: ["66","௬௬","அறுபத்தாறு","arupathaaru","arupatharu"]
      },
      te: {
        digit: '౬౬',
        name: 'అరవై ఆరు',
        translit: 'Aravai Aaru',
        phonetics: ["66","౬౬","అరవై ఆరు","aravai aaru","aravai aru"]
      },
      kn: {
        digit: '೬೬',
        name: 'ಅರವತ್ತಾರು',
        translit: 'Aravattaaru',
        phonetics: ["66","೬೬","ಅರವತ್ತಾರು","aravattaaru","aravattaru"]
      },
      ml: {
        digit: '൬൬',
        name: 'അറുപത്താറ്',
        translit: 'Arupathaaru',
        phonetics: ["66","൬൬","അറുപത്താറ്","arupathaaru","arupatharu"]
      },
      pa: {
        digit: '੬੬',
        name: 'ਛਿਆਹਠ',
        translit: 'Chhiyaahath',
        phonetics: ["66","੬੬","ਛਿਆਹਠ","chhiyaahath","chhiyahath"]
      },
      or: {
        digit: '୬୬',
        name: 'ଛଅଷଠି',
        translit: 'Chhaashathi',
        phonetics: ["66","୬୬","ଛଅଷଠି","chhaashathi","chhashathi"]
      },
      sa: {
        digit: '६६',
        name: 'षट्षष्टिः',
        translit: 'Shatshashtih',
        phonetics: ["66","६६","षट्षष्टिः","shatshashtih"]
      },
      ur: {
        digit: '۶۶',
        name: 'چھیاسٹھ',
        translit: 'Chhiyaasath',
        phonetics: ["66","۶۶","چھیاسٹھ","chhiyaasath","chhiyasath"]
      },
    },
    phonetics: {
      gu: ["66","૬૬","છાસઠ","chhaasath"],
      hi: ["66","६६","छियासठ","chhiyaasath"] 
    }
  },
  {
    english: 67,
    gujarati: '૬૭',
    gujaratiName: 'સડસઠ',
    gujaratiTranslit: 'Sadsath',
    hindi: '६७',
    hindiName: 'सड़सठ',
    hindiTranslit: 'Sadsath',
    languages: {
      hi: {
        digit: '६७',
        name: 'सड़सठ',
        translit: 'Sadsath',
        phonetics: ["67","६७","सड़सठ","sadsath"]
      },
      gu: {
        digit: '૬૭',
        name: 'સડસઠ',
        translit: 'Sadsath',
        phonetics: ["67","૬૭","સડસઠ","sadsath"]
      },
      mr: {
        digit: '६७',
        name: 'सदसष्ठ',
        translit: 'Sadsashtha',
        phonetics: ["67","६७","सदसष्ठ","sadsashtha"]
      },
      bn: {
        digit: '৬৭',
        name: 'সাতষট্টি',
        translit: 'Saatshotti',
        phonetics: ["67","৬৭","সাতষট্টি","saatshotti","satshotti"]
      },
      ta: {
        digit: '௬௭',
        name: 'அறுபத்தேழு',
        translit: 'Arupathezhu',
        phonetics: ["67","௬௭","அறுபத்தேழு","arupathezhu"]
      },
      te: {
        digit: '౬౭',
        name: 'అరవై ఏడు',
        translit: 'Aravai Eedu',
        phonetics: ["67","౬౭","అరవై ఏడు","aravai eedu","aravai idu"]
      },
      kn: {
        digit: '೬೭',
        name: 'ಅರವತ್ತೇಳು',
        translit: 'Aravatteelu',
        phonetics: ["67","೬೭","ಅರವತ್ತೇಳು","aravatteelu","aravattilu"]
      },
      ml: {
        digit: '൬൭',
        name: 'അറുപത്തേഴ്',
        translit: 'Arupathezhu',
        phonetics: ["67","൬൭","അറുപത്തേഴ്","arupathezhu"]
      },
      pa: {
        digit: '੬੭',
        name: 'ਸਤਾਹਠ',
        translit: 'Sataahath',
        phonetics: ["67","੬੭","ਸਤਾਹਠ","sataahath","satahath"]
      },
      or: {
        digit: '୬୭',
        name: 'ସତଷଠି',
        translit: 'Satashathi',
        phonetics: ["67","୬୭","ସତଷଠି","satashathi"]
      },
      sa: {
        digit: '६७',
        name: 'सप्तषष्टिः',
        translit: 'Saptashashtih',
        phonetics: ["67","६७","सप्तषष्टिः","saptashashtih"]
      },
      ur: {
        digit: '۶۷',
        name: 'سڑسٹھ',
        translit: 'Sadsath',
        phonetics: ["67","۶۷","سڑسٹھ","sadsath"]
      },
    },
    phonetics: {
      gu: ["67","૬૭","સડસઠ","sadsath"],
      hi: ["67","६७","सड़सठ","sadsath"] 
    }
  },
  {
    english: 68,
    gujarati: '૬૮',
    gujaratiName: 'અડસઠ',
    gujaratiTranslit: 'Adsath',
    hindi: '६८',
    hindiName: 'अड़सठ',
    hindiTranslit: 'Adsath',
    languages: {
      hi: {
        digit: '६८',
        name: 'अड़सठ',
        translit: 'Adsath',
        phonetics: ["68","६८","अड़सठ","adsath"]
      },
      gu: {
        digit: '૬૮',
        name: 'અડસઠ',
        translit: 'Adsath',
        phonetics: ["68","૬૮","અડસઠ","adsath"]
      },
      mr: {
        digit: '६८',
        name: 'अडसष्ठ',
        translit: 'Adsashtha',
        phonetics: ["68","६८","अडसष्ठ","adsashtha"]
      },
      bn: {
        digit: '৬৮',
        name: 'আটষট্টি',
        translit: 'Aatshotti',
        phonetics: ["68","৬৮","আটষট্টি","aatshotti","atshotti"]
      },
      ta: {
        digit: '௬௮',
        name: 'அறுபத்தெட்டு',
        translit: 'Arupathettu',
        phonetics: ["68","௬௮","அறுபத்தெட்டு","arupathettu"]
      },
      te: {
        digit: '౬౮',
        name: 'అరవై ఎనిమిది',
        translit: 'Aravai Enimidi',
        phonetics: ["68","౬౮","అరవై ఎనిమిది","aravai enimidi"]
      },
      kn: {
        digit: '೬೮',
        name: 'ಅರವತ್ತೆಂಟು',
        translit: 'Aravattentu',
        phonetics: ["68","೬೮","ಅರವತ್ತೆಂಟು","aravattentu"]
      },
      ml: {
        digit: '൬൮',
        name: 'അറുപത്തെട്ട്',
        translit: 'Arupathettu',
        phonetics: ["68","൬൮","അറുപത്തെട്ട്","arupathettu"]
      },
      pa: {
        digit: '੬੮',
        name: 'ਅਠਾਹਠ',
        translit: 'Athaahath',
        phonetics: ["68","੬੮","ਅਠਾਹਠ","athaahath","athahath"]
      },
      or: {
        digit: '୬୮',
        name: 'ଅଠଷଠି',
        translit: 'Athashathi',
        phonetics: ["68","୬୮","ଅଠଷଠି","athashathi"]
      },
      sa: {
        digit: '६८',
        name: 'अष्टषष्टिः',
        translit: 'Ashtashashtih',
        phonetics: ["68","६८","अष्टषष्टिः","ashtashashtih"]
      },
      ur: {
        digit: '۶۸',
        name: 'اڑسٹھ',
        translit: 'Adsath',
        phonetics: ["68","۶۸","اڑسٹھ","adsath"]
      },
    },
    phonetics: {
      gu: ["68","૬૮","અડસઠ","adsath"],
      hi: ["68","६८","अड़सठ","adsath"] 
    }
  },
  {
    english: 69,
    gujarati: '૬૯',
    gujaratiName: 'અગણોસિત્તેર',
    gujaratiTranslit: 'Agnositter',
    hindi: '६९',
    hindiName: 'उनहत्तर',
    hindiTranslit: 'Unhattar',
    languages: {
      hi: {
        digit: '६९',
        name: 'उनहत्तर',
        translit: 'Unhattar',
        phonetics: ["69","६९","उनहत्तर","unhattar"]
      },
      gu: {
        digit: '૬૯',
        name: 'અગણોસિત્તેર',
        translit: 'Agnositter',
        phonetics: ["69","૬૯","અગણોસિત્તેર","agnositter"]
      },
      mr: {
        digit: '६९',
        name: 'एकोणसत्तर',
        translit: 'Ekonsattar',
        phonetics: ["69","६९","एकोणसत्तर","ekonsattar"]
      },
      bn: {
        digit: '৬৯',
        name: 'উনসত্তর',
        translit: 'Unosottor',
        phonetics: ["69","৬৯","উনসত্তর","unosottor"]
      },
      ta: {
        digit: '௬௯',
        name: 'அறுபத்தொன்பது',
        translit: 'Arupathonbathu',
        phonetics: ["69","௬௯","அறுபத்தொன்பது","arupathonbathu"]
      },
      te: {
        digit: '౬౯',
        name: 'అరవై తొమ్మిది',
        translit: 'Aravai Tommidi',
        phonetics: ["69","౬౯","అరవై తొమ్మిది","aravai tommidi"]
      },
      kn: {
        digit: '೬೯',
        name: 'ಅರವತ್ತೊಂಬತ್ತು',
        translit: 'Aravattombattu',
        phonetics: ["69","೬೯","ಅರವತ್ತೊಂಬತ್ತು","aravattombattu"]
      },
      ml: {
        digit: '൬൯',
        name: 'അറുപത്തൊമ്പത്',
        translit: 'Arupathombathu',
        phonetics: ["69","൬൯","അറുപത്തൊമ്പത്","arupathombathu"]
      },
      pa: {
        digit: '੬੯',
        name: 'ਉਨੱਤਰ',
        translit: 'Unattar',
        phonetics: ["69","੬੯","ਉਨੱਤਰ","unattar"]
      },
      or: {
        digit: '୬୯',
        name: 'ଅଣସ୍ତରୀ',
        translit: 'Anastari',
        phonetics: ["69","୬୯","ଅଣସ୍ତରୀ","anastari"]
      },
      sa: {
        digit: '६९',
        name: 'एकोनसप्ततिः',
        translit: 'Ekonasaptatih',
        phonetics: ["69","६९","एकोनसप्ततिः","ekonasaptatih"]
      },
      ur: {
        digit: '۶۹',
        name: 'انہتر',
        translit: 'Unhattar',
        phonetics: ["69","۶۹","انہتر","unhattar"]
      },
    },
    phonetics: {
      gu: ["69","૬૯","અગણોસિત્તેર","agnositter"],
      hi: ["69","६९","उनहत्तर","unhattar"] 
    }
  },
  {
    english: 70,
    gujarati: '૭૦',
    gujaratiName: 'સિત્તેર',
    gujaratiTranslit: 'Sitter',
    hindi: '७०',
    hindiName: 'सत्तर',
    hindiTranslit: 'Sattar',
    languages: {
      hi: {
        digit: '७०',
        name: 'सत्तर',
        translit: 'Sattar',
        phonetics: ["70","७०","सत्तर","sattar"]
      },
      gu: {
        digit: '૭૦',
        name: 'સિત્તેર',
        translit: 'Sitter',
        phonetics: ["70","૭૦","સિત્તેર","sitter"]
      },
      mr: {
        digit: '७०',
        name: 'सत्तर',
        translit: 'Sattar',
        phonetics: ["70","७०","सत्तर","sattar"]
      },
      bn: {
        digit: '৭০',
        name: 'সত্তর',
        translit: 'Sottor',
        phonetics: ["70","৭০","সত্তর","sottor"]
      },
      ta: {
        digit: '௭௦',
        name: 'எழுபது',
        translit: 'Ezhupathu',
        phonetics: ["70","௭௦","எழுபது","ezhupathu"]
      },
      te: {
        digit: '౭౦',
        name: 'డెబ్బై',
        translit: 'Debbai',
        phonetics: ["70","౭౦","డెబ్బై","debbai"]
      },
      kn: {
        digit: '೭೦',
        name: 'ಎಪ್ಪತ್ತು',
        translit: 'Eppattu',
        phonetics: ["70","೭೦","ಎಪ್ಪತ್ತು","eppattu"]
      },
      ml: {
        digit: '൭൦',
        name: 'എഴുപത്',
        translit: 'Ezhupathu',
        phonetics: ["70","൭൦","എഴുപത്","ezhupathu"]
      },
      pa: {
        digit: '੭੦',
        name: 'ਸੱਤਰ',
        translit: 'Sattar',
        phonetics: ["70","੭੦","ਸੱਤਰ","sattar"]
      },
      or: {
        digit: '୭୦',
        name: 'ସତୁରି',
        translit: 'Saturi',
        phonetics: ["70","୭୦","ସତୁରି","saturi"]
      },
      sa: {
        digit: '७०',
        name: 'सप्ततिः',
        translit: 'Saptatih',
        phonetics: ["70","७०","सप्ततिः","saptatih"]
      },
      ur: {
        digit: '۷۰',
        name: 'ستر',
        translit: 'Sattar',
        phonetics: ["70","۷۰","ستر","sattar"]
      },
    },
    phonetics: {
      gu: ["70","૭૦","સિત્તેર","sitter"],
      hi: ["70","७०","सत्तर","sattar"] 
    }
  },
  {
    english: 71,
    gujarati: '૭૧',
    gujaratiName: 'એકોતેર',
    gujaratiTranslit: 'Ekoter',
    hindi: '७१',
    hindiName: 'इकहत्तर',
    hindiTranslit: 'Ikhattar',
    languages: {
      hi: {
        digit: '७१',
        name: 'इकहत्तर',
        translit: 'Ikhattar',
        phonetics: ["71","७१","इकहत्तर","ikhattar"]
      },
      gu: {
        digit: '૭૧',
        name: 'એકોતેર',
        translit: 'Ekoter',
        phonetics: ["71","૭૧","એકોતેર","ekoter"]
      },
      mr: {
        digit: '७१',
        name: 'एकाहत्तर',
        translit: 'Ekaahattar',
        phonetics: ["71","७१","एकाहत्तर","ekaahattar","ekahattar"]
      },
      bn: {
        digit: '৭১',
        name: 'একাত্তর',
        translit: 'Ekattor',
        phonetics: ["71","৭১","একাত্তর","ekattor"]
      },
      ta: {
        digit: '௭௧',
        name: 'எழுபத்தொன்று',
        translit: 'Ezhupathondru',
        phonetics: ["71","௭௧","எழுபத்தொன்று","ezhupathondru"]
      },
      te: {
        digit: '౭౧',
        name: 'డెబ్బై ఒకటి',
        translit: 'Debbai Okati',
        phonetics: ["71","౭౧","డెబ్బై ఒకటి","debbai okati"]
      },
      kn: {
        digit: '೭೧',
        name: 'ಎಪ್ಪತ್ತೊಂದು',
        translit: 'Eppattondu',
        phonetics: ["71","೭೧","ಎಪ್ಪತ್ತೊಂದು","eppattondu"]
      },
      ml: {
        digit: '൭൧',
        name: 'എഴുപത്തൊന്ന്',
        translit: 'Ezhupathonnu',
        phonetics: ["71","൭൧","എഴുപത്തൊന്ന്","ezhupathonnu"]
      },
      pa: {
        digit: '੭੧',
        name: 'ਇਕੱਹਤਰ',
        translit: 'Ikhattar',
        phonetics: ["71","੭੧","ਇਕੱਹਤਰ","ikhattar"]
      },
      or: {
        digit: '୭୧',
        name: 'ଏକସ୍ତରୀ',
        translit: 'Ekastari',
        phonetics: ["71","୭୧","ଏକସ୍ତରୀ","ekastari"]
      },
      sa: {
        digit: '७१',
        name: 'एकसप्ततिः',
        translit: 'Ekasaptatih',
        phonetics: ["71","७१","एकसप्ततिः","ekasaptatih"]
      },
      ur: {
        digit: '۷۱',
        name: 'اکہتر',
        translit: 'Ikhattar',
        phonetics: ["71","۷۱","اکہتر","ikhattar"]
      },
    },
    phonetics: {
      gu: ["71","૭૧","એકોતેર","ekoter"],
      hi: ["71","७१","इकहत्तर","ikhattar"] 
    }
  },
  {
    english: 72,
    gujarati: '૭૨',
    gujaratiName: 'બોતેર',
    gujaratiTranslit: 'Boter',
    hindi: '७२',
    hindiName: 'बहत्तर',
    hindiTranslit: 'Bahattar',
    languages: {
      hi: {
        digit: '७२',
        name: 'बहत्तर',
        translit: 'Bahattar',
        phonetics: ["72","७२","बहत्तर","bahattar"]
      },
      gu: {
        digit: '૭૨',
        name: 'બોતેર',
        translit: 'Boter',
        phonetics: ["72","૭૨","બોતેર","boter"]
      },
      mr: {
        digit: '७२',
        name: 'बहात्तर',
        translit: 'Bahaattar',
        phonetics: ["72","७२","बहात्तर","bahaattar","bahattar"]
      },
      bn: {
        digit: '৭২',
        name: 'বাহাত্তর',
        translit: 'Bahattor',
        phonetics: ["72","৭২","বাহাত্তর","bahattor"]
      },
      ta: {
        digit: '௭௨',
        name: 'எழுபத்திரண்டு',
        translit: 'Ezhupathirandu',
        phonetics: ["72","௭௨","எழுபத்திரண்டு","ezhupathirandu"]
      },
      te: {
        digit: '౭౨',
        name: 'డెబ్బై రెండు',
        translit: 'Debbai Rendu',
        phonetics: ["72","౭౨","డెబ్బై రెండు","debbai rendu"]
      },
      kn: {
        digit: '೭೨',
        name: 'ಎಪ್ಪತ್ತೆರಡು',
        translit: 'Eppatteradu',
        phonetics: ["72","೭೨","ಎಪ್ಪತ್ತೆರಡು","eppatteradu"]
      },
      ml: {
        digit: '൭൨',
        name: 'എഴുപത്തിരണ്ട്',
        translit: 'Ezhupathirandu',
        phonetics: ["72","൭൨","എഴുപത്തിരണ്ട്","ezhupathirandu"]
      },
      pa: {
        digit: '੭੨',
        name: 'ਬਹੱਤਰ',
        translit: 'Bahattar',
        phonetics: ["72","੭੨","ਬਹੱਤਰ","bahattar"]
      },
      or: {
        digit: '୭୨',
        name: 'ବାହସ୍ତରୀ',
        translit: 'Baahastari',
        phonetics: ["72","୭୨","ବାହସ୍ତରୀ","baahastari","bahastari"]
      },
      sa: {
        digit: '७२',
        name: 'द्विसप्ततिः',
        translit: 'Dvisaptatih',
        phonetics: ["72","७२","द्विसप्ततिः","dvisaptatih"]
      },
      ur: {
        digit: '۷۲',
        name: 'بہتر',
        translit: 'Bahattar',
        phonetics: ["72","۷۲","بہتر","bahattar"]
      },
    },
    phonetics: {
      gu: ["72","૭૨","બોતેર","boter"],
      hi: ["72","७२","बहत्तर","bahattar"] 
    }
  },
  {
    english: 73,
    gujarati: '૭૩',
    gujaratiName: 'તોતેર',
    gujaratiTranslit: 'Toter',
    hindi: '७३',
    hindiName: 'तिहत्तर',
    hindiTranslit: 'Tihattar',
    languages: {
      hi: {
        digit: '७३',
        name: 'तिहत्तर',
        translit: 'Tihattar',
        phonetics: ["73","७३","तिहत्तर","tihattar"]
      },
      gu: {
        digit: '૭૩',
        name: 'તોતેર',
        translit: 'Toter',
        phonetics: ["73","૭૩","તોતેર","toter"]
      },
      mr: {
        digit: '७३',
        name: 'त्र्याहत्तर',
        translit: 'Tryaahattar',
        phonetics: ["73","७३","त्र्याहत्तर","tryaahattar","tryahattar"]
      },
      bn: {
        digit: '৭৩',
        name: 'তিয়াত্তর',
        translit: 'Tiyattor',
        phonetics: ["73","৭৩","তিয়াত্তর","tiyattor"]
      },
      ta: {
        digit: '௭௩',
        name: 'எழுபத்துமூன்று',
        translit: 'Ezhupathumoondru',
        phonetics: ["73","௭௩","எழுபத்துமூன்று","ezhupathumoondru","ezhupathumundru"]
      },
      te: {
        digit: '౭౩',
        name: 'డెబ్బై మూడు',
        translit: 'Debbai Moodu',
        phonetics: ["73","౭౩","డెబ్బై మూడు","debbai moodu","debbai mudu"]
      },
      kn: {
        digit: '೭೩',
        name: 'ಎಪ್ಪತ್ತಮೂರು',
        translit: 'Eppattmooru',
        phonetics: ["73","೭೩","ಎಪ್ಪತ್ತಮೂರು","eppattmooru","eppattmuru"]
      },
      ml: {
        digit: '൭൩',
        name: 'എഴുപത്തിമൂന്ന്',
        translit: 'Ezhupathimoonnu',
        phonetics: ["73","൭൩","എഴുപത്തിമൂന്ന്","ezhupathimoonnu","ezhupathimunnu"]
      },
      pa: {
        digit: '੭੩',
        name: 'ਤਿਹੱਤਰ',
        translit: 'Tihattar',
        phonetics: ["73","੭੩","ਤਿਹੱਤਰ","tihattar"]
      },
      or: {
        digit: '୭୩',
        name: 'ତେସ୍ତରୀ',
        translit: 'Testari',
        phonetics: ["73","୭୩","ତେସ୍ତରୀ","testari"]
      },
      sa: {
        digit: '७३',
        name: 'त्रिसप्ततिः',
        translit: 'Trisaptatih',
        phonetics: ["73","७३","त्रिसप्ततिः","trisaptatih"]
      },
      ur: {
        digit: '۷۳',
        name: 'تہتر',
        translit: 'Tihattar',
        phonetics: ["73","۷۳","تہتر","tihattar"]
      },
    },
    phonetics: {
      gu: ["73","૭૩","તોતેર","toter"],
      hi: ["73","७३","तिहत्तर","tihattar"] 
    }
  },
  {
    english: 74,
    gujarati: '૭૪',
    gujaratiName: 'ચુંમોતેર',
    gujaratiTranslit: 'Chummoter',
    hindi: '७४',
    hindiName: 'चौहत्तर',
    hindiTranslit: 'Chauhattar',
    languages: {
      hi: {
        digit: '७४',
        name: 'चौहत्तर',
        translit: 'Chauhattar',
        phonetics: ["74","७४","चौहत्तर","chauhattar"]
      },
      gu: {
        digit: '૭૪',
        name: 'ચુંમોતેર',
        translit: 'Chummoter',
        phonetics: ["74","૭૪","ચુંમોતેર","chummoter"]
      },
      mr: {
        digit: '७४',
        name: 'चौऱ्याहत्तर',
        translit: 'Chouryaahattar',
        phonetics: ["74","७४","चौऱ्याहत्तर","chouryaahattar","chouryahattar"]
      },
      bn: {
        digit: '৭৪',
        name: 'চুয়াত্তর',
        translit: 'Chuyattor',
        phonetics: ["74","৭৪","চুয়াত্তর","chuyattor"]
      },
      ta: {
        digit: '௭௪',
        name: 'எழுபத்துநான்கு',
        translit: 'Ezhupathunaangu',
        phonetics: ["74","௭௪","எழுபத்துநான்கு","ezhupathunaangu","ezhupathunangu"]
      },
      te: {
        digit: '౭౪',
        name: 'డెబ్బై నాలుగు',
        translit: 'Debbai Naalugu',
        phonetics: ["74","౭౪","డెబ్బై నాలుగు","debbai naalugu","debbai nalugu"]
      },
      kn: {
        digit: '೭೪',
        name: 'ಎಪ್ಪತ್ತನಾಲ್ಕು',
        translit: 'Eppattnaalku',
        phonetics: ["74","೭೪","ಎಪ್ಪತ್ತನಾಲ್ಕು","eppattnaalku","eppattnalku"]
      },
      ml: {
        digit: '൭൪',
        name: 'എഴുപത്തിനാല്',
        translit: 'Ezhupathinaalu',
        phonetics: ["74","൭൪","എഴുപത്തിനാല്","ezhupathinaalu","ezhupathinalu"]
      },
      pa: {
        digit: '੭੪',
        name: 'ਚੌਹੱਤਰ',
        translit: 'Chauhattar',
        phonetics: ["74","੭੪","ਚੌਹੱਤਰ","chauhattar"]
      },
      or: {
        digit: '୭୪',
        name: 'ଚଉସ୍ତରୀ',
        translit: 'Chaustari',
        phonetics: ["74","୭୪","ଚଉସ୍ତରୀ","chaustari"]
      },
      sa: {
        digit: '७४',
        name: 'चतुःसप्ततिः',
        translit: 'Chatuhsaptatih',
        phonetics: ["74","७४","चतुःसप्ततिः","chatuhsaptatih"]
      },
      ur: {
        digit: '۷۴',
        name: 'چوہتر',
        translit: 'Chauhattar',
        phonetics: ["74","۷۴","چوہتر","chauhattar"]
      },
    },
    phonetics: {
      gu: ["74","૭૪","ચુંમોતેર","chummoter"],
      hi: ["74","७४","चौहत्तर","chauhattar"] 
    }
  },
  {
    english: 75,
    gujarati: '૭૫',
    gujaratiName: 'પંચોતેર',
    gujaratiTranslit: 'Panchoter',
    hindi: '७५',
    hindiName: 'पचहत्तर',
    hindiTranslit: 'Pachhattar',
    languages: {
      hi: {
        digit: '७५',
        name: 'पचहत्तर',
        translit: 'Pachhattar',
        phonetics: ["75","७५","पचहत्तर","pachhattar"]
      },
      gu: {
        digit: '૭૫',
        name: 'પંચોતેર',
        translit: 'Panchoter',
        phonetics: ["75","૭૫","પંચોતેર","panchoter"]
      },
      mr: {
        digit: '७५',
        name: 'पंचाहत्तर',
        translit: 'Panchaahattar',
        phonetics: ["75","७५","पंचाहत्तर","panchaahattar","panchahattar"]
      },
      bn: {
        digit: '৭৫',
        name: 'পঁচাত্তর',
        translit: 'Põchattor',
        phonetics: ["75","৭৫","পঁচাত্তর","põchattor"]
      },
      ta: {
        digit: '௭௫',
        name: 'எழுபத்தைந்து',
        translit: 'Ezhupathainthu',
        phonetics: ["75","௭௫","எழுபத்தைந்து","ezhupathainthu"]
      },
      te: {
        digit: '౭౫',
        name: 'డెబ్బై ఐదు',
        translit: 'Debbai Aidu',
        phonetics: ["75","౭౫","డెబ్బై ఐదు","debbai aidu"]
      },
      kn: {
        digit: '೭೫',
        name: 'ಎಪ್ಪತ್ತೈದು',
        translit: 'Eppattaidu',
        phonetics: ["75","೭೫","ಎಪ್ಪತ್ತೈದು","eppattaidu"]
      },
      ml: {
        digit: '൭൫',
        name: 'എഴുപത്തഞ്ച്',
        translit: 'Ezhupathanchu',
        phonetics: ["75","൭൫","എഴുപത്തഞ്ച്","ezhupathanchu"]
      },
      pa: {
        digit: '੭੫',
        name: 'ਪਚੱਹਤਰ',
        translit: 'Pachhattar',
        phonetics: ["75","੭੫","ਪਚੱਹਤਰ","pachhattar"]
      },
      or: {
        digit: '୭୫',
        name: 'ପଞ୍ଚସ୍ତରୀ',
        translit: 'Panchastari',
        phonetics: ["75","୭୫","ପଞ୍ଚସ୍ତରୀ","panchastari"]
      },
      sa: {
        digit: '७५',
        name: 'पञ्चसप्ततिः',
        translit: 'Panchasaptatih',
        phonetics: ["75","७५","पञ्चसप्ततिः","panchasaptatih"]
      },
      ur: {
        digit: '۷۵',
        name: 'پچھتر',
        translit: 'Pachhattar',
        phonetics: ["75","۷۵","پچھتر","pachhattar"]
      },
    },
    phonetics: {
      gu: ["75","૭૫","પંચોતેર","panchoter"],
      hi: ["75","७५","पचहत्तर","pachhattar"] 
    }
  },
  {
    english: 76,
    gujarati: '૭૬',
    gujaratiName: 'છોતેર',
    gujaratiTranslit: 'Chhoter',
    hindi: '७६',
    hindiName: 'छिहत्तर',
    hindiTranslit: 'Chhihattar',
    languages: {
      hi: {
        digit: '७६',
        name: 'छिहत्तर',
        translit: 'Chhihattar',
        phonetics: ["76","७६","छिहत्तर","chhihattar"]
      },
      gu: {
        digit: '૭૬',
        name: 'છોતેર',
        translit: 'Chhoter',
        phonetics: ["76","૭૬","છોતેર","chhoter"]
      },
      mr: {
        digit: '७६',
        name: 'शहात्तर',
        translit: 'Shahaattar',
        phonetics: ["76","७६","शहात्तर","shahaattar","shahattar"]
      },
      bn: {
        digit: '৭৬',
        name: 'ছিয়াত্তর',
        translit: 'Chhiyattor',
        phonetics: ["76","৭৬","ছিয়াত্তর","chhiyattor"]
      },
      ta: {
        digit: '௭௬',
        name: 'எழுபத்தாறு',
        translit: 'Ezhupathaaru',
        phonetics: ["76","௭௬","எழுபத்தாறு","ezhupathaaru","ezhupatharu"]
      },
      te: {
        digit: '౭౬',
        name: 'డెబ్బై ఆరు',
        translit: 'Debbai Aaru',
        phonetics: ["76","౭౬","డెబ్బై ఆరు","debbai aaru","debbai aru"]
      },
      kn: {
        digit: '೭೬',
        name: 'ಎಪ್ಪತ್ತಾರು',
        translit: 'Eppattaaru',
        phonetics: ["76","೭೬","ಎಪ್ಪತ್ತಾರು","eppattaaru","eppattaru"]
      },
      ml: {
        digit: '൭൬',
        name: 'എഴുപത്താറ്',
        translit: 'Ezhupathaaru',
        phonetics: ["76","൭൬","എഴുപത്താറ്","ezhupathaaru","ezhupatharu"]
      },
      pa: {
        digit: '੭੬',
        name: 'ਛਿਹੱਤਰ',
        translit: 'Chhihattar',
        phonetics: ["76","੭੬","ਛਿਹੱਤਰ","chhihattar"]
      },
      or: {
        digit: '୭୬',
        name: 'ଛୟାସ୍ତରୀ',
        translit: 'Chhayaastari',
        phonetics: ["76","୭୬","ଛୟାସ୍ତରୀ","chhayaastari","chhayastari"]
      },
      sa: {
        digit: '७६',
        name: 'षट्सप्ततिः',
        translit: 'Shatsaptatih',
        phonetics: ["76","७६","षट्सप्ततिः","shatsaptatih"]
      },
      ur: {
        digit: '۷۶',
        name: 'چھہتر',
        translit: 'Chhihattar',
        phonetics: ["76","۷۶","چھہتر","chhihattar"]
      },
    },
    phonetics: {
      gu: ["76","૭૬","છોતેર","chhoter"],
      hi: ["76","७६","छिहत्तर","chhihattar"] 
    }
  },
  {
    english: 77,
    gujarati: '૭૭',
    gujaratiName: 'સિત્યોતેર',
    gujaratiTranslit: 'Sityoter',
    hindi: '७७',
    hindiName: 'सतहत्तर',
    hindiTranslit: 'Sathattar',
    languages: {
      hi: {
        digit: '७७',
        name: 'सतहत्तर',
        translit: 'Sathattar',
        phonetics: ["77","७७","सतहत्तर","sathattar"]
      },
      gu: {
        digit: '૭૭',
        name: 'સિત્યોતેર',
        translit: 'Sityoter',
        phonetics: ["77","૭૭","સિત્યોતેર","sityoter"]
      },
      mr: {
        digit: '७७',
        name: 'सत्याहत्तर',
        translit: 'Satyaahattar',
        phonetics: ["77","७७","सत्याहत्तर","satyaahattar","satyahattar"]
      },
      bn: {
        digit: '৭৭',
        name: 'সাতাত্তর',
        translit: 'Satattor',
        phonetics: ["77","৭৭","সাতাত্তর","satattor"]
      },
      ta: {
        digit: '௭௭',
        name: 'எழுபத்தேழு',
        translit: 'Ezhupathezhu',
        phonetics: ["77","௭௭","எழுபத்தேழு","ezhupathezhu"]
      },
      te: {
        digit: '౭౭',
        name: 'డెబ్బై ఏడు',
        translit: 'Debbai Eedu',
        phonetics: ["77","౭౭","డెబ్బై ఏడు","debbai eedu","debbai idu"]
      },
      kn: {
        digit: '೭೭',
        name: 'ಎಪ್ಪತ್ತೇಳು',
        translit: 'Eppatteelu',
        phonetics: ["77","೭೭","ಎಪ್ಪತ್ತೇಳು","eppatteelu","eppattilu"]
      },
      ml: {
        digit: '൭൭',
        name: 'എഴുപത്തേഴ്',
        translit: 'Ezhupathezhu',
        phonetics: ["77","൭൭","എഴുപത്തേഴ്","ezhupathezhu"]
      },
      pa: {
        digit: '੭੭',
        name: 'ਸਤੱਹਤਰ',
        translit: 'Satattar',
        phonetics: ["77","੭੭","ਸਤੱਹਤਰ","satattar"]
      },
      or: {
        digit: '୭୭',
        name: 'ସତସ୍ତରୀ',
        translit: 'Satastari',
        phonetics: ["77","୭୭","ସତସ୍ତରୀ","satastari"]
      },
      sa: {
        digit: '७७',
        name: 'सप्तसप्ततिः',
        translit: 'Saptasaptatih',
        phonetics: ["77","७७","सप्तसप्ततिः","saptasaptatih"]
      },
      ur: {
        digit: '۷۷',
        name: 'ستہتر',
        translit: 'Sathattar',
        phonetics: ["77","۷۷","ستہتر","sathattar"]
      },
    },
    phonetics: {
      gu: ["77","૭૭","સિત્યોતેર","sityoter"],
      hi: ["77","७७","सतहत्तर","sathattar"] 
    }
  },
  {
    english: 78,
    gujarati: '૭૮',
    gujaratiName: 'ઇઠ્યોતેર',
    gujaratiTranslit: 'Ithyoter',
    hindi: '७८',
    hindiName: 'अठहत्तर',
    hindiTranslit: 'Athhattar',
    languages: {
      hi: {
        digit: '७८',
        name: 'अठहत्तर',
        translit: 'Athhattar',
        phonetics: ["78","७८","अठहत्तर","athhattar"]
      },
      gu: {
        digit: '૭૮',
        name: 'ઇઠ્યોતેર',
        translit: 'Ithyoter',
        phonetics: ["78","૭૮","ઇઠ્યોતેર","ithyoter"]
      },
      mr: {
        digit: '७८',
        name: 'अठ्ठ्याहत्तर',
        translit: 'Atthyaahattar',
        phonetics: ["78","७८","अठ्ठ्याहत्तर","atthyaahattar","atthyahattar"]
      },
      bn: {
        digit: '৭৮',
        name: 'আটাত্তর',
        translit: 'Aatattor',
        phonetics: ["78","৭৮","আটাত্তর","aatattor","atattor"]
      },
      ta: {
        digit: '௭௮',
        name: 'எழுபத்தெட்டு',
        translit: 'Ezhupathettu',
        phonetics: ["78","௭௮","எழுபத்தெட்டு","ezhupathettu"]
      },
      te: {
        digit: '౭౮',
        name: 'డెబ్బై ఎనిమిది',
        translit: 'Debbai Enimidi',
        phonetics: ["78","౭౮","డెబ్బై ఎనిమిది","debbai enimidi"]
      },
      kn: {
        digit: '೭೮',
        name: 'ಎಪ್ಪತ್ತೆಂಟು',
        translit: 'Eppattentu',
        phonetics: ["78","೭೮","ಎಪ್ಪತ್ತೆಂಟು","eppattentu"]
      },
      ml: {
        digit: '൭൮',
        name: 'എഴുപത്തെട്ട്',
        translit: 'Ezhupathettu',
        phonetics: ["78","൭൮","എഴുപത്തെട്ട്","ezhupathettu"]
      },
      pa: {
        digit: '੭੮',
        name: 'ਅਠੱਹਤਰ',
        translit: 'Athattar',
        phonetics: ["78","੭੮","ਅਠੱਹਤਰ","athattar"]
      },
      or: {
        digit: '୭୮',
        name: 'ଅଠସ୍ତରୀ',
        translit: 'Athastari',
        phonetics: ["78","୭୮","ଅଠସ୍ତରୀ","athastari"]
      },
      sa: {
        digit: '७८',
        name: 'अष्टसप्ततिः',
        translit: 'Ashtasaptatih',
        phonetics: ["78","७८","अष्टसप्ततिः","ashtasaptatih"]
      },
      ur: {
        digit: '۷۸',
        name: 'اٹھہتر',
        translit: 'Athhattar',
        phonetics: ["78","۷۸","اٹھہتر","athhattar"]
      },
    },
    phonetics: {
      gu: ["78","૭૮","ઇઠ્યોતેર","ithyoter"],
      hi: ["78","७८","अठहत्तर","athhattar"] 
    }
  },
  {
    english: 79,
    gujarati: '૭૯',
    gujaratiName: 'ઓગણ્યાએંસી',
    gujaratiTranslit: 'Oganyaaensi',
    hindi: '७९',
    hindiName: 'उनासी',
    hindiTranslit: 'Unaasi',
    languages: {
      hi: {
        digit: '७९',
        name: 'उनासी',
        translit: 'Unaasi',
        phonetics: ["79","७९","उनासी","unaasi","unasi"]
      },
      gu: {
        digit: '૭૯',
        name: 'ઓગણ્યાએંસી',
        translit: 'Oganyaaensi',
        phonetics: ["79","૭૯","ઓગણ્યાએંસી","oganyaaensi","oganyaensi"]
      },
      mr: {
        digit: '७९',
        name: 'एकोणऐंशी',
        translit: 'Ekon-aenshi',
        phonetics: ["79","७९","एकोणऐंशी","ekon-aenshi","ekonaenshi"]
      },
      bn: {
        digit: '৭৯',
        name: 'উনআশি',
        translit: 'Unoaashi',
        phonetics: ["79","৭৯","উনআশি","unoaashi","unoashi"]
      },
      ta: {
        digit: '௭௯',
        name: 'எழுபத்தொன்பது',
        translit: 'Ezhupathonbathu',
        phonetics: ["79","௭௯","எழுபத்தொன்பது","ezhupathonbathu"]
      },
      te: {
        digit: '౭౯',
        name: 'డెబ్బై తొమ్మిది',
        translit: 'Debbai Tommidi',
        phonetics: ["79","౭౯","డెబ్బై తొమ్మిది","debbai tommidi"]
      },
      kn: {
        digit: '೭೯',
        name: 'ಎಪ್ಪತ್ತೊಂಬತ್ತು',
        translit: 'Eppattombattu',
        phonetics: ["79","೭೯","ಎಪ್ಪತ್ತೊಂಬತ್ತು","eppattombattu"]
      },
      ml: {
        digit: '൭൯',
        name: 'എഴുപത്തൊമ്പത്',
        translit: 'Ezhupathombathu',
        phonetics: ["79","൭൯","എഴുപത്തൊമ്പത്","ezhupathombathu"]
      },
      pa: {
        digit: '੭੯',
        name: 'ਉਨਾਸੀ',
        translit: 'Unaasi',
        phonetics: ["79","੭੯","ਉਨਾਸੀ","unaasi","unasi"]
      },
      or: {
        digit: '୭୯',
        name: 'ଅଣଅଶୀ',
        translit: 'Ana-ashee',
        phonetics: ["79","୭୯","ଅଣଅଶୀ","ana-ashee","anaashi"]
      },
      sa: {
        digit: '७९',
        name: 'एकोनाशीतिः',
        translit: 'Ekonaasheetih',
        phonetics: ["79","७९","एकोनाशीतिः","ekonaasheetih","ekonashitih"]
      },
      ur: {
        digit: '۷۹',
        name: 'اناسی',
        translit: 'Unaasi',
        phonetics: ["79","۷۹","اناسی","unaasi","unasi"]
      },
    },
    phonetics: {
      gu: ["79","૭૯","ઓગણ્યાએંસી","oganyaaensi"],
      hi: ["79","७९","उनासी","unaasi"] 
    }
  },
  {
    english: 80,
    gujarati: '૮૦',
    gujaratiName: 'એંસી',
    gujaratiTranslit: 'Aensi',
    hindi: '८०',
    hindiName: 'अस्सी',
    hindiTranslit: 'Assee',
    languages: {
      hi: {
        digit: '८०',
        name: 'अस्सी',
        translit: 'Assee',
        phonetics: ["80","८०","अस्सी","assee","assi"]
      },
      gu: {
        digit: '૮૦',
        name: 'એંસી',
        translit: 'Aensi',
        phonetics: ["80","૮૦","એંસી","aensi"]
      },
      mr: {
        digit: '८०',
        name: 'ऐंशी',
        translit: 'Aenshi',
        phonetics: ["80","८०","ऐंशी","aenshi"]
      },
      bn: {
        digit: '৮০',
        name: 'আশি',
        translit: 'Aashi',
        phonetics: ["80","৮০","আশি","aashi","ashi"]
      },
      ta: {
        digit: '௮௦',
        name: 'எண்பது',
        translit: 'Enpathu',
        phonetics: ["80","௮௦","எண்பது","enpathu"]
      },
      te: {
        digit: '౮౦',
        name: 'ఎనభై',
        translit: 'Enabhai',
        phonetics: ["80","౮౦","ఎనభై","enabhai"]
      },
      kn: {
        digit: '೮೦',
        name: 'ಎಂಬತ್ತು',
        translit: 'Embattu',
        phonetics: ["80","೮೦","ಎಂಬತ್ತು","embattu"]
      },
      ml: {
        digit: '൮൦',
        name: 'എൺപത്',
        translit: 'Enpathu',
        phonetics: ["80","൮൦","എൺപത്","enpathu"]
      },
      pa: {
        digit: '੮੦',
        name: 'ਅੱਸੀ',
        translit: 'Assi',
        phonetics: ["80","੮੦","ਅੱਸੀ","assi"]
      },
      or: {
        digit: '୮୦',
        name: 'ଅଶୀ',
        translit: 'Ashee',
        phonetics: ["80","୮୦","ଅଶୀ","ashee","ashi"]
      },
      sa: {
        digit: '८०',
        name: 'अशीतिः',
        translit: 'Aasheetih',
        phonetics: ["80","८०","अशीतिः","aasheetih","ashitih"]
      },
      ur: {
        digit: '۸۰',
        name: 'اسی',
        translit: 'Assee',
        phonetics: ["80","۸۰","اسی","assee","assi"]
      },
    },
    phonetics: {
      gu: ["80","૮૦","એંસી","aensi"],
      hi: ["80","८०","अस्सी","assee"] 
    }
  },
  {
    english: 81,
    gujarati: '૮૧',
    gujaratiName: 'એક્યાસી',
    gujaratiTranslit: 'Ekyaasi',
    hindi: '८१',
    hindiName: 'इक्यासी',
    hindiTranslit: 'Ikyaasi',
    languages: {
      hi: {
        digit: '८१',
        name: 'इक्यासी',
        translit: 'Ikyaasi',
        phonetics: ["81","८१","इक्यासी","ikyaasi","ikyasi"]
      },
      gu: {
        digit: '૮૧',
        name: 'એક્યાસી',
        translit: 'Ekyaasi',
        phonetics: ["81","૮૧","એક્યાસી","ekyaasi","ekyasi"]
      },
      mr: {
        digit: '८१',
        name: 'एक्यांशी',
        translit: 'Ekyaanshi',
        phonetics: ["81","८१","एक्यांशी","ekyaanshi","ekyanshi"]
      },
      bn: {
        digit: '৮১',
        name: 'একাশি',
        translit: 'Ekaashi',
        phonetics: ["81","৮১","একাশি","ekaashi","ekashi"]
      },
      ta: {
        digit: '௮௧',
        name: 'எண்பத்தொன்று',
        translit: 'Enpathondru',
        phonetics: ["81","௮௧","எண்பத்தொன்று","enpathondru"]
      },
      te: {
        digit: '౮౧',
        name: 'ఎనభై ఒకటి',
        translit: 'Enabhai Okati',
        phonetics: ["81","౮౧","ఎనభై ఒకటి","enabhai okati"]
      },
      kn: {
        digit: '೮೧',
        name: 'ಎಂಬತ್ತೊಂದು',
        translit: 'Embattondu',
        phonetics: ["81","೮೧","ಎಂಬತ್ತೊಂದು","embattondu"]
      },
      ml: {
        digit: '൮൧',
        name: 'എൺപത്തൊന്ന്',
        translit: 'Enpathonnu',
        phonetics: ["81","൮൧","എൺപത്തൊന്ന്","enpathonnu"]
      },
      pa: {
        digit: '੮੧',
        name: 'ਇਕਿਆਸੀ',
        translit: 'Ikiaasi',
        phonetics: ["81","੮੧","ਇਕਿਆਸੀ","ikiaasi","ikiasi"]
      },
      or: {
        digit: '୮୧',
        name: 'ଏକାଅଶୀ',
        translit: 'Ekaa-ashee',
        phonetics: ["81","୮୧","ଏକାଅଶୀ","ekaa-ashee","ekaashi"]
      },
      sa: {
        digit: '८१',
        name: 'एकाशीतिः',
        translit: 'Ekaasheetih',
        phonetics: ["81","८१","एकाशीतिः","ekaasheetih","ekashitih"]
      },
      ur: {
        digit: '۸۱',
        name: 'اکیاسی',
        translit: 'Ikyaasi',
        phonetics: ["81","۸۱","اکیاسی","ikyaasi","ikyasi"]
      },
    },
    phonetics: {
      gu: ["81","૮૧","એક્યાસી","ekyaasi"],
      hi: ["81","८१","इक्यासी","ikyaasi"] 
    }
  },
  {
    english: 82,
    gujarati: '૮૨',
    gujaratiName: 'બ્યાસી',
    gujaratiTranslit: 'Byaasi',
    hindi: '८२',
    hindiName: 'बयासी',
    hindiTranslit: 'Bayaasi',
    languages: {
      hi: {
        digit: '८२',
        name: 'बयासी',
        translit: 'Bayaasi',
        phonetics: ["82","८२","बयासी","bayaasi","bayasi"]
      },
      gu: {
        digit: '૮૨',
        name: 'બ્યાસી',
        translit: 'Byaasi',
        phonetics: ["82","૮૨","બ્યાસી","byaasi","byasi"]
      },
      mr: {
        digit: '८२',
        name: 'ब्यांशी',
        translit: 'Byaanshi',
        phonetics: ["82","८२","ब्यांशी","byaanshi","byanshi"]
      },
      bn: {
        digit: '৮২',
        name: 'বিরাশি',
        translit: 'Biraashi',
        phonetics: ["82","৮২","বিরাশি","biraashi","birashi"]
      },
      ta: {
        digit: '௮௨',
        name: 'எண்பத்திரண்டு',
        translit: 'Enpathirandu',
        phonetics: ["82","௮௨","எண்பத்திரண்டு","enpathirandu"]
      },
      te: {
        digit: '౮౨',
        name: 'ఎనభై రెండు',
        translit: 'Enabhai Rendu',
        phonetics: ["82","౮౨","ఎనభై రెండు","enabhai rendu"]
      },
      kn: {
        digit: '೮೨',
        name: 'ಎಂಬತ್ತೆರಡು',
        translit: 'Embatteradu',
        phonetics: ["82","೮೨","ಎಂಬತ್ತೆರಡು","embatteradu"]
      },
      ml: {
        digit: '൮൨',
        name: 'എൺപത്തിരണ്ട്',
        translit: 'Enpathirandu',
        phonetics: ["82","൮൨","എൺപത്തിരണ്ട്","enpathirandu"]
      },
      pa: {
        digit: '੮੨',
        name: 'ਬਿਆਸੀ',
        translit: 'Biaasi',
        phonetics: ["82","੮੨","ਬਿਆਸੀ","biaasi","biasi"]
      },
      or: {
        digit: '୮୨',
        name: 'ବିୟାଅଶୀ',
        translit: 'Biyaa-ashee',
        phonetics: ["82","୮୨","ବିୟାଅଶୀ","biyaa-ashee","biyaashi"]
      },
      sa: {
        digit: '८२',
        name: 'द्व्यशीतिः',
        translit: 'Dvyaasheetih',
        phonetics: ["82","८२","द्व्यशीतिः","dvyaasheetih","dvyashitih"]
      },
      ur: {
        digit: '۸۲',
        name: 'بیاسی',
        translit: 'Bayaasi',
        phonetics: ["82","۸۲","بیاسی","bayaasi","bayasi"]
      },
    },
    phonetics: {
      gu: ["82","૮૨","બ્યાસી","byaasi"],
      hi: ["82","८२","बयासी","bayaasi"] 
    }
  },
  {
    english: 83,
    gujarati: '૮૩',
    gujaratiName: 'ત્યાસી',
    gujaratiTranslit: 'Tyaasi',
    hindi: '८३',
    hindiName: 'तिरासी',
    hindiTranslit: 'Tiraasi',
    languages: {
      hi: {
        digit: '८३',
        name: 'तिरासी',
        translit: 'Tiraasi',
        phonetics: ["83","८३","तिरासी","tiraasi","tirasi"]
      },
      gu: {
        digit: '૮૩',
        name: 'ત્યાસી',
        translit: 'Tyaasi',
        phonetics: ["83","૮૩","ત્યાસી","tyaasi","tyasi"]
      },
      mr: {
        digit: '८३',
        name: 'त्र्यांशी',
        translit: 'Tryaanshi',
        phonetics: ["83","८३","त्र्यांशी","tryaanshi","tryanshi"]
      },
      bn: {
        digit: '৮৩',
        name: 'তিরাশি',
        translit: 'Tiraashi',
        phonetics: ["83","৮৩","তিরাশি","tiraashi","tirashi"]
      },
      ta: {
        digit: '௮௩',
        name: 'எண்பத்துமூன்று',
        translit: 'Enpathumoondru',
        phonetics: ["83","௮௩","எண்பத்துமூன்று","enpathumoondru","enpathumundru"]
      },
      te: {
        digit: '౮౩',
        name: 'ఎనభై మూడు',
        translit: 'Enabhai Moodu',
        phonetics: ["83","౮౩","ఎనభై మూడు","enabhai moodu","enabhai mudu"]
      },
      kn: {
        digit: '೮೩',
        name: 'ಎಂಬತ್ತಮೂರು',
        translit: 'Embattmooru',
        phonetics: ["83","೮೩","ಎಂಬತ್ತಮೂರು","embattmooru","embattmuru"]
      },
      ml: {
        digit: '൮൩',
        name: 'എൺപത്തിമൂന്ന്',
        translit: 'Enpathimoonnu',
        phonetics: ["83","൮൩","എൺപത്തിമൂന്ന്","enpathimoonnu","enpathimunnu"]
      },
      pa: {
        digit: '੮੩',
        name: 'ਤਿਰਾਸੀ',
        translit: 'Tiraasi',
        phonetics: ["83","੮੩","ਤਿਰਾਸੀ","tiraasi","tirasi"]
      },
      or: {
        digit: '୮୩',
        name: 'ତିରିଆଅଶୀ',
        translit: 'Tiriaa-ashee',
        phonetics: ["83","୮୩","ତିରିଆଅଶୀ","tiriaa-ashee","tiriaashi"]
      },
      sa: {
        digit: '८३',
        name: 'त्र्यशीतिः',
        translit: 'Tryaasheetih',
        phonetics: ["83","८३","त्र्यशीतिः","tryaasheetih","tryashitih"]
      },
      ur: {
        digit: '۸۳',
        name: 'تراسی',
        translit: 'Tiraasi',
        phonetics: ["83","۸۳","تراسی","tiraasi","tirasi"]
      },
    },
    phonetics: {
      gu: ["83","૮૩","ત્યાસી","tyaasi"],
      hi: ["83","८३","तिरासी","tiraasi"] 
    }
  },
  {
    english: 84,
    gujarati: '૮૪',
    gujaratiName: 'ચોર્યાસી',
    gujaratiTranslit: 'Choryaasi',
    hindi: '८४',
    hindiName: 'चौरासी',
    hindiTranslit: 'Chauraasi',
    languages: {
      hi: {
        digit: '८४',
        name: 'चौरासी',
        translit: 'Chauraasi',
        phonetics: ["84","८४","चौरासी","chauraasi","chaurasi"]
      },
      gu: {
        digit: '૮૪',
        name: 'ચોર્યાસી',
        translit: 'Choryaasi',
        phonetics: ["84","૮૪","ચોર્યાસી","choryaasi","choryasi"]
      },
      mr: {
        digit: '८४',
        name: 'चौऱ्यांशी',
        translit: 'Chouryaanshi',
        phonetics: ["84","८४","चौऱ्यांशी","chouryaanshi","chouryanshi"]
      },
      bn: {
        digit: '৮৪',
        name: 'চুরাশি',
        translit: 'Churaashi',
        phonetics: ["84","৮৪","চুরাশি","churaashi","churashi"]
      },
      ta: {
        digit: '௮௪',
        name: 'எண்பத்துநான்கு',
        translit: 'Enpathunaangu',
        phonetics: ["84","௮௪","எண்பத்துநான்கு","enpathunaangu","enpathunangu"]
      },
      te: {
        digit: '౮౪',
        name: 'ఎనభై నాలుగు',
        translit: 'Enabhai Naalugu',
        phonetics: ["84","౮౪","ఎనభై నాలుగు","enabhai naalugu","enabhai nalugu"]
      },
      kn: {
        digit: '೮೪',
        name: 'ಎಂಬತ್ತನಾಲ್ಕು',
        translit: 'Embattnaalku',
        phonetics: ["84","೮೪","ಎಂಬತ್ತನಾಲ್ಕು","embattnaalku","embattnalku"]
      },
      ml: {
        digit: '൮൪',
        name: 'എൺപത്തിനാല്',
        translit: 'Enpathinaalu',
        phonetics: ["84","൮൪","എൺപത്തിനാല്","enpathinaalu","enpathinalu"]
      },
      pa: {
        digit: '੮੪',
        name: 'ਚੌਰਾਸੀ',
        translit: 'Chauraasi',
        phonetics: ["84","੮੪","ਚੌਰਾਸੀ","chauraasi","chaurasi"]
      },
      or: {
        digit: '୮୪',
        name: 'ଚଉରାଅଶୀ',
        translit: 'Chauraa-ashee',
        phonetics: ["84","୮୪","ଚଉରାଅଶୀ","chauraa-ashee","chauraashi"]
      },
      sa: {
        digit: '८४',
        name: 'चतुरशीतिः',
        translit: 'Chaturaasheetih',
        phonetics: ["84","८४","चतुरशीतिः","chaturaasheetih","chaturashitih"]
      },
      ur: {
        digit: '۸۴',
        name: 'چوراسی',
        translit: 'Chauraasi',
        phonetics: ["84","۸۴","چوراسی","chauraasi","chaurasi"]
      },
    },
    phonetics: {
      gu: ["84","૮૪","ચોર્યાસી","choryaasi"],
      hi: ["84","८४","चौरासी","chauraasi"] 
    }
  },
  {
    english: 85,
    gujarati: '૮૫',
    gujaratiName: 'પંચાસી',
    gujaratiTranslit: 'Panchaasi',
    hindi: '८५',
    hindiName: 'पचासी',
    hindiTranslit: 'Pachaasi',
    languages: {
      hi: {
        digit: '८५',
        name: 'पचासी',
        translit: 'Pachaasi',
        phonetics: ["85","८५","पचासी","pachaasi","pachasi"]
      },
      gu: {
        digit: '૮૫',
        name: 'પંચાસી',
        translit: 'Panchaasi',
        phonetics: ["85","૮૫","પંચાસી","panchaasi","panchasi"]
      },
      mr: {
        digit: '८५',
        name: 'पंच्यांशी',
        translit: 'Panchyaanshi',
        phonetics: ["85","८५","पंच्यांशी","panchyaanshi","panchyanshi"]
      },
      bn: {
        digit: '৮৫',
        name: 'পঁচাশি',
        translit: 'Põchaashi',
        phonetics: ["85","৮৫","পঁচাশি","põchaashi","põchashi"]
      },
      ta: {
        digit: '௮௫',
        name: 'எண்பத்தைந்து',
        translit: 'Enpathainthu',
        phonetics: ["85","௮௫","எண்பத்தைந்து","enpathainthu"]
      },
      te: {
        digit: '౮౫',
        name: 'ఎనభై ఐదు',
        translit: 'Enabhai Aidu',
        phonetics: ["85","౮౫","ఎనభై ఐదు","enabhai aidu"]
      },
      kn: {
        digit: '೮೫',
        name: 'ಎಂಬತ್ತೈದು',
        translit: 'Embattaidu',
        phonetics: ["85","೮೫","ಎಂಬತ್ತೈದು","embattaidu"]
      },
      ml: {
        digit: '൮൫',
        name: 'എൺപത്തഞ്ച്',
        translit: 'Enpathanchu',
        phonetics: ["85","൮൫","എൺപത്തഞ്ച്","enpathanchu"]
      },
      pa: {
        digit: '੮੫',
        name: 'ਪਚਾਸੀ',
        translit: 'Pachaasi',
        phonetics: ["85","੮੫","ਪਚਾਸੀ","pachaasi","pachasi"]
      },
      or: {
        digit: '୮୫',
        name: 'ପଞ୍ଚାଅଶୀ',
        translit: 'Panchaa-ashee',
        phonetics: ["85","୮୫","ପଞ୍ଚାଅଶୀ","panchaa-ashee","panchaashi"]
      },
      sa: {
        digit: '८५',
        name: 'पञ्चाशीतिः',
        translit: 'Panchaasheetih',
        phonetics: ["85","८५","पञ्चाशीतिः","panchaasheetih","panchashitih"]
      },
      ur: {
        digit: '۸۵',
        name: 'پچاسی',
        translit: 'Pachaasi',
        phonetics: ["85","۸۵","پچاسی","pachaasi","pachasi"]
      },
    },
    phonetics: {
      gu: ["85","૮૫","પંચાસી","panchaasi"],
      hi: ["85","८५","पचासी","pachaasi"] 
    }
  },
  {
    english: 86,
    gujarati: '૮૬',
    gujaratiName: 'છ્યાસી',
    gujaratiTranslit: 'Chhyaasi',
    hindi: '८६',
    hindiName: 'छियासी',
    hindiTranslit: 'Chhiyaasi',
    languages: {
      hi: {
        digit: '८६',
        name: 'छियासी',
        translit: 'Chhiyaasi',
        phonetics: ["86","८६","छियासी","chhiyaasi","chhiyasi"]
      },
      gu: {
        digit: '૮૬',
        name: 'છ્યાસી',
        translit: 'Chhyaasi',
        phonetics: ["86","૮૬","છ્યાસી","chhyaasi","chhyasi"]
      },
      mr: {
        digit: '८६',
        name: 'शहांशी',
        translit: 'Shahaanshi',
        phonetics: ["86","८६","शहांशी","shahaanshi","shahanshi"]
      },
      bn: {
        digit: '৮৬',
        name: 'ছিয়াশি',
        translit: 'Chhiyaashi',
        phonetics: ["86","৮৬","ছিয়াশি","chhiyaashi","chhiyashi"]
      },
      ta: {
        digit: '௮௬',
        name: 'எண்பத்தாறு',
        translit: 'Enpathaaru',
        phonetics: ["86","௮௬","எண்பத்தாறு","enpathaaru","enpatharu"]
      },
      te: {
        digit: '౮౬',
        name: 'ఎనభై ఆరు',
        translit: 'Enabhai Aaru',
        phonetics: ["86","౮౬","ఎనభై ఆరు","enabhai aaru","enabhai aru"]
      },
      kn: {
        digit: '೮೬',
        name: 'ಎಂಬತ್ತಾರು',
        translit: 'Embattaaru',
        phonetics: ["86","೮೬","ಎಂಬತ್ತಾರು","embattaaru","embattaru"]
      },
      ml: {
        digit: '൮൬',
        name: 'എൺപത്താറ്',
        translit: 'Enpathaaru',
        phonetics: ["86","൮൬","എൺപത്താറ്","enpathaaru","enpatharu"]
      },
      pa: {
        digit: '੮੬',
        name: 'ਛਿਆਸੀ',
        translit: 'Chhiyaasi',
        phonetics: ["86","੮੬","ਛਿਆਸੀ","chhiyaasi","chhiyasi"]
      },
      or: {
        digit: '୮୬',
        name: 'ଛୟାଅଶୀ',
        translit: 'Chhayaa-ashee',
        phonetics: ["86","୮୬","ଛୟାଅଶୀ","chhayaa-ashee","chhayaashi"]
      },
      sa: {
        digit: '८६',
        name: 'षडशीतिः',
        translit: 'Shadaasheetih',
        phonetics: ["86","८६","षडशीतिः","shadaasheetih","shadashitih"]
      },
      ur: {
        digit: '۸۶',
        name: 'چھیاسی',
        translit: 'Chhiyaasi',
        phonetics: ["86","۸۶","چھیاسی","chhiyaasi","chhiyasi"]
      },
    },
    phonetics: {
      gu: ["86","૮૬","છ્યાસી","chhyaasi"],
      hi: ["86","८६","छियासी","chhiyaasi"] 
    }
  },
  {
    english: 87,
    gujarati: '૮૭',
    gujaratiName: 'સત્યાસી',
    gujaratiTranslit: 'Satyaasi',
    hindi: '८७',
    hindiName: 'सत्तासी',
    hindiTranslit: 'Sattaasi',
    languages: {
      hi: {
        digit: '८७',
        name: 'सत्तासी',
        translit: 'Sattaasi',
        phonetics: ["87","८७","सत्तासी","sattaasi","sattasi"]
      },
      gu: {
        digit: '૮૭',
        name: 'સત્યાસી',
        translit: 'Satyaasi',
        phonetics: ["87","૮૭","સત્યાસી","satyaasi","satyasi"]
      },
      mr: {
        digit: '८७',
        name: 'सत्यांशी',
        translit: 'Satyaanshi',
        phonetics: ["87","८७","सत्यांशी","satyaanshi","satyanshi"]
      },
      bn: {
        digit: '৮৭',
        name: 'সাতাশি',
        translit: 'Sataashi',
        phonetics: ["87","৮৭","সাতাশি","sataashi","satashi"]
      },
      ta: {
        digit: '௮௭',
        name: 'எண்பத்தேழு',
        translit: 'Enpathezhu',
        phonetics: ["87","௮௭","எண்பத்தேழு","enpathezhu"]
      },
      te: {
        digit: '౮౭',
        name: 'ఎనభై ఏడు',
        translit: 'Enabhai Eedu',
        phonetics: ["87","౮౭","ఎనభై ఏడు","enabhai eedu","enabhai idu"]
      },
      kn: {
        digit: '೮೭',
        name: 'ಎಂಬತ್ತೇಳು',
        translit: 'Embatteelu',
        phonetics: ["87","೮೭","ಎಂಬತ್ತೇಳು","embatteelu","embattilu"]
      },
      ml: {
        digit: '൮൭',
        name: 'എൺപത്തേഴ്',
        translit: 'Enpathezhu',
        phonetics: ["87","൮൭","എൺപത്തേഴ്","enpathezhu"]
      },
      pa: {
        digit: '੮੭',
        name: 'ਸਤਾਸੀ',
        translit: 'Sataasi',
        phonetics: ["87","੮੭","ਸਤਾਸੀ","sataasi","satasi"]
      },
      or: {
        digit: '୮୭',
        name: 'ସତାଅଶୀ',
        translit: 'Sataa-ashee',
        phonetics: ["87","୮୭","ସତାଅଶୀ","sataa-ashee","sataashi"]
      },
      sa: {
        digit: '८७',
        name: 'सप्ताशीतिः',
        translit: 'Saptaasheetih',
        phonetics: ["87","८७","सप्ताशीतिः","saptaasheetih","saptashitih"]
      },
      ur: {
        digit: '۸۷',
        name: 'ستاسی',
        translit: 'Sattaasi',
        phonetics: ["87","۸۷","ستاسی","sattaasi","sattasi"]
      },
    },
    phonetics: {
      gu: ["87","૮૭","સત્યાસી","satyaasi"],
      hi: ["87","८७","सत्तासी","sattaasi"] 
    }
  },
  {
    english: 88,
    gujarati: '૮૮',
    gujaratiName: 'ઇઠ્યાસી',
    gujaratiTranslit: 'Ithyaasi',
    hindi: '८८',
    hindiName: 'अट्ठासी',
    hindiTranslit: 'Atthaasi',
    languages: {
      hi: {
        digit: '८८',
        name: 'अट्ठासी',
        translit: 'Atthaasi',
        phonetics: ["88","८८","अट्ठासी","atthaasi","atthasi"]
      },
      gu: {
        digit: '૮૮',
        name: 'ઇઠ્યાસી',
        translit: 'Ithyaasi',
        phonetics: ["88","૮૮","ઇઠ્યાસી","ithyaasi","ithyasi"]
      },
      mr: {
        digit: '८८',
        name: 'अठ्ठ्यांशी',
        translit: 'Atthyaanshi',
        phonetics: ["88","८८","अठ्ठ्यांशी","atthyaanshi","atthyanshi"]
      },
      bn: {
        digit: '৮৮',
        name: 'আটাশি',
        translit: 'Aataashi',
        phonetics: ["88","৮৮","আটাশি","aataashi","atashi"]
      },
      ta: {
        digit: '௮௮',
        name: 'எண்பத்தெட்டு',
        translit: 'Enpathettu',
        phonetics: ["88","௮௮","எண்பத்தெட்டு","enpathettu"]
      },
      te: {
        digit: '౮౮',
        name: 'ఎనభై ఎనిమిది',
        translit: 'Enabhai Enimidi',
        phonetics: ["88","౮౮","ఎనభై ఎనిమిది","enabhai enimidi"]
      },
      kn: {
        digit: '೮೮',
        name: 'ಎಂಬತ್ತೆಂಟು',
        translit: 'Embattentu',
        phonetics: ["88","೮೮","ಎಂಬತ್ತೆಂಟು","embattentu"]
      },
      ml: {
        digit: '൮൮',
        name: 'എൺപത്തെട്ട്',
        translit: 'Enpathettu',
        phonetics: ["88","൮൮","എൺപത്തെട്ട്","enpathettu"]
      },
      pa: {
        digit: '੮੮',
        name: 'ਅਠਾਸੀ',
        translit: 'Athaasi',
        phonetics: ["88","੮੮","ਅਠਾਸੀ","athaasi","athasi"]
      },
      or: {
        digit: '୮୮',
        name: 'ଅଠାଅଶୀ',
        translit: 'Athaa-ashee',
        phonetics: ["88","୮୮","ଅଠାଅଶୀ","athaa-ashee","athaashi"]
      },
      sa: {
        digit: '८८',
        name: 'अष्टाशीतिः',
        translit: 'Ashtaasheetih',
        phonetics: ["88","८८","अष्टाशीतिः","ashtaasheetih","ashtashitih"]
      },
      ur: {
        digit: '۸۸',
        name: 'اٹ्ठाسی',
        translit: 'Atthaasi',
        phonetics: ["88","۸۸","اٹ्ठाسی","atthaasi","atthasi"]
      },
    },
    phonetics: {
      gu: ["88","૮૮","ઇઠ્યાસી","ithyaasi"],
      hi: ["88","८८","अट्ठासी","atthaasi"] 
    }
  },
  {
    english: 89,
    gujarati: '૮૯',
    gujaratiName: 'નેવ્યાસી',
    gujaratiTranslit: 'Nevyaasi',
    hindi: '८९',
    hindiName: 'नवासी',
    hindiTranslit: 'Nawaasi',
    languages: {
      hi: {
        digit: '८९',
        name: 'नवासी',
        translit: 'Nawaasi',
        phonetics: ["89","८९","नवासी","nawaasi","nawasi"]
      },
      gu: {
        digit: '૮૯',
        name: 'નેવ્યાસી',
        translit: 'Nevyaasi',
        phonetics: ["89","૮૯","નેવ્યાસી","nevyaasi","nevyasi"]
      },
      mr: {
        digit: '८९',
        name: 'एकोणनव्वद',
        translit: 'Ekon-navvad',
        phonetics: ["89","८९","एकोणनव्वद","ekon-navvad","ekonnavvad"]
      },
      bn: {
        digit: '৮৯',
        name: 'উননব্বই',
        translit: 'Unonobboi',
        phonetics: ["89","৮৯","উননব্বই","unonobboi"]
      },
      ta: {
        digit: '௮௯',
        name: 'எண்பத்தொன்பது',
        translit: 'Enpathonbathu',
        phonetics: ["89","௮௯","எண்பத்தொன்பது","enpathonbathu"]
      },
      te: {
        digit: '౮౯',
        name: 'ఎనభై తొమ్మిది',
        translit: 'Enabhai Tommidi',
        phonetics: ["89","౮౯","ఎనభై తొమ్మిది","enabhai tommidi"]
      },
      kn: {
        digit: '೮೯',
        name: 'ಎಂಬತ್ತೊಂಬತ್ತು',
        translit: 'Embattombattu',
        phonetics: ["89","೮೯","ಎಂಬತ್ತೊಂಬತ್ತು","embattombattu"]
      },
      ml: {
        digit: '൮൯',
        name: 'എൺപത്തൊമ്പത്',
        translit: 'Enpathombathu',
        phonetics: ["89","൮൯","എൺപത്തൊമ്പത്","enpathombathu"]
      },
      pa: {
        digit: '੮੯',
        name: 'ਉਨਾਨਵੇਂ',
        translit: 'Unaanve',
        phonetics: ["89","੮੯","ਉਨਾਨਵੇਂ","unaanve","unanve"]
      },
      or: {
        digit: '୮୯',
        name: 'ଅଣନବେ',
        translit: 'Ananabe',
        phonetics: ["89","୮୯","ଅଣନବେ","ananabe"]
      },
      sa: {
        digit: '८९',
        name: 'एकोननवतिः',
        translit: 'Ekonanavatih',
        phonetics: ["89","८९","एकोननवतिः","ekonanavatih"]
      },
      ur: {
        digit: '۸۹',
        name: 'نواسی',
        translit: 'Nawaasi',
        phonetics: ["89","۸۹","نواسی","nawaasi","nawasi"]
      },
    },
    phonetics: {
      gu: ["89","૮૯","નેવ્યાસી","nevyaasi"],
      hi: ["89","८९","नवासी","nawaasi"] 
    }
  },
  {
    english: 90,
    gujarati: '૯૦',
    gujaratiName: 'નેવું',
    gujaratiTranslit: 'Nevu',
    hindi: '९०',
    hindiName: 'नब्बे',
    hindiTranslit: 'Nabbeh',
    languages: {
      hi: {
        digit: '९०',
        name: 'नब्बे',
        translit: 'Nabbeh',
        phonetics: ["90","९०","नब्बे","nabbeh"]
      },
      gu: {
        digit: '૯૦',
        name: 'નેવું',
        translit: 'Nevu',
        phonetics: ["90","૯૦","નેવું","nevu"]
      },
      mr: {
        digit: '९०',
        name: 'नव्वद',
        translit: 'Navvad',
        phonetics: ["90","९०","नव्वद","navvad"]
      },
      bn: {
        digit: '৯০',
        name: 'নব্বই',
        translit: 'Nobboi',
        phonetics: ["90","৯০","নব্বই","nobboi"]
      },
      ta: {
        digit: '௯௦',
        name: 'தொண்ணூறு',
        translit: 'Thonnooru',
        phonetics: ["90","௯௦","தொண்ணூறு","thonnooru","thonnuru"]
      },
      te: {
        digit: '౯౦',
        name: 'తొంభై',
        translit: 'Tombhai',
        phonetics: ["90","౯౦","తొంభై","tombhai"]
      },
      kn: {
        digit: '೯೦',
        name: 'ತೊಂಬತ್ತು',
        translit: 'Tombattu',
        phonetics: ["90","೯೦","ತೊಂಬತ್ತು","tombattu"]
      },
      ml: {
        digit: '൯൦',
        name: 'തൊണ്ണൂറ്',
        translit: 'Thonnooru',
        phonetics: ["90","൯൦","തൊണ്ണൂറ്","thonnooru","thonnuru"]
      },
      pa: {
        digit: '੯੦',
        name: 'ਨੱਬੇ',
        translit: 'Nabbeh',
        phonetics: ["90","੯੦","ਨੱਬੇ","nabbeh"]
      },
      or: {
        digit: '୯୦',
        name: 'ନବେ',
        translit: 'Nabe',
        phonetics: ["90","୯୦","ନବେ","nabe"]
      },
      sa: {
        digit: '९०',
        name: 'नवतिः',
        translit: 'Navatih',
        phonetics: ["90","९०","नवतिः","navatih"]
      },
      ur: {
        digit: '۹۰',
        name: 'نوے',
        translit: 'Nabbeh',
        phonetics: ["90","۹۰","نوے","nabbeh"]
      },
    },
    phonetics: {
      gu: ["90","૯૦","નેવું","nevu"],
      hi: ["90","९०","नब्बे","nabbeh"] 
    }
  },
  {
    english: 91,
    gujarati: '૯૧',
    gujaratiName: 'એકાણું',
    gujaratiTranslit: 'Ekaanu',
    hindi: '९१',
    hindiName: 'इक्यानवे',
    hindiTranslit: 'Ikyaanve',
    languages: {
      hi: {
        digit: '९१',
        name: 'इक्यानवे',
        translit: 'Ikyaanve',
        phonetics: ["91","९१","इक्यानवे","ikyaanve","ikyanve"]
      },
      gu: {
        digit: '૯૧',
        name: 'એકાણું',
        translit: 'Ekaanu',
        phonetics: ["91","૯૧","એકાણું","ekaanu","ekanu"]
      },
      mr: {
        digit: '९१',
        name: 'एक्याण्णव',
        translit: 'Ekyaannav',
        phonetics: ["91","९१","एक्याण्णव","ekyaannav","ekyannav"]
      },
      bn: {
        digit: '৯১',
        name: 'একানব্বই',
        translit: 'Ekanobboi',
        phonetics: ["91","৯১","একানব্বই","ekanobboi"]
      },
      ta: {
        digit: '௯௧',
        name: 'தொண்ணூற்றொன்று',
        translit: 'Thonnootrondru',
        phonetics: ["91","௯௧","தொண்ணூற்றொன்று","thonnootrondru","thonnutrondru"]
      },
      te: {
        digit: '౯౧',
        name: 'తొంభై ఒకటి',
        translit: 'Tombhai Okati',
        phonetics: ["91","౯౧","తొంభై ఒకటి","tombhai okati"]
      },
      kn: {
        digit: '೯೧',
        name: 'ತೊಂಬತ್ತೊಂದು',
        translit: 'Tombattondu',
        phonetics: ["91","೯೧","ತೊಂಬತ್ತೊಂದು","tombattondu"]
      },
      ml: {
        digit: '൯൧',
        name: 'തൊണ്ണൂറ്റൊന്ന്',
        translit: 'Thonnootronnu',
        phonetics: ["91","൯൧","തൊണ്ണൂറ്റൊന്ന്","thonnootronnu","thonnutronnu"]
      },
      pa: {
        digit: '੯੧',
        name: 'ਇਕਿਆਨਵੇਂ',
        translit: 'Ikiaanve',
        phonetics: ["91","੯੧","ਇਕਿਆਨਵੇਂ","ikiaanve","ikianve"]
      },
      or: {
        digit: '୯୧',
        name: 'ଏକାନବେ',
        translit: 'Ekaanabe',
        phonetics: ["91","୯୧","ଏକାନବେ","ekaanabe","ekanabe"]
      },
      sa: {
        digit: '९१',
        name: 'एकनवतिः',
        translit: 'Ekanavatih',
        phonetics: ["91","९१","एकनवतिः","ekanavatih"]
      },
      ur: {
        digit: '۹۱',
        name: 'اکیانوے',
        translit: 'Ikyaanve',
        phonetics: ["91","۹۱","اکیانوے","ikyaanve","ikyanve"]
      },
    },
    phonetics: {
      gu: ["91","૯૧","એકાણું","ekaanu"],
      hi: ["91","९१","इक्यानवे","ikyaanve"] 
    }
  },
  {
    english: 92,
    gujarati: '૯૨',
    gujaratiName: 'બાણું',
    gujaratiTranslit: 'Baanu',
    hindi: '९२',
    hindiName: 'बानवे',
    hindiTranslit: 'Baanve',
    languages: {
      hi: {
        digit: '९२',
        name: 'बानवे',
        translit: 'Baanve',
        phonetics: ["92","९२","बानवे","baanve","banve"]
      },
      gu: {
        digit: '૯૨',
        name: 'બાણું',
        translit: 'Baanu',
        phonetics: ["92","૯૨","બાણું","baanu","banu"]
      },
      mr: {
        digit: '९२',
        name: 'ब्याण्णव',
        translit: 'Byaannav',
        phonetics: ["92","९२","ब्याण्णव","byaannav","byannav"]
      },
      bn: {
        digit: '৯২',
        name: 'বিরানব্বই',
        translit: 'Biranobboi',
        phonetics: ["92","৯২","বিরানব্বই","biranobboi"]
      },
      ta: {
        digit: '௯௨',
        name: 'தொண்ணூற்றிரண்டு',
        translit: 'Thonnootrirandu',
        phonetics: ["92","௯௨","தொண்ணூற்றிரண்டு","thonnootrirandu","thonnutrirandu"]
      },
      te: {
        digit: '౯౨',
        name: 'తొంభై రెండు',
        translit: 'Tombhai Rendu',
        phonetics: ["92","౯౨","తొంభై రెండు","tombhai rendu"]
      },
      kn: {
        digit: '೯೨',
        name: 'ತೊಂಬತ್ತೆರಡು',
        translit: 'Tombatteradu',
        phonetics: ["92","೯೨","ತೊಂಬತ್ತೆರಡು","tombatteradu"]
      },
      ml: {
        digit: '൯൨',
        name: 'തൊണ്ണൂറ്റിരണ്ട്',
        translit: 'Thonnootrirandu',
        phonetics: ["92","൯൨","തൊണ്ണൂറ്റിരണ്ട്","thonnootrirandu","thonnutrirandu"]
      },
      pa: {
        digit: '੯੨',
        name: 'ਬਿਆਨਵੇਂ',
        translit: 'Biaanve',
        phonetics: ["92","੯੨","ਬਿਆਨਵੇਂ","biaanve","bianve"]
      },
      or: {
        digit: '୯୨',
        name: 'ବିୟାନବେ',
        translit: 'Biyaanabe',
        phonetics: ["92","୯୨","ବିୟାନବେ","biyaanabe","biyanabe"]
      },
      sa: {
        digit: '९२',
        name: 'द्विनवतिः',
        translit: 'Dvinavatih',
        phonetics: ["92","९२","द्विनवतिः","dvinavatih"]
      },
      ur: {
        digit: '۹۲',
        name: 'بانوے',
        translit: 'Baanve',
        phonetics: ["92","۹۲","بانوے","baanve","banve"]
      },
    },
    phonetics: {
      gu: ["92","૯૨","બાણું","baanu"],
      hi: ["92","९२","बानवे","baanve"] 
    }
  },
  {
    english: 93,
    gujarati: '૯૩',
    gujaratiName: 'તાણું',
    gujaratiTranslit: 'Taanu',
    hindi: '९३',
    hindiName: 'तिरानवे',
    hindiTranslit: 'Tiraanve',
    languages: {
      hi: {
        digit: '९३',
        name: 'तिरानवे',
        translit: 'Tiraanve',
        phonetics: ["93","९३","तिरानवे","tiraanve","tiranve"]
      },
      gu: {
        digit: '૯૩',
        name: 'તાણું',
        translit: 'Taanu',
        phonetics: ["93","૯૩","તાણું","taanu","tanu"]
      },
      mr: {
        digit: '९३',
        name: 'त्र्याण्णव',
        translit: 'Tryaannav',
        phonetics: ["93","९३","त्र्याण्णव","tryaannav","tryannav"]
      },
      bn: {
        digit: '৯৩',
        name: 'তিরানব্বই',
        translit: 'Tiranobboi',
        phonetics: ["93","৯৩","তিরানব্বই","tiranobboi"]
      },
      ta: {
        digit: '௯௩',
        name: 'தொண்ணூற்றுமூன்று',
        translit: 'Thonnootrumoondru',
        phonetics: ["93","௯௩","தொண்ணூற்றுமூன்று","thonnootrumoondru","thonnutrumundru"]
      },
      te: {
        digit: '౯౩',
        name: 'తొంభై మూడు',
        translit: 'Tombhai Moodu',
        phonetics: ["93","౯౩","తొంభై మూడు","tombhai moodu","tombhai mudu"]
      },
      kn: {
        digit: '೯೩',
        name: 'ತೊಂಬತ್ತಮೂರು',
        translit: 'Tombattmooru',
        phonetics: ["93","೯೩","ತೊಂಬತ್ತಮೂರು","tombattmooru","tombattmuru"]
      },
      ml: {
        digit: '൯൩',
        name: 'തൊണ്ണൂറ്റിമൂന്ന്',
        translit: 'Thonnootrimoonnu',
        phonetics: ["93","൯൩","തൊണ്ണൂറ്റിമൂന്ന്","thonnootrimoonnu","thonnutrimunnu"]
      },
      pa: {
        digit: '੯੩',
        name: 'ਤਿਰਾਨਵੇਂ',
        translit: 'Tiraanve',
        phonetics: ["93","੯੩","ਤਿਰਾਨਵੇਂ","tiraanve","tiranve"]
      },
      or: {
        digit: '୯୩',
        name: 'ତିରିଆନବେ',
        translit: 'Tiriaanabe',
        phonetics: ["93","୯୩","ତିରିଆନବେ","tiriaanabe","tirianabe"]
      },
      sa: {
        digit: '९३',
        name: 'त्रिनवतिः',
        translit: 'Trinavatih',
        phonetics: ["93","९३","त्रिनवतिः","trinavatih"]
      },
      ur: {
        digit: '۹۳',
        name: 'ترانوے',
        translit: 'Tiraanve',
        phonetics: ["93","۹۳","ترانوے","tiraanve","tiranve"]
      },
    },
    phonetics: {
      gu: ["93","૯૩","તાણું","taanu"],
      hi: ["93","९३","तिरानवे","tiraanve"] 
    }
  },
  {
    english: 94,
    gujarati: '૯૪',
    gujaratiName: 'ચોરાણું',
    gujaratiTranslit: 'Choraanu',
    hindi: '९४',
    hindiName: 'चौरानवे',
    hindiTranslit: 'Chauraanve',
    languages: {
      hi: {
        digit: '९४',
        name: 'चौरानवे',
        translit: 'Chauraanve',
        phonetics: ["94","९४","चौरानवे","chauraanve","chauranve"]
      },
      gu: {
        digit: '૯૪',
        name: 'ચોરાણું',
        translit: 'Choraanu',
        phonetics: ["94","૯૪","ચોરાણું","choraanu","choranu"]
      },
      mr: {
        digit: '९४',
        name: 'चौऱ्याण्णव',
        translit: 'Chouryaannav',
        phonetics: ["94","९४","चौऱ्याण्णव","chouryaannav","chouryannav"]
      },
      bn: {
        digit: '৯৪',
        name: 'চুরানব্বই',
        translit: 'Churanobboi',
        phonetics: ["94","৯৪","চুরানব্বই","churanobboi"]
      },
      ta: {
        digit: '௯௪',
        name: 'தொண்ணூற்றுநான்கு',
        translit: 'Thonnootrinaangu',
        phonetics: ["94","௯௪","தொண்ணூற்றுநான்கு","thonnootrinaangu","thonnutrinangu"]
      },
      te: {
        digit: '౯౪',
        name: 'తొంభై నాలుగు',
        translit: 'Tombhai Naalugu',
        phonetics: ["94","౯౪","తొంభై నాలుగు","tombhai naalugu","tombhai nalugu"]
      },
      kn: {
        digit: '೯೪',
        name: 'ತೊಂಬತ್ತನಾಲ್ಕು',
        translit: 'Tombattnaalku',
        phonetics: ["94","೯೪","ತೊಂಬತ್ತನಾಲ್ಕು","tombattnaalku","tombattnalku"]
      },
      ml: {
        digit: '൯൪',
        name: 'തൊണ്ണൂറ്റിനാല്',
        translit: 'Thonnootrinaalu',
        phonetics: ["94","൯൪","തൊണ്ണൂറ്റിനാല്","thonnootrinaalu","thonnutrinalu"]
      },
      pa: {
        digit: '੯੪',
        name: 'ਚੌਰਾਨਵੇਂ',
        translit: 'Chauraanve',
        phonetics: ["94","੯੪","ਚੌਰਾਨਵੇਂ","chauraanve","chauranve"]
      },
      or: {
        digit: '୯୪',
        name: 'ଚଉରାନବେ',
        translit: 'Chauraanabe',
        phonetics: ["94","୯୪","ଚଉରାନବେ","chauraanabe","chauranabe"]
      },
      sa: {
        digit: '९४',
        name: 'चतुर्नवतिः',
        translit: 'Chaturnavatih',
        phonetics: ["94","९४","चतुर्नवतिः","chaturnavatih"]
      },
      ur: {
        digit: '۹۴',
        name: 'چورانوے',
        translit: 'Chauraanve',
        phonetics: ["94","۹۴","چورانوے","chauraanve","chauranve"]
      },
    },
    phonetics: {
      gu: ["94","૯૪","ચોરાણું","choraanu"],
      hi: ["94","९४","चौरानवे","chauraanve"] 
    }
  },
  {
    english: 95,
    gujarati: '૯૫',
    gujaratiName: 'પંચાણું',
    gujaratiTranslit: 'Panchaanu',
    hindi: '९५',
    hindiName: 'पचानवे',
    hindiTranslit: 'Pachaanve',
    languages: {
      hi: {
        digit: '९५',
        name: 'पचानवे',
        translit: 'Pachaanve',
        phonetics: ["95","९५","पचानवे","pachaanve","pachanve"]
      },
      gu: {
        digit: '૯૫',
        name: 'પંચાણું',
        translit: 'Panchaanu',
        phonetics: ["95","૯૫","પંચાણું","panchaanu","panchanu"]
      },
      mr: {
        digit: '९५',
        name: 'पंच्याण्णव',
        translit: 'Panchyaannav',
        phonetics: ["95","९५","पंच्याण्णव","panchyaannav","panchyannav"]
      },
      bn: {
        digit: '৯৫',
        name: 'পঁচানব্বই',
        translit: 'Põchanobboi',
        phonetics: ["95","৯৫","পঁচানব্বই","põchanobboi"]
      },
      ta: {
        digit: '௯௫',
        name: 'தொண்ணூற்றைந்து',
        translit: 'Thonnootrainthu',
        phonetics: ["95","௯௫","தொண்ணூற்றைந்து","thonnootrainthu","thonnutrainthu"]
      },
      te: {
        digit: '౯౫',
        name: 'తొంభై ఐదు',
        translit: 'Tombhai Aidu',
        phonetics: ["95","౯౫","తొంభై ఐదు","tombhai aidu"]
      },
      kn: {
        digit: '೯೫',
        name: 'ತೊಂಬತ್ತೈದು',
        translit: 'Tombattaidu',
        phonetics: ["95","೯೫","ತೊಂಬತ್ತೈದು","tombattaidu"]
      },
      ml: {
        digit: '൯൫',
        name: 'തൊണ്ണൂറ്റഞ്ച്',
        translit: 'Thonnootranchu',
        phonetics: ["95","൯൫","തൊണ്ണൂറ്റഞ്ച്","thonnootranchu","thonnutranchu"]
      },
      pa: {
        digit: '੯੫',
        name: 'ਪਚਾਨਵੇਂ',
        translit: 'Pachaanve',
        phonetics: ["95","੯੫","ਪਚਾਨਵੇਂ","pachaanve","pachanve"]
      },
      or: {
        digit: '୯୫',
        name: 'ପଞ୍ଚାନବେ',
        translit: 'Panchaanabe',
        phonetics: ["95","୯୫","ପଞ୍ଚାନବେ","panchaanabe","panchanabe"]
      },
      sa: {
        digit: '९५',
        name: 'पञ्चनवतिः',
        translit: 'Pancnanavatih',
        phonetics: ["95","९५","पञ्चनवतिः","pancnanavatih"]
      },
      ur: {
        digit: '۹۵',
        name: 'پچانوے',
        translit: 'Pachaanve',
        phonetics: ["95","۹۵","پچانوے","pachaanve","pachanve"]
      },
    },
    phonetics: {
      gu: ["95","૯૫","પંચાણું","panchaanu"],
      hi: ["95","९५","पचानवे","pachaanve"] 
    }
  },
  {
    english: 96,
    gujarati: '૯૬',
    gujaratiName: 'છન્નું',
    gujaratiTranslit: 'Chhannu',
    hindi: '९६',
    hindiName: 'छियानवे',
    hindiTranslit: 'Chhiyaanve',
    languages: {
      hi: {
        digit: '९६',
        name: 'छियानवे',
        translit: 'Chhiyaanve',
        phonetics: ["96","९६","छियानवे","chhiyaanve","chhiyanve"]
      },
      gu: {
        digit: '૯૬',
        name: 'છન્નું',
        translit: 'Chhannu',
        phonetics: ["96","૯૬","છન્નું","chhannu"]
      },
      mr: {
        digit: '९६',
        name: 'शहाण्णव',
        translit: 'Shahaannav',
        phonetics: ["96","९६","शहाण्णव","shahaannav","shahannav"]
      },
      bn: {
        digit: '৯৬',
        name: 'ছিয়ানব্বই',
        translit: 'Chhiyanobboi',
        phonetics: ["96","৯৬","ছিয়ানব্বই","chhiyanobboi"]
      },
      ta: {
        digit: '௯௬',
        name: 'தொண்ணூற்றாறு',
        translit: 'Thonnootraaru',
        phonetics: ["96","௯௬","தொண்ணூற்றாறு","thonnootraaru","thonnutraru"]
      },
      te: {
        digit: '౯౬',
        name: 'తొంభై ఆరు',
        translit: 'Tombhai Aaru',
        phonetics: ["96","౯౬","తొంభై ఆరు","tombhai aaru","tombhai aru"]
      },
      kn: {
        digit: '೯೬',
        name: 'ತೊಂಬತ್ತಾರು',
        translit: 'Tombattaaru',
        phonetics: ["96","೯೬","ತೊಂಬತ್ತಾರು","tombattaaru","tombattaru"]
      },
      ml: {
        digit: '൯൬',
        name: 'തൊണ്ണൂറ്റാറ്',
        translit: 'Thonnootraaru',
        phonetics: ["96","൯൬","തൊണ്ണൂറ്റാറ്","thonnootraaru","thonnutraru"]
      },
      pa: {
        digit: '੯੬',
        name: 'ਛਿਆਨਵੇਂ',
        translit: 'Chhiyaanve',
        phonetics: ["96","੯੬","ਛਿਆਨਵੇਂ","chhiyaanve","chhiyanve"]
      },
      or: {
        digit: '୯୬',
        name: 'ଛୟାନବେ',
        translit: 'Chhayaanabe',
        phonetics: ["96","୯୬","ଛୟାନବେ","chhayaanabe","chhayanabe"]
      },
      sa: {
        digit: '९६',
        name: 'षण्णवतिः',
        translit: 'Shannavatih',
        phonetics: ["96","९६","षण्णवतिः","shannavatih"]
      },
      ur: {
        digit: '۹۶',
        name: 'چھیانوے',
        translit: 'Chhiyaanve',
        phonetics: ["96","۹۶","چھیانوے","chhiyaanve","chhiyanve"]
      },
    },
    phonetics: {
      gu: ["96","૯૬","છન્નું","chhannu"],
      hi: ["96","९६","छियानवे","chhiyaanve"] 
    }
  },
  {
    english: 97,
    gujarati: '૯૭',
    gujaratiName: 'સત્તાણું',
    gujaratiTranslit: 'Sattaanu',
    hindi: '९७',
    hindiName: 'सत्तानवे',
    hindiTranslit: 'Sattaanve',
    languages: {
      hi: {
        digit: '९७',
        name: 'सत्तानवे',
        translit: 'Sattaanve',
        phonetics: ["97","९७","सत्तानवे","sattaanve","sattanve"]
      },
      gu: {
        digit: '૯૭',
        name: 'સત્તાણું',
        translit: 'Sattaanu',
        phonetics: ["97","૯૭","સત્તાણું","sattaanu","sattanu"]
      },
      mr: {
        digit: '९७',
        name: 'सत्याण्णव',
        translit: 'Satyaannav',
        phonetics: ["97","९७","सत्याण्णव","satyaannav","satyannav"]
      },
      bn: {
        digit: '৯৭',
        name: 'সাতানব্বই',
        translit: 'Satanobboi',
        phonetics: ["97","৯৭","সাতানব্বই","satanobboi"]
      },
      ta: {
        digit: '௯௭',
        name: 'தொண்ணூற்றேழு',
        translit: 'Thonnootrezhu',
        phonetics: ["97","௯௭","தொண்ணூற்றேழு","thonnootrezhu","thonnutrezhu"]
      },
      te: {
        digit: '౯౭',
        name: 'తొంభై ఏడు',
        translit: 'Tombhai Eedu',
        phonetics: ["97","౯౭","తొంభై ఏడు","tombhai eedu","tombhai idu"]
      },
      kn: {
        digit: '೯೭',
        name: 'ತೊಂಬತ್ತೇಳು',
        translit: 'Tombatteelu',
        phonetics: ["97","೯೭","ತೊಂಬತ್ತೇಳು","tombatteelu","tombattilu"]
      },
      ml: {
        digit: '൯൭',
        name: 'തൊണ്ണൂറ്റേഴ്',
        translit: 'Thonnootrezhu',
        phonetics: ["97","൯൭","തൊണ്ണൂറ്റേഴ്","thonnootrezhu","thonnutrezhu"]
      },
      pa: {
        digit: '੯੭',
        name: 'ਸਤਾਨਵੇਂ',
        translit: 'Sataanve',
        phonetics: ["97","੯੭","ਸਤਾਨਵੇਂ","sataanve","satanve"]
      },
      or: {
        digit: '୯୭',
        name: 'ସତାନବେ',
        translit: 'Sataanabe',
        phonetics: ["97","୯୭","ସତାନବେ","sataanabe","satanabe"]
      },
      sa: {
        digit: '९७',
        name: 'सप्तनवतिः',
        translit: 'Saptanavatih',
        phonetics: ["97","९७","सप्तनवतिः","saptanavatih"]
      },
      ur: {
        digit: '۹۷',
        name: 'ستانوے',
        translit: 'Sattaanve',
        phonetics: ["97","۹۷","ستانوے","sattaanve","sattanve"]
      },
    },
    phonetics: {
      gu: ["97","૯૭","સત્તાણું","sattaanu"],
      hi: ["97","९७","सत्तानवे","sattaanve"] 
    }
  },
  {
    english: 98,
    gujarati: '૯૮',
    gujaratiName: 'અઠ્ઠાણું',
    gujaratiTranslit: 'Atthaanu',
    hindi: '९८',
    hindiName: 'अट्ठानवे',
    hindiTranslit: 'Atthaanve',
    languages: {
      hi: {
        digit: '९८',
        name: 'अट्ठानवे',
        translit: 'Atthaanve',
        phonetics: ["98","९८","अट्ठानवे","atthaanve","atthanve"]
      },
      gu: {
        digit: '૯૮',
        name: 'અઠ્ઠાણું',
        translit: 'Atthaanu',
        phonetics: ["98","૯૮","અઠ્ઠાણું","atthaanu","atthanu"]
      },
      mr: {
        digit: '९८',
        name: 'अठ्ठ्याण्णव',
        translit: 'Atthyaannav',
        phonetics: ["98","९८","अठ्ठ्याण्णव","atthyaannav","atthyannav"]
      },
      bn: {
        digit: '৯৮',
        name: 'আটানব্বই',
        translit: 'Aatanobboi',
        phonetics: ["98","৯৮","আটানব্বই","aatanobboi","atanobboi"]
      },
      ta: {
        digit: '௯௮',
        name: 'தொண்ணூற்றெட்டு',
        translit: 'Thonnootrettu',
        phonetics: ["98","௯௮","தொண்ணூற்றெட்டு","thonnootrettu","thonnutrettu"]
      },
      te: {
        digit: '౯౮',
        name: 'తొంభై ఎనిమిది',
        translit: 'Tombhai Enimidi',
        phonetics: ["98","౯౮","తొంభై ఎనిమిది","tombhai enimidi"]
      },
      kn: {
        digit: '೯೮',
        name: 'ತೊಂಬತ್ತೆಂಟು',
        translit: 'Tombattentu',
        phonetics: ["98","೯೮","ತೊಂಬತ್ತೆಂಟು","tombattentu"]
      },
      ml: {
        digit: '൯൮',
        name: 'തൊണ്ണൂറ്റെട്ട്',
        translit: 'Thonnootrettu',
        phonetics: ["98","൯൮","തൊണ്ണൂറ്റെട്ട്","thonnootrettu","thonnutrettu"]
      },
      pa: {
        digit: '੯੮',
        name: 'ਅਠਾਨਵੇਂ',
        translit: 'Athaanve',
        phonetics: ["98","੯੮","ਅਠਾਨਵੇਂ","athaanve","athanve"]
      },
      or: {
        digit: '୯୮',
        name: 'ଅଠାନବେ',
        translit: 'Athaanabe',
        phonetics: ["98","୯୮","ଅଠାନବେ","athaanabe","athanabe"]
      },
      sa: {
        digit: '९८',
        name: 'अष्टनवतिः',
        translit: 'Ashtanavatih',
        phonetics: ["98","९८","अष्टनवतिः","ashtanavatih"]
      },
      ur: {
        digit: '۹۸',
        name: 'اٹھانوے',
        translit: 'Atthaanve',
        phonetics: ["98","۹۸","اٹھانوے","atthaanve","atthanve"]
      },
    },
    phonetics: {
      gu: ["98","૯૮","અઠ્ઠાણું","atthaanu"],
      hi: ["98","९८","अट्ठानवे","atthaanve"] 
    }
  },
  {
    english: 99,
    gujarati: '૯૯',
    gujaratiName: 'નવ્વાણું',
    gujaratiTranslit: 'Navvaanu',
    hindi: '९९',
    hindiName: 'निन्यानवे',
    hindiTranslit: 'Ninyaanve',
    languages: {
      hi: {
        digit: '९९',
        name: 'निन्यानवे',
        translit: 'Ninyaanve',
        phonetics: ["99","९९","निन्यानवे","ninyaanve","ninyanve"]
      },
      gu: {
        digit: '૯૯',
        name: 'નવ્વાણું',
        translit: 'Navvaanu',
        phonetics: ["99","૯૯","નવ્વાણું","navvaanu","navvanu"]
      },
      mr: {
        digit: '९९',
        name: 'नव्व्याण्णव',
        translit: 'Navvyaannav',
        phonetics: ["99","९९","नव्व्याण्णव","navvyaannav","navvyannav"]
      },
      bn: {
        digit: '৯৯',
        name: 'নিরানব্বই',
        translit: 'Niranobboi',
        phonetics: ["99","৯৯","নিরানব্বই","niranobboi"]
      },
      ta: {
        digit: '௯௯',
        name: 'தொண்ணூற்றொன்பது',
        translit: 'Thonnootronbathu',
        phonetics: ["99","௯௯","தொண்ணூற்றொன்பது","thonnootronbathu","thonnutronbathu"]
      },
      te: {
        digit: '౯౯',
        name: 'తొంభై తొమ్మిది',
        translit: 'Tombhai Tommidi',
        phonetics: ["99","౯౯","తొంభై తొమ్మిది","tombhai tommidi"]
      },
      kn: {
        digit: '೯೯',
        name: 'ತೊಂಬತ್ತೊಂಬತ್ತು',
        translit: 'Tombattombattu',
        phonetics: ["99","೯೯","ತೊಂಬತ್ತೊಂಬತ್ತು","tombattombattu"]
      },
      ml: {
        digit: '൯൯',
        name: 'തൊണ്ണൂറ്റൊമ്പത്',
        translit: 'Thonnootrombathu',
        phonetics: ["99","൯൯","തൊണ്ണൂറ്റൊമ്പത്","thonnootrombathu","thonnutrombathu"]
      },
      pa: {
        digit: '੯੯',
        name: 'ਨੜਿੰਨਵੇਂ',
        translit: 'Narinve',
        phonetics: ["99","੯੯","ਨੜਿੰਨਵੇਂ","narinve"]
      },
      or: {
        digit: '୯୯',
        name: 'ନବେନବେ',
        translit: 'Nabenabe',
        phonetics: ["99","୯୯","ନବେନବେ","nabenabe"]
      },
      sa: {
        digit: '९९',
        name: 'नवनवतिः',
        translit: 'Navanavatih',
        phonetics: ["99","९९","नवनवतिः","navanavatih"]
      },
      ur: {
        digit: '۹۹',
        name: 'نناوے',
        translit: 'Ninyaanve',
        phonetics: ["99","۹۹","نناوے","ninyaanve","ninyanve"]
      },
    },
    phonetics: {
      gu: ["99","૯૯","નવ્વાણું","navvaanu"],
      hi: ["99","९९","निन्यानवे","ninyaanve"] 
    }
  },
  {
    english: 100,
    gujarati: '૧૦૦',
    gujaratiName: 'સો',
    gujaratiTranslit: 'So',
    hindi: '१००',
    hindiName: 'सौ',
    hindiTranslit: 'Sau',
    languages: {
      hi: {
        digit: '१००',
        name: 'सौ',
        translit: 'Sau',
        phonetics: ["100","१००","सौ","sau"]
      },
      gu: {
        digit: '૧૦૦',
        name: 'સો',
        translit: 'So',
        phonetics: ["100","૧૦૦","સો","so"]
      },
      mr: {
        digit: '१००',
        name: 'शंभर',
        translit: 'Shambhar',
        phonetics: ["100","१००","शंभर","shambhar"]
      },
      bn: {
        digit: '১০০',
        name: 'একশত',
        translit: 'Ekshot',
        phonetics: ["100","১০০","একশত","ekshot"]
      },
      ta: {
        digit: '௧௦௦',
        name: 'நூறு',
        translit: 'Nooru',
        phonetics: ["100","௧௦௦","நூறு","nooru","nuru"]
      },
      te: {
        digit: '౧౦౦',
        name: 'వంద',
        translit: 'Vanda',
        phonetics: ["100","౧౦౦","వంద","vanda"]
      },
      kn: {
        digit: '೧೦೦',
        name: 'ನೂರು',
        translit: 'Nooru',
        phonetics: ["100","೧೦೦","ನೂರು","nooru","nuru"]
      },
      ml: {
        digit: '൧൦൦',
        name: 'നൂറ്',
        translit: 'Nooru',
        phonetics: ["100","൧൦൦","നൂറ്","nooru","nuru"]
      },
      pa: {
        digit: '੧੦੦',
        name: 'ਸੌ',
        translit: 'Sau',
        phonetics: ["100","੧੦੦","ਸੌ","sau"]
      },
      or: {
        digit: '୧୦୦',
        name: 'ଏକ ଶହ',
        translit: 'Eka Shaha',
        phonetics: ["100","୧୦୦","ଏକ ଶହ","eka shaha"]
      },
      sa: {
        digit: '१००',
        name: 'शतम्',
        translit: 'Shatam',
        phonetics: ["100","१००","शतम्","shatam"]
      },
      ur: {
        digit: '۱۰۰',
        name: 'سو',
        translit: 'Sau',
        phonetics: ["100","۱۰۰","سو","sau"]
      },
    },
    phonetics: {
      gu: ["100","૧૦૦","સો","so"],
      hi: ["100","१००","सौ","sau"] 
    }
  },
];

export const getNumberForLang = (num: NumberItem, langCode: string): LangNumberItem => {
  if (num.languages && (num.languages as any)[langCode]) {
    return (num.languages as any)[langCode];
  }
  return {
    digit: num.english.toString(),
    name: num.hindiName || num.gujaratiName || String(num.english),
    translit: num.hindiTranslit || num.gujaratiTranslit || String(num.english),
    phonetics: [String(num.english)]
  };
};
