//Projetinho TYPESCRIPT

const formulary = document.querySelector('form') as HTMLFormElement;

const input_value = document.querySelector('input') as HTMLInputElement;

const listacaralho = document.getElementById('todo-list');

formulary.addEventListener('submit',function(event){
event.preventDefault();

var todo = document.createElement('li');
todo.innerHTML= input_value.value;

var list = document.getElementById('todo-list');
list?.appendChild(todo);

input_value.value = '';




})


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
const caralho = document.getElementById('puta');
caralho?.addEventListener('click', function(event){
    event.preventDefault();

    const lista = document.getElementById('todo-list') as HTMLDivElement;
    lista.innerHTML='';
})







