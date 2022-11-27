import PostCard from './cards/PostCard'
import Button from './Button'
import PostModal from './modals/PostModal'
import usePosts from '../hooks/api/usePosts'
import useUsers from '../hooks/api/useUsers'
import { Post, User } from '../types'

interface PostsListProps {
  posts: Post[]
  users: User[]
}

export default function PostsList(props: PostsListProps) {
  const posts = usePosts({ posts: props.posts })
  const users = useUsers({ users: props.users })
  return (
    <>
      {posts.postsToRender.map((row) => (
        <PostCard
          key={row.id}
          id={row.id}
          title={row.title}
          user={users.getUser(row.userId)}
          onEdit={posts.onEdit}
          onDelete={posts.onDelete}
        />
      ))}
      <Button onClick={posts.showMore} disabled={posts.isMoreDisabled}>
        Show More
      </Button>
      <PostModal
        open={posts.isEditModal}
        post={posts.postToEdit}
        onClose={posts.onEditCancel}
        onSave={posts.onEditSave}
      />
    </>
  )
}
