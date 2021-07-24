let side1Tb = document.querySelector("#side1");
let side2Tb = document.querySelector("#side2");
let checkBtn = document.querySelector("#check");
let outputDiv = document.querySelector(".output");

let a;
let b;
let c;

checkBtn.addEventListener("click",()=>{
	 a =  side1Tb.value;
	 b = side2Tb.value;
	 //console.log(a+" "+b);
	 //console.log(b);
	 if(!Number(a) || !Number(b) ){
	 	showerror("input error");
	 	//console.log("inside if");
	 } else{
	 	c = Math.sqrt(a*a + b*b);
	 	showerror(c);
	 	//console.log("inside else");
	 }
	 
	 //console.log(c);
});

function showerror(text){
	outputDiv.innerText=text;
}