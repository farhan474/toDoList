function loadLocal(){
	
const numberOfLi = parseInt(localStorage.getItem("key"));
	for(i=0;i<numberOfLi;i++){
		const List = document.querySelector('ul');
		const newTodo = document.createElement('li');
		const remove= document.createElement('button');
		const listnum = "item "+i;
		const input = JSON.parse(localStorage.getItem(listnum)).text;
		remove.innerText = "remove";
		newTodo.innerText = input  + " ";
		newTodo.style.textDecoration = JSON.parse(localStorage.getItem(listnum)).style;
		newTodo.append(remove);
		List.append(newTodo);
		input.value='';
	}
}
//set
function setLocal (){
	const listarray = document.getElementsByTagName("li");
	const maxkey = listarray.length;
	localStorage.setItem("key", JSON.stringify(maxkey));
	for(i=0;i<listarray.length;i++){
		const itemnumber= "item "+i; // creates key
		/* test */console.log(itemnumber);
		const text = listarray[i].innerText.slice(0,-6); // gets text 
		const iscrossedout = listarray[i].style.textDecoration; // gets if crossedout
		const content =  {text: text, style:iscrossedout}; //creates strogage for json
		localStorage.setItem(itemnumber,JSON.stringify(content)); //sets it 
	}

}

