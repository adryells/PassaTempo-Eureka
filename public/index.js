var options = []
var opcoes = []
var divMain = document.getElementById('principal')

function getNumber() {
	let numberA = Math.random()
	let numberB = Math.ceil(numberA * 10)
	options.push(numberB)
	options.push(Math.ceil((Math.random()-1) * 100), Math.ceil(Math.random() * 100 +2), Math.ceil(Math.random() * 100))
}


function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

function iniciar(){
	finish()
	getNumber()
	shuffle(options)
	for (var i = options.length; i >= 0; i--) {
		var opcao = document.createElement('input')
		opcao.setAttribute('type','button')
		opcao.setAttribute('class','bot')
		opcao.setAttribute('value',document.createTextNode(options[i]).textContent)
		opcao.setAttribute('onclick','verifica(this)')
		divMain.appendChild(document.createTextNode(' '))
		opcoes.push(opcao)
		divMain.appendChild(opcao)
	}
	opcoes[0].value = Math.ceil(Math.random() * 100)
	shuffle(options)
	Options()
}


function Options(){
	console.log(opcoes,options)
	brline = document.createElement('br')
	brline2 = document.createElement('br')
	divMain.appendChild(brline)
	divMain.appendChild(brline2)


	var fim = document.createElement('input')
	fim.setAttribute('type', 'button')
	fim.setAttribute('value', 'fim')
	fim.setAttribute('onclick', 'finish()')
	divMain.appendChild(fim)
}


function verifica(el){
	if (el.value == options[0]){
		alert("You win")
		el.style.backgroundColor = 'green';
		divMain.style.backgroundColor = 'green';
		setTimeout(finish(),5000)
	}else{
		alert('You lose')
		el.style.backgroundColor = 'red';
		divMain.style.backgroundColor = 'red';
		console.log(el.value)
		console.log(options[0])
	}
}

function finish(){
	opcoes = []
	options = []
	for(let i = opcoes.lenght; i > 0; i--){
		opcoes.shift()
	}
	for(let i = options.lenght; i > 0; i--){
		options.shift()
	}
	console.log(opcoes,options)
	divMain.style.backgroundColor = 'aliceblue';
	divMain.innerHTML = '20% de chance!'
}
