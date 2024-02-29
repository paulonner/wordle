import { useEffect, useState } from 'react'
import Square from './Square'
import { wordlePanelColor }  from '../const'
import { createMatrix } from '../utils'
import { useAppContext } from '../context/AppContext'
import Keyboard from './Keyboard'

type Word = {
  letter: string,
  color: string
}

type WordLetter = {
  word: Array<Word>,
  correct: number
}

type MatrixCell = { letter: string, color: string };
type MatrixRow = MatrixCell[];
type Matrix = MatrixRow[];

const WordlePanel = () => {
  const { time, addVictory, gameOver, word } = useAppContext()
  const [ matrix, setMatrix ] = useState<Matrix>(createMatrix(5, 5))
  const [ state, setState ] = useState({
    column: 0,
    row: 0
  })

  const compareWords = (row: number) => {
    return matrix[row].reduce((acc: WordLetter, value, index: number) => {
      const color = value.letter === word.currentWord[index]
        ? wordlePanelColor.green : word.currentWord.includes(value.letter) ? wordlePanelColor.yellow : wordlePanelColor.gray
      acc = {
        word: [ ...acc.word, { ...value, color }],
        correct: value.letter === word.currentWord[index] ? acc.correct + 1 : acc.correct
      }
      return acc
    }, { word: [], correct: 0 })
  }

  const replaceMatrixData = (prev: Matrix, row: number, column: number, value: MatrixRow | string): Matrix => {
    const newMatrix = [ ...prev ]
    
    if (typeof value === 'string') {
      newMatrix[row][column] = { ...newMatrix[row][column], letter: value }
    } else {
      newMatrix[row] = value
    }
    
    return newMatrix
  }

  const setLetter = ((letter: string) => {
    if (letter) {
      const { column, row } = state
      
      if (column !== 5) {
        setMatrix(replaceMatrixData(matrix, row, column, letter))
  
        const letterPosition = column === 4 ? 0 : column + 1
        const attempts = column === 4 ? row + 1 : row

        if (column === 4) {
          const { word, correct } = compareWords(row)
          setMatrix(replaceMatrixData(matrix, row, column, word))
          
          if (correct === 5) addVictory()
          if (correct !== 5 && row === 4) gameOver()
        }
        setState({ column: letterPosition , row: attempts })
      }
    }
  })

  useEffect(() => {
    if (time.time === 0) {
      word.newWord()
      setMatrix(createMatrix(5, 5))
      setState({ column: 0, row: 0})
      gameOver()
    }
  },[time.time])

  return (
    <>
      <div className="grid grid-rows-5 gap-2 justify-center p-5">
        {matrix.map((rows) => (
          <div className="flex gap-2">
            {rows.map(item => (
              <Square
                letter={item.letter}
                color={item.color || wordlePanelColor.default}
                className="w-[76px] h-[76px] text-[35px] font-[800] text-white"
              />
            ))}
          </div>
        ))}
      </div>
      <Keyboard setLetter={setLetter} />
    </>
  )
}

export default WordlePanel