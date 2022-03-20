const timerBlock = document.querySelector('.timer__time')
const deadline = '31 march 2022'

let interval

function declOfNum(number, words) {
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

const updateClock = () => {
    const date = new Date().getTime()
    const dateDeadline = new Date(deadline).getTime()
    const timeRemaining = (dateDeadline - date) / 1000

    const days = Math.floor(timeRemaining / 60 / 60 / 24)
    const hours = Math.floor((timeRemaining / 60 / 60) % 24)
    const minutes = Math.floor((timeRemaining / 60) % 60)
    const seconds = Math.floor(timeRemaining % 60)

    const fDays = days < 10 ? '0' + days : days
    const declDays = declOfNum(days, ['день', 'дня', 'дней'])
    const fHours = hours < 10 ? '0' + hours : hours
    const fMinutes = minutes < 10 ? '0' + minutes : minutes
    const fSeconds = seconds < 10 ? '0' + seconds : seconds

    timerBlock.textContent = `${fDays} ${declDays} ${fHours}:${fMinutes}:${fSeconds}`

    if (timeRemaining <= 0) {
        clearInterval(interval)
        timerBlock.textContent = `00:00:00`
    }
}
updateClock()

interval = setInterval(updateClock, 500)

