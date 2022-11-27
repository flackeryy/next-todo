import Modal from '../Modal'
import ModalHead from '../modal/ModalHead'
import ModalContent from '../modal/ModalContent'
import ModalFooter from '../modal/ModalFooter'
import Button from '../Button'
import { Post } from '../../types'
import Textarea from '../form/Textarea'
import { useState } from 'react'

interface PostModalProps {
  open: boolean
  onClose: () => void
  post: Post
  onSave: (id: number, data: Post) => void
}

function Content(props: PostModalProps) {
  const [title, setTitle] = useState(props.post.title)
  const handleSave = () => {
    props.onSave(props.post.id, { ...props.post, title })
  }
  return (
    <>
      <ModalHead title="Edit Post" onClose={props.onClose} />
      <ModalContent>
        <Textarea
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </ModalContent>
      <ModalFooter>
        <Button onClick={handleSave}>Save</Button>
      </ModalFooter>
    </>
  )
}

export default function PostModal(props: PostModalProps) {
  return (
    <Modal open={props.open}>
      <Content {...props} />
    </Modal>
  )
}
