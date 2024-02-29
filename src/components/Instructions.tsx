import Square from './Square'
import Dialog from './Dialog'
import PlayGame from './PlayGame'
import { DialogProps } from '../types'

const Instructions: React.FC<DialogProps> = ({ open, openDialog }) => {
  const examples = [
    {
      world: 'GATOS'.split(''),
      focus: {
        letter: 'G',
        color: 'bg-green-600'
      },
      text: <p>La letra <strong>G</strong> está en la palabra y en la posición correcta.</p>
    },
    {
      world: 'VOCAL'.split(''),
      focus: {
        letter: 'C',
        color: 'bg-yellow-500'
      },
      text: <p>La letra <strong>C</strong> está en la palabra pero en la posición incorrecta.</p>
    },
    {
      world: 'CANTO'.split(''),
      focus: {
        letter: 'O',
        color: 'bg-gray-500'
      },
      text: <p>La letra <strong>O</strong> no está en la palabra.</p>
    }
  ]

  return (
    <Dialog open={open} openDialog={openDialog}>
      <>
        <h1 className="text-center p-4">Cómo jugar</h1>
        <div className="space-y-5">
          <p>Adivina la palabra oculta en cinco intentos.</p>
          <p>Cada intento debe ser una palabra válida de 5 letras.</p>
          <p>Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra</p>
          <h3>Ejemplos</h3>
        </div>
        {examples.map(item => (
          <div className="space-y-2 pt-5">
            <div className="flex gap-3 justify-center">
              {item.world.map(letter => (
                <Square
                  letter={letter}
                  color={letter === item.focus.letter ? item.focus.color : 'bg-white'}
                  className='w-[76px] h-[76px] border text-[35px] font-[800]'
                />
              ))}
            </div>
            {item.text}
          </div>
        ))}
        <p className="pt-6">Puede haber letras repetidas. Las pistas son <br /> independientes para cada letra</p>
        <p className="p-10 text-center">¡Una palabra nueva cada 5 minutos!</p>
        <PlayGame openDialog={openDialog} />
      </>
    </Dialog>
  )
}

export default Instructions