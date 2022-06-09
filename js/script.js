const botaoEnviar = document.getElementById("btnNews")
botaoEnviar.addEventListener("click", validaCampos)

function validaCampos(){
    const campos = document.querySelectorAll("input[type='text'],input[type='email']")

    for(let x = 0; x < campos.length ; x++){
            if(campos[x].value == ""){
                alert("O CAMPO " + campos[x].name + " está sem preenchimento!")
                return                
            }
    }
}