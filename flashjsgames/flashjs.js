function ocultarTodo() {
    const todos = document.querySelectorAll('#flashgame, #jsgame');
    todos.forEach(el => el.style.display = 'none');
}

document.getElementById('btn1').addEventListener('click', function () {
    ocultarTodo(); 
    const actuales = document.querySelectorAll('#flashgame');
    actuales.forEach(el => el.style.display = 'flex'); 
});

document.getElementById('btn2').addEventListener('click', function () {
    ocultarTodo();
    const actuales = document.querySelectorAll('#jsgame');
    actuales.forEach(el => el.style.display = 'flex');
});
