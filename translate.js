var translate = require('@google-cloud/translate')({
  projectId: 'TranslateHackaton',
  keyFilename: 'TranslateHackaton-85115afcfd6a.json'
});
 
// Translate a string of text. 
translate.translate('Hello', 'es', function(err, translation) {
  if (!err) {
    // translation = 'Hola' 
  }
});
 
// Detect a language from a string of text. 
translate.detect('Hello', function(err, results) {
  if (!err) {
    // results = { 
    //   language: 'en', 
    //   confidence: 1, 
    //   input: 'Hello' 
    // } 
  }
});
 
// Get a list of supported languages. 
translate.getLanguages(function(err, languages) {
  if (!err) {
    // languages = [ 
    //   'af', 
    //   'ar', 
    //   'az', 
    //   ... 
    // ] 
  }
});
 
// Promises are also supported by omitting callbacks. 
translate.getLanguages().then(function(data) {
  var languages = data[0];
});
 
// It's also possible to integrate with third-party Promise libraries. 
// var translate = require('@google-cloud/translate')({
//   promise: require('bluebird')
// });