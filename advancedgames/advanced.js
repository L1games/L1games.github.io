function ocultarTodo() {
    const todos = document.querySelectorAll('#ps1game, #pangame, #neogame');
    todos.forEach(el => el.style.display = 'none');
}

document.getElementById('btn1').addEventListener('click', function () {
    ocultarTodo(); 
    const actuales = document.querySelectorAll('#ps1game');
    actuales.forEach(el => el.style.display = 'flex'); 
});

document.getElementById('btn2').addEventListener('click', function () {
    ocultarTodo();
    const actuales = document.querySelectorAll('#pangame');
    actuales.forEach(el => el.style.display = 'flex');
});

document.getElementById('btn3').addEventListener('click', function () {
    ocultarTodo();
    const actuales = document.querySelectorAll('#neogame');
    actuales.forEach(el => el.style.display = 'flex');
});

