let timerFunction = ()=>{
  fetch('https://api.ipgeolocation.io/timezone?apiKey=300bdfe9731b4a97b8959117c9415dd8&location=Russia/ulyanovsk').then(response=>{
    return response.json()
  }).then((json)=>{
    if(json.time_24 == undefined) return
    let time = json.time_24.substr(0,8)
    let hours = parseInt(time.substr(0,2))
    let minutes = parseInt(time.substr(3,2))
    let seconds = parseInt(time.substr(6,8)) + minutes*60 + hours*60*60
    setInterval(() => {
      seconds++
      minutes = Math.floor(seconds/60) - (hours * 60)
      hours = Math.floor(seconds/60/60)
      document.getElementById('timer').innerText = hours+":"+minutes
    }, 1000);
  })
}
timerFunction()