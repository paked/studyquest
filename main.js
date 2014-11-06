console.log("Hello World")

questions = [{question: "Why is the sky blue", answer: "1"}, {question: "Who was xxx", answer: "2"}, {question:"Why eat cheese", answer:"3"}]

/* HELPER FUNCTIONS */
function rand(min, max) {
  var offset = min;
  var range = (max - min) + 1;

  var randomNumber = Math.floor( Math.random() * range) + offset;
  return randomNumber;
}