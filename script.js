

//adds a item to the list
function addElementToList(text, where){
	

	//setting up checkbox/check, had to do this here becasue needs to be appended before text node
	var checkBox = document.createElement("SPAN");
	checkBox.className = 'checkbox';
	
	var check = document.createElement("SPAN");
	check.className = 'check';
	checkBox.appendChild(check);

	
	//list and new item
	var list = document.getElementById('list');
	var li = document.createElement('li');
	
	li.appendChild(checkBox);
	li.appendChild(document.createTextNode(text));
	
	//checkbox functionality
	checkBox.onclick = function(){
		li.classList.toggle('checked');
		checkBox.classList.toggle('checked');
		}

	
	//clear input area
	inputArea.value = "";
	addExtraButtons(li);

	//add to the list
	list.insertBefore(li, list.childNodes[where]);

	return li;
}


//gets the position of an item for editing and placing back into the correct position
function getPosition(li, ul){
	for(var i =0; i < ul.getElementsByTagName('li').length; i++){
		if(li.innerHTML == ul.getElementsByTagName('li')[i].innerHTML){
			return i;
		}
	}
	return 0;
}




//functionality of button
function addButtonClick(){
	var inputArea =document.getElementById('inputArea');
	var input = inputArea.value;
	
	if(input.length > 0){
		addElementToList(input, 0, 0);
	}else{
		alert('Input cannot be empty');
	}
	
	inputArea.focus();

}







function addExtraButtons(li){
	
	
		//priority
		var prioritySpan = document.createElement('SPAN');
		prioritySpan.className = 'priority';
		var dropDown = document.createElement('SELECT');
		
		var high = document.createTextNode("High");
		var mid = document.createTextNode("Medium");
		var low = document.createTextNode("Low");
		
		var h = document.createElement("option");
		var m = document.createElement("option");
		var l = document.createElement("option");
		
		h.setAttribute('value', '3');
		m.setAttribute('value', '2');
		l.setAttribute('value', '1');
		
		l.appendChild(low);
		m.appendChild(mid);
		h.appendChild(high);
		
		dropDown.appendChild(l);
		dropDown.appendChild(m);
		dropDown.appendChild(h);
		
		
		prioritySpan.appendChild(document.createTextNode("Priority: "))
		prioritySpan.appendChild(dropDown);
		li.appendChild(prioritySpan);
		
	
	
	
		//edit
		var editSpan = document.createElement("SPAN");
		editSpan.className = 'edit';
		var editText = document.createTextNode(" edit |");
		editSpan.appendChild(editText);
		li.appendChild(editSpan);


		//delete
		var deleteSpan = document.createElement("SPAN");
		deleteSpan.className = 'delete';
		var deleteText = document.createTextNode("delete");
		deleteSpan.appendChild(deleteText);
		li.appendChild(deleteSpan);
	
		//delete functionality
		deleteSpan.onclick = function(){
			var div = this.parentElement;
			div.style.display = 'none';
		}
					
		//edit functionality
		editSpan.onclick = function(){

			//replaces the li to be edited with an input field
			var editLi = this.parentElement;
			old = editLi.innerText;
			editLi.innerText = '';
			var input = document.createElement('input');

			input.setAttribute('type', 'text');
			input.setAttribute("id", "input");
			input.setAttribute("size", "40");
			input.setAttribute("placeholder", "enter to submit");
			input.setAttribute('value', old.slice(0, (old.length- 22)));
			
			editLi.value =old;
			editLi.appendChild(input);		
			input.focus();
			
			var position = getPosition(li,document.getElementById('list'));
	
	
			//so enter ends editing
			input.onkeypress= function(e){
				if(e.keyCode == 13){
					//trigger blur so that handles saving
					input.blur();
					
				}
			}
	
	
			//if they leave the input area save 
			input.onblur = function(){

				var inputedText =document.getElementById('input').value;
				if(inputedText.length== 0){
					//if they erase the whole string, just enters the original
					addElementToList(old.slice(0, (old.length- 22)), position);
				}else{
					addElementToList(inputedText,position);
				}					
				editLi.parentNode.removeChild(editLi);
			
			}
		
				
			
				
				
					
			}
}







window.onload = function(){	
	//so enter triggers add button
	document.getElementById('inputArea').onkeypress= function(e){
		if(e.keyCode == 13){
			document.getElementById('addButton').click();
		}
	}
		
}




	