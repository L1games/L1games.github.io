function ocultarTodo() {
    const todos = document.querySelectorAll('#atari26, #atari78, #atarija, #atarilynx');
    todos.forEach(el => el.style.display = 'none');
}

document.getElementById('btn26').addEventListener('click', function () {
    ocultarTodo(); 
    const actuales = document.querySelectorAll('#atari26');
    actuales.forEach(el => el.style.display = 'flex'); 
});

document.getElementById('btn78').addEventListener('click', function () {
    ocultarTodo();
    const actuales = document.querySelectorAll('#atari78');
    actuales.forEach(el => el.style.display = 'flex');
});

document.getElementById('btnja').addEventListener('click', function () {
    ocultarTodo();
    const actuales = document.querySelectorAll('#atarija');
    actuales.forEach(el => el.style.display = 'flex');
});

document.getElementById('btnlynx').addEventListener('click', function () {
    ocultarTodo();
    const actuales = document.querySelectorAll('#atarilynx');
    actuales.forEach(el => el.style.display = 'flex');
});

