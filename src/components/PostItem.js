import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom"

const PostItem = (props) => {
    const navigate = useNavigate()

    return (
        <div className={'post'}>
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <p className={'post-text'}>{props.post.body}</p>
            </div>
            <div className="post__buttons">
                <MyButton
                    onClick={() => navigate(`/posts/${props.post.id}`)}
                >
                    Open
                </MyButton>
                <MyButton
                    onClick={() => props.remove(props.post)}
                >
                    Remove
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;