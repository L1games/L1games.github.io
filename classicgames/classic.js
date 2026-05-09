function ocultarTodo() {
    const todos = document.querySelectorAll('#ngbgame, #arcgame, #a52game');
    todos.forEach(el => el.style.display = 'none');
}

document.getElementById('btn1').addEventListener('click', function () {
    ocultarTodo(); 
    const actuales = document.querySelectorAll('#ngbgame');
    actuales.forEach(el => el.style.display = 'flex'); 
});

document.getElementById('btn2').addEventListener('click', function () {
    ocultarTodo();
    const actuales = document.querySelectorAll('#arcgame');
    actuales.forEach(el => el.style.display = 'flex');
});

document.getElementById('btn3').addEventListener('click', function () {
    ocultarTodo();
    const actuales = document.querySelectorAll('#a52game');
    actuales.forEach(el => el.style.display = 'flex');
});
