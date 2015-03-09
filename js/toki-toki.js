var tt = {};

tt.isValidWord = function (word) {
  var words = '|toki|pona|li|';
  return words.indexOf('|' + word + '|') !== -1;
};

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
  return tt.filterWords(words);
}

