import { Post, User } from '../types'
import dynamic from 'next/dynamic'

// This workaround is required to complete an idea of task
// About persisting state and keep next.js working.
// There are other ways to make it work but this is best for this case.
const PostsList = dynamic(() => import('../components/PostsList'), {
  ssr: false
})

interface HomeProps {
  posts: Post[]
  users: User[]
}

export default function Home(props: HomeProps) {
  return (
    <div className="bg-slate-900 p-6">
      <PostsList posts={props.posts} users={props.users} />
    </div>
  )
}

export async function getStaticProps() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
  const postsData = await posts.json()
  const users = await fetch('https://jsonplaceholder.typicode.com/users')
  const usersData = await users.json()
  return {
    props: {
      posts: postsData,
      users: usersData
    }
  }
}
