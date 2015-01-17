function mommify(inputString){

  var count = countVowl(inputString);
  return count;

}
var Mommifier = {
  'vowls' : 'aeiouAEIOU',
  'replacement' : 'mommy',
  'threshold' : 0.3
};

function isVowl(character){
  return Mommifier.vowls.indexOf(character) >= 0;
}

function countVowl(word){
  var count = 0;
  for(var i=0; i<word.length; i++){
    if (isVowl(word[i])){
      count += 1;
    }
  }
  return count;
}

function isContinousVowl(word){

}
