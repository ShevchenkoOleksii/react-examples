import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create, posts}) => {

    const [post, setPost] = useState({
        title: '',
        description: ''
    })

    const addPost = (e) => {
        e.preventDefault()

        if (!post.title.trim() || !post.description.trim()) {
            return
        }

        const newPost = {
            id: posts[posts.length - 1].id + 1,
            body: post.description,
            title: post.title
        }

        create(newPost)

        setPost({
            title: '',
            description: ''
        })
    }

    return (
        <form>
            <h3 style={{textAlign: 'center'}}>Create New Post</h3>
            <MyInput
                value={post.title}
                type="text"
                placeholder={'Post Title'}
                onChange={e => setPost({...post, title: e.target.value})}
            />
            <MyInput
                value={post.description}
                type="text"
                placeholder={'Description'}
                onChange={e => setPost({...post, description: e.target.value})}
            />
            {/*<input ref={bodeInputRef} type={'text'}/>*/}
            {/*<MyInput*/}
            {/*    ref={bodeInputRef}*/}
            {/*    type="text"*/}
            {/*    placeholder={'text'}*/}
            {/*/>*/}
            <MyButton
                onClick={addPost}
            >
                Create Post
            </MyButton>
        </form>
    );
};

export default PostForm;