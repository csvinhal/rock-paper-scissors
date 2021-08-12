/* eslint-disable import/prefer-default-export */
import { IconType } from '../../../atoms/Icon/Icon'

const SHAPES: { [K in IconType]: Array<IconType> } = {
  rock: ['lizard', 'scissors'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'spock'],
}

export const useGameResult = (
  playerChoice: IconType,
  houseChoise: IconType,
): 'win' | 'loose' | 'tie' => {
  if (playerChoice === houseChoise) {
    return 'tie'
  }

  if (SHAPES[playerChoice].includes(houseChoise)) {
    return 'win'
  }

  return 'loose'
}
