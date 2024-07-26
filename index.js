'use strict';

let todolist = [
    {
        task: "Clean the house",
        startDate: "17-02-1996",
        endDate: "17-03-1996",
    },
    {
        task: "Java homework",
        startDate: "22-12-2023",
        endDate: "17-03-2024",
    }
];

let myprojectsList=[];

function mainCopyOnHtml() {
    const list = document.getElementById('displyList');
    const div = document.createElement('div');
    list.innerHTML = ''; // Clear the list before appending
    todolist.forEach((elem,index) => {

        let newdiv=document.createElement("div");
        let li = document.createElement('li');
        li.innerHTML = `${elem.task}   ${elem.startDate}  ${elem.endDate} \n <input type="checkbox" value="done" id=${index} onClick="deleteTask(${index})">`;
        list.append(newdiv);

        newdiv.classList.add('taskfont')

        newdiv.append(li);

    });


}

mainCopyOnHtml();

function addTaskopenModel() {

    let oldItme = document.querySelector('.displyHeader');
    let newitem  = document.querySelector('.myprojects');

    oldItme.style.display='flex';
    newitem.style.display= 'none';

    let elem = document.querySelector('.model');
    elem.style.display = 'flex';
}

function closeModel(event) {
    if (event.target === document.getElementById('closebtnmodel') || event.target === document.getElementById('mymodel')) {
        document.getElementById('mymodel').style.display = 'none';
    }
}

function addTasks() {

    

    let task = document.getElementById('taskName').value;
    let startDate = document.getElementById('startDate').value;
    let endDate = document.getElementById('endDate').value;

    let list = {
        task: task,
        startDate: startDate,
        endDate: endDate,
    };

    todolist.push(list);
    
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);

    mainCopyOnHtml();

    let elem = document.querySelector('.model');
    elem.style.display = 'none';

    // reset the values from the form
    document.getElementById('taskName').value ='';
    document.getElementById('startDate').value='';
    document.getElementById('endDate').value='';
}

function deleteTask(index)
{

    addToMyProjects(index)
    
    todolist.splice(index,1);

    mainCopyOnHtml();

}

function addToMyProjects(index)
{

    let item = todolist[index];
    myprojectsList.push(item);

    console.log("new array is:");

    console.log(myprojectsList);

}


function showMyProjects()
{
    if (myprojectsList.length==0)
        alert("No projects done")

    let oldItme = document.querySelector('.displyHeader');
    let newitem  = document.querySelector('.myprojects');

    oldItme.style.display='none';
    newitem.style.display= 'flex';

    let projectList = document.getElementById('doneProject');

    projectList.innerHTML="";

    myprojectsList.forEach(elem =>{

        let li = document.createElement('li');

        let addDiv = document.createElement('div');

        addDiv.className = "taskfont";

        projectList.append(addDiv);

        li.innerHTML = `${elem.task} End Date : ${elem.endDate}`;

        addDiv.append(li);

    })



}
