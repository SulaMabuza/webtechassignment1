// Import stylesheets
import './cvstyle.css';


//trying to show an error code before submission of form if there is an error  

const form = document.getElementById('indexform');
const name = document.getElementById('name');
const physicaladdress = document.getElementById('physicaladdress');
const nationality = document.getElementById('nationality');
const phonenumber = document.getElementById('phonenumber');
const email = document.getElementById('email');
const linkedin = document.getElementById('linkedin');
const gender = document.getElementById('gender');
const major = document.getElementById('major');
const graduationdate = document.getElementById('graduationdate');
const highschool = document.getElementById('highschool');
const certificate = document.getElementById('certificate');
const location = document.getElementById('location');
const hsgraddate = document.getElementById('hsgraddate');


form.addEventListener('submit', (e) =>){

	

	checkInputs();
}

function checkInputs(){
	const nameValue = name.value.trim();
	const addressValue = physicaladdress.value.trim();
	const nationalityValue = nationality.value.trim();
	const phonenumberValue = phonenumber.value.trim();
	const emailValue = email.value.trim();
	const linkedinValue = linkedin.value.trim();
	const genderValue = gender.value.trim();
	const majorValue = major.value.trim();
	const graduationValue = graduationdate.value.trim();
	const highschoolValue = highschool.value.trim();
	const certificateValue = certificate.value.trim();
	const locationValue = location.value.trim();
	const hsgraddateValue = hsgraddate.value.trim();


	if(nameValue == ''){


		setErrorFor(name,'Name cannot be blank');

	}else{

		setSuccessFor(username);
	}

}

