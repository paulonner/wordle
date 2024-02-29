import { createContext, useContext, useEffect, useState } from 'react'
import useTimer from '../hooks/useTime'
import useRandomWord from '../hooks/useRandomWord'
import { type CurrentUserContextType } from '../types'

export const AppContext = createContext({} as CurrentUserContextType)

type Props = {
  children: JSX.Element
}

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const time = useTimer(1 * 60)
  const word = useRandomWord()
  const [ statistic, setStatistic ] = useState({
    plays: 0,
    victories: 0
  })

  const addVictory = () => {
    setStatistic({ plays: statistic.plays + 1, victories: statistic.victories + 1 })
  }

  const gameOver = () => {
    setStatistic({ plays: statistic.plays + 1, victories: statistic.victories })
  }

  useEffect(() => {
    if (time.start) {
      word.newWord()
    }
  }, [time.start])
  
  return (
    <AppContext.Provider
      value={{
        statistic,
        addVictory,
        gameOver,
        word,
        time
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)