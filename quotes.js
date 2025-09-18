// Local quotes for each mood
const quotes = {
  happy: [
    "Happiness is a direction, not a place.",
    "The purpose of our lives is to be happy.",
    "Smiles are contagious. Spread them everywhere!"
  ],
  sad: [
    "Tears are words the heart can’t express.",
    "Every human walks around with a certain kind of sadness.",
    "Sadness flies away on the wings of time."
  ],
  chill: [
    "Relax, nothing is under control.",
    "Take it easy, one step at a time.",
    "Peace begins with a smile."
  ],
  angry: [
    "For every minute you remain angry, you give up sixty seconds of peace of mind.",
    "Anger is one letter short of danger.",
    "Stay calm. It’s the best revenge."
  ]
};

function getQuoteByMood(mood) {
  const moodQuotes = quotes[mood] || ["No quote available."];
  return moodQuotes[Math.floor(Math.random() * moodQuotes.length)];
}
