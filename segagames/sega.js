function ocultarTodo() {
    const todos = document.querySelectorAll('#atari26, #atari78, #atarija, #atarilynx');
    todos.forEach(el => el.style.display = 'none');
}

document.getElementById('btn1').addEventListener('click', function () {
    ocultarTodo(); 
    const actuales = document.querySelectorAll('#smsgame');
    actuales.forEach(el => el.style.display = 'flex'); 
});

document.getElementById('btn2').addEventListener('click', function () {
    ocultarTodo();
    const actuales = document.querySelectorAll('#sgggame');
    actuales.forEach(el => el.style.display = 'flex');
});

document.getElementById('btn3').addEventListener('click', function () {
    ocultarTodo();
    const actuales = document.querySelectorAll('#smdgame');
    actuales.forEach(el => el.style.display = 'flex');
});

document.getElementById('btn4').addEventListener('click', function () {
    ocultarTodo();
    const actuales = document.querySelectorAll('#s32xgame');
    actuales.forEach(el => el.style.display = 'flex');
});
