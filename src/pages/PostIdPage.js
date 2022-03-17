import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)

        setPost(response.data)
    })

    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)

        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1>Post Page {params.id}</h1>
            {isLoading
                ? <Loader/>
                :   <div>
                        <p>{post.id} {post.title}</p>
                    </div>
            }
            {isCommentsLoading
                ? <Loader/>
                :   <div>
                        {comments.map(comment =>
                            <div style={{marginTop: '20px'}} key={comment.body}>
                                <h4>{comment.email}</h4>
                                <p>{comment.body}</p>
                            </div>
                        )}
                    </div>
            }

        </div>
    );
};

export default PostIdPage;