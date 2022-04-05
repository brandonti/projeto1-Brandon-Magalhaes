//PEGA O ELEMENTO HTML CHAMADO TESTE
// document.getElementById('teste')
//ou console.log(document.getElementById('teste'))
//PEGA O ELEMENTO HTML CHAMADO TESTE
// const element = document.getElementsByClassName('classe')
// console.log(element)
//PEGA A TAG HTML CHAMADA
// const element = document.getElementsByTagName('h1')
// console.log(element)
// PEGA O PRIEMEIRO ELEMENTO DO HTML COM PARAMETRO PASSADO
// const element = document.querySelector('.classe')
// console.log(element)
//PEGA TODOS OS ELEMENTOS DO HTML COM PARAMETRO PASSADO
// const elements = document.querySelectorAll('.classe')
// console.log(elements)

//ALTERAR UM TEXTO DENTRO DO HTML
// const element = document.querySelector('h1')
// element.textContent = "Olá Devs"
// console.log(element.textContent)
//ALTERAR UM TEXTO DENTRO DO HTML E MOSTRAR
// const element = document.querySelector('h1')
// element.innerText = 'teste!'

//ADICIONAR HTML ATRÁVES DO JAVASCRIPT
// const element = document.querySelector('h1')
// element.innerHTML = 'Olá Devs <h3>teste em h3<h3>'

//PUXAR E ALTERAR UM VALOR
// const element = document.querySelector('input')
// console.log(element.value)
// element.value = "Outro valor"
//ADICIONANDO ID AS TAGS E REMOVENDO ID E CLASS
// const header = document.querySelector('header')
// header.setAttribute('id', 'header')
// const headerID = document.querySelector('#header')
// console.log(headerID.getAttribute('class'))//pegando
// header.removeAttribute('id')//removendo
// header.removeAttribute('class')
// header.setAttribute('class','bg header')//adicionando classes
//ADICIONANDO CSS NO JAVASCRIPT
// const element = document.querySelector('body')
// element.style.backgroundColor = "#f9f3d2"
// console.log(element.style.backgroundColor)
//VENDO A LISTA DE CLASSES E ADICIONANDO E REMOVENDO
// const element = document.querySelector('body')
// element.classList.add('active', 'green')
// console.log(element.classList)//verificar a lista
// element.classList.remove('active')
// element.classList.toggle('active')//toggle = serve para tirar caso ja exista
//ou adicionar caso nao exista

//SELECIONA O ELEMENTO PAI?
// const element = document.querySelector('h1')
// console.log(element.parentNode)  (element.parentElement)

//PEGANDO ELEMENTOS FILHOS
//firstChild quando tem espaço ou quebra de linha no html fica text se n,
//pega o primeiro elemento filho
// const element = document.querySelector('body')
// console.log(element.firstChild)
//VIRA UMA NODE LIST COM O NEGOCIO DO ESPAÇAMENTO DO HTML
// const element = document.querySelector('body')
// console.log(element.childNodes)

//ELIMINA A PARADA DO ESPAÇO DO HTML E TRAS EM HTML COLECTION
// const element = document.querySelector('body')
// console.log(element.children)
// Tras o primeiro elemento sem o espaço vazio
// const element = document.querySelector('body')
// console.log(element.firstChild)
//Tras o ultimo elemento sem o espaço vazio
// const element = document.querySelector('body')
// console.log(element.lastChild)

//PEGANDO OS IRMÃOS
//Pegando irmão com espaço do html
// const el= document.querySelector('header')
// console.log(el.nextElementSibling)
// espaço vazio dentro html
// const el= document.querySelector('body script')//pega os script dentro do body
// console.log(el.previousSibling)
//sem o espaço vazio
// const el= document.querySelector('body script')//pega os script dentro do body
// console.log(el.previousElementSibling)

//CRIA UMA DIV E COLOCA EM PRIMEIRO OU EM ULTIMO NO BODY
// const div = document.createElement('div')
// div.innerText = 'Olá Devs'
// const body = document.querySelector('body')
// body.append(div) //primeiro    // body.prepend(div) //ultimo

//INSERIR
// const div = document.createElement('div')
// div.innerText = 'Olá Devs'
// const body = document.querySelector('body')
// const script = document.querySelector('script')
// body.insertBefore(div, script)//coloca a div pai antes do script
// const div = document.createElement('div')
// div.innerText = 'Olá Devs'
// const body = document.querySelector('body')
// const header = document.querySelector('header')
// body.insertBefore(div, header.nextElementSibling)//coloca a div dps do header
//ou nextSibling

//EVENTOS TEM VARIOS SÓ PESQUISAR
//onclick="print()" no html
// function print(){
//     console.log('print')
// }
//SERMPRE QUE PRESSIONAR A TECLA RODEI APARECE NO CONSOLE
// const input = document.querySelector('input')
// input.onkeydown = function(){//input.onkeyup   input.onkeypress
//     console.log('rodei')
// }
//ADICIONAR OUVIDOR DE EVENTOS
// const h1 = document.querySelector('h1')
// h1.addEventListener('mouseover',print) //primeiro qual evento ele vai fazer
//('click',print)assim guarda assim ('click',print())executa
// function print(){
//     console.log('print')
// }
//ADICIONAR 2 FUNCIONALIDADES AO MESMO TEMPO
// const h1 = document.querySelector('h1')
// h1.addEventListener('click',print)//ou oneclick
// function print(){
//     console.log('print')
// }
// h1.addEventListener('click',function(){console.log('outro momento')})
//AMOSTRA OS EVENTOS
// const input = document.querySelector('input')
// input.onkeydown = function(event){
//     console.log(event)
// }
//PEGA A TECLA DIGITADA E MOSTRA NO CONSOLE
// const input = document.querySelector('input')
// input.onkeydown = function(event){
//     console.log(event.key)
// }
//valores  no input
// const input = document.querySelector('input')
// input.onkeydown = function(event){
//     console.log(event.currentTarget.value)
// }
