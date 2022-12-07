const form = document.querySelector("form");
const List = document.querySelector('ul');
const input = document.querySelector('#newtask')
const Listitems = document.getElementsByTagName('li');

loadLocal(); //retrives from local storage
List.addEventListener('click', function(e){
	if(e.target.tagName === "BUTTON")
	{
		e.target.parentElement.remove();
		setLocal(); //sets in local storge
	}
	else if(e.target.tagName === ('LI'))
	{
		e.target.style.textDecoration= "line-through";
		setLocal(); //sets in local storge
	}
})
form.addEventListener('submit', function(e){
	e.preventDefault();
	if(input.value == "")
	{
		return;
	}
	else
	{
		const newTodo = document.createElement('li');
		const remove= document.createElement('button');
		remove.innerText = "remove";
		newTodo.innerText = input.value + " ";
		newTodo.append(remove);
		List.append(newTodo);
		input.value='';
		setLocal(); //sets in local storge
	}
})



//const Listitems = document.getElementsByTagName('li');
//for(i=0;i<Listitems.lenght;i++){
//	console.log(Listitems[i]);
//}

