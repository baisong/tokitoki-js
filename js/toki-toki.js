var tt = {};

tt.isValidWord = function (word) {
  var words = '|toki|pona|li|';
  return words.indexOf('|' + word + '|') !== -1;
};

tt.filterWords = fjs.filter(tt.isValidWord);

tt.parseWords = function(words) {
  return tt.filterWords(words);
}

