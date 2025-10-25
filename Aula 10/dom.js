const incluirProdutos = ()=>{
    const li = document.createElement("li");
    const txtCmp = document.getElementById("idtexto");
    //ou const txtCmp = document.querySelector("#idTexto");

    if(txtCmp.value){
        li.textContent = txtCmp.value;
        const ul = document.getElementById("idlista");
        ul.appendChild(li);
    }
}

const removerProduto = () =>{
    const lis = document.querySelectorAll("#idlista li");
    const txtCmp = document.getElementById("idtexto");
    const ul = document.getElementById("idlista");

    lis.forEach(it =>{
        if(it.textContent == txtCmp.value){
            ul.removeChild(it);
        }
    });
}
const btnAdicionar = document.querySelector("#idadicionar");
const btnRemover = document.querySelector("#idremover");

btnAdicionar.addEventListener('click', incluirProdutos);
btnRemover.addEventListener('click', removerProduto);