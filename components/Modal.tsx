import { ReactNode } from 'react'

interface ModalProps {
  open: boolean
  children: ReactNode
}

export default function Modal(props: ModalProps) {
  if (!props.open) {
    return null
  }
  return (
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full bg-black bg-opacity-30 flex justify-center items-center">
      <div className="relative w-full max-w-2xl h-full md:h-auto">
        <div className="relative rounded-lg shadow bg-gray-700">
          {props.children}
        </div>
      </div>
    </div>
  )
}
