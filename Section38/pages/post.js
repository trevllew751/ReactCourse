import React from 'react';
import axios from "axios";

function Post({id, comments}) {
    return (
        <div>
            <h1>Comments for post #{id}</h1>
            {comments.map(c => <Comment key={c.id} {...c}/>)}
        </div>
    );
}

const Comment = ({email, body}) => {
    return (
        <div>
            <h5>{email}</h5>
            <p>{body}</p>
        </div>
    )
}

Post.getInitialProps = async ({query}) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`);
    return {...query, comments: res.data};
};

export default Post;