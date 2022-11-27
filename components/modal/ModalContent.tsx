import { ReactNode } from 'react'

interface ModalContentProps {
  children: ReactNode
}

export default function ModalContent(props: ModalContentProps) {
  return <div className="p-6 space-y-6">{props.children}</div>
}
