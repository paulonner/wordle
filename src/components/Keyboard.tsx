import { useEffect } from 'react'
import Square from './Square'
import { BackspaceIcon } from '@heroicons/react/24/outline'
import { keyboard, keyboardColor } from '../const'

type KeyboardProps = {
  setLetter: (letter: string) => void
}

const Keyboard: React.FC<KeyboardProps> = ({ setLetter }) => {
  //const [ keyPress, setKeyPress ] = useState('')
  const keyboardKeys = [ ...keyboard.rows.one, ...keyboard.rows.two, ...keyboard.rows.three ]

  const handleKeyPress = (key: string) => {
    //if (keyPress && key === 'Enter') {
    //  setLetter(keyPress)
    //  setKeyPress('')
    //}

    //if (keyPress && key === 'Backspace') setKeyPress('')
    if (key !== 'Enter' && key !== 'Backspace') setLetter(key)
  }

  const getColor = (key: string) => {
    //if (key === keyPress) return keyboardColor.green
    if (['R', 'T', 'U', 'K'].includes(key)) return keyboardColor.gray
    return keyboardColor.default
  }

  const keyboardKey = (key: string) => {
    const isEnterOrBackspace = key === 'Enter' || key === 'Backspace'

    return <Square
      letter={key === 'Backspace' ? <BackspaceIcon className="h-6 w-6 bg" /> : key}
      onClick={() => handleKeyPress(key)}
      color={getColor(key)}
      className={
        `${isEnterOrBackspace ? 'w-[71.78px] h-[51.05px]' : 'w-[44.67px] h-[51.05px]'}
        text-[18px] font-[600]`
      }
    />
  }

  useEffect(() => {
    const eventListener = (event: KeyboardEvent) => {
      const currentKey = event.key.toUpperCase()
      
      if (keyboardKeys.includes(currentKey)) handleKeyPress(currentKey)
      //if (event.code === 'Enter' || event.code === 'Backspace') handleKeyPress(event.code)
    }
    window.addEventListener('keydown', eventListener)

    return () => window.removeEventListener('keydown', eventListener)
  }, [handleKeyPress])
  

  return (
    <div className="bg-gray-100/30 rounded-md flex flex-col gap-2 p-5">
      <div className="flex gap-2 pl-2 justify-center">
        {keyboard.rows.one.map(key => keyboardKey(key))}
      </div>
      <div className="flex gap-2 pl-16">
        {keyboard.rows.two.map(key => keyboardKey(key))}
      </div>
      <div className="flex gap-2 pl-1">
        {keyboard.rows.three.map(key => keyboardKey(key))}
      </div>
    </div>
  )
}

export default Keyboard