function ocultarTodo() {
    const todos = document.querySelectorAll('#petgame, #vic20game, #c64game, #plus4game, #c128game, #amigagame');
    todos.forEach(el => el.style.display = 'none');
}

document.getElementById('btn1').addEventListener('click', function () {
    ocultarTodo(); 
    const actuales = document.querySelectorAll('#petgame');
    actuales.forEach(el => el.style.display = 'flex'); 
});

document.getElementById('btn2').addEventListener('click', function () {
    ocultarTodo(); 
    const actuales = document.querySelectorAll('#vic20game');
    actuales.forEach(el => el.style.display = 'flex'); 
});

document.getElementById('btn3').addEventListener('click', function () {
    ocultarTodo(); 
    const actuales = document.querySelectorAll('#c64game');
    actuales.forEach(el => el.style.display = 'flex'); 
});

document.getElementById('btn4').addEventListener('click', function () {
    ocultarTodo(); 
    const actuales = document.querySelectorAll('#n64game');
    actuales.forEach(el => el.style.display = 'flex'); 
});

document.getElementById('btn5').addEventListener('click', function () {
    ocultarTodo(); 
    const actuales = document.querySelectorAll('#plus4game');
    actuales.forEach(el => el.style.display = 'flex'); 
});

document.getElementById('btn6').addEventListener('click', function () {
    ocultarTodo(); 
    const actuales = document.querySelectorAll('#amigagame');
    actuales.forEach(el => el.style.display = 'flex'); 
});
