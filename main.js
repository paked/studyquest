questions = [{question: "Why is the sky blue", answers: [{text:"1", correct: true}, {text: "2", correct: false}]}]
questionIndex = 0
$(document).ready(function() {
	askQuestion()
	$("#go").click(function() {
		checkAnswer()
	})

	function askQuestion() {
		index = questionIndex
		while (index == questionIndex && questions.length != 1) {
			index = rand(0, questions.length)
		}
		questionIndex = index;
		question = questions[questionIndex]
		$('#question').text(question.question)

		$(".answer").remove()
		for (var i = 0; i < question.answers.length; i++) {
			$("<label for='RDIOS' class='answer'>"+question.answers[i].text+"</label><input class='answer' type='radio' name='answers' value='"+question.answers[i].text+"' data-index='"+i+"'/>").appendTo('#answer-container')
		}
	}

	function checkAnswer() {
		question = questions[questionIndex]
		// console.log("QUESTION CORRECT", $("input[name='answers']:checked").val(), question);
		var answer = question.answers[parseInt($("input[name='answers']:checked").attr('data-index'))]
		console.log(answer)
		if(answer.correct){
			askQuestion()
		}else {
			console.log("WRONG");
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