//Projetinho TYPESCRIPT
var formulary = document.querySelector('form');
var input_value = document.querySelector('input');
var listacaralho = document.getElementById('todo-list');
formulary.addEventListener('submit', function (event) {
    event.preventDefault();
    var todo = document.createElement('li');
    todo.innerHTML = input_value.value;
    var list = document.getElementById('todo-list');
    list === null || list === void 0 ? void 0 : list.appendChild(todo);
    input_value.value = '';
});
// formulary.addEventListener('apagar', function(event){
//     event.preventDefault();
//     const container = document.getElementById('todo-list');
//     if (container !== null) {
//         container.innerHTML = '';
//       }
// })
// function apagar():void{
//     const lista = document.getElementById('todo-list') as HTMLDivElement;
//     lista.innerText='';
// }
var caralho = document.getElementById('puta');
caralho === null || caralho === void 0 ? void 0 : caralho.addEventListener('click', function (event) {
    event.preventDefault();
    var lista = document.getElementById('todo-list');
    lista.innerHTML = '';
});
