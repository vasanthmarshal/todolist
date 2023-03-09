const addbutton=document.querySelector('.add');
var task=document.getElementById('task');
const todo =document.querySelector('.container');

document.getElementById("hurray").innerHTML="No Tasks Pending....";

var nodes=todo.childNodes;
// alert(nodes.length);


function add()
{
    if(task.value.length!="")
    {
        document.getElementById("hurray").innerHTML = "";

        let newtask = document.createElement('div');
        newtask.className = "item";

        let s = task.value;
        // alert(task.value);

        let inputelement = document.createElement("input");
        inputelement.className = "item_input";
        inputelement.type = "text";
        inputelement.setAttribute("color", "white");
        inputelement.setAttribute("value", s);
        inputelement.disabled = true;

        let editbutton = document.createElement('button');
        editbutton.innerHTML = "Edit";
        editbutton.className = "edit";

        let deletebutton = document.createElement('button');
        deletebutton.innerHTML = "Delete";
        deletebutton.className = "remove";


        editbutton.addEventListener('click', () => this.edit(inputelement));
        deletebutton.addEventListener('click', () => this.remove(newtask));

        newtask.appendChild(inputelement);
        newtask.appendChild(editbutton);
        newtask.appendChild(deletebutton);

        todo.appendChild(newtask);
    }

    else{
        alert("Task Description is Too Short...");
    }

}

function edit(inputelement)
{
    inputelement.disabled = !inputelement.disabled;
}

function remove(newtask)
{
//   alert(nodes.length);
   newtask.remove();
   if(nodes.length==3)
   {
       document.getElementById("hurray").innerHTML = "No Tasks Pending....";

   }
}