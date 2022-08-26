const body = document.querySelector('body')
const startPage = document.querySelector('.start-wrapper')
const startBtn = document.querySelector('.start-btn')
const ancientsPage = document.querySelector('.ancients-wrapper')
const difAncients = document.querySelectorAll('.ancient__img')
const returnBtn = document.querySelector('.return-btn')
const difficultySection = document.querySelector('.difficulty')
const difficultyBtns = document.querySelectorAll('.difficulty-btn')
const gameBtn = document.querySelector('.game-btn')
const gamePage = document.querySelector('.game-wrapper')
const ancientInGame = document.querySelector('.ancient-in-game')
const chosenDiff = document.querySelector('.chosen-difficulty')
const cardCounter = document.querySelectorAll('.counter')
const backgroundCard = document.querySelector('.background-card')
const playedCard = document.querySelector('.play-card')

startBtn.addEventListener('click', () => {
  body.style.background = 'black'
  startPage.classList.remove('show')
  startPage.classList.add('hide')
  ancientsPage.classList.remove('hide')
  ancientsPage.classList.add('show')
})

returnBtn.addEventListener('click', () => {
  body.style.background = "url('assets/home.png')"
  body.style.backgroundSize = 'cover'
  startPage.classList.remove('hide')
  startPage.classList.add('show')
  ancientsPage.classList.remove('show')
  ancientsPage.classList.add('hide')
})

difAncients.forEach((el1) => {
  el1.addEventListener('click', () => {
    difAncients.forEach((el2) => {
      el2.classList.remove('chosen')
    })
    el1.classList.add('chosen')
    difficultySection.classList.remove('hide')
    difficultySection.classList.add('show')
  })
})

difficultyBtns.forEach((el1) => {
  el1.addEventListener('click', () => {
    difficultyBtns.forEach((el2) => {
      el2.classList.remove('chosen')
    })
    el1.classList.add('chosen')
    gameBtn.style.borderColor = 'red'
    gameBtn.disabled = false
  })
})
