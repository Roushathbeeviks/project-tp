const form= document.getElementById('recipe-list');
const Name=document.getElementById('recipe-name');
const page=document.getElementById('next-page');
// const Desc=document.getElementById('recepie-steps');
// const Ingredient=document.getElementById('add-ingredient');


 form.addEventListener ('submit', function(event){
   event.preventDefault();
   if(Name.value != ''){
       window.location.href ='list.html';
     }
  else{
    page.onclick = alert("Please enter the recipe");
  }
 })


//  letters only

 function lettersonly(input){
  var regex = /[^a-z]/gi;
  input.value=input.value.replace(regex,"")
};