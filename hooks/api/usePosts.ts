import { useState } from 'react'
import { LocalStorageKey, Post } from '../../types'
import usePersistState from '../ui/usePersistState'
import { chunk } from '../../utils/array'

type OnEditSave = (id: number, data: Post) => void
type OnEdit = (id: number) => void
type OnEditCancel = () => void
type OnDelete = (id: number) => void
type ShowMore = () => void

interface UsePosts {
  postToEdit: Post
  postsToRender: Post[]
  isMoreDisabled: boolean
  isEditModal: boolean
  onEditSave: OnEditSave
  onEdit: OnEdit
  onDelete: OnDelete
  onEditCancel: OnEditCancel
  showMore: ShowMore
}

interface UsePostsConfig {
  posts: Post[]
}

export default function usePosts(config: UsePostsConfig): UsePosts {
  const [page, setPage] = useState(0)
  const [posts, setPosts] = usePersistState<Post[]>(
    config.posts,
    LocalStorageKey.POSTS,
    true
  )
  const [isEditModal, setEditPostModal] = useState(false)
  const [editPostId, setEditPostId] = useState<number>()

  console.log(posts)

  const showMore: ShowMore = () => {
    setPage((page) => page + 1)
  }
  const onDelete: OnDelete = (id) => {
    setPosts((posts) => posts.filter((post) => post.id !== id))
  }
  const onEdit: OnEdit = (id) => {
    setEditPostModal(true)
    setEditPostId(id)
  }
  const onEditCancel: OnEditCancel = () => {
    setEditPostModal(false)
  }
  const onEditSave: OnEditSave = (id, data) => {
    setPosts((posts) =>
      posts.map((post) => (post.id === id ? { ...post, ...data } : post))
    )
    setEditPostModal(false)
  }

  const postsPages = chunk<Post>(posts, 9)
  const isMoreDisabled = page === postsPages.length - 1
  const postToEdit = posts.find((post) => post.id === editPostId) as Post
  const postsToRender = postsPages.slice(0, page + 1).flat()

  return {
    postToEdit,
    postsToRender,
    isMoreDisabled,
    isEditModal,
    onEdit,
    onEditSave,
    onDelete,
    showMore,
    onEditCancel
  }
}
