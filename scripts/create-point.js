function populateUFs(){
    let stateselect = document.querySelector('select[name="uf"]')
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json()).then(states => {
        for(state of states){
            stateselect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}


populateUFs()
