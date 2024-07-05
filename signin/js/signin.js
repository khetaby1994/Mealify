var signupEmail=document.getElementById('signupEmail');
var signupPassword=document.getElementById('signupPassword');
var submit=document.getElementById('submit');
var dataHelp=document.getElementById('dataHelp')



var users=[]
users=JSON.parse(localStorage.getItem('users'))

var userdata
// store userdata after validation
submit.addEventListener('click',function () {
    
if (localStorage.getItem('users')==null) {
    dataHelp.classList.replace('d-none','d-block')
} 
else{
        userdata={
            signupEmail:signupEmail.value,
            signupPassword:signupPassword.value,
        };

        for (let i = 0; i < users.length; i++) {
            if (users[i].signupEmail===userdata.signupEmail && users[i].signupPassword===userdata.signupPassword) {
                window.location.replace('../fullversion/fullversion.html')
            
                
            } else {
                dataHelp.classList.replace('d-none','d-block')
                
            }


        }
}


    
})


function searchUserEmail() {
    
}



