/*const nome = prompt("Qual o seu nome?")
const corFav = prompt("Qual a sua cor favorita?")
const citacao = prompt("Qual é a sua citacao favorita?")


console.log("A cor favorita de " + nome.toUpperCase() + " é " + corFav + " e a sua citacao favorita é \"" + citacao + "\".")

console.log(`Nome: ${nome.toUpperCase()}\nCor Favorita: ${corFav}`)

console.log (`Quantidades de caracteres de ${nome.toUpperCase()}: ${nome.length}`)

console.log(`O nome ${nome.toUpperCase()} possui a letra A: ${(nome.includes("a") || nome.includes("A"))}`)
*/

const nomeDoUsuario = prompt("Insira seu nome:")
const emailDoUsuario = prompt("Insira seu e-mail:")


console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Boas vindas ${nomeDoUsuario.toUpperCase()}!\nO nome ${nomeDoUsuario.toUpperCase()} possui ${nomeDoUsuario.length} caracteres.`)


let frase = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Boas vindas ${nomeDoUsuario.toUpperCase()}!\nO nome ${nomeDoUsuario.toUpperCase()} possui ${nomeDoUsuario.length} caracteres.`

console.log(frase.replaceAll('r','l'))

console.log(`O e-mail ${emailDoUsuario} esta correto: ${emailDoUsuario.includes('@')}`)