
//Use-case of JS on frontend - DOM Manipulation 

let taskIndex = 1 ; //for knowing the task no. during the del opr 
function submitFunc(){

    
    //All DOM manipulation in the pre-react era was done using the 'document' object , using it's functions .

    //1. Read the value inside the element 
    //this 'task' is the id of an html elem , and so the complete elem gets into element as a obj 
    const element = document.getElementById("task"); //Finding leem to get it's val here 
    //using value on that elem will allow js to read the contents of that html elem in js 
    const contents = element.value ;
    //check
    if(contents =""){
        return ;
    }
    //Rem : to read val in elm of input -> use .value , 
    //to clear the input box after taking the input for next inp 
    contents = "" ; //simply set that elem's value as empty 



    //2. Create an elem in the dom 
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id" , "task" + taskIndex) ;
    //newDiv.innerHTML = contents ; //commented forstep 4 
    /* 
    <div>
        task entered by user 
    </div>
    */
   //Rem : to read or write the value in div tag of html in js : use .innerHTML 



   //3. To insert this created div var at html dom - we should tell the func where(which pos/ elem) this task should be added 
   //here - finding the elem to add something 
   const parentDiv = document.getElementById("parentDiv");
   //Append this task at this div 
   //parent.appendChild(newDiv);//append the obj created with the val given by the user //commented for step 4



   //4. To add 'delete button' eside the added task 
        //-Create a span tag holding the task , and a utton of delete inside the creted div -> then add it to parent div 
        /* 
        <div>
            <div>
                <span> task </span>
                <button> delete task </button>
            </div>
        </div>
        */

    const spanTask = document.createElement("span");
    spanTask.innerHTML = contents ;

    const buttonDel = document.createElement("button");
    buttonDel.innerHTML = "Delete Task ";
    //buttonDel.setAttribute("id" , "taskDelInd" + taskIndex) ;
    buttonDel.setAttribute("onclick" , "deleteTodo("+taskIndex+")") ;

    //Break element - for havng br before every to do 
    const breakElem = document.createElement("br");

    newDiv.appendChild(spanTask);
    newDiv.appendChild(buttonDel);
    newDiv.appendChild(breakElem);
    parentDiv.appendChild(newDiv);
    taskIndex = taskIndex +1 ;



    alert("It has been submitted ");
}

function deleteTodo(index){
    //fetch that elem form dom 
    const divElem = document.getElementById("task" + index) ;
    //remove it from its parent 
    divElem.parentElement.removeChild(divElem) ;
}



