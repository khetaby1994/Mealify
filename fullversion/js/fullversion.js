var category=document.getElementById('category');
var recipesContainer=document.getElementById('recipesContainer')

category.addEventListener('change',function () {

    if (category.options[category.selectedIndex].text=='Pizza') {
        console.log(category.options[category.selectedIndex].text);

        async function getPizza() {
            var response=await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza')
            var data=await response.json()
            console.log(data.recipes);
            var recipes=data.recipes;
            var Container=''
            for (let i = 0; i < recipes.length; i++) {
                Container +=`
                <div class="col-md-3">
                    <div class="card">
                        <img src="${recipes[i].image_url}" class="card-img-top" alt="...">
                        <div class="card-body d-flex flex-column justify-content-between">
                          <h5 class="card-title">${recipes[i].title}</h5>
                          <a href="${recipes[i].source_url}" class="p-2 text-decoration-none text-white rounded-3 px-5 fw-bold btn-mealify">Recipe</a>
                        </div>
                    </div>
                </div>
                `
            }
            recipesContainer.innerHTML=Container;
            
        }
        getPizza();


    } else if (category.options[category.selectedIndex].text==='Pasta') {

        async function getPasta() {
            var response=await fetch('https://forkify-api.herokuapp.com/api/search?q=pasta')
            var data=await response.json()
            console.log(data.recipes);
            var recipes=data.recipes;
            var Container=''
            for (let i = 0; i < recipes.length; i++) {
                Container +=`
                <div class="col-md-3">
                    <div class="card">
                        <img src="${recipes[i].image_url}" class="card-img-top" alt="...">
                        <div class="card-body d-flex flex-column justify-content-between">
                          <h5 class="card-title">${recipes[i].title}</h5>
                          <a href="${recipes[i].source_url}" class="p-2 text-decoration-none text-white rounded-3 px-5 fw-bold btn-mealify">Recipe</a>
                        </div>
                    </div>
                </div>
                `
            }
            recipesContainer.innerHTML=Container+`
            <a  href="./signin/signin.html" class="text-decoration-none fw-bold h2 "> to show more recipe... sign in now <i class="fa-solid fa-sign-in"></i></a>
            `;
            
        }
        getPasta();


        
    } else if(category.options[category.selectedIndex].text==='Corn') {
        async function getcorn() {
            var response=await fetch('https://forkify-api.herokuapp.com/api/search?q=corn')
            var data=await response.json()
            console.log(data.recipes);
            var recipes=data.recipes;
            var Container=''
            for (let i = 0; i < recipes.length; i++) {
                Container +=`
                <div class="col-md-3">
                    <div class="card">
                        <img src="${recipes[i].image_url}" class="card-img-top" alt="...">
                        <div class="card-body d-flex flex-column justify-content-between">
                          <h5 class="card-title">${recipes[i].title}</h5>
                          <a href="${recipes[i].source_url}" class="p-2 text-decoration-none text-white rounded-3 px-5 fw-bold btn-mealify">Recipe</a>
                        </div>
                    </div>
                </div>
                `
            }
            recipesContainer.innerHTML=Container+`
            <a  href="./signin/signin.html" class="text-decoration-none fw-bold h2 "> to show more recipe... sign in now <i class="fa-solid fa-sign-in"></i></a>
            `;
            
        }
        getcorn();


        
    }
    
})


// contact messages
var fnameContact=document.getElementById('fnameContact');
var lnameContact=document.getElementById('lnameContact');
var emailContact=document.getElementById('emailContact');
var commentContact=document.getElementById('commentContact');

var comments=[]
comments=JSON.parse(localStorage.getItem('comments'))
console.log(comments);

function getcomment() {
    var comment={
        fname:fnameContact.value,
        lname:lnameContact.value,
        email:emailContact.value,
        comment:commentContact.value,
    }
    comments.push(comment);
    localStorage.setItem('comments',JSON.stringify(comments));

}
var submitComment=document.getElementById('submitComment');

submitComment.addEventListener('click',function () {
    getcomment();
    
})
