import ancientsData from '../data/ancients.js'
import greenCards from '../data/mythicCards/green/index.js'
import brownCards from '../data/mythicCards/brown/index.js'
import blueCards from '../data/mythicCards/blue/index.js'

let ancient = null
let difficulty = null
let firstStageArr = []
let secondStageArr = []
let thirdStageArr = []

function chosenDifficulty(difficulty, source) {
  return source.filter((el) => el.difficulty === difficulty)
}

const greenEasyCards = chosenDifficulty('easy', greenCards)
const greenNormalCards = chosenDifficulty('normal', greenCards)
const greenHardCards = chosenDifficulty('hard', greenCards)

const brownEasyCards = chosenDifficulty('easy', brownCards)
const brownNormalCards = chosenDifficulty('normal', brownCards)
const brownHardCards = chosenDifficulty('hard', brownCards)

const blueEasyCards = chosenDifficulty('easy', blueCards)
const blueNormalCards = chosenDifficulty('normal', blueCards)
const blueHardCards = chosenDifficulty('hard', blueCards)

function randomCards(difficultGreen, difficultBrown, difficultBlue) {
  let allGreenCards = difficultGreen
  let allBrownCards = difficultBrown
  let allBlueCards = difficultBlue
  firstStageArr = [...cardsForStages(0, allGreenCards), ...cardsForStages(1, allBrownCards), ...cardsForStages(2, allBlueCards)]
  secondStageArr = [...cardsForStages(3, allGreenCards), ...cardsForStages(4, allBrownCards), ...cardsForStages(5, allBlueCards)]
  thirdStageArr = [...cardsForStages(6, allGreenCards), ...cardsForStages(7, allBrownCards), ...cardsForStages(8, allBlueCards)]
}

function cardsForStages(numberInRow, allColorCards) {
  let res = []
  while (res.length + 1 <= cardCounter[numberInRow].textContent) {
    let randomIndex = Math.floor(Math.random() * allColorCards.length)
    res.push(allColorCards.splice(randomIndex, 1)[0])
  }
  return res
}

function revealCards(stageArr, cards) {
  let randomIndex = Math.floor(Math.random() * stageArr.length)
  let deleted = stageArr.splice(randomIndex, 1)[0]
  playedCard.src = `assets/MythicCards/${deleted.color}/${deleted.id}.png`
  playedCard.style.opacity = 1
  cardCounter[cards].textContent = stageArr.filter((el) => el.color === 'green').length
  cardCounter[cards + 1].textContent = stageArr.filter((el) => el.color === 'brown').length
  cardCounter[cards + 2].textContent = stageArr.filter((el) => el.color === 'blue').length
}

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

  if (difficulty.toLowerCase() === 'easy') {
    randomCards([...greenEasyCards, ...greenNormalCards], [...brownEasyCards, ...brownNormalCards], [...blueEasyCards, ...blueNormalCards])
  } else if (difficulty.toLowerCase() === 'medium') {
    randomCards(greenCards, brownCards, blueCards)
  } else if (difficulty.toLowerCase() === 'hard') {
    randomCards([...greenNormalCards, ...greenHardCards], [...brownNormalCards, ...brownHardCards], [...blueNormalCards, ...blueHardCards])
  }
})

backgroundCard.addEventListener('click', () => {
  if (firstStageArr.length > 0) {
    revealCards(firstStageArr, 0)
  } else if (secondStageArr.length > 0) {
    revealCards(secondStageArr, 3)
    stageTitles[0].style.color = 'Red'
  } else if (thirdStageArr.length > 0) {
    revealCards(thirdStageArr, 6)
    stageTitles[1].style.color = 'Red'
  } else {
    playedCard.style.opacity = 0
    stageTitles[2].style.color = 'Red'
    alert('The cards are out')
  }
})
