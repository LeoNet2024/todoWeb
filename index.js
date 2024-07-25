'use strict';

let todolist = [
    {
        task: "Clean the house",
        startDate: "17-02-1996",
        endDate: "17-03-1996",
        status: "not done",
    },
    {
        task: "Java homework",
        startDate: "22-12-2023",
        endDate: "17-03-2024",
        status: "not done",
    }
];

function mainCopyOnHtml() {
    let id=0;
    const list = document.getElementById('displyList');
    const div = document.createElement('div');
    list.innerHTML = ''; // Clear the list before appending
    todolist.forEach((elem) => {
        let li = document.createElement('li');
        li.innerHTML = `${elem.task} - ${elem.startDate} - ${elem.endDate} - ${elem.status} <input type="radio" name="radio${id}"> <input type="radio" name="radio${id++}">`;
        list.append(li);
    });
}

mainCopyOnHtml();

function addTask() {
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
        status: "not done" // Default status
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
