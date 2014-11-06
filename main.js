questions = [{question: "Why is the sky blue", answer: "1"}, {question: "Who was xxx", answer: "2"}, {question:"Why eat cheese", answer:"3"}]
questionIndex = 0
$(document).ready(function() {
	askQuestion()
	$("#go").click(function() {
		checkAnswer()
	})

	function askQuestion() {
		index = questionIndex
		while (index == questionIndex) {
			index = rand(0, questions.length -1)
			$("#question").text(questions[index].question)
		}
		questionIndex = index;
	}

	function checkAnswer() {
		question = questions[questionIndex]

		if (question.answer == $("#answer").val()) {
			askQuestion()
		}else {
			console.log(question);
		}
	}
});

/* HELPER FUNCTIONS */
function rand(min, max) {
  var offset = min;
  var range = (max - min) + 1;

  var randomNumber = Math.floor( Math.random() * range) + offset;
  return randomNumber;
}