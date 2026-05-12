function ocultarTodo() {
    const todos = document.querySelectorAll('#gbagame, #gbcgame, #nesgame, #n64game, #ndsgame, #snesgame, #famigame, #sfamigame, #vboygame');
    todos.forEach(el => el.style.display = 'none');
}

document.getElementById('btn1').addEventListener('click', function () {
    ocultarTodo(); 
    const actuales = document.querySelectorAll('#gbagame');
    actuales.forEach(el => el.style.display = 'flex'); 
});

document.getElementById('btn2').addEventListener('click', function () {
    ocultarTodo(); 
    const actuales = document.querySelectorAll('#gbcgame');
    actuales.forEach(el => el.style.display = 'flex'); 
});

document.getElementById('btn3').addEventListener('click', function () {
    ocultarTodo(); 
    const actuales = document.querySelectorAll('#nesgame');
    actuales.forEach(el => el.style.display = 'flex'); 
});

document.getElementById('btn4').addEventListener('click', function () {
    ocultarTodo(); 
    const actuales = document.querySelectorAll('#n64game');
    actuales.forEach(el => el.style.display = 'flex'); 
});

document.getElementById('btn5').addEventListener('click', function () {
    ocultarTodo(); 
    const actuales = document.querySelectorAll('#ndsgame');
    actuales.forEach(el => el.style.display = 'flex'); 
});

document.getElementById('btn6').addEventListener('click', function () {
    ocultarTodo(); 
    const actuales = document.querySelectorAll('#snesgame');
    actuales.forEach(el => el.style.display = 'flex'); 
});

document.getElementById('btn7').addEventListener('click', function () {
    ocultarTodo(); 
    const actuales = document.querySelectorAll('#famigame');
    actuales.forEach(el => el.style.display = 'flex'); 
});

document.getElementById('btn8').addEventListener('click', function () {
    ocultarTodo(); 
    const actuales = document.querySelectorAll('#sfamigame');
    actuales.forEach(el => el.style.display = 'flex'); 
});

document.getElementById('btn9').addEventListener('click', function () {
    ocultarTodo(); 
    const actuales = document.querySelectorAll('#vboygame');
    actuales.forEach(el => el.style.display = 'flex'); 
});
