const maior_id = () => {
    return axios.get('http://localhost:3000/Produtos').then((ret) => {
        return ret.data.reduce((a, b) => (a > b?.id ? a : b?.id), 0)
    })

}

const gravar = () => {
    const id = document.getElementById("id").value;
    const descricao = document.getElementById("iddesc").value;
    const saldo = document.getElementById("idsaldo").value;
    const preco = document.getElementById("idpreco").value;

    maior_id().then((ret) => {
        const dados = {
            "id": (id == "null" ? ret + 1 : id),
            "descricao": descricao,
            "saldo": saldo,
            "preco": preco
        }

        if (id == "null") {
            axios.post("http://localhost:3000/Produtos", dados)
                .then((ret) => console.log("Produto gravado com sucesso!"));
        } else {
            axios.put("http://localhost:3000/Produtos/" + id, dados)
                .then((ret) => console.log("Produto gravado com sucesso!"));
        }
    })

}

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    gravar();
    setTimeout(() => {
        window.location.href = "index.html";
    }, 30000);
})