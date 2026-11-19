export const speakText = (
  text: string,
  lang: 'gu' | 'hi' | string = 'gu',
  rate: number = 0.9
): Promise<void> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve();
      return;
    }

    try {
      window.speechSynthesis.cancel(); // Stop any pending speech

      const utterance = new SpeechSynthesisUtterance(text);
      const langCode = lang === 'gu' || lang === 'gu-IN' ? 'gu-IN' : 'hi-IN';
      utterance.lang = langCode;
      utterance.rate = rate;

      // Try to find matching system voice
      const voices = window.speechSynthesis.getVoices();
      const matchedVoice = voices.find((v) => v.lang.startsWith(lang === 'gu' ? 'gu' : 'hi'));
      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }

      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();

      window.speechSynthesis.speak(utterance);
    } catch {
      resolve();
    }
  });
};
