import { useEffect } from 'react'
import Dialog from './Dialog'
import Button from './Button'
import { DialogProps } from '../types'
import { useAppContext } from '../context/AppContext'

const Statistics: React.FC<DialogProps> = ({ open, openDialog }) => {
  const { time, statistic } = useAppContext()

  useEffect(() => {
    if (statistic.plays !== 0) openDialog(true)
  }, [statistic.plays])

  return (
    <Dialog open={open} openDialog={openDialog}>
      <>
        <h1 className="text-center pt-4">Estadísticas</h1>
        <div className="flex justify-around py-12">
          <div className="text-center">
            <h1>{statistic.plays}</h1>
            <div>Jugadas</div>
          </div>
          <div className="text-center">
            <h1>{statistic.victories}</h1>
            <div>Victorias</div>
          </div>
        </div>
        <div className="text-center gap-2 space-y-5">
          <p>SIGUIENTE PALABRA</p>
          <p className="font-semibold">{time.formattedTime}</p>
        </div>
        <div className="text-center pt-5">
          <Button text="Aceptar" onClick={() => openDialog(false)} />
        </div>
      </>
    </Dialog>
  )
}

export default Statistics