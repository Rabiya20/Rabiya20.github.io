

//index.js  
function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "rabiamushtaqmithani@gmail.com", //sender
	Password : "<email password>", //sender's pass
	To : 'rabiameethani20@gmail.com', // reciever
	From : "rabiamushtaqmithani@gmail.com", // sender
	Subject : "Testing",
	Body : "Body Data",
	}).then(
		message => alert("mail sent successfully")
	);
    window.open('mailto:test@example.com?subject=subject&body=body');

}