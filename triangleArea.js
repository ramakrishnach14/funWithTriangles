let option1Btn = document.querySelector("#option1");
let option2Btn = document.querySelector("#option2");
let option3Btn = document.querySelector("#option3");
let baseHeightDiv = document.querySelector(".baseHeight");
let threeSidesDiv = document.querySelector(".threeSides");
let sideAngleDiv = document.querySelector(".sideAngle");





//Below code which will allow us to select respective methods to calculate area


option1Btn.addEventListener("click",()=>{
	//console.log("1");
	threeSidesDiv.style.display="none";
	baseHeightDiv.style.display="block";
	sideAngleDiv.style.display="none";
})

option2Btn.addEventListener("click",()=>{
	// console.log("2");
	threeSidesDiv.style.display="block";
	baseHeightDiv.style.display="none";
	sideAngleDiv.style.display="none";
})

option3Btn.addEventListener("click",()=>{
	threeSidesDiv.style.display="none";
	baseHeightDiv.style.display="none";
	sideAngleDiv.style.display="block";
})

if(option1Btn.checked || option2Btn.checked || option3Btn.checked){
	option1Btn.checked = false;
	option2Btn.checked = false;
	option3Btn.checked = false;
}


let outputDiv = document.querySelectorAll(".output");

//Area with base and height

let check1Btn = document.querySelector("#check1");
let baseTb = document.querySelector("#base");
let heightTb = document.querySelector("#height"); 


check1Btn.addEventListener("click",()=>{
	let base = baseTb.value;
	let height = heightTb.value;
	if(!Number(base) || !Number(height)){
		outputDiv[0].innerText = "Error in input";
	} else {
		outputDiv[0].innerText = "Area is " + (0.5 * Number(base) * Number(height));
	}
});

//Area with three sides

let side1 = document.querySelector("#sideA");
let side2 = document.querySelector("#sideB");
let side3 = document.querySelector("#sideC");

let check2Btn = document.querySelector("#check2");

check2Btn.addEventListener("click",()=>{
	let a = side1.value;
	let b = side2.value;
	let c = side3.value;

	if(!Number(a) || !Number(b) || !Number(c)){
		outputDiv[1].innerText = "Error in input";
	} else{
		let s = (a+b+c)/2;
		outputDiv[1].innerText = Math.sqrt(s*(s-a)*(s-b)*(s-c));
	}	
});

//Area with 2 sides and an angle

let check3Btn = document.querySelector("#check3");

let sideBTb = document.querySelector("#sideOne");
let sideCTb = document.querySelector("#sideTwo");
let sideAng = document.querySelector("#sideAng");


check3Btn.addEventListener("click",()=>{
	let b = sideBTb.value;
	let c = sideCTb.value;
	let ang = sideAng.value;

	if(!Number(b) || !Number(c) || !Number(ang)){
		outputDiv[2].innerText = "Error in input";
	} else {
		outputDiv[2].innerText = 0.5*b*c*Math.sin(ang);
	}
});




