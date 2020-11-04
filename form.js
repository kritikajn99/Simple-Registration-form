// Now come to the validation part


function validation(){

	let userName = document.getElementById("user").value;
	let userMobile = document.getElementById("mob").value;
	let userEmail = document.getElementById("mail").value;
	let userPass = document.getElementById("pass").value;
	let userCnfPass = document.getElementById("cnf-pass").value;

    //regx expression for all fields

    let checkUserName = /^[A-Za-z. ]{3,25}$/
   // let checkUserPassword = /^(?=.*[0-9])(?=.*[!@#%$^&*])[A-Za-z0-9!@#%$^&*]{8,15}$/
    let checkUserMobile = /^[6789]{1}[0-9]{9}$/
    let checkUserEmail = /^[A-Za-z0-9]{3,}@[a-zA-Z]{3,}[.]{1}[a-zA-Z.]{2,6}$/

    //check all expressions

    if(checkUserName.test(userName)){
        document.getElementById("name-error").innerHTML = "";
        document.getElementById("user").style.border = "1px solid rgb(148,214,173)";
    }
    else{
        document.getElementById("name-error").innerHTML = "Invalid UserName It must be Charectors only.";
        document.getElementById("user").style.border = "1px solid red";
        return false;
    }

    if(checkUserMobile.test(userMobile)){
        document.getElementById("mob-error").innerHTML = "";
        document.getElementById("mob").style.border = "1px solid rgb(148,214,173)";
    }
    else{
        document.getElementById("mob-error").innerHTML = "Invalid Mobile Number must be 10 digits";
        document.getElementById("mob").style.border = "1px solid red";
        return false;
    }

    if(checkUserEmail.test(userEmail)){
        document.getElementById("mail-error").innerHTML = "";
        document.getElementById("mail").style.border = "1px solid rgb(148,214,173)";
    }
    else{
        document.getElementById("mail-error").innerHTML = "Invalid Email id.";
        document.getElementById("mail").style.border = "1px solid red";
        return false;
    }

   /* if(checkUserPassword.test(userPass)){
        document.getElementById("pass-error").innerHTML = "";
        document.getElementById("pass").style.border = "1px solid rgb(148,214,173)";
    }
    else{
        document.getElementById("pass-error").innerHTML = "Invalid! Password must contain special character and numeric value";
        document.getElementById("pass").style.border = "1px solid red";
        return false;
    }*/

    if(userCnfPass.match(userPass)){
        document.getElementById("cnfpass-error").innerHTML = "";
        document.getElementById("cnf-pass").style.border = "1px solid rgb(148,214,173)";
    }
    else{
        document.getElementById("cnfpass-error").innerHTML = "Passwords do not match ";
        document.getElementById("cnf-pass").style.border = "1px solid red";
        return false;
    }
	
	document.getElementsByClassName("error").innerHTML="";
	
}
function success(){
	let userName = document.getElementById("user").value;
	let userMobile = document.getElementById("mob").value;
	let userEmail = document.getElementById("mail").value;
	let userPass = document.getElementById("pass").value;
	let userCnfPass = document.getElementById("cnf-pass").value;

	
	if(userName  == "" || userMobile == "" || userEmail  == "" || userPass == "" || userCnfPass == "")
		window.alert("Registration unsuccessful! The form must be filled out completely"); 
	else
		window.alert("Registration successful!");

}
