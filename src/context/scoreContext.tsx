import { createContext, ReactNode, useContext, useState } from 'react'

interface Props {
  children: ReactNode
}

type Dispatch = React.Dispatch<React.SetStateAction<number>>

type ContextType = {
  score: number
  setScore: Dispatch
}

const ScoreContext = createContext<ContextType | undefined>(undefined)

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ScoreProvider = ({ children }: Props) => {
  const [score, setScore] = useState<number>(0)

  const value = {
    score,
    setScore,
  }

  return <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
}

const useGameScore = (): ContextType => {
  const context = useContext(ScoreContext)

  if (!context) {
    throw new Error('useGameScore must be used within a ScoreProvider')
  }

  return context
}

export { ScoreProvider, useGameScore }
