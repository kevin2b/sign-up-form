const pass = document.querySelector("#password");
const confirmPass = document.querySelector("#confirm-password");
const passErrorMessage = document.querySelector(".error-message");
const mainForm = document.querySelector("#main-form");


const passwordMatch = (e) => {
	const firstPass = pass.value;
	const secondPass = confirmPass.value;

	//One of the password field is empty, will not prompt user to enter same password
	if (firstPass.length === 0 || secondPass.length === 0){
		displayPasswordError(false);
		return;
	}
	
	if (firstPass !== secondPass){
		displayPasswordError(true);
		return;		
	}
	
	displayPasswordError(false);
	return;
	
};

pass.addEventListener("input", passwordMatch);
confirmPass.addEventListener("input", passwordMatch);

mainForm.addEventListener("submit", (e) => {
	if (pass.classList.contains("error")){
		e.preventDefault();
	}
});


function displayPasswordError (yes){
	if (yes){
		pass.classList.add("error");
		confirmPass.classList.add("error");
		passErrorMessage.textContent = "Passwords do not match.";
	}
	else{
		pass.classList.remove("error");
		confirmPass.classList.remove("error");
		passErrorMessage.textContent = "";
	}
}