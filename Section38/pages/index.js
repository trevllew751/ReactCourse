import React from 'react';
import axios from "axios";
import Link from "next/link";

function Index({posts}) {
    return (
        <div>
            <h1>Index Page</h1>
            <ul>
                {posts.map(post => <li key={post.id}><Link href={`/post/?id=${post.id}`} as={`/p/${post.id}`}><a>{post.title}</a></Link></li>)}
            </ul>
        </div>
    );
}

Index.getInitialProps = async (ctx) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return {posts: res.data};
}

export default Index;