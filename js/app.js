let id;
let filterInput = document.getElementById('Search');
let filterState = document.getElementById('inlineFormCustomSelect');
let dateInput = document.getElementById('sortDate');
filterInput.addEventListener('keyup', filterNames);
filterState.addEventListener('change', filterStatus);
dateInput.addEventListener('click', sortByDates);
window.onload = Initializer;

function Initializer(){
	if (localStorage.getItem('tasks')===null) {
		id=0;
		
	}else{
		
		var drawtable = JSON.parse(localStorage.getItem('tasks'));
		id=drawtable[drawtable.length-1].id;
		
			for (var i = 0; i < drawtable.length; i++) {
				showtable.innerHTML += "<tr><td>" + drawtable[i].id + "</td><td>" + drawtable[i].name + "</td><td>"+ drawtable[i].assignee + "</td><td>"+ drawtable[i].status + "</td><td>"+ drawtable[i].creationDate + "</td><td>"+ "<button type='button' class='btn btn-danger' id='delete-element' onclick='deleteItem("+drawtable[i].id+")'>Delete</button></td></tr>"; //draw the new task
		}
	}

}

document.querySelector('form').addEventListener('submit',function(e){

	if (document.getElementById("Name").value== "" || document.getElementById("Name").value.length >100) {
		alert("Please Complete Name Input with less than 100 Characters");
		return false;
	  }else if(!document.querySelector('input[name="check"]:checked')){
		alert('Please select a Status');
		return false;
	  }
//variables 

id += 1;
var name=document.getElementById("Name").value; 
var assignee=document.getElementById("assignee");
var assigneeValue = assignee.options[assignee.selectedIndex].value;  
var checkedValue = document.querySelector('.form-check-input:checked').value;
var creationdate= new Date();
//console.log(id,name,assigneeValue,checkedValue,creationdate);


//objects
const task={

	id: id,
	name: name,
	assignee: assigneeValue,
	status: checkedValue,
	creationDate: creationdate
	
} 

//console.log(task);
saveInfo(task);
e.preventDefault();



});

function saveInfo(task){
	//storage
let tasks;

if (localStorage.getItem('tasks')===null) {
	tasks=[];
}else{
 tasks=JSON.parse(localStorage.getItem('tasks'));
}

tasks.push(task); //save the new task
showtable.innerHTML += "<tr><td>" + task.id + "</td><td>" + task.name + "</td><td>"+ task.assignee + "</td><td>"+ task.status + "</td><td>"+ task.creationDate + "</td><td>"+ "<button type='button' class='btn btn-danger' id='delete-element' onclick='deleteItem("+task.id+")'>Delete</button></td></tr>"; //draw the new task
localStorage.setItem('tasks',JSON.stringify(tasks));

alert('task save');
}

function filterNames(prueba){

	
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("Search");
  filter = input.value.toUpperCase(); 
  table = document.getElementById("showtable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
	
}

function filterStatus(){

	
		var input, filter, table, tr, td, i, txtValue;
		input = document.getElementById("inlineFormCustomSelect");
		filter = input.value.toUpperCase(); 
		table = document.getElementById("showtable");
		tr = table.getElementsByTagName("tr");
	
		for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[3];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
			tr[i].style.display = "";
			} else {
			tr[i].style.display = "none";
			}
		} 
		}



}

function sortByDates(){
	tasks=JSON.parse(localStorage.getItem('tasks'));
	var date_sort_asc = function (date1, date2) {
		// This is a comparison function that will result in dates being sorted in
		// ASCENDING order. As you can see, JavaScript's native comparison operators
		// can be used to compare dates. This was news to me.
		if (date1 > date2) return 1;
		if (date1 < date2) return -1;
		return 0;
	  };
	  tasks.reverse();
	console.log(tasks);

}


function deleteItem(idtodelete){

	
	  tasks=JSON.parse(localStorage.getItem('tasks'));
	  const result = tasks.filter(function(task){
		if(task.id!=idtodelete){
			
			return tasks;
		}
		
	}); 
	alert('The element has been deleted');
	localStorage.setItem('tasks',JSON.stringify(result));
    document.location.reload(true);
		
}
