import { useState } from 'react'
import { IconType } from '../components/atoms/Icon/Icon'
import { useGameScore } from '../context/scoreContext'

export type Result = 'win' | 'loose' | 'tie'

export type GameLogic = {
  playerHand: IconType | undefined
  houseHand: IconType | undefined
  result: Result | undefined
}

const SHAPES: { [K in IconType]: Array<IconType> } = {
  rock: ['lizard', 'scissors'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'spock'],
}

const getRandomHand = (): IconType => {
  const type = ['rock', 'paper', 'scissors', 'lizard', 'spock']
  const random: number = Math.floor(Math.random() * (type.length - 1)) + 0

  return type[random] as IconType
}

const getGameResult = (
  playerChoice: IconType,
  houseChoise: IconType,
): Result => {
  if (playerChoice === houseChoise) {
    return 'tie'
  }

  if (SHAPES[playerChoice].includes(houseChoise)) {
    return 'win'
  }

  return 'loose'
}

const getNewScoreByGameResult = (
  currentScore: number,
  result: Result,
): number => {
  const isWin = result === 'win'

  if (isWin) {
    return currentScore + 4
  }

  const isLoose = result === 'loose'
  if (isLoose) {
    const newScore = currentScore - 4
    return newScore <= 0 ? 0 : newScore
  }

  return currentScore
}

/* eslint-disable import/prefer-default-export */
export const useGameLogic = (): [
  GameLogic,
  () => void,
  (T: IconType) => void,
] => {
  const { score, setScore } = useGameScore()
  const [playerHand, setPlayerHand] = useState<IconType>()
  const [houseHand, setHouseHand] = useState<IconType>()
  const [result, setResult] = useState<Result>()

  const resetGame = () => {
    setHouseHand(undefined)
    setPlayerHand(undefined)
    setResult(undefined)
  }

  const selectPlayerHand = (selected: IconType) => {
    const randomHand = getRandomHand()
    const gameResult = getGameResult(selected, randomHand)
    const newScore = getNewScoreByGameResult(score, gameResult)

    setPlayerHand(selected)

    setTimeout(() => {
      setHouseHand(randomHand)
      setResult(gameResult)
      setScore(newScore)
    }, 1000)
  }

  const gameStatus = { playerHand, houseHand, result }

  return [gameStatus, resetGame, selectPlayerHand]
}
