console.log("hello world");

function handleSubmit(event) {
	event.preventDefault();
	alert('Form submitted!');
}


let contact = document.querySelector('#contact');
contact.addEventListener('submit', handleSubmit);


const CatImage = document.getElementById('catPic');
CatImage.addEventListener('mouseover', sendCompliment)

function sendCompliment() {
	alert('You are awesome just like this cat!')
}