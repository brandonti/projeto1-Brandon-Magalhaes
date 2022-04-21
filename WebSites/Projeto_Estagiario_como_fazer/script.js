//OBJETO - 
// const pessoa = {
//     nome:"Brandon",
//     idade:24,
// }
// console.log(pessoa['idade'])
// pessoa.id = "teste"
// console.log(pessoa.id)
// const pessoa2 = {
//     sobrenome:"Gama"
// }
// console.log(pessoa2.nome)
// JUNÇÃO DE OBJETOS
// const juncao = Object.assign(pessoa, pessoa2)
// console.log(juncao.sobrenome)
// console.log(juncao.id)
//AMOSTRA TODAS AS CHAVES NOME DA VARIAVEL
//console.log(Object.keys(pessoa))
//AMOSTRA OS VALORES DAS MINHAS VARIAVEIS DO OB
//console.log(Object.values(heroi))
//DELETE REMOVE UMA VARIAVEL DENTRO DE UM OB



//ARRAY OU LISTAS
// const minhaListaDeTarefas = ['mandar email', 'colocar comida pro dog', 'limpar quarto']
// console.log(minhaListaDeTarefas[1])
//ADICIONAR ITENS NA LISTA
// minhaListaDeTarefas.push('formatar computador')
// console.log(minhaListaDeTarefas)
// console.log(minhaListaDeTarefas[4])
//REMOVER DA LISTA
// minhaListaDeTarefas.splice(2,1)//2 = indíce na ordem de 0 em diante
// 1 = quantidade de itens em ordem a partir do numero da indice
// console.log(minhaListaDeTarefas)
//VERIFICAR SE É UM ARRAY
// console.log(Array.isArray(minhaListaDeTarefas))
//ORDENAR NÚMEROS OU LETRAS EM FORMA CRESCENTE
// const numero = [2,3,1,0]
// console.log(numero.sort())
//.concat junta 2 arrays .join junta uma string acho
///indexOf verifica onde esta a posicao do array, quando nao encontra retorna -1



//METODOS GET E SET
// const pessoa = {
//     _nome:'', //_nome o _ serve pra indicar que a variavel n deve ser acessada
//     _idade:20,
//     get nome() {
//         return this._nome
//     },
//     set nome(valor) {//o 'valor' é uma variavel criada para fundir
//         this._nome = valor.toUpperCase()//Deixa texto em caixa alta toUpper...
//     },
//     get podeDirigir(){
//    return this._idade > 18
//     },
//     set idade(valor) {
//         this._idade = valor
//     }
// }
// pessoa.nome = "Maria do Céu"
// console.log(pessoa.nome)
// pessoa.idade = 16// colocando faz a baixo ser false
// console.log(pessoa.podeDirigir)//faz a comparacao do get
// console.log(pessoa._idade)//Amostra o valor da idade



//FUNÇÃO SEM RETURN
// function queDiaEHoje(){
//     const data = new Date()
//     console.log(`Hoje é dia: ${data.getDate()}`)
// }
// queDiaEHoje()

// function soma(valor1, valor2) {
//     console.log(`${valor1} + ${valor2} =`, valor1 + valor2)
// }
// soma(10, 20)
// soma(3,4)
//FUNÇÃO COM RETURN
// function soma(valor1, valor2) {
//     return valor1 + valor2
// }
// console.log(soma(10,12))
//FUNÇÃO COM RETURN armazendando resultado na variavel
// function soma(valor1, valor2) {
//     const resultado = valor1 + valor2
//     return resultado
// }
// const result = soma(10,20)
// console.log(result)
//PEGANDO DIRETO DE UMA VARIAVEL(NAO É UMA BOA PRÁTICA)
// const idade = 20
// const tamanho = 10
// const resultado = soma(idade + tamanho)
// console.log(resultado)

//JEITO DEMORADO E RAPIDO DE FAZER
// const funcionario1 = {
//     nome:'Zezinho',
//     desconto:0.2,
//     salarioBruto:2000,
//     salarioLiquido:0
// }
// const funcionario2 = {
//     nome:'Mariazinha',
//     desconto:0.1,
//     salarioBruto:2000,
//     salarioLiquido:0
// }
//// const descontoFuncioario1 = funcionario1.salarioBruto - (funcionario1.desconto * funcionario1.salarioBruto)
//// const descontoFuncioario2 = funcionario2.salarioBruto - (funcionario2.desconto * funcionario2.salarioBruto)
//// console.log(descontoFuncioario1)
//// console.log(descontoFuncioario2)
//// Acima é o jeito demorado de fazer, abaixo jeito rápido

// function calcularDesconto(salarioBruto, desconto){
//     return salarioBruto - (salarioBruto * desconto)
// }
// funcionario1.salarioLiquido = calcularDesconto(funcionario1.salarioBruto, funcionario1.desconto)
// funcionario2.salarioLiquido = calcularDesconto(funcionario2.salarioBruto, funcionario2.desconto)
// console.log(`${funcionario1.nome} recebe =`, funcionario1.salarioLiquido)
// console.log(`${funcionario2.nome} recebe =`, funcionario2.salarioLiquido)



//CLASSES
// class Heroi{
//     atacar(){
//         console.log('atacar')
//     }
//     defender(){
//         console.log('defender')
//     }
// }
// const heroi = new Heroi()
// heroi.atacar()
// heroi.defender()

// class Heroi2 {
//     constructor(nome, idade){
//         this.nome = nome
//         this.idade = idade
//     }
//     atacar(){
//         console.log(this.nome, 'atacou com',this.idade,'anos')
//     }
// }
// const heroi2 = new Heroi2('Flash', 20)
// heroi2.atacar()
//STATICO
// class Heroi2 {
//     static cons(idade){
//         return 2022 - idade
//     }
// }
// const heroi2 = Heroi2.cons(1997)
// console.log(heroi2)