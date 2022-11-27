import { ReactNode } from 'react'

interface ModalFooterProps {
  children: ReactNode
}

export default function ModalFooter(props: ModalFooterProps) {
  return (
    <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
      {props.children}
    </div>
  )
}
