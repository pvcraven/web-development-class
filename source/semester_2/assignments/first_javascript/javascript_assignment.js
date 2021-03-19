function f1(event) {
    console.log("Hello");
}

let formButton1 = $('#button1');
formButton1.on("click", f1);

function f2(event) {
	let v1 = $('#field1').val();
	let v2 = $('#field2').val();
	let v3 = Number(v1) + Number(v2);
	$('#field3').val(v3);
}

var formButton2 = $('#button2');
formButton2.on("click", f2);

function f3(event) {
	if($('#paragraphToHide').is(":visible")) {
		$('#paragraphToHide').hide(500);
	} else {
		$('#paragraphToHide').show(500);
	}
}

var formButton3 = $('#button3');
formButton3.on("click", f3);

function f4(event) {
	let v1 = $('#phoneField').val();
	let reg = /^\d{3}-\d{3}-\d{4}$/;
	if (reg.test(v1)) {
	    console.log("Ok");
	} else {
	    console.log("Bad "+v1);
	}
}

let formButton4 = $('#button4');
formButton4.on("click", f4);

function f4(event) {
	let v1 = $('#phoneField').val();
	let reg = /^\d{3}-\d{3}-\d{4}$/;
	if (reg.test(v1)) {
	    console.log("Ok");
	} else {
	    console.log("Bad "+v1);
	}
}

let formButton5 = $('#button5');
formButton5.on("click", f5);

function f5(event) {
	let formObject = {};
	formObject.first = $('#first').val();
	formObject.last = $('#last').val();
	formObject.email = $('#email').val();
	let jsonString = JSON.stringify(formObject);
	console.log(jsonString);
}
