const validar_envio = () => {
    const cmpNome = document.getElementById("idnome");
    const cmpTelefone = document.getElementById("idtelefone");

    if(cmpNome.value != "" || cmpTelefone.value != ""){
        console.log("Tem conteudo", cmpNome.value + cmpTelefone.value)
        return true;
    } else {
        console.log("Não tem conteudo", cmpNome.value + cmpTelefone.value);
        return false;
    }
}

const form = document.querySelector("#idform");
form.addEventListener('submit',function(e){
    if (!validar_envio()) e.preventDefault();
})

