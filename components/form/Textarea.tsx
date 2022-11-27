import { ChangeEvent } from 'react'

interface TextareaProps {
  placeholder: string
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export default function Textarea(props: TextareaProps) {
  return (
    <textarea
      rows={4}
      className="outline-none resize-none block p-2.5 w-full text-sm rounded-lg border-2 bg-gray-600 border-gray-600 placeholder-gray-400 text-white focus:border-2 focus:ring-blue-500 focus:border-blue-500"
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  )
}
