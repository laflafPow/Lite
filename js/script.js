//таймер
let timerFunction = ()=>{
  let timerEl = document.getElementById('timer')
  let now = new Date();
  timerEl.innerText = now.getHours()+":"+now.getMinutes()
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
      if(minutes < 10){
        if(hours < 10){
          timerEl.innerText = "0"+hours+":"+"0"+minutes
        }else{
          timerEl.innerText = hours+":"+"0"+minutes
        }
      }else{
        if(hours < 10){
          timerEl.innerText = "0"+hours+":"+minutes
        }else{
          timerEl.innerText = hours+":"+minutes
        }
      }
    }, 1000);
  })
}
let slider = ()=>{
  document.querySelector('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
}
timerFunction()
$('.slider').slick({
  arrows:true,
  dots:true,
  slidesToShow:4,
  autoplay:true,
  speed:1000,
  autoplaySpeed:800,
  // responsive:[
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow:2
  //     }
  //   },
  //   {
  //     breakpoint: 550,
  //     settings: {
  //       slidesToShow:1
  //     }
  //   }
  // ]
});