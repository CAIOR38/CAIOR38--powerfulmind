// Numa template string eu não posso quebrar linhas
const nome= 'Rebeca'
const concatenacao = 'Olá, ' + nome + ' ,tudo bem?'
console.log(concatenacao)

const template= `
olá
${nome}!`
// Essa é uma expressão
console.log(template)

const up = texto =>  texto.toUpperCase()
// Aqui jogo o texto com essa função e deixo o texto com letra maiúscula
console.log(`Ei...${up('cuidado, você está muito perto da borda da montanha')}!`)