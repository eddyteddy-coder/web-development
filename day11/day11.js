const quizDB=[
  {
  question: " The Central Rice Research Station is situated in?",
  a:"Chennai",
  b:"Cuttack",
  c:"Bangalore",
  d: "Quilon",
  ans:"ans2"
},
{
  question:"Which among the following headstreams meets the Ganges in last?",
a: "Alaknanda",
b: "Pindar",
c: "Mandakini",
d: "Bhagirathi",
ans:"ans4"
},
{
  question:"Microsoft Office is an example of a",

a: "closed source software",
b: "Open source software",
c: "Horizontal market software",
d: "vertical market software",
ans:"ans1",
}
];
const showScore=document.querySelector('#showScore');
let questionCount=0;
let score=0;
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const loadQuestion=()=>{
  const questionList= quizDB[questionCount];
  question.innerText =questionList.question;
  option1.innerText=questionList.a;
  option2.innerText=questionList.b;
  option3.innerText=questionList.c;
  option4.innerText=questionList.d;

}
loadQuestion();

const getCheckAnswer=()=>{
  let answer;

  answers.forEach((currAnsElem) => {
    if(currAnsElem.checked){
    answer=currAnsElem.id;
  }

});
return answer;
};
submit.addEventListener('click',()=>{
  const checkedAnswer=getCheckAnswer();
  console.log(checkedAnswer);

  if(checkedAnswer.id == quizDB[questionCount].ans){
    score++;

  }
  questionCount++;
  if(questionCount < quizDB.length){
     loadQuestion();
  }
  else{

    showScore.innerHTML=`
    <h3>you scored ${score}/${quizDB.length}.</h3>
    <button class="btn" onclick="location.reload()">play again!</button>
    `;

    showScore.classList.remove('.showArea');
  }
});
