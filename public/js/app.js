console.log("client side")



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#msg-One')
const msgTwo = document.querySelector('#msg-Two')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    msgOne.textContent = 'Loading...'
    msgTwo.textContent = ''

    fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            //console.log(data.error)
            msgOne.textContent = data.error
        } else {
            //console.log(data.location)
            //console.log(data.forecast)
            msgOne.textContent = data.location 
            msgTwo.textContent = data.forecast + ". It is " + data.temperature + " degrees outside. But feels like " + data.feelsLike + " degrees outside."
        }
    })
})
})