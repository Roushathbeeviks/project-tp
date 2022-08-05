// incredient adding section

var arr=[];
function addItem()
{
    var ul= document.getElementById('dynamic-list');
    var incg = document.getElementById('add-ingredient'); 
    var li = document.createElement('li');
    li.setAttribute('id', incg.value);
    li.appendChild(document.createTextNode(incg.value));
    if(incg.value!="")
    {
     ul.appendChild(li);
    arr.push(incg.value)
    console.log(arr);
    
    }
    incg.value=''
    }

    function removeItem(){
        var ul= document.getElementById('dynamic-list');
        var incg=document.getElementById('add-ingredient');
        var item=document.getElementById(incg.value);
        const li = ul.getElementsByTagName('li');
        ul.removeChild(item);
        var a =arr.pop(item)
        console.log(arr);
    
    }

   /* cursor move*/  

   function cursor(e){
    if(e.keycode==13)
    {
        $(this).next().focus();
    }
};




    /*var allfields=document.querySelectorAll(".form-control2");
    console.log(allfields);

     for(var i=0;i<allfields.length;i++)
     {
        allfields[i]=addEventListener("keyup", function(event){
             console.log(event.keycode);
             if(event.keycode===13){
                event.preventDefault();
                if(this.parentElement.nextElementSibling.querySelector('input'));
                {
                    this.parentElement.nextElementSibling.querySelector(input).focus();
                }                
             }
        })
     }
*/



    
// table part
     Save.addEventListener("click", displayDetails) ;
      var row=1;
     function  displayDetails(){
         var Name=document.getElementById('recipe-name').value;
         var Desc=document.getElementById('recepie-steps').value;
         var incg = arr;
         
         if(!Name || !Desc ){
             alert('Please enter the missing field');
             return;
         }
        else{

       
         var table=document.getElementById('table');

         var newRow=table.insertRow(row);

         var cell1= newRow.insertCell(0);
         var cell2= newRow.insertCell(1);
         var cell3= newRow.insertCell(2);
         var cell4= newRow.insertCell(3);

         cell1.innerHTML = Name;
         cell2.innerHTML = Desc;
         cell3.innerHTML = incg;
         row++;
         cell4.innerHTML='<input type="button"  onclick="deleteItem(this)" id="delete-recepie" class="btn btn-danger" value="Delete">'

         row--;
         
         var Name=document.getElementById('recipe-name');
         var Desc=document.getElementById('recepie-steps');
         Name.value="";
         Desc.value="";


         }
         
        
     }
        
    //  arr.value='';

        function deleteItem(item){
            var del=item.parentNode.parentNode;
            del.parentNode.removeChild(del);

        }



        // lettersonly

function lettersonly(input){
    var regex = /[^a-z]/gi;
    input.value=input.value.replace(regex,"")
};

