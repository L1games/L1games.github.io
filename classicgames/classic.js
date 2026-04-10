document.getElementById('ngbbtn').addEventListener('click', function () {
    const elementos0 = document.querySelectorAll('#arcgame');

    const elementos1 = document.querySelectorAll('#a52game');

    elementos0.forEach(function (elemento) {
        elemento.style.display = 'none'; 
    });

    elementos1.forEach(function (elemento) {
        elemento.style.display = 'none';
    });
});

document.getElementById('arcbtn').addEventListener('click', function () {
    const elementos2 = document.querySelectorAll('#ngbgame');

    const elementos3 = document.querySelectorAll('#a52game');

    elementos2.forEach(function (elemento) {
        elemento.style.display = 'none';
    });

    elementos3.forEach(function (elemento) {
        elemento.style.display = 'none';
    });
});

document.getElementById('a52btn').addEventListener('click', function () {
    const elementos4 = document.querySelectorAll('#ngbgame');

    const elementos5 = document.querySelectorAll('#arcgame');

    elementos4.forEach(function (elemento) {
        elemento.style.display = 'none';
    });

    elementos5.forEach(function (elemento) {
        elemento.style.display = 'none';
    });
});


