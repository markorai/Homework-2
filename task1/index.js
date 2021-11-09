var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
var searchResults = document.getElementById("results");
var addTaks_btn = document.getElementById("addItem_btn");
var all_tasks = searchResults.getElementsByTagName("li");
searchResults.style.display = "none";
// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);
filter.addEventListener("keyup",showItems);
filter.addEventListener("keyup",clickedTask);
filter.addEventListener("keyup",enteredTask);
// Add item
function addItem(e) {
  e.preventDefault();
  //Get input value
  var newItem = document.getElementById("item").value;
  // Create new li element
  var li = document.createElement("li");
  // Add class
  var li_nav = document.createElement("li");
  li_nav.appendChild(document.createTextNode(newItem));
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  // Create del button element
  var deleteBtn = document.createElement("button");
  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));
  // Append button to li
  li.appendChild(deleteBtn);
  // Append li to list
  itemList.appendChild(li);
  searchResults.appendChild(li_nav);
  // Save task with local storage

}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
      Array.from(all_tasks).forEach((task)=>{
        if(task.textContent == li.innerText.replace("X","") )
                searchResults.removeChild(task);
                
      })
    }
  }
}


// Filter items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get list items
  var items = itemList.getElementsByTagName("li");

  // Convert HTMLCollection to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    
    if (itemName.toLowerCase().indexOf(text) != -1 ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }

  });

}
// Auto complete search
function showItems(e){
  searchResults.style.display = "block";
  var input = e.target.value;
  
   // Convert HTMLCollection to an array
  Array.from(all_tasks).forEach((task)=>{
    var taskName = task.firstChild.textContent;
    if(taskName.toLowerCase().indexOf(input) != -1){
      task.style.display = "block";
    }else{
      task.style.display = "none";
    }
    
  })

if(input == "")
  searchResults.style.display = "none";

       
}

// Show clicked task 
function clickedTask(){
  var items = itemList.getElementsByTagName("li");
  // For search bar
  Array.from(all_tasks).forEach((task)=>{
      task.addEventListener("click",()=>{
        filter.value = task.innerHTML;

        // For all tasks div
        Array.from(items).forEach((item)=>{
          var itemName = item.firstChild.textContent;
              if(itemName.toLowerCase().indexOf(filter.value) != -1){
                item.style.display = "block";
            }else{
              item.style.display = "none";
            }
        })
      })
  })
  

}

// Select element when arrow is clicked
var ul = document.getElementById('results');
var liSelected;
var index = -1;

document.addEventListener('keydown', function(event) {
var len = ul.getElementsByTagName('li').length-1;
  if(event.which === 40) {
index++;
  //down 
  if (liSelected) {
    
			removeClass(liSelected, 'selected');
      next = ul.getElementsByTagName('li')[index];
      if(typeof next !== undefined && index <= len) {

                liSelected = next;
            } else {
             	index = 0;
                 liSelected = ul.getElementsByTagName('li')[0];
            }
            addClass(liSelected, 'selected');
    }
    else {
    index = 0;
    
   	 liSelected = ul.getElementsByTagName('li')[0];
			 addClass(liSelected, 'selected');
    }
  }
  else if (event.which === 38) {
  
  //up
    if (liSelected) {
			removeClass(liSelected, 'selected');
      index--;
      next = ul.getElementsByTagName('li')[index];
      if(typeof next !== undefined && index >= 0) {
                liSelected = next;
            } else {
            		index = len;
                 liSelected = ul.getElementsByTagName('li')[len];
            }
            addClass(liSelected, 'selected');
    }
    else {
    index = 0;
   	 liSelected = ul.getElementsByTagName('li')[len];
			addClass(liSelected, 'selected');
    }
  }
}, false);

function removeClass(el, className) {
    if(el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};

function addClass(el, className) {
    if(el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }
};

function enteredTask(){
  var tasks = searchResults.getElementsByTagName("li");
  var items = itemList.getElementsByTagName("li");
  Array.from(tasks).forEach((task)=>{
    if(task.classList.contains("selected") && event.keyCode === 13){
        filter.value = task.textContent;
        Array.from(items).forEach((item)=>{
              if(item.firstChild.textContent.indexOf(filter.value) != -1){
                item.style.display = "block";
              }else{
                item.style.display = "none";

              }
        })
    }
     
  })
}

