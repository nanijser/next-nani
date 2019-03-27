import React from 'react'
import { getPosts } from '../api/posts'
import Post from '../components/Post'

const IndexPage = ({ posts }) =>
  <ul>
    {posts.map(p => <Post key={p.title} post={p} />)}
  </ul>

IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts()
  const json = await res.json()
  return { posts: json }
}

export default IndexPage
