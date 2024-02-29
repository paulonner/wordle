import { Fragment } from 'react'
import { Dialog as TwDialog, Transition } from '@headlessui/react'
import { DialogProps } from '../types'

interface Props extends DialogProps {
  children: JSX.Element
}

const Dialog: React.FC<Props> = ({ children, open }) => {
  return (
    <Transition.Root appear show={open} as={Fragment}>
      <TwDialog
        as="div"
        className="relative z-10"
        static
        onClose={() => null}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <TwDialog.Panel
                className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 w-[546px] sm:p-6"
              >
                {children}
              </TwDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </TwDialog>
    </Transition.Root>
  )
}

export default Dialog
