import { useState, useMemo } from 'react'
import { words } from '../const/words'

const useRandomWord = (length: number = 5) => {
  const [ currentWord, setCurrentWord ] = useState('')
  const [ history, setHistory ] = useState<string[]>([])
  
  const filteredWords = useMemo(() => {
    return words.filter(item => item.length === length)
  }, [length])

  const newWord = () => {
    const word = filteredWords[Math.floor(Math.random() * filteredWords.length)].toUpperCase()

    if (!history.includes(word)) {
      setCurrentWord(word)
      setHistory(prev => [ ...prev, word ])
    } else {
      newWord()
    }
  }

  return {
    currentWord,
    newWord
  }
}

export default useRandomWord
