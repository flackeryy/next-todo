import { User } from '../../types'

interface PostCardProps {
  id: number
  title: string
  user: User
  onEdit: (id: number) => void
  onDelete: (id: number) => void
}

export default function PostCard(props: PostCardProps) {
  return (
    <div className="mb-4 bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-md text-gray-400">
      <h1 className="text-white mb-3 text-3xl font-extrabold tracking-tight">
        {props.title}
      </h1>
      <p className="mb-1 text-gray-400">{props.user.name}</p>
      <p className="mb-3 text-gray-400">{props.user.email}</p>
      <button
        className="mr-3 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 justify-center text-center"
        onClick={() => props.onEdit(props.id)}
      >
        Edit
      </button>
      <button
        className="focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-red-600 hover:bg-red-700 focus:ring-red-900"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  )
}
