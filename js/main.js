//onclick calls the function below, using the given location as a parameter
function locationSearch(location){
    //showCoords(location)
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const name = data.results[0].name
            const latitude = data.results[0].latitude
            const longitude = data.results[0].longitude
            weatherCheck(name, latitude, longitude) //calls this function using the information gathered from this function call
        })
        .catch(err => console.log(`error ${err}`))
    
}

//use the lat/long data to find the current weather
function weatherCheck(name, lat, long){
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`
    fetch(url)
        .then(res => res.json())
        //.then(data =>console.log(data))
        .then(data => {
            alert(`The current temperature in ${name} is ${data.current_weather.temperature} degrees celsius.`)
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

function showCoords(event) {
    const x = event.clientX
    const y = event.clientY
    const box = document.getElementById('box')
    console.log(x,y)
    box.style.top = `${y}px`
    box.style.left = `${x}px`
    box.classList.remove('hidden')
}

function hoverBox(){
    document.querySelector('#box').classList.toggle('hide')
}

//weatherCheck()

//locationSearch('sydney')

// function doThis(place){
//     const id = document.getElementById(place.id).value
//     console.log(id)
//     locationSearch(id)
// }