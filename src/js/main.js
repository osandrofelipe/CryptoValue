const opt = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}
const getData = (result) => {
    for(const field in result){
        if(document.querySelector('#'+field)){
            document.querySelector('#'+field).value = `R$ ${[Number(result[field]).toFixed(2)]}`
        }
    }
}

function update() {
    const select = document.querySelector('#coin');
    const option = select.options[select.selectedIndex].value
   

    fetch(`https://www.mercadobitcoin.net/api/${option}/ticker`, opt)
    .then( response => response.json())
    .then( data => getData(data.ticker))
    .catch( err => console.log('Error: ' + err.message))

}

fetch('https://economia.awesomeapi.com.br/json/list/USD-BRL/1', opt)
.then( response => response.json())
.then( data => document.querySelector('#bid').value = `R$ ${[Number(data[0].bid).toFixed(2)]}`) 
.catch( err => console.log('Erro: ' + err.message))