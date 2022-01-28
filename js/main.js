function heySydney(){
    console.log('hey')
}

function weatherCheck(lat, long){
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`
    fetch(url)
        .then(res => res.json())
        //.then(data =>console.log(data))
        .then(data => {
            console.log(data.current_weather)
            alert(`The current temperature is ${data.current_weather.temperature} degrees celsius.`)
        })
        .catch(err => {
            console.log(`error $err`)
        })
}

//weatherCheck()