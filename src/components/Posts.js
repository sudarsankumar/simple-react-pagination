import React from 'react'

const Posts = ({ posts , loading }) => {
    if (loading)
    {
        return (
            <div class="d-flex justify-content-center">
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    return <ul className="list-group mb-4">
        {posts.map(post => (
            <li key={post.id} className="text-capitalize list-group-item">
                {post.id}. {post.title}
            </li>
        ))}
    </ul>
}
export default Posts