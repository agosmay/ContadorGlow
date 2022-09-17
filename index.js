const botonSuma = document.querySelector('#botonSuma')
const botonResta = document.querySelector('#botonResta')
const botonReinicio = document.querySelector('#botonReinicio')
const display = document.querySelector('#display')
let contador = 0

botonSuma.addEventListener('click', ()=> {
	contador +=1
	display.textContent = contador
	
})

botonResta.addEventListener('click', ()=> {
	contador --
	display.textContent = contador
	
})

botonReinicio.addEventListener('click', ()=> {
	contador = 0;
	display.textContent = contador
	
})