const link1 = document.getElementById('mostra1');
const link2 = document.getElementById('mostrar2');
const link3 = document.getElementById('mostrar3');
const link4 = document.getElementById('mostrar4');

const article1 = document.getElementById('article1')


link.addEventListener('click', function(e){
    e.preventDefault();
    const displayAtual = article1.style.display;

if(displayAtual === 'none'){
    article1.style.display = 'block';
} else {
    article1.style.display = 'none';
}
});

