// O objeto é uma coleção {} e valor. Atributos e código. Json são textos.
const prod1={}
prod1.nome='Celular Ultra mega'
prod1.preco=4.990
console.log(prod1)

prod2={
    nome: 'notebook acer aspire 3',
    preco: 2.600,
    entrega: '12 de janeiro de 2023',


}
console.log(prod2)

let pessoa= {
    nome:'Caio', 
    idade: 23,
    altura: 1.79,
    trabalho: 'Casana Hotel',
    melhorAmigo: 'Big Natan',
    namorada: 'Virgínia',
    pets:['kyra','gohan','marinho','mario balotelli'],
    trabalhador:true,
    carro:{
        camaro:{ placa: 'oib 7808',
                cor: 'vinho'


        },
        masserati:{
            placa:'hxe 0326',
            cor: 'prata'
        }

          }

}
console.log(pessoa.carro.camaro.placa)