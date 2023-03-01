let stateselect = document.querySelector('select[name="uf"]')

function populateUFs() {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json()).then(states => {
            for (state of states) {
                stateselect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })

}

let selectCity = document.querySelector('select[name="city"]')

function cityEnable(change) {
    selectCity.disabled = false //habilita select de cidade.

    //SELECIONA E DESABITITA SELECT DE VALUE 1 NO CAMPO DE ESTADO
    let disabledoption = document.querySelector('option[name="selecionar"]')
    disabledoption.setAttribute('disabled', true)
    const stateInput = document.querySelector('input[name=state]')
    const indexOfSelectedState = change.target.selectedIndex

    stateInput.value = change.target.options[indexOfSelectedState].text

    let idcity = change.target.value

    localStorage.setItem('id', idcity)
    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${localStorage.getItem('id')}/municipios`

    fetch(url).then((res) => res.json()).then(cities => {
        selectCity.innerHTML = "<option value='0'>Selecionar Cidade</option>"
        for (city of cities) {
            selectCity.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
    })

}

populateUFs()

var change = stateselect
change.addEventListener('change', cityEnable)

//ITENS DE COLETA
const itenToCollect = document.querySelectorAll(".itens-grid li")

for (const item of itenToCollect) {
    item.addEventListener('click', RandomSelectdItem)
}

let selectedItems = []

function RandomSelectdItem(event) {
    const itemLi = event.target

    const itemId = itemLi.dataset.id

    itemLi.classList.toggle('selected') //ADICIONAR OU REMOVER


    //VERIFICAR SE TEM ITENS SELECIONADOS, 
    const alreadySelected = selectedItems.findIndex(function(item){
        const itemFound = item == itemId
        return itemFound
    })
    //SE SIM PEGAR OS ITENS SELECIONASDO


    //SE  JA TIVER SELECIONADO, TIRAR DA XELECAO

    //SE NÃO TIVER SELECIONADO ADICIOAR A SELEÇAO

    //ARUALIZAR O CAMPO EXONDIDO COM OS ITENS SELECIONASOS
}