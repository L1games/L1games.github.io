document.getElementById('ps1console').addEventListener('click', function () {
    const elementos0 = document.querySelectorAll('#panasonicgame');

    const elementos1 = document.querySelectorAll('#neogeogame');

    elementos0.forEach(function (elemento) {
        elemento.style.display = 'none'; 
    });

    elementos1.forEach(function (elemento) {
        elemento.style.display = 'none';
    });
});

document.getElementById('panconsole').addEventListener('click', function () {
    const elementos2 = document.querySelectorAll('#ps1game');

    const elementos3 = document.querySelectorAll('#neogeogame');

    elementos2.forEach(function (elemento) {
        elemento.style.display = 'none';
    });

    elementos3.forEach(function (elemento) {
        elemento.style.display = 'none';
    });
});

document.getElementById('neoconsole').addEventListener('click', function () {
    const elementos4 = document.querySelectorAll('#ps1game');

    const elementos5 = document.querySelectorAll('#panasonicgame');

    elementos4.forEach(function (elemento) {
        elemento.style.display = 'none';
    });

    elementos5.forEach(function (elemento) {
        elemento.style.display = 'none';
    });
});


