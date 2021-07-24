// alert("hello");

let deg_1_tb = document.querySelector("#angle1");
let deg_2_tb = document.querySelector("#angle2");
let deg_3_tb = document.querySelector("#angle3");
let check_btn = document.querySelector("#check");
let output_div = document.querySelector(".output");

let angle1;
let angle2;
let angle3;
let total;

check_btn.addEventListener("click",()=>{
	angle1 = deg_1_tb.value;
	angle2 = deg_2_tb.value;
	angle3 = deg_3_tb.value;
	if(!Number(angle1)&&!Number(angle1)&&!Number(angle1)){
		//console.log("no numbers")
		output_div.style.color="red";
		showerror("Error in input value");
	} else{
		total = Number(angle1) + Number(angle2) + Number(angle3);
		output_div.style.color="blue	";
		if(total===180){
			showerror("hurray , it's a triangle");
		} else{
			showerror("oops , it's not a triangle");
		}	
	}
	//console.log(angle1 + " " + angle2 + " " + angle3);
});

function showerror(text){
	output_div.innerText = text;
}