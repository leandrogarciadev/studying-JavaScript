let count = 0;
let btIncrement = document.getElementById('btAdicionar')
const CURRENT_NUMBER = document.getElementById('currentNumber');


function increment() {
	if (count < 0){
		CURRENT_NUMBER.style.color = 'red'
		CURRENT_NUMBER.innerHTML = count;
		count++;
	}if (count >= 0 && count <= 10){
		CURRENT_NUMBER.style.color = ''
		CURRENT_NUMBER.innerHTML = count;
		count++;
	}else{
		btIncrement.addEventListener('click')
	}
}

function decrement() {
	if (count < 0){
		CURRENT_NUMBER.style.color = 'red'
		count--;
		CURRENT_NUMBER.innerHTML = count;
	}else{
	count--;
	CURRENT_NUMBER.innerHTML = count;
	}
}

