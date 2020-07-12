

var currentQuestion=0;
var score = 0;
var toQuestions = askQuestion.length;

var container = document.getElementById('quizContainer')
var questionEl= document.getElementById('question');
var opt1= document.getElementById('opt1');
var lbl_opt1= document.getElementById('lbl_opt1');
var opt2= document.getElementById('opt2');
var opt3= document.getElementById('opt3');
var opt4= document.getElementById('opt4');
var nextButton = document.getElementById('NextButton');
var resultContainer=document.getElementById('resultContainer');
var resultCont = document.getElementById('result');
var failCont = document.getElementById('fail-continue');
var successCont = document.getElementById('success-continue');

//method to load question
function loadQuestion (questionIndex){
    var q = askQuestion[questionIndex];
    questionEl.textContent = q.question;
    lbl_opt1.textContent = q.option1;
    lbl_opt2.textContent = q.option2;
    lbl_opt3.textContent = q.option3;
    lbl_opt4.textContent = q.option4;
}

function loadNextQuestion(){
    //to check if user select answer.
    var selectedOption = document.querySelector('input[type=radio]:checked')
    //if user not select any answer
    if(!selectedOption){
        alert('Please select your answer!');
        return;
    }
    var answer = selectedOption.value;
    if(askQuestion[currentQuestion].answer == answer){
        score += 1;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion==toQuestions-1){
        NextButton.textContent='Finish';
    }
    //if end of questions, show result container
    if(currentQuestion==toQuestions){
        container.style.display='none';
        //to unhide the result container
        resultContainer.style.display='';
        resultCont.style.display='';
        resultCont.textContent= 'Your score: '+score+' out of '+toQuestions;
        if(score==toQuestions){
            failCont.style.display='none';
            successCont.style.display='';
        }
        else
        {
            failCont.style.display='';
        }
        return;
    }
    loadQuestion(currentQuestion);
}

//function to load fail button
function toRetry(){
    currentQuestion=0;
    score=0;
    NextButton.textContent='Next Question';
    resultContainer.style.display='none';
    resultCont.style.display='none';
    container.style.display='';
    loadQuestion(currentQuestion);

}


//load first question
loadQuestion(currentQuestion);


