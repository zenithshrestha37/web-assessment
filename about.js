console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("your form has been submitted successfully");
	console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function getAlert(img) {
	alert ("Thanks for the mouseover")
}


