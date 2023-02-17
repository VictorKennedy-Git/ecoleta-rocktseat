let stateselect = document.querySelector('select[name="uf"]')

function populateUFs() {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json()).then(states => {
            for (state of states) {
                stateselect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })

}

function cityEnable(change) {
    let selectCity = document.querySelector('select[name="city"]')

        selectCity.disabled = false

        let disabledoption = document.querySelector('option[name="selecionar"]')
        disabledoption.setAttribute('disabled', true)
    
     let idcity = change.target.value
        localStorage.setItem('id', idcity)
        let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${localStorage.getItem('id')}/municipios`

        fetch(url).then((res) => res.json()).then(cities => {
            selectCity.innerHTML = "<option>Selecionar Cidade</option>"
            for (city of cities) {
                selectCity.innerHTML += `<option value="${city.id}">${city.nome}</option>`
            }
    })
    
}

populateUFs()

var change = stateselect
change.addEventListener('change', cityEnable)

