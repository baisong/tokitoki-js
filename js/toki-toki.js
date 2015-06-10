var tt = {};

tt.isValidWord = function (word) {
  var words = '|a|akesi|ala|alasa|ale|anpa|ante|anu|awen|e|en|esun|ijo|ike|ilo|insa|jaki|jan|jelo|jo|kala|kalama|kama|kasi|ken|kepeken|kili|kiwen|ko|kon|kule|kulupu|kute|la|lape|laso|lawa|len|lete|li|lili|linja|lipu|loje|lon|luka|lukin|lupa|ma|mama|mani|meli|mi|mije|moku|moli|monsi|mu|mun|musi|mute|nanpa|nasa|nasin|nena|ni|nimi|noka|o|olin|ona|open|pakala|pali|palisa|pan|pana|pi|pilin|pimeja|pini|pipi|poka|poki|pona|pu|sama|seli|selo|seme|sewi|sijelo|sike|sin|sina|sinpin|sitelen|sona|soweli|suli|suno|supa|suwi|tan|taso|tawa|telo|tenpo|toki|tomo|tu|unpa|uta|utala|walo|wan|waso|wawa|weka|wile|';
  return words.indexOf('|' + word + '|') !== -1;
};

tt.toCanonWord = function (word) {
  var translations = {
    namako: 'sin',
    ali: 'ale',
    oko: 'lukin',
    kin: 'a'
  };
  if (typeof translations[word] !== 'undefined') {
    return translations[word];
  }
  return word;
}

tt.useCanonWords = fjs.map(tt.toCanonWord);
tt.filterWords = fjs.filter(tt.isValidWord);

tt.parseWords = function(words) {
// @TODO
// map clean/trim func
// update valid words list
// split into groups of "li"
// split into sub-groups of "e"
// validate sentence (S[VO?]*)
// 1-to-1 gloss
// better gloss
  words = tt.useCanonWords(words);
  return tt.filterWords(words);
}

