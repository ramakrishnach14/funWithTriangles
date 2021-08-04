//let quizForm = document.querySelector("#questionsForm");
let quizForm = document.forms[0];
let questionDiv = document.querySelectorAll(".questionDiv");

let outputDiv = document.querySelector(".output");

const correctAns = ["answer1A", "answer2B", "answer3A", "answer4A", "answer5A", "answer6B", "answer7B", "answer8C", "answer9C", "answer10C" ];


quizForm.addEventListener("submit",(e)=>{
	let score= 0;
	e.preventDefault();
	//console.log("form submitted");

	let formSubmitData = new FormData(quizForm);
	let index = 0 ;
	//console.log(formSubmitData);

	for(let entry of formSubmitData){
		//console.log(entry[1]);
		if(entry[1] == correctAns[index]){
			score= score + 1;
			questionDiv[index].style.backgroundColor="lightgreen";
		} else{
			questionDiv[index].style.backgroundColor="pink";
		}

		index++;
	}

	outputDiv.innerText = "your score is " + score;

	

	console.log(score);
})

quizForm.reset();