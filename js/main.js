let todoAdd = document.querySelector('.todo__add'),
		todoList = document.querySelector('.todo__list'),
		todoTask = document.getElementsByClassName('todo__task'),
		todoDelete = document.getElementsByClassName('todo__delete'),
		tasks = ['Сделать сделанное', 'Сделать то, что не сделал', 'Сделать не до деланное'];

tasks = JSON.parse(localStorage.getItem('todos'));

function taskAdd(add) {
	todoList.innerHTML = '';
	add.forEach(element => {
		todoList.innerHTML += `<div class="todo__task">${element}<div class="todo__delete">&times;</div></div>`;
	});
}

todoAdd.addEventListener('keypress', (e) => {
	if (e.keyCode == 13) {
		if (todoAdd.value == '') {
			console.log('Поле пустое, пожалуйста заполните его!');
		} else {
			tasks.push(todoAdd.value);
			localStorage.setItem('todos', JSON.stringify(tasks));
			todoAdd.value = '';
			taskAdd(tasks);
		}
	}
});

taskAdd(tasks);

function taskDelete(element) {
	element.addEventListener('click', () => {
		element.parentElement.remove();
		const tsk = element.parentElement.textContent.slice(0, -1);
		tasks.splice(tsk, 1);
		localStorage.removeItem('todos');
		localStorage.setItem('todos', JSON.stringify(tasks));
	});
}

for (const button of todoDelete) {
	taskDelete(button);
}