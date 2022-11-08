const form = document.getElementById('form-tarefa');
const tarefaList = document.getElementById('tarefas');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputTarefa = document.getElementById('tarefa-input');
	addTarefa(inputTarefa.value);
	form.reset();
    
};

function addTarefa(descricao) {
	const tarefaContainer = document.createElement('div');
	const newTarefa = document.createElement('input');
	const tarefaLabel = document.createElement('label');
	const tarefaDescricao = document.createTextNode(descricao);

	newTarefa.setAttribute('type', 'checkbox');
	newTarefa.setAttribute('name', descricao);
	newTarefa.setAttribute('id', descricao);

	tarefaLabel.setAttribute('for', descricao);
	tarefaLabel.appendChild(tarefaDescricao);

	tarefaContainer.classList.add('tarefa-item');
	tarefaContainer.appendChild(newTarefa);
	tarefaContainer.appendChild(tarefaLabel);

	tarefaList.appendChild(tarefaContainer);
}
