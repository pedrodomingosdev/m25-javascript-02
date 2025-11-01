const carregarProdutos = () => {
    const tbbody = document.getElementById('id_dados');
    axios.get('http://localhost:3000/Produtos').then((ret) => {
        ret.data.forEach((item, idx) => {
            const tr = document.createElement('tr');
            const td_id = document.createElement('td');
            const td_desc = document.createElement('td');
            const td_saldo = document.createElement('td');
            const td_preco = document.createElement('td');

            tr.appendChild(td_id);
            tr.appendChild(td_desc);
            tr.appendChild(td_saldo);
            tr.appendChild(td_preco);

            tbbody.appendChild(tr);

            td_id.textContent = item.id;
            td_desc.textContent = item.descricao;
            td_saldo.textContent = item.saldo;
            td_preco.textContent = item.preco;
        })

    })
}

carregarProdutos();