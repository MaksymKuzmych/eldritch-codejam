import ancientsData from '../data/ancients.js'
import greenCards from '../data/mythicCards/green/index.js'
import brownCards from '../data/mythicCards/brown/index.js'
import blueCards from '../data/mythicCards/blue/index.js'

let ancient = null
let difficulty = null

function chosenDifficulty(difficulty, source) {
  return source.filter((el) => el.difficulty === difficulty)
}

let greenEasyCards = chosenDifficulty('easy', greenCards)
let greenNormalCards = chosenDifficulty('normal', greenCards)
let greenHardCards = chosenDifficulty('hard', greenCards)

let brownEasyCards = chosenDifficulty('easy', brownCards)
let brownNormalCards = chosenDifficulty('normal', brownCards)
let brownHardCards = chosenDifficulty('hard', brownCards)

let blueEasyCards = chosenDifficulty('easy', blueCards)
let blueNormalCards = chosenDifficulty('normal', blueCards)
let blueHardCards = chosenDifficulty('hard', blueCards)

gameBtn.addEventListener('click', () => {
  ancientsPage.classList.remove('show')
  ancientsPage.classList.add('hide')
  gamePage.classList.remove('hide')
  gamePage.classList.add('show')

  let chosenRules = document.querySelectorAll('.chosen')
  ancient = chosenRules[0].id
  difficulty = chosenRules[1].textContent
  ancientInGame.src = `assets/Ancients/${ancient}.png`
  chosenDiff.textContent = difficulty

  let ancientObj = ancientsData.filter((el) => el.id == ancient)
  cardCounter[0].textContent = ancientObj[0].firstStage.greenCards
  cardCounter[1].textContent = ancientObj[0].firstStage.brownCards
  cardCounter[2].textContent = ancientObj[0].firstStage.blueCards
  cardCounter[3].textContent = ancientObj[0].secondStage.greenCards
  cardCounter[4].textContent = ancientObj[0].secondStage.brownCards
  cardCounter[5].textContent = ancientObj[0].secondStage.blueCards
  cardCounter[6].textContent = ancientObj[0].thirdStage.greenCards
  cardCounter[7].textContent = ancientObj[0].thirdStage.brownCards
  cardCounter[8].textContent = ancientObj[0].thirdStage.blueCards
})

console.log(greenEasyCards, greenNormalCards, greenHardCards)
console.log(brownEasyCards, brownNormalCards, brownHardCards)
console.log(blueEasyCards, blueNormalCards, blueHardCards)
