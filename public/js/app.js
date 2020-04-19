console.log("client side")



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#msg-One')
const msgTwo = document.querySelector('#msg-Two')
const msgThree = document.querySelector('#msg-Three')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    msgOne.textContent = 'Loading...'
    msgTwo.textContent = ''

    fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            msgOne.textContent = data.error
        } else {
            msgOne.textContent = data.location 
            msgThree.textContent = "Local Date & Time: " + data.localTime 
            msgTwo.textContent = data.forecast + ". It is " + data.temperature + " degrees outside. But feels like " + data.feelsLike + " degrees outside."
        }
    })
})
})