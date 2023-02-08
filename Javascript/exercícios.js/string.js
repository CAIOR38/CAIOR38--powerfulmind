const escola= "Cod3r"
console.log(escola.charAt (4))
// significa que ele irá me mostrar a letra a partir do índice 4//
console.log(escola.charCodeAt(3))
// me mostra o valor na tabela unicode//
console.log(escola.indexOf(3))
// para saber se existe um valor dentro verdadeiro dentro da string//

console.log(escola.substring(1))
// a partir do índice um será somente mostrado dentro da string//
console.log(escola.substring(0,3))
// aqui ele vai do índice 0 até o 3 mostrando somente esses//

console.log('Escola '.concat(escola).concat('!'))
// isso irá concatenar os conteúdos da string ( variáveis e constantes)
console.log(escola.replace(3,"e"))
// essa função irá substituir o valor na string

console.log('Ana, Maria, Virginia, Natan'.split(','))
// aqui estou chamando a função Array e pondo a vírgula como espaçamento
const nome= 'Ricardo'
console.log(nome)
