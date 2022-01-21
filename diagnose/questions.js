  var responses = [];
  var questions = [
  {
    questionText: "<p>1) Does your child have a fever of 38&#176; C/100.4&#176; F or greater?</p>",
    questionImage: "Thermometer.jpg",
    yesScore: 1,
    noScore: 0,
    maybeScore: 0.5
  },
  {
    questionText: "<p>2) Does you child have a cough?</p>",
    questionImage: null,
    yesScore: 0,
    noScore: 1,
    maybeScore: 0.5
  } ];

  // Returns with a value between -1 and 1, representing what to do to the points
  function evalQuestion(questionID, value) {
    if ( value == 'yes' ) {
      return responses.push(questions[questionID].yesScore);
    } else if (value=='unsure') {
      return responses.push(questions[questionID].maybeScore);
    } else {
      return responses.push(questions[questionID].noScore);
    }
  }

  function swapQuestion(questionID) {
    var question = questions[questionID];
    $("#question").html( question.questionText );
    if ( question.questionImage ) {
      $("#question_image").html( "<img src='" + question.questionImage + "'>" );
    } else {
      $("#question_image").html( "" );
    }
  }

  $(document).ready(function() {
    var score = 0,
        questionID = 0,
        numQuestions = questions.length;

    // Load initial question
    swapQuestion(0);

    $(".button").click(function() {
      if ( questionID < numQuestions ) {
        evalQuestion(questionID, $(this).val() );

        // switch( $(this).val() ) {
        //   case "yes":
        //   console.log(this);
        //     score += questions[questionID].yesScore;
        //     break;
        //   case "no":
        //   console.log(this);
        //     score += questions[questionID].noScore;
        //     break;
        //   default:
        //     console.log("error");
        //     break;
        // }   

        questionID++;
        if ( questionID < numQuestions ) {
          swapQuestion(questionID);
        } else {

          // add up the score
          while(responses.length > 0) {
            score += responses.pop();
          }
          console.log(score);          

          if (score < 2){
            $("#question").html( "<p>You are A-OK</p>");
          } else if (score >= 2 &&  score < 4) {
            $("#question").html( "<p>You should probably see a doctor.</p>");
          } else {
            $("#question").html( "<p>Go see a doctor immediately!</p>");
          }
          $(".button").hide();
        }
      }


    });
  });
