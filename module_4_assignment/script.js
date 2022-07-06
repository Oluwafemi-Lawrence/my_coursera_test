(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", 
  "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var small;
for (var i = 0; i < names.length; i++) {
  
  var name = names[i];
  var firstLetter = name.split('')[0];
  small = firstLetter.toLowerCase();

  if (small =='j') {
     byeSpeaker.speak(name);
  } else {
    helloSpeaker.speak(name);
  }
  
}
})()