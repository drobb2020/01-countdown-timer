const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const retirement = '10 Apr 2026'

function countdown() {
    const retirementDate = new Date(retirement)
    const currentDate = new Date()

    const totalSeconds = ((retirementDate - currentDate) / 1000)
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor((totalSeconds / 60 / 60) % 24)
    const minutes = Math.floor((totalSeconds / 60) % 60)
    const seconds = Math.floor(totalSeconds % 60)

    daysEl.innerHTML = `${days}`
    hoursEl.innerHTML = formatTime(hours)
    minutesEl.innerHTML = formatTime(minutes)
    secondsEl.innerHTML = formatTime(seconds)
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time
}

// Initial call
countdown()

setInterval(countdown, 1000)

let i = 0
let images = []
// let time = 2000
let time = 60000

images[0] = 'url(../assets/bg-01.jpg)'
images[1] = 'url(../assets/bg-02.jpg)'
images[2] = 'url(../assets/bg-03.jpg)'
images[3] = 'url(../assets/bg-04.jpg)'
images[4] = 'url(../assets/bg-05.jpg)'
images[5] = 'url(../assets/bg-06.jpg)'
images[6] = 'url(../assets/bg-07.jpg)'
images[7] = 'url(../assets/bg-08.jpg)'

function changeImage() {
    const el = document.getElementById('body')
    el.style.backgroundImage = images[i]
    if (i < images.length -1) {
        i++
    } else {
        i = 0
    }
    setTimeout('changeImage()', time)
}

window.onload = changeImage
