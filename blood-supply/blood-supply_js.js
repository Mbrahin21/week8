let apiBaseUrl = 'https://blood-group-api.wl.r.appspot.com/'

let aboSelect = document.querySelector('#abo')
let rhSelect = document.querySelector('#rh')
let checkButton = document.querySelector('#check-button')
let resultDiv = document.querySelector('#result')

checkButton.addEventListener('click', function() {
    let abo = aboSelect.value
    let rh = rhSelect.value

    if (abo == '' || rh == '') {
        resultDiv.innerHTML = '<span class="error">Please select both ABO and Rh groups</span>'
        return
    }

    
    let bloodType = abo + rh

  // combine the api address with the selected blood type
    let apiUrl = apiBaseUrl + bloodType

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            
            let units = data.availableUnits
            resultDiv.innerHTML = bloodType + ' has ' + units + ' units available'
        })
        .catch(error => {
            console.log(error)
            resultDiv.innerHTML = '<span class="error">Sorry, could not fetch blood supply data</span>'
        })
})