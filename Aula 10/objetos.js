const meuObjeto = {
    "nome": "Pedro",
    "endereco": "Ruas dos Bobos",
    "numero": 0,
    "ehfumante": false,
    "ola": ()=> {
        console.log("Olá mundo!");
    },
    "telefones": {
        "residencial": "14 123456789",
        "comercial": "14789546123"
    }
}

meuObjeto.ola()
console.log(meuObjeto.telefones)

console.log(JSON.stringify(meuObjeto))

const txtObjeto = '{"nome": "Pedro","endereco": "Ruas dos Bobos", "numero": 0, "ehfumante": false}';

const obj = JSON.parse(txtObjeto)
console.log(obj)