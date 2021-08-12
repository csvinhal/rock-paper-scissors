import { useEffect, useState } from 'react'
import { IconType } from '../atoms/Icon/Icon'

/* eslint-disable import/prefer-default-export */
export const useGame = (): [
  IconType | undefined,
  IconType | undefined,
  () => void,
  (T: IconType) => void,
] => {
  const [playerHand, setPlayerHand] = useState<IconType>()
  const [houseHand, setHouseHand] = useState<IconType>()

  const getRandomHand = () => {
    const type = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    const random: number = Math.floor(Math.random() * type.length - 1)

    return type[random] as IconType
  }

  useEffect(() => {
    if (playerHand) {
      const randomHand = getRandomHand()
      setTimeout(() => setHouseHand(randomHand), 2000)
    }
  }, [playerHand])

  const resetHands = () => {
    setHouseHand(undefined)
    setPlayerHand(undefined)
  }

  const playerSelectHand = (selected: IconType) => {
    setPlayerHand(selected)
  }

  return [playerHand, houseHand, resetHands, playerSelectHand]
}
