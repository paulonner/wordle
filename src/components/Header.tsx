import { useState } from 'react'
import { QuestionMarkCircleIcon, ChartBarSquareIcon } from '@heroicons/react/24/solid'
import Instructions from './Instructions'
import Statistics from './Statistics'

const Header = () => {
  const [ open, setOpen ] = useState({
    instructions: true,
    statistics: false
  })

  const openInstructionsDialog = (open:boolean) => {
    setOpen(prev => ({ ...prev, instructions: open }))
  }

  const openStatisticsDialog = (open:boolean) => {
    setOpen(prev => ({ ...prev, statistics: open }))
  }

  return (
    <>
      <div className="bg-gray-50 px-5 py-2 flex justify-between rounded-md items-center">
        <QuestionMarkCircleIcon
          className="h-6 w-6 text-gray-500"
          onClick={() => openInstructionsDialog(true)}
        />
        <h2 className="text-[40px]">WORDLE</h2>
        <div>
          <ChartBarSquareIcon
            className="h-6 w-6 text-gray-500"
            onClick={() => openStatisticsDialog(true)}
          />
        </div>
      </div>
      <Instructions open={open.instructions} openDialog={openInstructionsDialog} />
      <Statistics open={open.statistics} openDialog={openStatisticsDialog} />
    </>
  )
}

export default Header
