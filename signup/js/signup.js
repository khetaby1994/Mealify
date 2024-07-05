var signupFname=document.getElementById('fname');
var signupLname=document.getElementById('lname');
var signupAge=document.getElementById('age');
var signupGender=document.getElementById('gender');
var signupEmail=document.getElementById('signupEmail');
var signupPassword=document.getElementById('signupPassword');
var emailHelp=document.getElementById('emailHelp');
var dataInvalid=document.getElementById('dataInvalid')
var submit=document.getElementById('submit');

var users=[]
if (localStorage.getItem('users')!=null) {
    users=JSON.parse(localStorage.getItem('users'))
    
}



// =============== check empty =========
function empty() {
    if (signupFname.value=="" ||signupLname.value=="" ||signupAge.value=="" ||signupGender.value=="" ||signupEmail.value=="" ||signupPassword.value=="") {
        dataInvalid.innerText='enter empty cells'
        dataInvalid.classList.replace('d-none','d-block')
        return false;
        
    } else {
        dataInvalid.classList.replace('d-block','d-none')
        return true;
    }
    
}

// ==========   check regex    ================
const fnameRegex=/^[a-zA-Z][a-zA-Z]{2,14}$/;
const lnameRegex=/^[a-zA-Z][a-zA-Z]{2,14}$/
const ageRegex=/^(18|19|[2-9][0-9])$/
const genderRegex=/^(male|female)$/i
const emailRegex=/^[a-z0-9_]+@[a-z]+\.+com$/
const passwordRegex=/^.{8,20}$/
const regexArray=[fnameRegex,lnameRegex,ageRegex,genderRegex,emailRegex,passwordRegex]
var inputtags=document.querySelectorAll('.form-control')

for (let i = 0; i < inputtags.length; i++) {
    inputtags[i].addEventListener('keyup',function () {
        checkWithRegex(inputtags[i],regexArray[i]);
    })
    
}
function checkWithRegex(input,regex) {
    var testRegex=regex
    if (testRegex.test(input.value)) {
        input.classList.add('valid')
        input.classList.remove('invalid')
        return true;


    } else {
        input.classList.add('invalid')
        input.classList.remove('valid')
        return false;
    }
}


// ============ check if exist   ================
function checkIfExist() {  
    for (let i = 0; i < users.length; i++) {
        if (users[i].signupEmail===userdata.signupEmail) {
            console.log('same');
            return true;

        } else{
            return false;
        }
    }
}


// =====================    button     =====================

var userdata

submit.addEventListener('click',function () {
    if (empty()==false) {
        return false;
        
    } 
    userdata={
        signupFname:signupFname.value,
        signupLname:signupLname.value,
        signupAge:signupAge.value,
        signupGender:signupGender.value,
        signupEmail:signupEmail.value,
        signupPassword:signupPassword.value
    };
    if (users.length==0) {
        users.push(userdata);
        localStorage.setItem('users',JSON.stringify(users))
        window.location.replace('../signin/signin.html')
        return true;        
    }
    if (checkIfExist()==true) {
        emailHelp.classList.replace('d-none','d-block')
        return false

        
    } else if(checkIfExist()==false) {
        users.push(userdata);
        localStorage.setItem('users',JSON.stringify(users))
        window.location.replace('../signin/signin.html')
        return true;  
        
    }


})

