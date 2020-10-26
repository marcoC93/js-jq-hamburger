// devo far in modo che al click sull' icona dell'hamburger menu esso compaia



//devo applicare una funzione al click sulla "i"ovvero l'icona ma la classe che verra modificata é .hamburger-menu la quale non dovra piu avere il display none ma bensi il display: block




//$(selettore).evento(function ...);

// questo scatena l'evento
//$("i").click();

// questo registra l'evento
//al click....aziona la funzione , la quale é trattata come parametro che imposterá la lista all'interno..come visibile

$("i").click(function() {
    $(".hamburger-menu").css({
        display: 'block'
    });
});

// questa é la stessa funzione ma all'inverso ma questa volta verrá applicata alla classe close ...peché ci sono conflitti se viene applicato alla i 
$(".close").click(function() {
    $(".hamburger-menu").css({
        display: 'none'
    });
});
