import Button from './Button'
import { useAppContext } from '../context/AppContext'

type Props = {
  openDialog: (open: boolean) => void
}

const PlayGame: React.FC<Props> = ({ openDialog }) => {
  const { time } = useAppContext()

  const playGame = () => {
    time.startTime()
    openDialog(false)
  }

  return (
    <>
      {!time.start && (
        <div className="text-center">
          <Button text="!JUGAR¡" onClick={playGame} />
        </div>
      )}
    </>
  )
}

export default PlayGame